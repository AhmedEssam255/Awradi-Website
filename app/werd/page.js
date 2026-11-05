'use client';

import QuranReading from '../../lib/quranReading';
import { useState, useEffect } from 'react';

const Werd = () => {
  const [pageNum2, setPageNum2] = useState(1);
  const [werd, setWerd] = useState(0);
  const [lastPageNum, setLastPageNum] = useState(0);
  const [finishedDays, setFinishedDays] = useState(0);

  const increase = () => {
    if (werd > 0 && pageNum2 < 604) {
      if (pageNum2 === lastPageNum + werd - 1) {
        const newPageNum2 = pageNum2 + 1;
        const newFinishedDays = finishedDays + 1;
        const newLastPageNum = newPageNum2;

        setFinishedDays(newFinishedDays);
        setPageNum2(newPageNum2);
        setLastPageNum(newLastPageNum);

        localStorage.setItem('pageNum2', newPageNum2);
        localStorage.setItem('finishedDays', newFinishedDays);
        localStorage.setItem('lastPageNum', newLastPageNum);

        return alert(
          `تهانينا! لقد أكملت وردك اليومي. عدد الأيام التي أكملت فيها وردك: ${newFinishedDays}`,
        );
      }

      const newPageNum2 = pageNum2 + 1;

      setPageNum2(newPageNum2);

      localStorage.setItem('pageNum2', newPageNum2);
    } else if (werd === 0 || werd === null) {
      alert('يرجى إدخال عدد الصفحات التي ترغب في قراءتها اليوم.');
    }
  };

  const decrease = () => {
    if (pageNum2 > 1) {
      const newPageNum2 = pageNum2 - 1;

      setPageNum2(newPageNum2);

      localStorage.setItem('pageNum2', newPageNum2);
    }
  };

  const handleWerdChange = (e) => {
    const value = parseInt(e.target.value);
    setWerd(value);
    setLastPageNum(pageNum2);
    localStorage.setItem('lastPageNum', pageNum2);
    localStorage.setItem('werd', value);
  };

  useEffect(() => {
    const storedPageNum = localStorage.getItem('pageNum2');

    if (storedPageNum) {
      setPageNum2(parseInt(storedPageNum));
    }

    const storedWerd = localStorage.getItem('werd');

    if (storedWerd) {
      setWerd(parseInt(storedWerd));
    }

    const storedLastPageNum = localStorage.getItem('lastPageNum');

    if (storedLastPageNum) {
      setLastPageNum(parseInt(storedLastPageNum));
    }

    const storedFinishedDays = localStorage.getItem('finishedDays');

    if (storedFinishedDays) {
      setFinishedDays(parseInt(storedFinishedDays));
    }
  }, []);

  return (
    <main className='flex flex-col items-center justify-center gap-6 px-4 py-8'>
      <h1 className='text-3xl font-bold'>تابع وردك اليومي: </h1>
      <div className='w-full max-w-md bg-white dark:bg-surface-800 shadow-card border border-surface-200 dark:border-surface-700 rounded-2xl p-6 flex flex-col items-center gap-4'>
        <h2 className='text-lg font-semibold text-surface-700 dark:text-surface-300'>اكتب عدد صفحات وردك اليومي: </h2>
        <form className='w-full' onSubmit={(e) => e.preventDefault()}>
          <input
            type='number'
            className='w-full border border-surface-300 dark:border-surface-600 bg-surface-50 dark:bg-surface-700 rounded-xl p-3 text-center text-lg font-semibold text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200'
            placeholder='عدد الصفحات'
            value={werd}
            onChange={handleWerdChange}
          />
        </form>
        <button
          className='w-full bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400 shadow-soft border border-red-200 dark:border-red-800 rounded-xl p-3 font-semibold transition-all duration-200 hover:shadow-card active:scale-[0.98]'
          onClick={() => {
            setWerd(0);
            setPageNum2(1);
            setLastPageNum(pageNum2 - werd);
            setFinishedDays(0);
            localStorage.clear();
          }}
        >
          إعادة تعيين
        </button>
      </div>
      <div className='w-full max-w-md bg-gradient-to-br from-primary-50 to-primary-100/50 dark:from-primary-900/20 dark:to-primary-800/20 border border-primary-200 dark:border-primary-800 rounded-2xl p-4 text-center shadow-soft'>
        <span className='text-3xl font-bold text-primary-700 dark:text-primary-300'>{finishedDays}</span>
        <span className='text-lg font-semibold text-primary-600 dark:text-primary-400 block mt-1'>أيام مكتملة</span>
      </div>
      <QuranReading
        pageNum={pageNum2}
        increase={increase}
        decrease={decrease}
      />
    </main>
  );
};

export default Werd;
