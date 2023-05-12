import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { getRules } from 'src/utils/rules';

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
    getValues,
    formState: { errors }
  } = useForm<FormData>();

  const rules = getRules(getValues);

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div className='pt-10 lg:pb-36 lg:pt-20'>
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
                autoComplete='on'
                type='password'
                className='mt-5 w-full rounded-[60px] bg-[#F0F0F0]/50 px-9 py-6 outline-none'
                {...register('password', rules.password)}
              />
              <div className='mt-2 min-h-[1.25rem] px-10 text-sm text-red-600'>{errors.password?.message}</div>

              <input
                placeholder='Your confirm password'
                type='password'
                autoComplete='on'
                className='mt-5 w-full rounded-[60px] bg-[#F0F0F0]/50 px-9 py-6 outline-none'
                {...register('password_confirm', {
                  ...rules.password_confirm
                })}
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
