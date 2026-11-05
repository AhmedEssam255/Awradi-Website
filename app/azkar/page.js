import Link from "next/link";

const AzkarHome = () => {
  return (
    <main className='flex flex-col items-center justify-center gap-6 px-4 py-8'>
      <nav className='w-full max-w-md'>
        <Link
          className='flex items-center justify-between w-full bg-white dark:bg-surface-800 px-6 py-4 rounded-2xl border border-surface-200 dark:border-surface-700 shadow-soft hover:shadow-card hover:border-primary-300 dark:hover:border-primary-700 hover:-translate-y-1 transition-all duration-300 font-semibold text-surface-800 dark:text-surface-200'
          href='/azkar/morning-evening'
        >
          <span>أذكار الصباح و المساء</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-primary-600 dark:text-primary-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
        </Link>
      </nav>
    </main>
  );
}

export default AzkarHome;