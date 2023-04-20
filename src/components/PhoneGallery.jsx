import React from 'react';

export const PhoneGallery = (props) => {
  return (
    <div className='max-h-[100dvh] bg-gray-100'>
      <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
        <h2 className='text-center text-gray-700 p-4'>
          Most popular {props.type}
        </h2>
        <div className='grid sm:grid-cols-5 gap-4'>
          <div className='sm:col-span-3 col-span-2 row-span-2 relative'>
            <div className='absolute w-full h-full bg-black/60 text-white text-center cursor-pointer group'>
              <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:underline'>
                Samsung Galaxy Note 20 Ultra
              </p>
            </div>
            <img
              className='w-full h-full object-cover shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]'
              src='https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80'
              alt='/'
            />
          </div>
          <div className='relative'>
            <div className='absolute w-full h-full bg-black/60 text-white text-center cursor-pointer group'>
              <p className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover:underline'>
                Samsung Galaxy Note 20 Ultra
              </p>
            </div>

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
    </div>
  );
};
