import React from 'react';

export const Hero = () => {
  return (
    <div className='w-full h-[90vh]'>
      <img
        src='https://images.unsplash.com/photo-1517336714731-489689fd1ca8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1626&q=80'
        alt='/'
        className='w-full h-full object-cover'
      />
      <div className='max-w-[1140px] m-auto'>
        <div className='absolute top-[40%] w-full md:-[50%] max-w-[600px] h-full flex flex-col text-white p-4'>
          <h1 className='text-2xl sm:font-[1000] sm:text-6xl'>Find Tech Specs</h1>
          <h2 className='text-2xl sm:text-6xl sm:py-4 italic'>With NASUS </h2>
          <p className='my-4 text-yellow-200 font-medium bg-black/60 p-[15px] text-[18px]'>
            Nasus is a global comparison platform, providing unbiased and
            user-friendly comparisons across various categories, from tech
            products to cities. By providing accurate and objective information,
            as well as structured, easy-to-visualize data, we aim to ease
            decision-making
          </p>
        </div>
      </div>
    </div>
  );
}

