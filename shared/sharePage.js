'use client';

import Image from 'next/image';

const SharePage = () => {
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
        await navigator.clipboard.writeText(window.location.href);
        alert('تم نسخ رابط الصفحة إلى الحافظة');
      } catch (err) {
        console.error('Could not copy text: ', err);
      }
    }
  };

  return (
    <button
      onClick={handleShare}
      className='rounded-full w-[65px] h-[65px] bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary-500 p-2'
      aria-label='Share page'
    >
      <Image
        src='/shareIcon.png'
        alt='share'
        width={70}
        height={70}
        sizes='100vw'
        className='w-full h-full'
      />
    </button>
  );
}

export default SharePage;