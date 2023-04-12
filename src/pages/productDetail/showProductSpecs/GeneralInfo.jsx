import React from 'react';
import { Properties } from './Properties';
import { BsInfoCircle } from 'react-icons/bs';

export const GeneralInfo = ({ product }) => {
  return (
    <div className='block box-border p-[64px_0_32px]'>
      <div className='block m-auto max-w-[1170px] relative w-[calc(100%-152px)]'>
        <h2
          className='flex text-3xl m-[0_0_40px] relative break-words
        after:bg-black after:bottom-[-8px] after:h-[1px] after:left-0 after:absolute after:w-[40px] after:content-[""]'
        >
          <span className='mr-2'>
            <BsInfoCircle size={24} className='mt-1' />
          </span>
          General Info
        </h2>

        <div className='flex flex-wrap h-[80%]'>
          <Properties type='type' name='Desktop' />
          <Properties type='cpu socket' name={product.cpuSocket} />
          <Properties type='thermal design power (TDP)' name={product.tdp} />
          <Properties type='semiconductor size' name={product.semiconductorSize} />
          <Properties type='cpu temperature' name={product.cpuTemp} />
          <Properties type='PCI Express (PCIE) Version' name={product.pci} />
        </div>
      </div>
    </div>
  );
};
