'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const DownloadApp = () => {
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isAndroid = userAgent.includes('android');
    const isWebView = userAgent.includes('wv');

    // Display only if on Android and NOT inside a WebView
    if (isAndroid && !isWebView) {
      setShouldShow(true);
    }
  }, []);

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title,
          url: window.location.href,
        });
        console.log('Content shared successfully!');
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      try {
        await navigator.clipboard.writeText(
          'https://awradi.vercel.app/awradi.apk',
        );
        alert('تم نسخ رابط التحميل إلى الحافظة');
      } catch (err) {
        console.error('Could not copy text: ', err);
      }
    }
  };

  // If not Android or if inside WebView, render nothing
  if (!shouldShow) {
    return null;
  }

  return (
    <div className='p-4 m-3 flex flex-row flex-wrap gap-3 justify-center items-center bg-white dark:bg-surface-800 shadow-card border border-surface-200 dark:border-surface-700 rounded-2xl'>
      <h3 className='font-semibold text-surface-800 dark:text-surface-200'>
        تحميل تطبيق أورادي:{' '}
      </h3>
      <div className='flex justify-center items-center gap-2'>
        <Image
          src='/android.png'
          width={40}
          height={40}
          alt='android logo'
          className='rounded-lg'
        />
        <a
          className='text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline font-medium transition-colors duration-200'
          href='./awradi.apk'
          download
        >
          تحميل للأندرويد apk
        </a>
      </div>
      <button
        onClick={handleShare}
        className='rounded-full bg-surface-50 dark:bg-surface-700 hover:bg-surface-100 dark:hover:bg-surface-600 shadow-soft border border-surface-200 dark:border-surface-600 p-2 transition-all duration-200 hover:shadow-card active:scale-95'
        aria-label='Share app'
      >
        <Image
          src='/shareIcon.png'
          alt='share'
          width={32}
          height={32}
        />
      </button>
    </div>
  );
};

export default DownloadApp;
