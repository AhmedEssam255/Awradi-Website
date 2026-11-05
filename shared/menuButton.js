'use client';

import Image from 'next/image';
import { useMenu } from './MenuContext';

const MenuButton = () => {
  const { toggleMenu } = useMenu();

  return (
    <button
      onClick={toggleMenu}
      className='rounded-full w-[65px] h-[65px] bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 shadow-soft hover:shadow-card transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-primary-500'
      aria-label='Open menu'
    >
      <Image
        src='/burger-button.png'
        alt='زر القائمة'
        width={70}
        height={70}
        sizes='100vw'
        className='w-full h-full'
      />
    </button>
  );
};

export default MenuButton;
