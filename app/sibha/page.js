'use client';

import { useState, useEffect } from 'react';

const Sibha = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(JSON.parse(localStorage.getItem('count')));
  }, []);

  useEffect(() => {
    localStorage.setItem('count', count);
  }, [count]);

  return (
    <main className='flex flex-col items-center justify-center gap-6 px-4 py-8'>
      <h1 className='text-3xl font-bold'>السبحة</h1>
      <div className='bg-white dark:bg-surface-800 flex flex-col w-full max-w-sm mx-auto border border-surface-200 dark:border-surface-700 rounded-2xl p-6 shadow-card gap-4'>
        <h1 className='text-6xl font-bold text-center text-primary-600 dark:text-primary-400 bg-surface-50 dark:bg-surface-900/50 shadow-soft border border-surface-200 dark:border-surface-700 rounded-2xl p-4 mb-2 min-h-[100px] flex items-center justify-center select-none'>
          {count}
        </h1>
        <button
          className='w-full bg-red-50 dark:bg-red-900/20 hover:bg-red-100 dark:hover:bg-red-900/40 text-red-600 dark:text-red-400 shadow-soft border border-red-200 dark:border-red-800 rounded-xl p-3 font-semibold transition-all duration-200 hover:shadow-card active:scale-[0.98]'
          onClick={() => setCount(0)}
        >
          إعادة تعيين
        </button>
        <button
          className='w-full bg-primary-50 dark:bg-primary-900/20 hover:bg-primary-100 dark:hover:bg-primary-900/40 text-primary-700 dark:text-primary-300 shadow-soft border border-primary-200 dark:border-primary-800 rounded-xl p-4 font-bold text-lg transition-all duration-200 hover:shadow-card active:scale-[0.98]'
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </main>
  );
};

export default Sibha;
