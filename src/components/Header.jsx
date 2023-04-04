import React from 'react';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    // <header className='fixed top-0 w-[100%] z-[100]'>
    <header>
      <div className='h-[40px] flex items-center justify-between m-auto w-[90%] max-w-[1170px]'>
        <div className='flex items-center w-[100%]'>
          {/* Logo */}
          <div className='block m-auto w-[50%] max-h-[21px] relative self-center'>
            <div className='flex h-[21px]'>
              <span>
                <FaBars size={20} className='mt-[2px] cursor-pointer' />
              </span>
              <Link className='max-h-[21px] text-[17px] text-center'>
                NASUS
              </Link>
            </div>
          </div>

          {/* Search bar */}
          <div
            className='block bg-[#858585] border-[#858585] text-white w-[50%] 
          border-solid rounded-sm h-6 ml-[2em] overflow-hidden relative'
          >
            <div></div>
            <span className='text-sm left-6 abosulute top-1 whitespace-nowrap'>
              Search
            </span>
            <input
              type='text'
              aria-label='Search Input'
              className='border-none cursor-pointer text-sm h-[100%] p-[4px_4px_4px_24px]
            relative w-[100%] -z--1'
            />
          </div>
        </div>
      </div>
    </header>
  );
};
