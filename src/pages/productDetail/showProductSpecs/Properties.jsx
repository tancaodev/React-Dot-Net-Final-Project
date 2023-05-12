import React from 'react';

export const Properties = (props) => {
  console.log(props.percent);
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
          <p className='text-sm tracking-[.2px] m-[0_0_2px]'>{props.name}</p>
          <div className='bg-[#bebebe] rounded-lg h-2 relative w-[100%]'>
            {props.name !== 'Unknown' ? (
              <div className={`block rounded-lg absolute h-2 bg-gradient-to-r from-[#3c59fc] to-[#7600e0] w-[${ props.percent }%]`}></div>
              // <div className={`block rounded-lg absolute h-2 bg-gradient-to-r from-[#3c59fc] to-[#7600e0] w-[30%]`}></div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </div>

      <div className='block text-sm h-[40px] overflow-hidden p-[8px_16px] relative'>
        {props.caption}
      </div>
    </div>
  );
};
