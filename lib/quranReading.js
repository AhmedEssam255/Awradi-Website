'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import quranIndex from './quranIndex.json';
import quran_dosary from './yasser-dosary-audio.json';

const PlayQuranAudio = ({ pageNum }) => {
  // const surahNum = quranIndex.findLastIndex((surah) => pageNum >= surah.page);

  // const numbers = [
  //   106, 221, 235, 255, 267, 293, 312, 359, 385, 396, 404, 434, 440, 458, 467,
  //   489, 502, 515, 520, 523, 528, 531, 534, 537, 545, 551, 554, 564, 566, 568,
  //   570, 575, 577, 578, 580,
  // ];

  // let audioSrc = [];
  // if (
  //   (pageNum >= 586 && pageNum < 588) ||
  //   (pageNum >= 589 && pageNum < 595) ||
  //   numbers.includes(pageNum)
  // ) {
  //   audioSrc = [quran_dosary[surahNum - 1], quran_dosary[surahNum]];
  // } else if ((pageNum >= 1 && pageNum < 586) || pageNum === 588) {
  //   audioSrc = [quran_dosary[surahNum]];
  // } else if (pageNum >= 595 && pageNum <= 604) {
  //   audioSrc = [
  //     quran_dosary[surahNum - 2],
  //     quran_dosary[surahNum - 1],
  //     quran_dosary[surahNum],
  //   ];
  // }

  // return (
  //   <div className='mx-auto flex flex-col items-center gap-5 w-[90%]'>
  //     {audioSrc.map((src) => (
  //       <audio
  //         key={src}
  //         controls
  //         preload='metadata'
  //         crossOrigin='anonymous'
  //         className='w-full max-w-md shadow-card rounded-2xl border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800 p-2'
  //       >
  //         <source src={src} type='audio/mpeg' />
  //         متصفحك لا يدعم تشغيل الصوت.
  //       </audio>
  //     ))}
  //   </div>
  // );

  return <p>الصوت متوقف مؤقتا</p>;
};

const QuranReading = ({ increase, decrease, pageNum }) => {
  const [link, setLink] = useState(
    `https://ia903206.us.archive.org/BookReader/BookReaderImages.php?zip=/26/items/MushafMadinaHafsGreen1441/MushafMadinaHafsGreen1441HQ_jp2.tar&file=MushafMadinaHafsGreen1441HQ_jp2/MushafMadinaHafsGreen1441HQ_${(
      pageNum + 2
    )
      .toString()
      .padStart(4, '0')}.jp2&id=MushafMadinaHafsGreen1441&scale=16&rotate=0`,
  );
  const [moshafType, setMoshafType] = useState('');
  const [mode, setMode] = useState('light');

  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const initialMode = darkModeQuery.matches ? 'night' : 'light';
    setMode(initialMode);

    const handleChange = (e) => {
      setMode(e.matches ? 'night' : 'light');
    };

    darkModeQuery.addEventListener('change', handleChange);
    return () => darkModeQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    const storedType = localStorage.getItem('moshafType');
    if (storedType) {
      setMoshafType(storedType);
    }
  }, []);

  useEffect(() => {
    if (moshafType) {
      localStorage.setItem('moshafType', moshafType);
    }
  }, [moshafType]);

  useEffect(() => {
    if (moshafType === 'tafsir') {
      setLink(
        `https://ia600405.us.archive.org/BookReader/BookReaderImages.php?zip=/6/items/moshaf-tafsir/moshaf-tafsir_jp2.zip&file=moshaf-tafsir_jp2/moshaf-tafsir_${(
          pageNum + 14
        )
          .toString()
          .padStart(4, '0')}.jp2&id=moshaf-tafsir&scale=4&rotate=0`,
      );
    } else {
      if (mode === 'light') {
        setLink(
          `https://ia800405.us.archive.org/BookReader/BookReaderImages.php?zip=/6/items/moshaf-tafsir/moshaf-green_jp2.zip&file=moshaf-green_jp2/moshaf-green_${(
            pageNum + 2
          )
            .toString()
            .padStart(4, '0')}.jp2&id=moshaf-tafsir&scale=2&rotate=0`,
        );
      } else if (mode === 'night') {
        setLink(
          `https://ia600405.us.archive.org/BookReader/BookReaderImages.php?zip=/6/items/moshaf-tafsir/moshaf-black_jp2.zip&file=moshaf-black_jp2/moshaf-black_${(
            pageNum - 1
          )
            .toString()
            .padStart(4, '0')}.jp2&id=moshaf-tafsir&scale=4&rotate=0`,
        );
      }
    }
  }, [mode, pageNum, moshafType]);

  return (
    <div className='mx-auto flex flex-col items-center gap-5 w-full'>
      <fieldset className='w-[90%] mx-auto flex flex-col sm:flex-row justify-center items-center gap-5 shadow-soft border border-surface-200 dark:border-surface-700 rounded-2xl p-5 bg-white dark:bg-surface-800'>
        <legend className='font-bold text-lg text-surface-900 dark:text-surface-100 px-2'>
          نوع المصحف
        </legend>
        <label className='flex items-center gap-2 cursor-pointer text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200'>
          <input
            type='radio'
            name='moshafType'
            value='normal'
            checked={moshafType === 'normal'}
            onChange={(e) => setMoshafType(e.target.value)}
            className='accent-primary-600 dark:accent-primary-400'
          />
          مصحف المدينة
        </label>
        <label className='flex items-center gap-2 cursor-pointer text-surface-700 dark:text-surface-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200'>
          <input
            type='radio'
            name='moshafType'
            value='tafsir'
            checked={moshafType === 'tafsir'}
            onChange={(e) => setMoshafType(e.target.value)}
            className='accent-primary-600 dark:accent-primary-400'
          />
          مصحف التفسير الميسر
        </label>
      </fieldset>
      <PlayQuranAudio pageNum={pageNum} />
      <Image
        className='w-full h-auto rounded-2xl shadow-card border border-surface-200 dark:border-surface-700 bg-white dark:bg-surface-800'
        src={link}
        alt='صفحة من القران'
        width={0}
        height={0}
        sizes='100vw'
      />
      <div className='flex justify-center items-center gap-4'>
        <button
          className='shadow-soft m-1 p-3 font-bold w-24 border border-primary-300 dark:border-primary-700 rounded-xl bg-white dark:bg-surface-800 text-surface-800 dark:text-surface-200 hover:shadow-card hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-200 active:scale-95'
          onClick={decrease}
        >
          {'<'}
        </button>
        <button
          className='shadow-soft m-1 p-3 font-bold w-24 border border-primary-300 dark:border-primary-700 rounded-xl bg-white dark:bg-surface-800 text-surface-800 dark:text-surface-200 hover:shadow-card hover:border-primary-500 dark:hover:border-primary-500 transition-all duration-200 active:scale-95'
          onClick={increase}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default QuranReading;
