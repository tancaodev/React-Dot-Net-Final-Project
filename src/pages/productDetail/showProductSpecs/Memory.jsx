import React from 'react';

import { Properties } from './Properties';

import { HiOutlineChip } from 'react-icons/hi';

export const Memory = ({ product, type }) => {
  const math = (value, max) => {
    return ((value / max) * 100).toFixed(0)
  };

  let ramVersion = 4
  if (product.ramVersion === 'DDR5') ramVersion = 5
  else if (product.ramVersion === 'DDR3') ramVersion = 3

  const memoryComponent = () => {
    if (type === 'smartphones' || type === 'laptops') {
      return (        
        <div className='flex flex-wrap h-[80%]'>
          <Properties 
						type='RAM' 
						name={`${product.ram}GB`} 
						percent={math(product.ram, 18)}
            caption='Memory used to store working data currently in use.'
					/>
          <Properties
            type='ram speed'
						name={`${product.ramSpeed}MGHz`} 
            percent={math(product.ramSpeed, 8533)}
            caption='It can support faster memory, which will give quicker system performance.'
          />
          <Properties 
            type='Storage' 
						name={`${product.inStorage}GB`} 
            percent={math(product.inStorage, 1024)}
            caption='Large amount of internal storage, you can save more files and apps on your device.'
          />
        </div>
      );
    }
    else {
      return (        
        <div className='flex flex-wrap h-[80%]'>
          <Properties
            type='ram speed'
						name={`${product.ramSpeed}MGHz`} 
            percent={math(product.ramSpeed, 6400)}
            caption='It can support faster memory, which will give quicker system performance.'
          />
          <Properties 
            type='DDR memory version' 
            name={product.ramVersion} 
            percent={math(ramVersion, 5)}
            caption='Newer versions of DDR memory support higher maximum speeds.'
          />
          <Properties 
            type='memory channels' 
            name={product.memoryChannels} 
            percent={math(product.memoryChannels, 8)}
            caption='More memory channels equal faster data transfer between CPU and memory.'            
          />
        </div>
      );
    }
  }

  return (
    <div className='block box-border p-[64px_0_32px]'>
      <div className='block m-auto max-w-[1170px] relative w-[calc(100%-152px)]'>
        <h2
          className='flex text-3xl m-[0_0_40px] relative break-words
        after:bg-black after:bottom-[-8px] after:h-[1px] after:left-0 after:absolute after:w-[40px] after:content-[""]'
        >
          <span className='mr-2'>
            <HiOutlineChip size={24} className='mt-1' />
          </span>
          Memory
        </h2>

        {memoryComponent()}
      </div>
    </div>
  );
};
