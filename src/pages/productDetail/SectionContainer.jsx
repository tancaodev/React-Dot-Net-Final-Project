import React from 'react';
import { Link } from 'react-scroll';

export const SectionContainer = () => {
  const addToComparision = () => {

  }
  return (
    <nav className='block h-8 fixed w-[100%] z-[100] shadow-md bg-white'>
      <div className='pl-[10px] block overflow-x-clip overflow-y-hidden box-border h-8 mx-auto max-w-[1190px] relative whitespace-nowrap w-[100%] z-10'>
        <div className='block lg:pl-0'>
          <Link
            activeClass='active'
            spy={true}
            to='overviews'
            className='nav-button cursor-pointer text-sm tracking-wider leading-tight m-[0_16px] ml-0 outline-none p-[8px_0] uppercase'
          >
            Overviews
          </Link>
          <button className='nav-button cursor-pointer text-sm tracking-wider leading-tight m-[0_16px] ml-0 outline-none p-[8px_0] uppercase'>
            Prices
          </button>
          <button className='nav-button cursor-pointer text-sm tracking-wider leading-tight m-[0_16px] ml-0 outline-none p-[8px_0] uppercase'>
            Reviews
          </button>
          <Link
            activeClass='active'
            spy={true}
            to='specs'
            className='nav-button cursor-pointer text-sm tracking-wider leading-tight m-[0_16px] ml-0 outline-none p-[8px_0] uppercase'
          >
            Specs
          </Link>
        </div>

        <div className='absolute right-0 top-0 block'>
          <button className='bg-[#3c59fc] border-none text-white text-xs cursor-pointer h-8 outline-none px-4' onClick={addToComparision}>
            <span>+</span>
            <span>Add to comparision</span>
          </button>
        </div>
      </div>
    </nav>
  );
};
