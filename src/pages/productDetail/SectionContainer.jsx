import React from 'react';

export const SectionContainer = () => {
  return (
    <nav className='block h-8 fixed w-[100%] z-10 shadow-md bg-white'>
      <div className='pl-[10px] block overflow-x-clip overflow-y-hidden box-border h-8 mx-auto max-w-[1190px] relative whitespace-nowrap w-[100%] z-10'>
        <div className='block'>
          <button className='nav-button cursor-pointer text-sm tracking-wider leading-tight m-[0_16px] ml-0 outline-none p-[8px_0] uppercase'>
            Overviews
          </button>
          <button className='nav-button cursor-pointer text-sm tracking-wider leading-tight m-[0_16px] ml-0 outline-none p-[8px_0] uppercase'>
            Prices
          </button>
          <button className='nav-button cursor-pointer text-sm tracking-wider leading-tight m-[0_16px] ml-0 outline-none p-[8px_0] uppercase'>
            Reviews
          </button>
          <button className='nav-button cursor-pointer text-sm tracking-wider leading-tight m-[0_16px] ml-0 outline-none p-[8px_0] uppercase'>
            Specs
          </button>
        </div>
      </div>
    </nav>
  );
};
