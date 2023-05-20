import React from 'react';
import { GeneralInfo } from './showProductSpecs/GeneralInfo';
import { Performance } from './showProductSpecs/Performance';
import { Memory } from './showProductSpecs/Memory';
import { Features } from './showProductSpecs/Features';
import { Design } from './showProductSpecs/Design';
import { Display } from './showProductSpecs/Display';
import { Cameras } from './showProductSpecs/Cameras';
import { Battery } from './showProductSpecs/Battery';

export const ProductSpecs = ({ product, type }) => {
  const productType = () => {
    if (type === 'cpus') {
      return (
        <section id='specs' className='relative block pt-10'>
          <GeneralInfo product={product} />
          <Performance product={product} />
          <Memory product={product} />
          <Features product={product}/>
        </section>
      );
    } else if (type === 'smartphones') {
      return (
        <section id='specs' className='relative block pt-10'>
          <Design product={product} />
          <Display product={product} />
          <Memory product={product} type={type}/>
          <Performance product={product}/>
          <Cameras product={product}/>
          <Battery product={product}/>
          <Features product={product} background={' '}/>
        </section>
      );
    } else if (type === 'laptops') {
      return (
        <section id='specs' className='relative block pt-10'>
          <Design product={product} type={type}/>
          <Display product={product} />
          <Memory product={product} type={type}/>
          <Performance product={product}/>
          <Battery product={product} type={type} background={' '}/>
          <Features product={product}/>
        </section>
      );
    }
  };
  return <div>{productType()}</div>;
};
