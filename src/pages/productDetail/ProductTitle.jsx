import React from 'react';

export const ProductTitle = ({ name }) => {
  return (
    <div className='block text-center relative w-[90%] m-[40px_auto_25px]'>
      <h1 className='text-4xl font-medium'>{name} review: specs and price</h1>
    </div>
  );
};
