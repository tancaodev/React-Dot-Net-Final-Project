import React from 'react';
import { PropertiesCompare } from './PropertiesCompare';

import { BsInfoCircle } from 'react-icons/bs';

export const GeneralInfoCompare = ({ product, product2 }) => {
  
  const math = (value, max) => {
  return ((value / max) * 100).toFixed(0)
  };

  let tdp = 115
  if (product.type === 'Desktop') tdp = 150
  else if (product.type === 'Server') tdp = 280  
  
  if (product2 === 'undefined') {
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
            <PropertiesCompare type='type' name={product.type} />
            <PropertiesCompare type='cpu socket' name={product.cpuSocket} />
            <PropertiesCompare 
              type='thermal design power (TDP)' 
              name={`${product.tdp}W`} 
              percent={math(product.tdp, tdp)} 
  
  
              caption='The maximum amount of power the cooling system needs to dissipate.'
            />
            <PropertiesCompare
              type='semiconductor size'
              name={`${product.semiconductorSize}nm`} 
              percent={math(product.semiconductorSize === 14 ? product.semiconductorSize-9 : product.semiconductorSize, 14)}
  
             
              caption='Small semiconductors offer higher performance with less power.'
            />
            <PropertiesCompare 
              type='cpu temperature' 
              name={`${product.cpuTemp}°C`} 
              percent={math(product.cpuTemp, 105)} 

              caption='CPU overheating can cause issues like random resets.'
            />
            <PropertiesCompare 
              type='PCI Express (PCIE) Version' 
              name={`${product.pci}`} 
              percent={math(product.pci, 5)}
  
              caption='A standard interface for high-speed connection of components to a motherboard.'
            />
          </div>
        </div>
      </div>
    
    );
  }
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
          <PropertiesCompare type='type' name={product.type} name2={product2.type}/>
          <PropertiesCompare type='cpu socket' name={product.cpuSocket} name2={product2.cpuSocket}/>
          <PropertiesCompare 
            type='thermal design power (TDP)' 
            name={`${product.tdp}W`} 
            percent={math(product.tdp, tdp)} 

            name2={`${product2.tdp}W`} 
            percent2={math(product2.tdp, tdp)} 

            caption='The maximum amount of power the cooling system needs to dissipate.'
          />
          <PropertiesCompare
            type='semiconductor size'
            name={`${product.semiconductorSize}nm`} 
            percent={math(product.semiconductorSize === 14 ? product.semiconductorSize-9 : product.semiconductorSize, 14)}

            name2={`${product2.semiconductorSize}nm`} 
            percent2={math(product2.semiconductorSize === 14 ? product2.semiconductorSize-9 : product2.semiconductorSize, 14)}
            caption='Small semiconductors offer higher performance with less power.'
          />
          <PropertiesCompare 
            type='cpu temperature' 
            name={`${product.cpuTemp}°C`} 
            percent={math(product.cpuTemp, 105)} 

            name2={`${product2.cpuTemp}°C`} 
            percent2={math(product2.cpuTemp, 105)} 
            caption='CPU overheating can cause issues like random resets.'
          />
          <PropertiesCompare 
            type='PCI Express (PCIE) Version' 
            name={`${product.pci}`} 
            percent={math(product.pci, 5)}

            name2={`${product2.pci}`} 
            percent2={math(product2.pci, 5)}
            caption='A standard interface for high-speed connection of components to a motherboard.'
          />
        </div>
      </div>
    </div>
  
  );
};