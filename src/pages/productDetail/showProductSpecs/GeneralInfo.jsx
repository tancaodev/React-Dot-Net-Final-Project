import React from 'react';
import { Properties } from './Properties';
import { BsInfoCircle } from 'react-icons/bs';

export const GeneralInfo = ({ product }) => {
  const math = (value, max) => {
  return ((value / max) * 100).toFixed(0)
  };

  let tdp = 115
  if (product.type === 'Desktop') tdp = 150
  else if (product.type === 'Server') tdp = 280  
  
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
          <Properties type='type' name={product.type}/>
          <Properties type='cpu socket' name={product.cpuSocket} />
          <Properties 
            type='thermal design power (TDP)' 
            name={`${product.tdp}W`} 
            percent={math(product.tdp, tdp)} 
            caption='The maximum amount of power the cooling system needs to dissipate.'
          />
          <Properties
            type='semiconductor size'
            name={`${product.semiconductorSize}nm`} 
            percent={math(product.semiconductorSize === 14 ? product.semiconductorSize-9 : product.semiconductorSize, 14)}
            caption='Small semiconductors offer higher performance with less power.'
          />
          <Properties 
            type='cpu temperature' 
            name={`${product.cpuTemp}°C`} 
            percent={math(product.cpuTemp, 105)} 
            caption='CPU overheating can cause issues like random resets.'
          />
          <Properties 
            type='PCI Express (PCIE) Version' 
            name={`${product.pci}`} 
            percent={math(product.pci, 5)}
            caption='A standard interface for high-speed connection of components to a motherboard.'
          />
        </div>
      </div>
    </div>
  );
};