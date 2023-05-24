import React from 'react';

import { CgPerformance } from 'react-icons/cg';

import { PropertiesCompare } from './PropertiesCompare';
import { PropertieFeatureCompare } from './PropertieFeatureCompare';
export const PerformanceCompare = ({ product, product2 }) => {
  const math = (value, max) => {
    return ((value / max) * 100).toFixed(0);
  };

  const baseCPUSpeed = 5;
  const boostCPUSpeed = product.type === 'Laptop' ? 5 : 6;

  const cpuThread = product.type === 'Server' ? 128 : 32;

  const compareTwoArr = (arr1, arr2) => {
    const result = [];

    if (arr1 === null || arr2 === null) {
      if (arr1) {
        for (let i = 0; i < arr1.length; i++) {
          const obj = {};

          if (i < arr1.length) {
            obj.product1 = arr1[i];
          }

          if (i < arr1.length) {
            obj.product2 = '';
          }

          result.push(obj);
        }
      }
      if (arr2) {
        for (let i = 0; i < arr2.length; i++) {
          const obj = {};

          if (i < arr2.length) {
            obj.product2 = arr2[i];
          }

          if (i < arr2.length) {
            obj.product1 = '';
          }

          result.push(obj);
        }
      }
    } else {
      for (let i = 0; i < Math.max(arr1.length, arr2.length); i++) {
        const obj = {};

        if (i < arr1.length) {
          obj.product1 = arr1[i];
        } else {
          obj.product1 = '';
        }

        if (i < arr2.length) {
          obj.product2 = arr2[i];
        } else {
          obj.product2 = '';
        }

        result.push(obj);
      }
    }
    return result;
  };

  let compareFeature = compareTwoArr(product.performanceFeatures, product2.performanceFeatures)

  return (
    <div className='block box-border p-[64px_0_32px] bg-slate-50'>
      <div className='block m-auto max-w-[1170px] relative w-[calc(100%-152px)]'>
        <h2
          className='flex text-3xl m-[0_0_40px] relative break-words
        after:bg-black after:bottom-[-8px] after:h-[1px] after:left-0 after:absolute after:w-[40px] after:content-[""]'
        >
          <span className='mr-2'>
            <CgPerformance size={24} className='mt-1' />
          </span>
          Performance
        </h2>

        <div className='flex flex-wrap h-[80%]'>
          <PropertiesCompare
            type='Cpu speed'
            name={`${product.cpuSpeedBase}GHz`}
            percent={math(product.cpuSpeedBase, baseCPUSpeed)}
            name2={`${product2.cpuSpeedBase}GHz`}
            percent2={math(product2.cpuSpeedBase, baseCPUSpeed)}
            caption='The market that the CPU is designed for'
          />
          <PropertiesCompare
            type='cpu speed boost'
            name={`${product.cpuSpeedBoost}GHz`}
            percent={math(product.cpuSpeedBoost, boostCPUSpeed)}
            name2={`${product2.cpuSpeedBoost}GHz`}
            percent2={math(product2.cpuSpeedBoost, boostCPUSpeed)}
            caption='The CPU can boost to a higher clock speed to increase performance'
          />
          {product.type !== undefined && (
            <PropertiesCompare
              type='cpu threads'
              name={`${product.cpuThread}`}
              percent={math(product.cpuThread, cpuThread)}
              name2={`${product2.cpuThread}`}
              percent2={math(product2.cpuThread, cpuThread)}
              caption='More threads result in faster performance and better multitasking.'
            />
          )}

          {product.performanceFeatures ? (
            product.performanceFeatures.map((feature, index) => {
              return (
                <PropertieFeatureCompare
                  key={index}
                  type={feature}
                  product1={product.name}
                  product2={product2.name}
                  feature={compareFeature[index]}
                  />
              );
            })
          ) : product2.performanceFeatures ? (
            product2.performanceFeatures.map((feature, index) => {
              return (
                <PropertieFeatureCompare
                  key={index}
                  type={feature}
                  product1={product.name}
                  product2={product2.name}
                  feature={compareFeature[index]}
                />
              );
            })
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
