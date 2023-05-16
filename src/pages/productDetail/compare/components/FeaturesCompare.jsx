import React from 'react'

import { PropertiesCompare } from './PropertiesCompare';

import { AiOutlinePlusCircle } from 'react-icons/ai';

export const FeaturesCompare = ({ product, background }) => {

  return (
    <div className={`block box-border p-[64px_0_32px] ${background ? background : 'bg-slate-50'}`}>
      <div className='block m-auto max-w-[1170px] relative w-[calc(100%-152px)]'>
        <h2
          className='flex text-3xl m-[0_0_40px] relative break-words
        after:bg-black after:bottom-[-8px] after:h-[1px] after:left-0 after:absolute after:w-[40px] after:content-[""]'
        >
          <span className='mr-2'>
            <AiOutlinePlusCircle size={24} className='mt-1'/>
          </span> 
          Features
        </h2>

        <div className='flex flex-wrap h-[80%]'>
          <PropertiesCompare type='type' name='Desktop' caption='The market that the CPU is designed for'/>
          <PropertiesCompare type='cpu socket'/>
          <PropertiesCompare type='thermal design power (TDP)'/>
          <PropertiesCompare type='semiconductor size'/>
          <PropertiesCompare type='cpu temperature'/>
        </div>
      </div>
    </div>
  );
}
