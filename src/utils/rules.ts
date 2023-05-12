import { RegisterOptions } from 'react-hook-form';

type Rules = { [key in 'email' | 'password' | 'password_confirm' | 'address' | 'phone']?: RegisterOptions };

export const rules: Rules = {
  email: {
    required: {
      value: true,
      message: 'Email la bat buoc'
    },
    pattern: {
      value: /^\S+@\S+\.\S+$/,
      message: 'Email khong dung dinh dang'
    },
    maxLength: {
      value: 160,
      message: 'Do dai tu 5 - 160 ki tu'
    },
    minLength: {
      value: 5,
      message: 'Do dai tu 5 - 160 ki tu'
    }
  },

  address: {
    required: {
      value: true,
      message: 'Dia chi la bat buoc'
    },
    maxLength: {
      value: 1000,
      message: 'Do dai tu 5 - 1000 ki tu'
    },
    minLength: {
      value: 5,
      message: 'Do dai tu 5 - 1000 ki tu'
    }
  },

  phone: {
    required: {
      value: true,
      message: 'So dien thoai la bat buoc'
    },
    maxLength: {
      value: 20,
      message: 'Do dai tu 5 - 20 ki tu'
    },
    minLength: {
      value: 5,
      message: 'Do dai tu 5 - 20 ki tu'
    }
  },
  password: {
    required: {
      value: true,
      message: 'Vui lòng nhập password'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài password từ 6 đến 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài password từ 6 đến 160 ký tự'
    }
  },
  password_confirm: {
    required: {
      value: true,
      message: 'Vui lòng nhập lại password'
    },
    maxLength: {
      value: 160,
      message: 'Độ dài password từ 6 đến 160 ký tự'
    },
    minLength: {
      value: 6,
      message: 'Độ dài password từ 6 đến 160 ký tự'
    }
  }
};
