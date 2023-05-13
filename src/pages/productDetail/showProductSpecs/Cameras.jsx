import React from 'react';

import { Properties } from './Properties';

import { RiCameraLensLine } from 'react-icons/ri';

export const Cameras = ({ product }) => {
  const math = (value, max) => {
    return ((value / max) * 100).toFixed(0)
  };

  const mainCameraProperties = product.mainCameraMP?.map((camera, index) => (
    <Properties
      key={index}
      type={`Main Camera MP ${index+1}`}
      name={`${camera}MP`}
      percent={math(camera, 108)}
      caption='The megapixel count of the main camera.'
    />
  ));

  const mainCameraAmount = product.mainCameraCount >= 2? `${product.mainCameraCount} cameras` : `${product.mainCameraCount} camera`

  return (
    <div className='block box-border p-[64px_0_32px]'>
      <div className='block m-auto max-w-[1170px] relative w-[calc(100%-152px)]'>
        <h2
          className='flex text-3xl m-[0_0_40px] relative break-words
        after:bg-black after:bottom-[-8px] after:h-[1px] after:left-0 after:absolute after:w-[40px] after:content-[""]'
        >
          <span className='mr-2'>
            <RiCameraLensLine size={24} className='mt-1' />
          </span>
          Cameras
        </h2>

        <div className='flex flex-wrap h-[80%]'>
          <Properties 
						type='Main Camera Amount' 
						name={`${mainCameraAmount}`} 
						percent={math(product.mainCameraCount, 6)}
            caption='The amount of main camera this phone have.'
					/>
          {mainCameraProperties}
					<Properties 
						type='Front Camera' 
						name={`${product.frontCameraMP}MP`} 
						percent={math(product.frontCameraMP, 84)}
            caption='A higher megapixel count the more details selfies.'
					/>
        </div>
      </div>
    </div>
  );
};
