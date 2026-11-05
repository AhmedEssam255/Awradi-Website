'use client';

import { useRef, useEffect, useState } from 'react';

import quranSurahs from './quranIndex.json';

const Fehres = ({ goTo }) => {
  const fehresDisplay = useRef();
  const [search, setSearch] = useState('');

  const filtered =
    search && search.trim() !== ''
      ? quranSurahs.filter( ( s ) => s.name.includes( search ) )
      : [];

  return (
    <details className='w-[90%] mx-auto' ref={fehresDisplay}>
      <summary>
        <h1 className='font-bold text-xl shadow-soft rounded-xl px-5 py-3 border border-primary-300 dark:border-primary-700 bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 hover:border-primary-500 dark:hover:border-primary-500 transition-colors duration-200 cursor-pointer'>
          فهرس السور و البحث
        </h1>
      </summary>
      <div className='p-4'>
        <input
          className='font-bold text-lg shadow-soft rounded-xl w-full border border-primary-300 dark:border-primary-700 bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-primary-500 p-4'
          placeholder='ابحث عن سورة'
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className='grid grid-cols-2 rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-3 gap-2'>
        {(filtered.length > 0 ? filtered : quranSurahs).map((item, index) => (
          <button
            onClick={() => {
              goTo(item.page);
              setSearch('');
              if (fehresDisplay.current) fehresDisplay.current.open = false;
            }}
            className='font-bold text-base rounded-lg px-3 py-2 border border-primary-200 dark:border-primary-800 bg-surface-50 dark:bg-surface-700 text-surface-800 dark:text-surface-200 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:border-primary-400 dark:hover:border-primary-600 transition-all duration-200'
            key={index}
          >
            {filtered.length > 0
              ? `${item.name} : ${item.page}`
              : `${index + 1} : ${item.name} : ${item.page}`}
          </button>
        ))}
      </div>
    </details>
  );
};

export default Fehres;
