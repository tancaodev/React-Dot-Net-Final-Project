import React from 'react';
import { GeneralInfo } from './showProductSpecs/GeneralInfo';
import { Performance } from './showProductSpecs/Performance';
import { Memory } from './showProductSpecs/Memory';
import { Features } from './showProductSpecs/Features';
import { Design } from './showProductSpecs/Design';
import { Display } from './showProductSpecs/Display';
import { Cameras } from './showProductSpecs/Cameras';

export const ProductSpecs = ({ product, type }) => {
  const productType = () => {
    if (type === 'cpu') {
      return (
        <section id='specs' className='relative block pt-10'>
          <GeneralInfo product={product} />
          <Performance product={product} />
          <Memory product={product} />
          <Features product={product} />
        </section>
      );
    } else if (type === 'phone') {
      return (
        <section id='specs' className='relative block pt-10'>
          <Design product={product} />
          <Display product={product} />
          <Memory product={product}/>
          <Performance product={product}/>
          <Cameras product={product}/>
          <Features product={product}/>
        </section>
      );
    } else if (type === 'laptop') {
      return (
        <section id='specs' className='relative block pt-10'>
          <Design product={product} />
          <Display product={product} />
          <Memory product={product}/>
          <Performance product={product}/>
          <Cameras product={product}/>
          <Features product={product}/>
        </section>
      );
    }
  };
  return <div>{productType()}</div>;
};
