import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className='px-8 py-12 max-w-md mx-auto'>
        <img className='h-10' src='./img/logo.svg' alt='Workcation' />
        <img
          className='mt-6 rounded-lg shadow-xl'
          src='./img/beach-work.jpg'
          alt='Women workcationing on the beach'
        />
        <h1 className='mt-6 text-2xl font-bold text-gray-900 leading-tight'>
          You can work from anywhere.{' '}
          <span className='text-indigo-500'>Take advantage of it.</span>
        </h1>
        <p className='mt-2 text-gray-600'>
          Workcation helps you find work-friendly rentals in beautiful locations
          so you can enjoy some nice weather even when you are not at vacation.
        </p>
        <div className='mt-4'>
          <Link href='#'>
            <a className='inline-block bg-indigo-500 text-white px-5 py-3 rounded-lg shadow-lg uppercase tracking-wider text-sm font-semibold'>
              Book your escape
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
