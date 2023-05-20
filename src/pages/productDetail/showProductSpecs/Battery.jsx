import React from 'react'

import { Properties } from './Properties';

import { BsBatteryFull } from 'react-icons/bs';

export const Battery = ({ product, type, background }) => {
  const math = (value, max) => {
    return ((value / max) * 100).toFixed(0)
  };

  const productType = type === 'laptops' ? 'Wh' : 'mAh';

  const valueType = type === 'laptops' ? 99 : 13600;

  return (
    <div className={`block box-border p-[64px_0_32px] ${background ? background : 'bg-slate-50'}`}>
      <div className='block m-auto max-w-[1170px] relative w-[calc(100%-152px)]'>
        <h2
          className='flex text-3xl m-[0_0_40px] relative break-words
        after:bg-black after:bottom-[-8px] after:h-[1px] after:left-0 after:absolute after:w-[40px] after:content-[""]'
        >
          <span className='mr-2'>
            <BsBatteryFull size={24} className='mt-1'/>
          </span> 
          Battery
        </h2>

        <div className='flex flex-wrap h-[80%]'>
          <Properties 
            type='type' 
						name={`${product.batteryPower} ${productType}`} 
						percent={math(product.batteryPower, valueType)}
            caption='Represents the amount of electrical energy that a battery can store.'/>
        </div>
      </div>
    </div>
  );
}
