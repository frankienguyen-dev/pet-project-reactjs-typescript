import { RegisterOptions, UseFormGetValues } from 'react-hook-form';

type Rules = { [key in 'email' | 'password' | 'password_confirm' | 'address' | 'phone']?: RegisterOptions };

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
