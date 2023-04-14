import React from 'react'
import { BsImages } from 'react-icons/bs';

export const AddImage = () => {
  return (
    <div className='max-h-full block box-border bg-slate-100/70'>
      <div className='m-auto w-[90%]'>
        <div className='flex'>
          <span>
            <BsImages size={40} className='mr-2' />
          </span>
          <h1 className='text-4xl'>CREATE IMAGES</h1>
        </div>
        <form action='' className='box-border block mt-8'>
          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              ID
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Name
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Image Link
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Meta
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex justify-end mb-4'>
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
