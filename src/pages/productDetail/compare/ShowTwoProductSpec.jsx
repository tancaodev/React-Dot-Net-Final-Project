import React from 'react'
import { GeneralInfoCompare } from './components/GeneralInfoCompare';
import { PerformanceCompare } from './components/PerformanceCompare';
import { MemoryCompare } from './components/MemoryCompare';
import { FeaturesCompare } from './components/FeaturesCompare';
import { DesignCompare } from './components/DesignCompare';
import { DisplayCompare } from './components/DisplayCompare';
import { CamerasCompare } from './components/CamerasCompare';
import { BatteryCompare } from './components/BatteryCompare';

export const ShowTwoProductSpec = ({ product1, product2, type }) => {
    const productType = () => {
        if (type === 'cpu') {
          return (
            <section id='specs' className='relative block pt-10'>
              <GeneralInfoCompare product={product1} product2={product2 ? product2 : {}}/>
              <PerformanceCompare product={product1} product2={product2 ? product2 : {}} />
              <MemoryCompare product={product1} product2={product2 ? product2 : {}} />
              <FeaturesCompare product={product1} product2={product2 ? product2 : {}} />
            </section>
          );
        } else if (type === 'phone') {
          return (
            <section id='specs' className='relative block pt-10'>
              <DesignCompare product={product1} product2={product2 ? product2 : {}} type={type}/>
              <DisplayCompare product={product1} product2={product2 ? product2 : {}}/>
              <MemoryCompare product={product1} type={type} product2={product2 ? product2 : {}}/>
              <PerformanceCompare product={product1} product2={product2 ? product2 : {}}/>
              {/* <CamerasCompare product={product1} product2={product2 ? product2 : {}}/> */}
              <BatteryCompare product={product1} product2={product2 ? product2 : {}}/>
              <FeaturesCompare product={product1} background={' '} product2={product2 ? product2 : {}}/>
            </section>
          );
        } else if (type === 'laptop') {
          return (
            <section id='specs' className='relative block pt-10'>
              <DesignCompare product={product1} product2={product2 ? product2 : {}} type={type}/>
              <DisplayCompare product={product1} product2={product2 ? product2 : {}}/>
              <MemoryCompare product={product1} product2={product2 ? product2 : {}} type={type}/>
              <PerformanceCompare product={product1} product2={product2 ? product2 : {}}/>
              <BatteryCompare product={product1} product2={product2 ? product2 : {}} background={' '}/>
              <FeaturesCompare product={product1} product2={product2 ? product2 : {}}/>
            </section>
          );
        }
      };
      return <div>{productType()}</div>;
}
