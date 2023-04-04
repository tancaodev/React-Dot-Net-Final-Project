import React from 'react';

export const ProductImage = ({ name, image }) => {
  return (
    <div className=''>
      <div className='flex flex-col m-auto max-w-[1025px] relative w-[100%]'>
        <div className='flex justify-center relative mb-4'>
          <div className='flex items-center min-w-[50%] w-[50%] box-border px-[45px]'>
            <div className='flex mr-2 invisible'>
              <div className='w-[46px] h-[46px] mr-2 min-w-[46px] relative'></div>
            </div>
            <p className='text-xl font-semibold'>{name}</p>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='flex flex-col self-start m-[0_auto] min-w-[50%] w-[50%]'>
            <div className='block relative'>
              <div className='h-[320px] m-auto max-w-[320px] relative w-[100%]'>
                <img src={image} alt='/' className='flex h-[100%] w-[100%]' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
