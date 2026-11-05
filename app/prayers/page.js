'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import prayerTimes from '../../lib/prayerTimes';

const SalahTimes = () => {
  const [prayers, setPrayers] = useState('جاري التحميل...');
  const [toNextPrayer, setToNextPrayer] = useState('جاري التحميل...');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await prayerTimes();

        setPrayers(data);
      } catch (error) {
        setPrayers('حدثت مشكلة !');
      }
    };

    fetchData();
  }, []);

  const prayerNames = [
    { key: 'Fajr', label: 'الفجر' },
    { key: 'Sunrise', label: 'الشروق' },
    { key: 'Dhuhr', label: 'الظهر' },
    { key: 'Asr', label: 'العصر' },
    { key: 'Sunset', label: 'المغرب' },
    { key: 'Isha', label: 'العشاء' },
    { key: 'Midnight', label: 'منتصف الليل' },
    { key: 'Lastthird', label: 'الثلث الأخير' },
  ];

  const dates = (x, string = true) => {
    if (prayers.data && prayers.data.timings) {
      const currentTime = new Date();

      const fnDate = new Date();

      const objDate = prayers.data.timings[x];

      const [hours, minutes] = objDate.split(':').map(Number);

      fnDate.setHours(hours, minutes, 0, 0);

      if (currentTime.getHours() < 4 && hours >= 12) {
        fnDate.setDate(fnDate.getDate() - 1);
      } else if (currentTime.getHours() >= 12 && hours < 4) {
        fnDate.setDate(fnDate.getDate() + 1);
      }

      const returnValue = string
        ? fnDate.toLocaleTimeString('ar-EG', { hour12: true })
        : fnDate;

      return returnValue;
    }
  };

  const getNextPrayer = () => {
    if (prayers.data && prayers.data.timings) {
      const prayerTimes = [];

      for (let i = 0; i < prayerNames.length; i++) {
        prayerTimes.push(dates(prayerNames[i].key, false));
      }

      const currentTime = new Date();

      for (let i = 0; i < prayerTimes.length; i++) {
        if (currentTime < prayerTimes[i]) {
          return {
            prayer: prayerNames[i].label,
            time: prayerTimes[i],
          };
        }
      }
    }
  };

  useEffect(() => {
    const formatCountdown = (ms, prayerName) => {
      const totalSeconds = Math.floor(ms / 1000);
      const hours = Math.floor(totalSeconds / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      return (
        <section className='flex flex-col items-center gap-4' dir='ltr'>
          <h2 className='text-xl font-bold text-surface-700 dark:text-surface-300'>المتبقي على {prayerName}</h2>
          <div className='flex flex-nowrap justify-center items-center gap-4'>
            <div className='flex flex-col items-center bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl px-5 py-3 min-w-[80px]'>
              <span className='text-3xl font-bold text-primary-700 dark:text-primary-300'>{hours}</span>
              <span className='text-sm text-primary-600 dark:text-primary-400'>ساعة</span>
            </div>
            <div className='flex flex-col items-center bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl px-5 py-3 min-w-[80px]'>
              <span className='text-3xl font-bold text-primary-700 dark:text-primary-300'>{minutes}</span>
              <span className='text-sm text-primary-600 dark:text-primary-400'>دقيقة</span>
            </div>
            <div className='flex flex-col items-center bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 rounded-xl px-5 py-3 min-w-[80px]'>
              <span className='text-3xl font-bold text-primary-700 dark:text-primary-300'>{seconds}</span>
              <span className='text-sm text-primary-600 dark:text-primary-400'>ثانية</span>
            </div>
          </div>
        </section>
      );
    };

    const id = setInterval(() => {
      const nextPrayer = getNextPrayer();

      if (prayers.data && prayers.data.timings && nextPrayer) {
        const currentTime = new Date();

        setToNextPrayer(
          formatCountdown(nextPrayer.time - currentTime, nextPrayer.prayer),
        );
      }
    }, 1000);

    return () => clearInterval(id);
  }, [prayers]);

  return (
    <main className='flex flex-col items-center px-4 py-8 gap-6'>
      <h1 className='text-3xl font-bold'>مواقيت الصلاة</h1>
      {prayers === 'حدثت مشكلة !' ? (
        <p className='bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 shadow-soft border border-red-200 dark:border-red-800 rounded-2xl p-4 w-full max-w-2xl text-center font-semibold'>
          {prayers}
        </p>
      ) : (
        <section className='bg-white dark:bg-surface-800 shadow-elevated border border-primary-200 dark:border-primary-800 rounded-2xl p-8 w-full max-w-2xl'>
          {toNextPrayer}
        </section>
      )}
      <section className='flex flex-col justify-center items-center bg-white dark:bg-surface-800 shadow-card border border-surface-200 dark:border-surface-700 rounded-2xl p-5 w-full max-w-2xl gap-4'>
        {typeof prayers === 'object' ? (
          prayerNames.map((item, index) => (
            <div
              key={index}
              className='flex items-center justify-between w-full p-3 rounded-xl bg-surface-50/50 dark:bg-surface-700/30 border border-surface-100 dark:border-surface-600 hover:bg-surface-100 dark:hover:bg-surface-700/50 transition-colors duration-200'
            >
              <div className='flex items-center gap-4'>
                <Image
                  src='/mosque.png'
                  className='w-12 h-12 object-contain bg-surface-50 dark:bg-surface-700 rounded-xl shadow-soft border border-surface-200 dark:border-surface-600'
                  alt='icon'
                  width={48}
                  height={48}
                />
                <h2 className='text-lg font-semibold text-surface-900 dark:text-surface-100'>
                  {item.label}
                </h2>
              </div>
              <span className='text-primary-700 dark:text-primary-300 font-bold text-lg bg-primary-50 dark:bg-primary-900/20 px-4 py-2 rounded-xl border border-primary-100 dark:border-primary-800'>
                {dates(item.key)}
              </span>
            </div>
          ))
        ) : (
          <strong
            className={
              prayers === 'حدثت مشكلة !' ? 'text-red-500' : 'text-primary-600 dark:text-primary-400'
            }
          >
            {prayers}
          </strong>
        )}
      </section>
      <p className='text-surface-500 dark:text-surface-400 max-w-2xl text-center leading-relaxed'>
        ملحوظة: قد تلاحظ اختلاف بسيط في وقت الصلاة نتيجة اختلاف طرق الحساب
      </p>
    </main>
  );
};

export default SalahTimes;
