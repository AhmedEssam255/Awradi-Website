import Link from 'next/link';
import Image from 'next/image';

const ImpLinks = () => {
  const links = [
    {
      src: '/eraki-hamed.jpeg',
      alt: 'شيخ عراقي حامد',
      text: 'الشيخ عراقي حامد',
      href: 'https://Sheikh-Eraki.vercel.app',
      isExternal: true,
      isAwradi: true,
    },
    {
      src: '/kaaba.jpeg',
      alt: 'قناة روح',
      text: 'قناة روح',
      href: 'https://tiktok.com/@mohammad_amr7',
      isExternal: true,
    },
    {
      src: '/ahmed-zakaria.jpeg',
      alt: 'قناة دقيقة هدى',
      text: 'قناة دقيقة هدى',
      href: 'https://www.youtube.com/@AhmedZakaria35',
      isExternal: true,
    },
    {
      src: '/nour-elhedaya.jpeg',
      alt: 'قناة نور الهداية',
      text: 'قناة نور الهداية',
      href: 'https://whatsapp.com/channel/0029VbD7wI9HgZWXEDeEN126',
      isExternal: true,
    },
    {
      src: '/awab.jpg',
      alt: 'قناة أواب',
      text: 'قناة أواب',
      href: 'https://whatsapp.com/channel/0029Vb4Efn45a240GzodQC1V',
      isExternal: true,
    },
    {
      src: '/eghtanim.jpeg',
      alt: 'قناة إغتنم',
      text: 'قناة إغتنم',
      href: 'https://whatsapp.com/channel/0029Vb79DSB2ZjCnWR19912J',
      isExternal: true,
    },
  ];

  return (
    <main className='flex flex-col items-center justify-center gap-6 px-4 py-8'>
      <p className='text-surface-700 dark:text-surface-300 text-center leading-relaxed'>
        "نتقدم بجزيل الشكر لجميع القنوات التي ساهمت في نشر و نجاح هذا المشروع"
      </p>
      <section className='w-full max-w-2xl flex flex-col gap-4'>
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className='group'
            target={link.isExternal ? '_blank' : undefined}
            rel={link.isExternal ? 'noopener noreferrer' : undefined}
          >
            <figure className='flex flex-col sm:flex-row items-center justify-center gap-4 rounded-2xl bg-white dark:bg-surface-800 border border-surface-200 dark:border-surface-700 shadow-soft hover:shadow-card hover:border-primary-300 dark:hover:border-primary-700 hover:-translate-y-1 transition-all duration-300 p-5'>
              <Image
                src={link.src}
                alt={link.alt}
                className='rounded-xl aspect-square object-cover bg-surface-50 dark:bg-surface-700 border border-surface-200 dark:border-surface-600'
                width={80}
                height={80}
              />
              <figcaption>
                <span className='text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold text-lg transition-colors duration-200 group-hover:underline'>
                  {link.text}
                </span>
                {link.isAwradi && (
                  <p className='mt-2 text-surface-600 dark:text-surface-400 text-sm'>
                    (تابع لبرنامج دعم المشروعات الدينية من أورادي)
                  </p>
                )}
              </figcaption>
            </figure>
          </Link>
        ))}
      </section>
      <section className='w-full max-w-2xl bg-white dark:bg-surface-800 shadow-card border border-surface-200 dark:border-surface-700 rounded-2xl p-6 flex flex-col gap-4'>
        <p className='text-surface-700 dark:text-surface-300 text-center leading-relaxed'>
          لمن أراد وضع رابط قناته الدينية، تواصل مع الدعم.
        </p>
        <div className='h-px bg-surface-200 dark:bg-surface-700'></div>
        <p className='text-surface-700 dark:text-surface-300 text-center leading-relaxed'>
          يوجد بعض الشروط:
        </p>
        <ul className='flex flex-col gap-3'>
          <li className='flex items-center gap-3 bg-surface-50 dark:bg-surface-700/50 p-3 rounded-xl border border-surface-200 dark:border-surface-600'>
            <span className='w-2 h-2 bg-primary-500 rounded-full shrink-0'></span>
            أن يكون المحتوى سليم و من مصدر موثوقة
          </li>
          <li className='flex items-center gap-3 bg-surface-50 dark:bg-surface-700/50 p-3 rounded-xl border border-surface-200 dark:border-surface-600'>
            <span className='w-2 h-2 bg-primary-500 rounded-full shrink-0'></span>
            أن لا يكون المحتوى مخالف للشريعة الإسلامية
          </li>
          <li className='flex items-center gap-3 bg-surface-50 dark:bg-surface-700/50 p-3 rounded-xl border border-surface-200 dark:border-surface-600'>
            <span className='w-2 h-2 bg-primary-500 rounded-full shrink-0'></span>
            أن تكون الأحاديث المنشورة صحيحة
          </li>
          <li className='flex items-center gap-3 bg-surface-50 dark:bg-surface-700/50 p-3 rounded-xl border border-surface-200 dark:border-surface-600'>
            <span className='w-2 h-2 bg-primary-500 rounded-full shrink-0'></span>
            انشر موقع أورادي على قناتك و أثبت ذلك
          </li>
        </ul>
      </section>
      <section className='w-full max-w-2xl bg-white dark:bg-surface-800 shadow-card border border-surface-200 dark:border-surface-700 rounded-2xl p-6 flex flex-col gap-4'>
        <Link
          href='/support#awradi-program'
          className='underline text-surface-700 dark:text-surface-300 text-center leading-relaxed'
        >
          للاستفادة من برنامج دعم المشروعات الدينية، اضغط هنا
        </Link>
      </section>
    </main>
  );
};

export default ImpLinks;
