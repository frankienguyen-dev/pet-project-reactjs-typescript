import { RegisterOptions, UseFormRegister } from 'react-hook-form';

interface Props {
  type: React.HTMLInputTypeAttribute;
  errorMessage?: string;
  autoComplete?: string;
  placeholder?: string;
  className?: string;
  name: string;
  register: UseFormRegister<any>;
  rules?: RegisterOptions;
}

export default function Input({
  name,
  type,
  errorMessage,
  autoComplete,
  placeholder,
  className,
  register,
  rules
}: Props) {
  return (
    <div className={className}>
      <input
        placeholder={placeholder}
        type={type}
        autoComplete={autoComplete}
        className='mt-3 w-full rounded-[60px] bg-[#F0F0F0]/50 px-9 py-6 outline-none'
        {...register(name, rules)}
      />
      <div className='mt-2 min-h-[1.25rem] px-10 text-sm text-red-600'>{errorMessage}</div>
    </div>
  );
}
