import React from 'react';
import { Properties } from './Properties';
import { CgPerformance } from 'react-icons/cg';

export const Performance = (props) => {
  return (
    <div className='block box-border p-[64px_0_32px] bg-slate-50'>
      <div className='block m-auto max-w-[1170px] relative w-[calc(100%-152px)]'>
        <h2
          className='flex text-3xl m-[0_0_40px] relative break-words
        after:bg-black after:bottom-[-8px] after:h-[1px] after:left-0 after:absolute after:w-[40px] after:content-[""]'
        >
          <span className='mr-2'>
            <CgPerformance size={24} className='mt-1'/>
          </span> 
          Performance
        </h2>

        <div className='flex flex-wrap h-[80%]'>
          <Properties type='type' name='Desktop' caption='The market that the CPU is designed for'/>
          <Properties type='cpu socket'/>
          <Properties type='thermal design power (TDP)'/>
          <Properties type='semiconductor size'/>
          <Properties type='cpu temperature'/>
        </div>
      </div>
    </div>
  );
};