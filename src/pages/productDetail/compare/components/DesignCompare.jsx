import React from 'react';

import { PropertiesCompare } from './PropertiesCompare';

import { SlScreenSmartphone } from 'react-icons/sl';

export const DesignCompare = ({ product, product2, type }) => {
  const math = (value, max) => {
    return ((value / max) * 100).toFixed(0)
  };

  const productWeight = type === 'laptop'? `${product.weight}kg` : `${product.weight}g`

  const productWeight2 = type === 'laptop'? `${product2.weight}kg` : `${product2.weight}g`
  
  const productWeightLimit = type === 'laptop'? 8.6  : 570

  const productHeightLimit = type === 'laptop'? 380  : 196.8

  const productWidthLimit = type === 'laptop'? 530  : 254

  return (
    <div className='block box-border p-[64px_0_32px]'>
      <div className='block m-auto max-w-[1170px] relative w-[calc(100%-152px)]'>
        <h2
          className='flex text-3xl m-[0_0_40px] relative break-words
        after:bg-black after:bottom-[-8px] after:h-[1px] after:left-0 after:absolute after:w-[40px] after:content-[""]'
        >
          <span className='mr-2'>
            <SlScreenSmartphone size={24} className='mt-1' />
          </span>
          Design
        </h2>

        <div className='flex flex-wrap h-[80%]'>
          <PropertiesCompare 
						type='Weight' 
						name={productWeight} 
						percent={math(product.weight, productWeightLimit)}

            name2={productWeight2} 
						percent2={math(product2.weight, productWeightLimit)}
            caption='The lower the weight the better.'
						/>
					<PropertiesCompare 
						type='Height' 
						name={`${product.height}mm`} 
						percent={math(product.height, productHeightLimit)}

            name2={`${product2.height}mm`} 
						percent2={math(product2.height, productHeightLimit)}
            caption='The vertical dimension of the product.'
						/>
					<PropertiesCompare 
						type='Width' 
						name={`${product.width}mm`} 
						percent={math(product.width, productWidthLimit)}

            name2={`${product2.width}mm`} 
						percent2={math(product2.width, productWidthLimit)}
            caption='The horizontal dimension of the product.'
						/>
					<PropertiesCompare 
						type='Design Features' 
						// name={`${product.weight}g`} 
						// percent={math(product.weight, 570)}
            // caption='The lower the weight the better'
						/>
        </div>
      </div>
    </div>
  );
};
