import { RegisterOptions, UseFormGetValues } from 'react-hook-form';
import * as yup from 'yup';

type Rules = { [key in 'email' | 'password' | 'password_confirm' | 'address' | 'phone']?: RegisterOptions };

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getRules = (getValue?: UseFormGetValues<any>): Rules => ({
  email: {
    required: {
      value: true,
      message: 'Email is required.'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email is contains invalid characters.'
    },
    maxLength: {
      value: 160,
      message: 'Email is too long or contains invalid characters.'
    },
    minLength: {
      value: 5,
      message: 'Email is too short or contains invalid characters.'
    }
  },

  address: {
    required: {
      value: true,
      message: 'Address is required.'
    },
    maxLength: {
      value: 1000,
      message: 'Address is too long or contains invalid characters.'
    },
    minLength: {
      value: 5,
      message: 'Address is too short or contains invalid characters.'
    }
  },

  phone: {
    required: {
      value: true,
      message: 'Phone number is required.'
    },
    maxLength: {
      value: 20,
      message: 'Phone number is too long or contains invalid characters.'
    },
    minLength: {
      value: 5,
      message: 'Phone number is too short or contains invalid characters.'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Password is required.'
    },
    maxLength: {
      value: 160,
      message: 'Password is too long or contains invalid characters.'
    },
    minLength: {
      value: 6,
      message: 'Password is too short or contains invalid characters.'
    }
  },
  password_confirm: {
    required: {
      value: true,
      message: 'Confirm password is required.'
    },
    maxLength: {
      value: 160,
      message: 'Confirm password is too long or contains invalid characters.'
    },
    minLength: {
      value: 6,
      message: 'Confirm password is too short or contains invalid characters.'
    },
    validate:
      typeof getValue === 'function'
        ? (value) => value === getValue('password') || 'Confirm password do not match.'
        : undefined
  }
});

const handleCofirmPasswordYup = (refString: string) => {
  return yup
    .string()
    .required('Confirm password is required.')
    .max(160, 'Confirm password is too long or contains invalid characters.')
    .min(6, 'Confirm password is too short or contains invalid characters.')
    .oneOf([yup.ref(refString)], 'Confirm password do not match.');
};

export const schema = yup.object({
  email: yup
    .string()
    .required('Email is required.')
    .email('Email is contains invalid characters.')
    .max(160, 'Email is too long or contains invalid characters.')
    .min(5, 'Email is too short or contains invalid characters.'),

  address: yup
    .string()
    .required('Address is required.')
    .max(1000, 'Address is too long or contains invalid characters.')
    .min(5, 'Address is too short or contains invalid characters.'),

  phone: yup
    .string()
    .required('Phone number is required.')
    .max(20, 'Phone number is too long or contains invalid characters.')
    .min(5, 'Phone number is too short or contains invalid characters.'),

  password: yup
    .string()
    .required('Password is required.')
    .max(160, 'Password is too long or contains invalid characters.')
    .min(6, 'Password is too short or contains invalid characters.'),
  password_confirm: handleCofirmPasswordYup('password')
});

export type Schema = yup.InferType<typeof schema>;
