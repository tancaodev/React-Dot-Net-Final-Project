import React from 'react'

import { PropertiesCompare } from './PropertiesCompare';

import { BsBatteryFull } from 'react-icons/bs';

export const BatteryCompare = ({ product, product2, background }) => {
  console.log(product2);
  const math = (value, max) => {
    return ((value / max) * 100).toFixed(0)
  };

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
          <PropertiesCompare 
            type='type' 
						name={`${product.batteryPower}mAh`} 
						percent={math(product.batteryPower, 13600)}

            name2={`${product2.batteryPower}mAh`} 
						percent2={math(product2.batteryPower, 13600)}
            caption='represents the amount of electrical energy that a battery can store.'/>
        </div>
      </div>
    </div>
  );
}
