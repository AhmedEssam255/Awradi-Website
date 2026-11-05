'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useMenu } from './MenuContext';

const menuLinks = [
  {
    href: '/',
    label: 'الصفحة الرئيسية',
  },
  {
    href: '/azkar',
    label: 'الأذكار',
  },
  {
    href: '/quran',
    label: 'القرآن',
  },
  {
    href: '/werd',
    label: 'الورد',
  },
  {
    href: '/prayers',
    label: 'الصلاة',
  },
  {
    href: '/sibha',
    label: 'السبحة',
  },
  {
    href: '/tasks',
    label: 'مهمات إسلامية',
  },
  {
    href: '/support',
    label: 'الدعم',
  },
  {
    href: '/imp_links',
    label: 'روابط هامة',
  },
];

const Menu = () => {
  const { isMenuOpen, closeMenu } = useMenu();

  return (
    <>
      {isMenuOpen && (
        <button
          onClick={closeMenu}
          className='fixed inset-0 z-30 bg-black/40 backdrop-blur-sm transition-opacity duration-300'
          aria-label='Close menu'
        />
      )}
      <nav
        className={`fixed inset-y-0 right-0 flex flex-col justify-between items-center p-4 w-3/4 max-w-sm bg-white/95 dark:bg-surface-800/95 backdrop-blur-md shadow-elevated z-40 border-l border-surface-200 dark:border-surface-700 transition-transform duration-300 ease-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className='w-full flex flex-col gap-2'>
          <button
            className='self-end m-1 w-10 h-10 rounded-full bg-surface-100 dark:bg-surface-700 hover:bg-red-50 dark:hover:bg-red-900/30 text-surface-700 dark:text-surface-300 hover:text-red-600 dark:hover:text-red-400 shadow-soft border border-surface-200 dark:border-surface-600 flex items-center justify-center transition-all duration-200'
            onClick={closeMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
          <div className='flex flex-col divide-y divide-surface-200 dark:divide-surface-700 mt-4 rounded-lg overflow-hidden'>
            {menuLinks.map((item, index) => (
              <Link
                className='flex items-center w-full px-4 py-3 text-surface-800 dark:text-surface-200 bg-surface-50/50 dark:bg-surface-700/50 hover:bg-primary-50 dark:hover:bg-primary-900/30 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-all duration-200'
                key={index}
                href={item.href}
                onClick={closeMenu}
              >
                <span>{item.label}</span>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Menu;
