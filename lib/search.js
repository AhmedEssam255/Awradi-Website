'use client';

import { useState } from 'react';

import quranJuz from './quranJuz.json';

const Search = ({ goTo }) => {
  const [numInput, setNumInput] = useState('');

  const [numInput2, setNumInput2] = useState('');

  return (
    <>
      <form className='w-[90%] mx-auto flex flex-col justify-center items-center gap-5'>
        <div className='flex flex-col justify-center items-center shadow-soft m-2 w-[90%] border border-surface-200 dark:border-surface-700 rounded-xl bg-white dark:bg-surface-800 p-3'>
          <input
            className='font-bold text-lg shadow-soft rounded-xl m-2 w-[90%] border border-primary-300 dark:border-primary-700 bg-surface-50 dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-primary-500 p-3'
            type='number'
            placeholder='ادخل رقم صفحه للذهاب اليها'
            value={numInput}
            onChange={(e) =>
              numInput === 0
                ? setNumInput(null)
                : setNumInput(Number(e.target.value))
            }
          />
          <button
            type='button'
            className='border border-primary-300 dark:border-primary-700 rounded-xl p-2 font-bold text-lg shadow-soft m-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-all duration-200 active:scale-95'
            onClick={() => goTo(numInput)}
          >
            الذهاب{' '}
          </button>
        </div>
        <div className='flex flex-col justify-center items-center shadow-soft m-2 w-[90%] border border-surface-200 dark:border-surface-700 rounded-xl bg-white dark:bg-surface-800 p-3'>
          <input
            className='font-bold text-lg shadow-soft rounded-xl m-2 w-[90%] border border-primary-300 dark:border-primary-700 bg-surface-50 dark:bg-surface-700 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-primary-500 p-3'
            type='number'
            placeholder='ادخل رقم الجزء للذهاب إلى بدايته'
            value={numInput2}
            onChange={(e) =>
              numInput2 === 0
                ? setNumInput2(null)
                : setNumInput2(Number(e.target.value))
            }
          />
          <button
            type='button'
            className='border border-primary-300 dark:border-primary-700 rounded-xl p-2 font-bold text-lg shadow-soft m-2 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 hover:bg-primary-100 dark:hover:bg-primary-900/40 transition-all duration-200 active:scale-95'
            onClick={() =>
              goTo(
                numInput || (numInput2 ? quranJuz[numInput2 - 1].page : null),
              )
            }
          >
            الذهاب{' '}
          </button>
        </div>
      </form>
    </>
  );
};

export default Search;
