import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Input from 'src/components/Input';
import { Schema, schema } from 'src/utils/rules';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { registerAccount } from 'src/apis/auth.api';
import { omit } from 'lodash';
import { isAxiosUnprocessableEntity } from 'src/utils/utils';
import { ResponseApi } from 'src/types/utils.type';

type FormData = Schema;

export default function Register() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors }
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const registerAccountMutation = useMutation({
    mutationFn: (body: Omit<FormData, 'password_confirm'>) => {
      return registerAccount(body);
    }
  });

  const onSubmit = handleSubmit((data) => {
    const body = omit(data, ['password_confirm']);
    registerAccountMutation.mutate(body, {
      onSuccess: (data) => {
        console.log('check data register:', data);
      },
      onError: (error) => {
        if (isAxiosUnprocessableEntity<ResponseApi<Omit<FormData, 'password_confirm'>>>(error)) {
          const formError = error.response?.data.data;

          if (formError) {
            Object.keys(formError).forEach((key) => {
              setError(key as keyof Omit<FormData, 'password_confirm'>, {
                message: formError[key as keyof Omit<FormData, 'password_confirm'>],
                type: 'Server'
              });
            });
          }
          // if (formError?.email) {
          //   setError('email', {
          //     message: formError.email,
          //     type: 'Server'
          //   });
          // }

          // if (formError?.password) {
          //   setError('password', {
          //     message: formError.password,
          //     type: 'Server'
          //   });
          // }
        }
      }
    });
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
            <form onSubmit={onSubmit} noValidate>
              <h1 className='text-[32px] font-semibold leading-[48px] text-black/90'>
                Registration
              </h1>

              <Input
                className='mt-8'
                name='email'
                placeholder='Your e-mail address'
                type='email'
                autoComplete='on'
                register={register}
                errorMessage={errors.email?.message}
              />

              <Input
                className='mt-2'
                name='address'
                placeholder='Your address'
                type='text'
                autoComplete='on'
                register={register}
                errorMessage={errors.address?.message}
              />

              <Input
                className='mt-2'
                name='phone'
                placeholder='Your phone number'
                type='text'
                autoComplete='on'
                register={register}
                errorMessage={errors.phone?.message}
              />

              <Input
                className='mt-2'
                name='password'
                placeholder='Your password'
                type='password'
                register={register}
                autoComplete='on'
                errorMessage={errors.password?.message}
              />

              <Input
                className='mt-2'
                name='password_confirm'
                placeholder='Your confirm password'
                type='password'
                register={register}
                autoComplete='on'
                errorMessage={errors.password_confirm?.message}
              />

              <div className='mt-5'>
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
