import React from 'react';

export const PropertieFeatureCompare = (props) => {
  return (
    <div
      className='flex border border-solid border-[#e7e8e7] bg-white rounded-lg box-border 
        cursor-pointer flex-col justify-between mb-4 mr-6 overflow-hidden relative w-[calc(33.33333%_-_24px)]'
    >
      <div className='block flex-grow-[2] p-4'>
        <a
          href='#none'
          className='flex text-sm font-bold tracking-[.7px] m-[0-0_25px] relative uppercase'
        >
          <span>{props.type}</span>
        </a>
        <div className='block mb-2'>
          <div className='flex '>
            <p className='text-red-500 m-[0_0_2px] text-sm mr-2'>X</p>
            <p className='text-sm tracking-[.2px] m-[0_0_2px]'>
              {props.product1}
            </p>
          </div>

          <div className='flex '>
            <p className='text-green-500 m-[0_0_2px] text-sm mr-2'>✔</p>
            <p className='text-sm tracking-[.2px] m-[0_0_2px]'>
              {props.product2}
            </p>
          </div>
        </div>
      </div>

      <div className='block text-sm h-[50px] overflow-hidden p-[0px_16px] relative'>
        {props.caption}
      </div>
    </div>
  );
};
