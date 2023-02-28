import React from 'react';

function Activities() {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt-[-75px]'>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-extrabold'>
          CPUs
        </h3>
        <img
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src='https://images.unsplash.com/photo-1613483187550-1458bbdb0996?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          alt='/'
        />
      </div>

      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-extrabold'>
          Smartphones
        </h3>
        <img
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src='https://images.unsplash.com/photo-1671038374738-e0525bbc36f6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
          alt='/'
        />
      </div>

      <div className='relative p-4'>
        <h3 className='absolute z-10 top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-2xl font-extrabold'>
          Laptops
        </h3>
        <img
          className='w-full h-full object-cover relative border-4 border-white shadow-lg'
          src='https://images.unsplash.com/photo-1606229365485-93a3b8ee0385?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
          alt='/'
        />
      </div>
    </div>
  );
}

export default Activities;
