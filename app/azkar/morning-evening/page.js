'use client';

import prayerTimes from '../../../lib/prayerTimes';

import azkar_morning from '../../../lib/azkar-morning.json';

import azkar_evening from '../../../lib/azkar-evening.json';

import { useState, useEffect } from 'react';

const Dates = async (x) => {
  try {
    const { data } = await prayerTimes();

    const fnDate = new Date();

    const objDate = data.timings[x];

    const [hours, minutes] = objDate.split(':').map(Number);

    fnDate.setHours(hours, minutes, 0, 0);

    return fnDate.toISOString();
  } catch (error) {
    return null;
  }
};

const Sibha2 = ({ max }) => {
  const [count, setCount] = useState(max);

  const tasbeeh = () => {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  return (
    <div className='flex flex-col items-center gap-4'>
      <button
        onClick={tasbeeh}
        type='button'
        className='w-20 h-20 rounded-full bg-primary-600 flex items-center justify-center shadow-card hover:shadow-elevated transition-all duration-300 active:scale-95 text-2xl font-bold text-white cursor-pointer select-none'
      >
        {count}
      </button>
    </div>
  );
};

const Azkar = () => {
  const [azkarType, setAzkarType] = useState('جاري التحميل...');

  useEffect(() => {
    const decideAzkarTypes = async () => {
      try {
        const date = new Date();

        const isoFajr = await Dates('Fajr');

        const isoAsr = await Dates('Asr');

        const isoRealTime = date.toISOString();

        if (!isoFajr || !isoAsr) {
          setAzkarType('حدثت مشكلة !');
          return;
        }

        if (isoFajr <= isoRealTime && isoRealTime <= isoAsr) {
          setAzkarType('أذكار الصباح');
        } else {
          setAzkarType('أذكار المساء');
        }
      } catch (error) {
        setAzkarType('حدثت مشكلة !');
      }
    };

    decideAzkarTypes();
  }, []);

  return (
    <main className='flex flex-col items-center px-4 py-8 gap-6'>
      <h1 className={`text-3xl font-bold ${azkarType === 'حدثت مشكلة !' ? 'text-red-500' : ''}`}>
        {azkarType}
      </h1>
      {azkarType !== 'حدثت مشكلة !' && azkarType !== 'جاري التحميل...' ? (
        <section className='flex flex-col gap-6 w-full max-w-3xl'>
          {(azkarType === 'أذكار الصباح' ? azkar_morning : azkar_evening).map(
            (item) => (
              <div
                key={item}
                className='flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 shadow-card rounded-2xl'
              >
                <p className='flex-1 text-xl md:text-2xl font-bold leading-relaxed text-right text-surface-900 dark:text-surface-100'>
                  {item[0]}
                </p>
                <div className='flex-shrink-0 w-full md:w-auto flex justify-center'>
                  <Sibha2 max={item[1]} />
                </div>
              </div>
            ),
          )}
        </section>
      ) : null}
      <a
        href='https://islamqa.info/ar/answers/217496/%D8%A7%D8%B0%D9%83%D8%A7%D8%B1-%D8%A7%D9%84%D8%B5%D8%A8%D8%A7%D8%AD-%D9%88%D8%A7%D9%84%D9%85%D8%B3%D8%A7%D8%A1'
        className='text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline font-medium transition-colors duration-200'
      >
        مصدر الأذكار بالأحاديث الصحيحة
      </a>
    </main>
  );
};

export default Azkar;
