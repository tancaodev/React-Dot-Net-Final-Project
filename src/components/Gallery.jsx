import React from 'react';

export const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
      <h2 className='text-center text-gray-700 p-4'>Most popular phone</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
            alt='/'
          />
          <p className='text-center'>S22 Ultrawide mtf</p>
        </div>
        <div>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1568378711447-f5eef04d85b5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80'
            alt='/'
          />
        </div>
        <div>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1609252925148-b0f1b515e111?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=770&q=80'
            alt='/'
          />
        </div>
        <div>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1628744404730-5e143358539b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
            alt='/'
          />
        </div>
        <div>
          <img
            className='w-full h-full object-cover'
            src='https://images.unsplash.com/photo-1597762470488-3877b1f538c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80'
            alt='/'
          />
        </div>
      </div>
    </div>
  );
}

