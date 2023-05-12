import { Link } from 'react-router-dom';
import InfoHeader from '../InfoHeader';

export default function Header() {
  return (
    <header className='sticky left-0 right-0 top-0 z-10 bg-white pb-10'>
      <InfoHeader />
      <div className='container'>
        <div className='mt-11 grid grid-cols-12 items-center gap-4'>
          <Link to='/' className='col-span-2'>
            <span className='text-[32px] font-normal'>FRANKIE</span>
          </Link>

          <form className='col-span-7'>
            <div className='flex rounded-3xl bg-[#F0F0F0]/50'>
              <button className='bg-orange flex-shrink-0 rounded-sm py-2 pl-6 pr-1 hover:opacity-90'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-5 w-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
                  />
                </svg>
              </button>
              <input
                type='text'
                placeholder='Search'
                className='flex-grow border-none bg-transparent px-5 py-4 text-black outline-none'
              />
            </div>
          </form>

          <div className='col-span-3 justify-self-end'>
            <div className='item-center flex justify-center gap-[60px]'>
              <Link to='/' className='flex flex-col items-center'>
                <svg width={20} height={20} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M9 22C9.55229 22 10 21.5523 10 21C10 20.4477 9.55229 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z'
                    stroke='black'
                    strokeOpacity='0.9'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z'
                    stroke='black'
                    strokeOpacity='0.9'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6'
                    stroke='black'
                    strokeOpacity='0.9'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <span className='mt-[10px] text-sm'>Shopping bag</span>
              </Link>

              <Link to='/' className='flex flex-col items-center'>
                <svg width={20} height={20} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21'
                    stroke='black'
                    strokeOpacity='0.9'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z'
                    stroke='black'
                    strokeOpacity='0.9'
                    strokeWidth={2}
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                <span className='mt-[10px] text-sm'>Sign in</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
