import React from 'react';

export const Booking = () => {
  return (
    <div id='deals' className='max-w-[1140px] m-auto w-full p-4'>
      <form className='lg:flex lg:justify-between w-full items-center'>
        <div className='flex flex-col my-2 py-2'>
          <label>Destination</label>
          <select className='lg:w-[300px] md:w-full border rounded-md p-2'>
            <option value=''>Samsung</option>
            <option value=''>Iphone</option>
            <option value=''>Xiaomi</option>
            <option value=''>Oppo</option>
          </select>
        </div>
        <div className='flex w-full'>
          <div className='flex flex-col w-full lg:max-w-[250x] my-2 py-2'>
            <label>Check in</label>
            <input type='date' className='border rounded-md p-2'/>
          </div>
          <div className='flex flex-col w-full lg:max-w-[250x] my-2 py-2'>
            <label>Check out</label>
            <input type='date' className='border rounded-md p-2'/>
          </div>
        </div>
        <div className='flex flex-col my-2 p-2 w-full'>
          <lable>Search</lable>
          <button className='w-full'>Rate & Availabilities</button>
        </div>
      </form>
    </div>
  );
}

