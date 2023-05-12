import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className='bg-black/90 py-16'>
      <div className='container'>
        <div className='grid grid-cols-1 gap-4 text-center lg:grid-cols-3'>
          <div className='lg:col-span-1'>
            <div className='text-[.875rem]  text-white'>© 2023 Frankie Nguyen. Tất cả các quyền được bảo lưu.</div>
          </div>

          <div className='lg:col-span-2'>
            <div className='text-[.875rem]  text-white'>
              Quốc gia & Khu vực: Singapore Indonesia Đài Loan Thái Lan Malaysia Việt Nam Philippines Brazil México
              Colombia Chile
            </div>
          </div>
        </div>

        <div className='mt-10 text-center text-[0.75rem] text-white'>
          <div className='mt-6'>Địa chỉ: Quận Cầu Giấy, Thành phố Hà Nội - Email: frankie.dev@gmail.com</div>
          <div className='mt-2'>
            Chịu Trách Nhiệm Quản Lý Nội Dung: Frankie Nguyen - Điện thoại liên hệ: 03 8700 6700.
          </div>

          <div className='mt-2'>© 2023 - Bản quyền thuộc về Frankie Nguyen  </div>
        </div>
      </div>
    </div>
  );
}
