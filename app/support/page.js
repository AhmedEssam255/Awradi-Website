import Image from 'next/image';

const DevContact = () => {
  return (
    <main className='flex flex-col items-center gap-6 px-4 py-8'>
      <h1 className='text-3xl font-bold'>تواصل مع المطور: </h1>
      <section className='flex flex-col gap-4 w-full max-w-2xl'>
        <figure className='flex flex-col sm:flex-row items-center justify-center gap-4 rounded-2xl border border-primary-200 dark:border-primary-800 p-5 bg-white dark:bg-surface-800 shadow-card hover:shadow-elevated transition-all duration-300'>
          <Image src='/telegram.png' alt='التيليجرام' width={64} height={64} className='rounded-xl' />
          <figcaption className='text-center'>
            <a
              href='https://t.me/awradi_support'
              className='text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 underline font-semibold text-lg transition-colors duration-200'
              target='_blank'
              rel='noopener noreferrer'
            >
              تواصل عبر التيليجرام
            </a>
          </figcaption>
        </figure>
        <figure className='flex flex-col sm:flex-row items-center justify-center gap-4 rounded-2xl border border-red-200 dark:border-red-800 p-5 bg-white dark:bg-surface-800 shadow-card hover:shadow-elevated transition-all duration-300'>
          <Image
            className='rounded-xl'
            src='/gmail.jpg'
            alt='البريد الإلكتروني'
            width={64}
            height={64}
          />
          <figcaption className='text-center'>
            <a
              href='mailto:awradi.developer@gmail.com'
              className='text-red-500 hover:text-red-600 dark:hover:text-red-400 underline font-semibold text-lg transition-colors duration-200'
              target='_blank'
              rel='noopener noreferrer'
            >
              تواصل عبر البريد الإلكتروني
            </a>
          </figcaption>
        </figure>
      </section>
      <section id='awradi-program' className='w-full max-w-2xl bg-white dark:bg-surface-800 shadow-card border border-surface-200 dark:border-surface-700 rounded-2xl p-6 flex flex-col gap-5'>
        <h2 className='text-xl font-bold text-surface-900 dark:text-surface-100 border-b-2 border-primary-200 dark:border-primary-800 pb-2'>
          برنامج دعم المشاريع الدينية من أورادي
        </h2>
        <p className='text-surface-700 dark:text-surface-300 leading-relaxed'>
          إذا كانت لديك فكرة لمشروع ديني و تريد تنفيذه كموقع الكتروني بشكل مجاني
          و لوجه الله تعالى يمكننا في أورادي مساعدتك على ذلك، قم بالتواصل معنا
          عبر الدعم عن طريق الروابط الموضحة أعلاه و سنكون سعيدين جدا لمساعدتك
          على تنفيذ مشروعك على أرض الواقع بإذن الله تعالى
        </p>
        <h3 className='text-lg font-bold text-primary-700 dark:text-primary-300'>
          الشروط للاستفادة من البرنامج:
        </h3>
        <ul className='flex flex-col gap-3'>
          <li className='flex items-center gap-3 bg-surface-50 dark:bg-surface-700/50 p-3 rounded-xl border border-surface-200 dark:border-surface-600'>
            <span className='w-2 h-2 bg-primary-500 rounded-full shrink-0'></span>
            سلامة المحتوى المنشور و سلامة الفكرة
          </li>
          <li className='flex items-center gap-3 bg-surface-50 dark:bg-surface-700/50 p-3 rounded-xl border border-surface-200 dark:border-surface-600'>
            <span className='w-2 h-2 bg-primary-500 rounded-full shrink-0'></span>
            أي حديث يتم نشره فالقناة / الموقع ...الخ يكون تم التأكد من صحته
          </li>
          <li className='flex items-center gap-3 bg-surface-50 dark:bg-surface-700/50 p-3 rounded-xl border border-surface-200 dark:border-surface-600'>
            <span className='w-2 h-2 bg-primary-500 rounded-full shrink-0'></span>
            أي فيديو يتم نشره يكون متأكد ان الشخص الي بيتكلم يكون على خير و شخص
            موثوق يؤخذ عنه الدين
          </li>
          <li className='flex items-center gap-3 bg-surface-50 dark:bg-surface-700/50 p-3 rounded-xl border border-surface-200 dark:border-surface-600'>
            <span className='w-2 h-2 bg-primary-500 rounded-full shrink-0'></span>
            سلامة المحتوى دينياً
          </li>
          <li className='flex items-center gap-3 bg-surface-50 dark:bg-surface-700/50 p-3 rounded-xl border border-surface-200 dark:border-surface-600'>
            <span className='w-2 h-2 bg-primary-500 rounded-full shrink-0'></span>
            المشروع / القناة ...الخ يكون ديني غير ربحي
          </li>
        </ul>
      </section>
    </main>
  );
};

export default DevContact;
