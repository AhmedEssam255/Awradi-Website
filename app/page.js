import DownloadApp from './downloadApp';

import Link from 'next/link';

import Image from 'next/image';

const menuItems = [
  {
    href: '/azkar',
    src: '/azkar-paper.png',
    alt: 'azkar',
    label: 'الأذكار',
  },
  {
    href: '/quran',
    src: '/quran.png',
    alt: 'quran',
    label: 'القرآن',
  },
  {
    href: '/werd',
    src: '/schedule.jpg',
    alt: 'werd',
    label: 'الورد اليومي',
  },
  {
    href: '/prayers',
    src: '/kaaba.jpeg',
    alt: 'prayers',
    label: 'مواقيت الصلوات',
  },
  {
    href: '/sibha',
    src: '/sibha.png',
    alt: 'sibha',
    label: 'السبحة',
  },
  {
    href: '/tasks',
    src: '/tasks.jpeg',
    alt: 'tasks image',
    label: 'مهمات إسلامية',
  },
  {
    href: 'https://whatsapp.com/channel/0029VbBoDGMIyPtRYSmG7p1K',
    src: '/whatsapp.jpg',
    alt: 'Whatsapp channel',
    label: 'قناة الواتساب',
  },
  {
    href: '/support',
    src: '/support.png',
    alt: 'support',
    label: 'الدعم',
  },
  {
    href: '/imp_links',
    src: '/link.png',
    alt: 'link image',
    label: 'روابط هامة',
  },
];

const Home = async () => {
  return (
    <main className='flex flex-col items-center justify-center gap-6 px-4 py-6'>
      <h2 className='text-2xl font-bold mb-2'>مرحبا بكم في أورادي</h2>
      <DownloadApp />
      <h3 className='text-xl font-semibold text-surface-600 dark:text-surface-400'>تابع تقدمك: </h3>
      <div className='w-full max-w-5xl'>
        <nav className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
          {menuItems.map((item, index) => (
            <Link href={item.href} key={index} className='group'>
              <figure className='bg-white dark:bg-surface-800 flex items-center gap-4 p-4 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-soft hover:shadow-card hover:border-primary-300 dark:hover:border-primary-700 hover:-translate-y-1 transition-all duration-300'>
                <Image
                  className='bg-surface-50 dark:bg-surface-700 aspect-square rounded-xl shadow-soft group-hover:shadow-card transition-all duration-300'
                  src={item.src}
                  alt={item.alt}
                  width={64}
                  height={64}
                  sizes='(max-width: 640px) 64px, (max-width: 1024px) 64px, 64px'
                />
                <figcaption>
                  <h4 className='text-base font-semibold text-surface-900 dark:text-surface-100 group-hover:text-primary-700 dark:group-hover:text-primary-300 transition-colors duration-300'>{item.label}</h4>
                </figcaption>
              </figure>
            </Link>
          ))}
        </nav>
      </div>
      <p className='text-surface-600 dark:text-surface-400 max-w-2xl leading-relaxed'>
        نتمنى لك وقتا سعيدا. اذا واجهتك اي مشكله رجاءً تواصل مع المطور في صفحة
        الدعم
      </p>
      <Link className='underline' href='/privacy-policy'>سياسة الخصوصية</Link>
      <div className='w-full max-w-2xl bg-gradient-to-br from-surface-900 to-surface-800 dark:from-surface-100 dark:to-surface-200 shadow-elevated rounded-2xl border border-primary-500/30 p-6 text-center text-white dark:text-surface-900'>
        <h4 className='text-xl font-bold mb-3'>إنا لله و إنا إليه راجعون</h4>
        <p className='text-white/80 dark:text-surface-700 mb-2'>هذا الموقع صدقة جارية على روح :</p>
        <h4 className='text-lg font-bold mb-1'>المهندس / تامر سامي إبراهيم</h4>
        <p className='text-white/70 dark:text-surface-600 text-sm'>نسأل الله تعالى له الرحمة والمغفرة ولا تنسوه من دعائكم</p>
      </div>
    </main>
  );
};

export default Home;
