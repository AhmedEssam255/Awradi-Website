'use client';

import { useState, useEffect } from 'react';

import Fehres from '../../lib/fehres';

import Search from '../../lib/search';

import QuranReading from '../../lib/quranReading';

const Quran = () => {

  const [pageNum, setPageNum] = useState(1);

  const increase = () => {
    if (pageNum < 604) {
      setPageNum(pageNum + 1);
    } else {
      setPageNum(604);
    }
  };

  const decrease = () => {
    if (pageNum > 1) {
      setPageNum(pageNum - 1);
    } else {
      setPageNum(1);
    }
  };

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('pageNum'));

    if (storage) {
      setPageNum(storage);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('pageNum', pageNum);
  }, [pageNum]);

  const turnPage = (number) => {
    if (0 < number && number < 605) {
      setPageNum(number);
    }
  };

  return (
    <main className='flex flex-col items-center px-4 py-8 gap-6'>
      <h1 className='text-3xl font-bold'>القرآن</h1>
      <h2 className='text-center'>
        <a
          className='text-primary-600 dark:text-primary-400 underline hover:text-primary-700 dark:hover:text-primary-300 font-semibold transition-colors duration-200'
          href='https://archive.org/details/moshaf-tafsir'
        >
          تحميل المصاحف pdf
        </a>
      </h2>
      <Search goTo={turnPage} />
      <Fehres goTo={turnPage} />
      <QuranReading increase={increase} decrease={decrease} pageNum={pageNum} />
    </main>
  );
};

export default Quran;
