import React from 'react';

import { PropertiesCompare } from './PropertiesCompare';

import { HiOutlineChip } from 'react-icons/hi';

export const MemoryCompare = ({ product, product2, type }) => {
  const math = (value, max) => {
    return ((value / max) * 100).toFixed(0)
  };

  let ramVersion = 4
  if (product.ramVersion === 'DDR5') ramVersion = 5
  else if (product.ramVersion === 'DDR3') ramVersion = 3

  let ramVersion2 = 4
  if (product2.ramVersion === 'DDR5') ramVersion2 = 5
  else if (product2.ramVersion === 'DDR3') ramVersion2 = 3

  const memoryComponent = () => {
    if (type === 'phone' || type === 'laptop') {
      return (        
        <div className='flex flex-wrap h-[80%]'>
          <PropertiesCompare 
						type='RAM' 
						name={`${product.ram}GB`} 
						percent={math(product.ram, 18)}

            name2={`${product2.ram}GB`} 
						percent2={math(product2.ram, 18)}

            caption='Memory used to store working data currently in use.'
					/>
          <PropertiesCompare
            type='ram speed'
						name={`${product.ramSpeed}MGHz`} 
            percent={math(product.ramSpeed, 8533)}

            name2={`${product2.ramSpeed}MGHz`} 
            percent2={math(product2.ramSpeed, 8533)}
            caption='It can support faster memory, which will give quicker system performance.'
          />
          <PropertiesCompare 
            type='Storage' 
						name={`${product.inStorage}GB`} 
            percent={math(product.inStorage, 1024)}

            name2={`${product2.inStorage}GB`} 
            percent2={math(product2.inStorage, 1024)}

            caption='Large amount of internal storage, you can save more files and apps on your device.'
          />
        </div>
      );
    }
    else {
      return (        
        <div className='flex flex-wrap h-[80%]'>
          <PropertiesCompare
            type='ram speed'
						name={`${product.ramSpeed}MGHz`} 
            percent={math(product.ramSpeed, 6400)}

            name2={`${product2.ramSpeed}MGHz`} 
            percent2={math(product2.ramSpeed, 6400)}
            caption='It can support faster memory, which will give quicker system performance.'
          />
          <PropertiesCompare 
            type='DDR memory version' 
            name={product.ramVersion} 
            percent={math(ramVersion, 5)}

            name2={product2.ramVersion} 
            percent2={math(ramVersion2, 5)}

            caption='Newer versions of DDR memory support higher maximum speeds.'
          />
          <PropertiesCompare 
            type='memory channels' 
            name={product.memoryChannels} 
            percent={math(product.memoryChannels, 8)}

            name2={product2.memoryChannels} 
            percent2={math(product2.memoryChannels, 8)}
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
