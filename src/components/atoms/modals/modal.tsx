import React from 'react';

interface Props {
  onClose: () => void;
  title?: string;
}
export const Modal: React.FC<Props> = (props) => {
  const { title, onClose, } = props;
  return (
    <div className='relative z-[999]' aria-labelledby='modal-title' role='dialog' aria-modal='true'>
      <div className='fixed inset-0 bg-transparent-black transition-opacity'></div>
      <div className='fixed inset-0 z-10 overflow-y-auto'>
        <div className='flex min-h-full items-center justify-center p-4 text-center'>
          <div className='relative transform overflow-hidden p-6 rounded-lg bg-white text-left shadow-xl transition-all w-[328px] h-[128px]'>
            <div className='absolute right-[15px] top-[15px]' onClick={onClose}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-x h-4 w-4'
              >
                <path d='M18 6 6 18'></path>
                <path d='m6 6 12 12'></path>
              </svg>
            </div>
            <div className='bg-white pb-5'>
              <h3
                className='text-sm/5 font-semibold text-dark-slate-gray text-center'
                id='modal-title'
              >
                {title}
              </h3>
            </div>
            <div className='flex gap-2 bg-gray-50 justify-end'>
              <button
                type='button'
                className='h-10 items-center border-1 border-[#D5DCD5] inline-flex w-full justify-center rounded-[100px] bg-white px-3 py-2 text-sm font-semibold text-emerald-green shadow-sm min-w-[134px]'
                onClick={onClose}
              >
                {/* <span className='pr-[10px]'>{flashOffIcon}</span> なし */}
              </button>
              <button
                type='button'
                className='h-10 items-center border-1 border-[#D5DCD5] inline-flex w-full justify-center rounded-[100px] bg-white px-3 py-2 text-sm font-semibold text-emerald-green shadow-sm min-w-[134px]'
                // onClick={onConfirm}
              >
                {/* <span className='pr-[10px]'>{flashOnIcon}</span> あり */}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
