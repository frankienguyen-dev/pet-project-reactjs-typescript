import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { rules } from 'src/utils/rules';

interface FormData {
  email: string;
  password: string;
  password_confirm: string;
  address: string;
  phone: string;
}

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  console.log('check errors: ', errors);

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
            <form className='mt-10' onSubmit={onSubmit} noValidate>
              <input
                placeholder='Your e-mail address'
                type='email'
                className='w-full rounded-[60px] bg-[#F0F0F0]/50 px-9 py-6 outline-none'
                {...register('email', rules.email)}
              />
              <div className='mt-2 min-h-[1.25rem] px-10 text-sm text-red-600'>{errors.email?.message}</div>

              <input
                placeholder='Your address'
                type='text'
                className='mt-5 w-full rounded-[60px] bg-[#F0F0F0]/50 px-9 py-6 outline-none'
                {...register('address', rules.address)}
              />

              <div className='mt-2 min-h-[1.25rem] px-10 text-sm text-red-600'>{errors.address?.message}</div>

              <input
                placeholder='Your phone number'
                type='text'
                className='mt-5 w-full rounded-[60px] bg-[#F0F0F0]/50 px-9 py-6 outline-none'
                {...register('phone', rules.phone)}
              />
              <div className='mt-2 min-h-[1.25rem] px-10 text-sm text-red-600'>{errors.phone?.message}</div>

              <input
                placeholder='Your password'
                type='password'
                className='mt-5 w-full rounded-[60px] bg-[#F0F0F0]/50 px-9 py-6 outline-none'
                {...register('password', rules.password)}
              />
              <div className='mt-2 min-h-[1.25rem] px-10 text-sm text-red-600'>{errors.password?.message}</div>

              <input
                placeholder='Your confirm password'
                type='password'
                className='mt-5 w-full rounded-[60px] bg-[#F0F0F0]/50 px-9 py-6 outline-none'
                {...register('password_confirm', rules.password_confirm)}
              />
              <div className='mt-2 min-h-[1.25rem] px-10 text-sm text-red-600'>{errors.password_confirm?.message}</div>

              <div className='mt-8'>
                <button
                  type='submit'
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
