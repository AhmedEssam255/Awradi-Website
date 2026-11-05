// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import Image from 'next/image';
// import quranIndex from '../../lib/quranIndex.json';

const Dosary = () => {
  // const indexedSurahs = quranIndex.map((surah, index) => ({ ...surah, index }));
  // const [search, setSearch] = useState('');
  // const [filteredSurahs, setFilteredSurahs] = useState(indexedSurahs);

  // useEffect(() => {
  //   const query = search.trim().toLowerCase();

  //   setFilteredSurahs(
  //     query
  //       ? indexedSurahs.filter((surah) =>
  //           surah.name.toLowerCase().includes(query),
  //         )
  //       : indexedSurahs,
  //   );
  // }, [search, indexedSurahs]);

  // return (
  //   <main className='flex flex-col items-center justify-start min-h-screen px-4 py-8'>
  //     <section className='w-full max-w-4xl'>
  //       <div className='text-center mb-10 mt-8'>
  //         <Image
  //           src='/dosary.jpeg'
  //           alt='yasser dosary'
  //           width={120}
  //           height={120}
  //           className='rounded-2xl shadow-card mx-auto mb-4 bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700'
  //         />
  //         <h1 className='text-4xl font-bold text-surface-900 dark:text-surface-100 mb-2'>
  //           تلاوات الشيخ د. ياسر الدوسري
  //         </h1>
  //         <p className='text-surface-600 dark:text-surface-400 mt-4 text-lg'>
  //           استمع للقرآن الكريم بصوت الشيخ ياسر الدوسري
  //         </p>
  //       </div>

  //       <div className='flex justify-center mb-8'>
  //       <input
  //         type='text'
  //         placeholder='ابحث عن سورة'
  //         value={search}
  //         onChange={(e) => setSearch(e.target.value)}
  //         className='w-full max-w-md px-4 py-3 rounded-xl border border-primary-300 dark:border-primary-700 shadow-soft font-bold text-lg bg-white dark:bg-surface-800 text-surface-900 dark:text-surface-100 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200'
  //       />
  //       </div>

  //       <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6'>
  //         {filteredSurahs.map((surah) => (
  //           <Link key={surah.index} href={`/dosary/${surah.index + 1}`}>
  //              <div className='bg-white dark:bg-surface-800 rounded-2xl p-5 shadow-soft hover:shadow-card hover:border-primary-300 dark:hover:border-primary-700 hover:-translate-y-1 transition-all duration-300 border border-surface-200 dark:border-surface-700 border-b-4 border-primary-600 cursor-pointer'>
  //               <div className='flex items-center gap-4'>
  //                 <div className='w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold shadow-soft'>
  //                   {surah.index + 1}
  //                 </div>
  //                 <div className='flex-1'>
  //                 <h3 className='text-lg font-semibold text-surface-900 dark:text-surface-100'>
  //                   {surah.name}
  //                 </h3>
  //                 </div>
  //                 <svg
  //                   className='w-5 h-5 text-primary-600 dark:text-primary-400'
  //                   fill='none'
  //                   stroke='currentColor'
  //                   viewBox='0 0 24 24'
  //                 >
  //                   <path
  //                     strokeLinecap='round'
  //                     strokeLinejoin='round'
  //                     strokeWidth={2}
  //                     d='M9 5l7 7-7 7'
  //                   />
  //                 </svg>
  //               </div>
  //             </div>
  //           </Link>
  //         ))}
  //       </div>
  //     </section>
  //   </main>
  // );

  return (
    <main>
      <p>الصفحة موقوفة مؤقتا</p>
    </main>
  );
};

export default Dosary;
