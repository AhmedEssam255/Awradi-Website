// 'use client';

// import { useRef, useState, useEffect } from 'react';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import quran_dosary from '../../../lib/yasser-dosary-audio.json';
// import quranIndex from '../../../lib/quranIndex.json';
// import { useParams } from 'next/navigation';

const DosaryChapter = () => {
  // const params = useParams();
  // const router = useRouter();
  // const id = parseInt(params.id - 1);
  // const audioRef = useRef(null);
  // const [autoPlay, setAutoPlay] = useState(true);

  // useEffect(() => {
  //   const savedAutoPlay = localStorage.getItem('dosaryAutoPlay');
  //   if (savedAutoPlay !== null) {
  //     setAutoPlay(JSON.parse(savedAutoPlay));
  //   }
  // }, []);

  // useEffect(() => {
  //   const audio = audioRef.current;
  //   if (!audio) return;

  //   const handleCanPlay = () => {
  //     audio.play().catch((error) => {
  //       console.log('Autoplay failed:', error);
  //     });
  //   };

  //   audio.addEventListener('canplay', handleCanPlay);

  //   return () => {
  //     audio.removeEventListener('canplay', handleCanPlay);
  //   };
  // }, [id]);

  // const handleAudioEnd = () => {
  //   if (autoPlay && id < quran_dosary.length - 1) {
  //     router.push(`/dosary/${id + 2}`);
  //   }
  // };

  // const handleAutoPlayToggle = () => {
  //   const newAutoPlayValue = !autoPlay;
  //   setAutoPlay(newAutoPlayValue);
  //   localStorage.setItem('dosaryAutoPlay', JSON.stringify(newAutoPlayValue));
  // };

  // if (id < 0 || id >= quran_dosary.length) {
  //   return (
  //     <main className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-surface-50 to-surface-100 dark:from-surface-900 dark:to-surface-800'>
  //       <section className='bg-white dark:bg-surface-800 rounded-2xl shadow-card border-b-4 border-red-400 dark:border-red-600 p-12 text-center max-w-md mx-auto'>
  //         <div className='text-6xl mb-4'>⚠️</div>
  //         <h1 className='text-3xl font-bold text-surface-900 dark:text-surface-100 mb-4'>
  //           السورة غير موجودة
  //         </h1>
  //         <p className='text-surface-600 dark:text-surface-400 mb-8'>
  //           عذراً، لم نتمكن من العثور على السورة المطلوبة
  //         </p>
  //         <Link href='/dosary'>
  //           <div className='inline-block bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-card transition-all cursor-pointer'>
  //             العودة للقائمة
  //           </div>
  //         </Link>
  //       </section>
  //     </main>
  //   );
  // }

  // const audioUrl = quran_dosary[id];

  // return (
  //   <main className='flex flex-col items-center justify-start min-h-screen px-4 py-8'>
  //     <div className='w-full max-w-2xl'>
  //       <div className='bg-white dark:bg-surface-800 rounded-2xl shadow-card border-b-4 border-primary-600 p-8'>
  //         <div className='text-center mb-8'>
  //           <div className='w-20 h-20 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-card'>
  //             <span className='text-3xl font-bold text-white'>{id + 1}</span>
  //           </div>
  //           <h1 className='text-3xl font-bold text-surface-900 dark:text-surface-100 mb-2'>
  //             {quranIndex[id].name}
  //           </h1>
  //         </div>
  //           <audio
  //             ref={audioRef}
  //             controls
  //             onEnded={handleAudioEnd}
  //             className='w-full h-12 rounded-xl accent-primary-600 mx-auto mt-4 mb-4'
  //           >
  //             <source src={audioUrl} type='audio/mpeg' />
  //           </audio>
  //         <div className='flex flex-col gap-4 mb-8'>
  //           <button
  //             onClick={handleAutoPlayToggle}
  //             className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
  //               autoPlay
  //                 ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white hover:shadow-card'
  //                 : 'bg-surface-100 dark:bg-surface-700 text-surface-900 dark:text-surface-100 hover:shadow-card'
  //             }`}
  //           >
  //             <span className='text-xl'>{autoPlay ? '🔊' : '🔇'}</span>
  //             {autoPlay
  //               ? 'إيقاف التشغيل التلقائي للسور التالية'
  //               : 'تفعيل التشغيل التلقائي للسور التالية'}
  //           </button>
  //         </div>

  //         <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
  //           {id > 0 && (
  //             <Link href={`/dosary/${id - 1}`}>
  //               <div className='bg-gradient-to-r from-primary-100 to-primary-200/70 dark:from-primary-900/30 dark:to-primary-800/20 p-4 rounded-xl text-center font-semibold text-surface-900 dark:text-surface-100 hover:shadow-card transition-all cursor-pointer hover:-translate-y-1'>
  //                 السورة السابقة
  //               </div>
  //             </Link>
  //           )}

  //           <Link href='/dosary'>
  //             <div className='bg-gradient-to-r from-primary-50 to-primary-100/70 dark:from-primary-900/20 dark:to-primary-800/20 p-4 rounded-xl text-center font-semibold text-surface-900 dark:text-surface-100 hover:shadow-card transition-all cursor-pointer hover:-translate-y-1'>
  //               العودة للقائمة
  //             </div>
  //           </Link>

  //           {id < quran_dosary.length - 1 && (
  //             <Link href={`/dosary/${id + 2}`}>
  //               <div className='bg-gradient-to-r from-surface-100 to-surface-200 dark:from-surface-700/50 dark:to-surface-600/30 p-4 rounded-xl text-center font-semibold text-surface-900 dark:text-surface-100 hover:shadow-card transition-all cursor-pointer hover:-translate-y-1'>
  //                 السورة التالية
  //               </div>
  //             </Link>
  //           )}
  //         </div>
  //       </div>

  //       <div className='text-center mt-8 pb-8'>
  //         <p className='text-surface-500 dark:text-surface-400 text-sm'>
  //           السورة {id + 1} من {quran_dosary.length}
  //         </p>
  //       </div>
  //     </div>
  //   </main>
  // );

  return (
    <main>
      <p>الصفحة موقوفة مؤقتا</p>
    </main>
  );
};

export default DosaryChapter;
