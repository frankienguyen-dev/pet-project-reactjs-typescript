import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className='pt-10 lg:pb-36 lg:pt-20'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-[70px] lg:grid-cols-2'>
          <div className='col-span-1'>
            <form>
              <h1 className='text-[32px] font-semibold leading-[48px]  text-black'>I already have an account</h1>
              <div className='mt-[20px] text-[20px] font-normal leading-[30px] text-black/90'>
                If you are already registered, please enter your email address and password
              </div>
              <div className='mt-[40px]'>
                <input
                  placeholder='Your e-mail address'
                  type='email'
                  name='email'
                  className='w-full rounded-[60px] bg-[#F0F0F0]/50 px-9 py-6  outline-none'
                />
                {/* <div className='mt-2 min-h-[1.25rem] px-10 text-sm text-red-600'></div> */}
              </div>

              <div className='mt-[40px]'>
                <input
                  placeholder='Your password'
                  autoComplete='on'
                  type='password'
                  name='password'
                  className='w-full rounded-[60px] bg-[#F0F0F0]/50 px-9 py-6 outline-none'
                />
                {/* <div className='mt-2 min-h-[1.25rem] px-10 text-sm text-red-600'></div> */}
              </div>

              <div className='mt-[60px] flex items-center'>
                <button
                  className='flex w-full items-center justify-center rounded-[60px] border-none
               bg-[#0083FF] px-[107px] py-[26px] text-center text-[16px] text-white'
                >
                  Log In
                </button>
              </div>
            </form>
          </div>

          <div className='col-span-1'>
            <h1 className='text-[32px] font-semibold leading-[48px]  text-black'>I am a new customer</h1>
            <div className='mt-[20px] text-[20px] font-normal leading-[30px] text-black/90'>
              If you are already registered, please enter your email address and password
            </div>
            <div className='mb-20 mt-[40px] lg:mb-0'>
              <Link
                to='/register'
                className=' flex w-full items-center justify-center rounded-[60px] border-none
                 bg-[#38CB89] px-[107px] py-[26px] text-center text-[16px] text-white '
              >
                Create an account
              </Link>
              <Link
                to='/'
                className='mt-[40px] flex w-full items-center justify-center rounded-[60px]
                 border-none bg-black/90 px-[107px] py-[26px] text-center text-[16px] text-white '
              >
                Back to Homepage
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
