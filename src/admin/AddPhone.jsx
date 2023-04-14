import React from 'react'
import { BsPhone } from 'react-icons/bs';

export const AddPhone = () => {
  return (
    <div className='max-h-full block box-border bg-slate-100/70'>
      <div className='m-auto w-[90%]'>
        <div className='flex'>
          <span>
            <BsPhone size={40} className='mr-2' />
          </span>
          <h1 className='text-4xl'>CREATE PHONES</h1>
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
              Price
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Image
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Description
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Manufacture
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              CPU Name
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>
          
          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              CPU Type
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Base CPU Speed
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Boost CPU Speed
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              RAM
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              RAM Speed
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Internal Storage
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Screen Size
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Screen Resolution
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Refresh Rate
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Display Brightness
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Pixels Per Inch
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Weight
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Height
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Width
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Main Camera Megapixels
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Front Camera Megapixels
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Battery Power
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Charging Speed
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Mag Safe
            </label>
            <div className='block w-[80%]'>
              <input type='checkbox' className='w-8 h-8'/>
            </div>
          </div>

          <div className='flex justify-end mb-4'>
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
}
