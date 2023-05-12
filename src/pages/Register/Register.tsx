import { Link } from 'react-router-dom';

export default function Register() {
  return (
    <div className='pt-10 lg:py-20 lg:pt-10'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-[70px] lg:grid-cols-2'>
          <div className='col-span-1'>
            <img
              src='src/images/register-img.jpg'
              alt='register'
              className='h-full w-full rounded-[30px] object-cover'
            />
          </div>

          <div className='col-span-1'>
            <h1 className='text-[32px] font-semibold leading-[48px] text-black/90'>Registration</h1>
            <form className='mt-10'>
              <input
                placeholder='Your e-mail address'
                type='email'
                name='email'
                className='w-full rounded-[60px] bg-[#F0F0F0]/50 px-9 py-6 outline-none'
              />

              <input
                placeholder='Your address'
                type='text'
                name='address'
                className='mt-10 w-full rounded-[60px] bg-[#F0F0F0]/50 px-9 py-6 outline-none'
              />

              <input
                placeholder='Your phone number'
                type='text'
                name='phone'
                className='mt-10 w-full rounded-[60px] bg-[#F0F0F0]/50 px-9 py-6 outline-none'
              />

              <input
                placeholder='Your password'
                type='password'
                name='password'
                className='mt-10 w-full rounded-[60px] bg-[#F0F0F0]/50 px-9 py-6 outline-none'
              />

              <input
                placeholder='Your confirm password'
                type='password'
                name='password_confirm'
                className='mt-10 w-full rounded-[60px] bg-[#F0F0F0]/50 px-9 py-6 outline-none'
              />

              <div className='mt-10'>
                <button
                  className='flex w-full items-center justify-center rounded-[60px] border-none
                 bg-[#0083FF] px-[107px] py-[26px] text-center text-[16px] text-white'
                >
                  Submit
                </button>
              </div>
            </form>
            <div className='mb-20 mt-10 lg:mb-0'>
              <Link
                to='/login'
                className='flex w-full items-center justify-center rounded-[60px] border-none
                bg-[#38CB89] px-[107px] py-[26px] text-center text-[16px] text-white'
              >
                I already have an account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
