import React from 'react';

import { PropertiesCompare } from './PropertiesCompare';

import { AiOutlinePicture } from 'react-icons/ai';

export const DisplayCompare = ({ product, product2 }) => {
  const math = (value, max) => {
    return ((value / max) * 100).toFixed(0);
  };

  return (
    <div className='block box-border p-[64px_0_32px] bg-slate-50'>
      <div className='block m-auto max-w-[1170px] relative w-[calc(100%-152px)]'>
        <h2
          className='flex text-3xl m-[0_0_40px] relative break-words
        after:bg-black after:bottom-[-8px] after:h-[1px] after:left-0 after:absolute after:w-[40px] after:content-[""]'
        >
          <span className='mr-2'>
            <AiOutlinePicture size={24} className='mt-1' />
          </span>
          Display
        </h2>

        <div className='flex flex-wrap h-[80%]'>
          <PropertiesCompare
            type='Screen Size'
            name={`${product.screenSize}''`}
            percent={math(product.screenSize, 11)}

            name2={`${product2.screenSize}''`}
            percent2={math(product2.screenSize, 11)}
            caption='The bigger the screen size is, the better the user experience.'
          />
          <PropertiesCompare
            type='Resolution'
            name={`${product.resolution}`}
            percent={70}

            name2={`${product2.resolution}`}
            percent2={70}
            caption='Representing the maximum amount of pixels that can be shown on the screen.'
          />
          <PropertiesCompare
            type='Refresh Rate'
            name={`${product.screenHz}Hz`}
            percent={math(product.screenHz, 240)}
            
            name2={`${product2.screenHz}Hz`}
            percent2={math(product2.screenHz, 240)}
            caption='The frequency at which the screen is refreshed.'
          />
          <PropertiesCompare
            type='Brightness'
            name={`${product.nits} nits`}
            percent={math(product.nits, 2000)}

            name2={`${product2.nits} nits`}
            percent2={math(product2.nits, 2000)}
            caption='Brighter displays ensure a screen contents are easy to read, even in sunny conditions.'
          />
        </div>
      </div>
    </div>
  );
};
