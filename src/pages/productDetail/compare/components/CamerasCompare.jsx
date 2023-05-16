import React from 'react';

import { PropertiesCompare } from './PropertiesCompare';

import { RiCameraLensLine } from 'react-icons/ri';

export const CamerasCompare = ({ product, product2 }) => {
  const math = (value, max) => {
    return ((value / max) * 100).toFixed(0)
  };

  let cameras_more = []
  let cameras_less = []

  if (product.mainCameraMP < product2.mainCameraMP) {
    cameras_more = [...product2.mainCameraMP]
    cameras_less = [...product.mainCameraMP]
  }
  else {
    cameras_more = [...product.mainCameraMP]
    cameras_less = [...product2.mainCameraMP]
  }

  // Cắt mảng để có cùng số phần tử
  const cameras_more_slice = cameras_more.slice(0, cameras_less.length);
  const cameras_more_slice_left = cameras_more.slice(cameras_less.length, cameras_more.length);

  const mainCameraProperties = cameras_more.map((camera, index) => (
    <PropertiesCompare
      key={index}
      type={`Main Camera MP ${index+1}`}
      name={`${camera}MP`}
      percent={math(camera, 108)}

      name2={`${camera}MP`}
      percent2={math(camera, 108)}
      caption='The megapixel count of the main camera.'
    />
  ));

  const mainCameraAmount = product.mainCameraCount >= 2? `${product.mainCameraCount} cameras` : `${product.mainCameraCount} camera`

  const mainCameraAmount2 = product2.mainCameraCount >= 2? `${product2.mainCameraCount} cameras` : `${product2.mainCameraCount} camera`

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
          <PropertiesCompare 
						type='Main Camera Amount' 
						name={`${mainCameraAmount}`} 
						percent={math(product.mainCameraCount, 6)}

            name2={`${mainCameraAmount2}`} 
						percent2={math(product2.mainCameraCount, 6)}
            caption='The amount of main camera this phone have.'
					/>
          {mainCameraProperties}

					<PropertiesCompare 
						type='Front Camera' 
						name={`${product.frontCameraMP}MP`} 
						percent={math(product.frontCameraMP, 84)}
            
            name2={`${product2.frontCameraMP}MP`} 
						percent2={math(product2.frontCameraMP, 84)}
            caption='A higher megapixel count the more details selfies.'
					/>
        </div>
      </div>
    </div>
  );
};
