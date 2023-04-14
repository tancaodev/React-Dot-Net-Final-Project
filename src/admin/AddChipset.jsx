import React from 'react';
import { BiChip } from 'react-icons/bi';

export const AddChipset = () => {
  return (
    <div className='max-h-full block box-border bg-slate-100/70'>
      <div className='m-auto w-[90%]'>
        <div className='flex'>
          <span>
            <BiChip size={40} className='mr-2' />
          </span>
          <h1 className='text-4xl'>CREATE CHIPSETS</h1>
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
              Type
            </label>
            <div className='block w-[80%] border border-gray-300 rounded-lg bg-gray-50'>
              <select
                name=''
                id=''
                className='block w-[100%] m-auto p-2 border rounded-lg '
              >
                <option selected='selected' value='Laptop'>
                  Laptop
                </option>
                <option value='Desktop'>Desktop</option>
                <option value='Phone'>Phone</option>
                <option value='All'>All</option>
              </select>
            </div>
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              CPU Socket
            </label>
            <div className='block w-[80%] border border-gray-300 rounded-lg bg-gray-50'>
              <select
                name=''
                id=''
                className='block w-[100%] m-auto p-2 border rounded-lg '
              >
                <option selected='selected' value='LGA1150'>
                  LGA1150
                </option>
                <option value='LGA1155'>LGA1155</option>
                <option value='AM5'>AM5</option>
                <option value='AM4'>AM4</option>
                <option value='TR4'>TR4</option>
                <option value='LGA1151'>LGA1151</option>
                <option value='LGA1200'>LGA1200</option>
                <option value='LGA1700'>LGA1700</option>
                <option value='LGA2066'>LGA2066</option>
                <option value='sTRX4'>sTRX4</option>
                <option value='FCBGA1744'>FCBGA1744</option>
                <option value='FP6'>FP6</option>
                <option value='BGA'>BGA</option>
              </select>
            </div>
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              CPU Temperature
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Thermal Design Power
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
              CPU Thread
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Semiconductor Size
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              PCIe
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              Memory Channels
            </label>
            <input
              type='text'
              class='block w-[80%] m-auto p-2 border border-gray-300 rounded-lg bg-gray-50'
            />
          </div>

          <div className='flex mb-4'>
            <label class='block flex-[10%] text-xl font-medium text-gray-900'>
              DDR Version
            </label>
            <div className='block w-[80%] border border-gray-300 rounded-lg bg-gray-50'>
              <select
                name=''
                id=''
                className='block w-[100%] m-auto p-2 border rounded-lg '
              >
                <option selected='selected' value='DDR3'>
                  DDR3
                </option>
                <option value='DDR4'>DDR4</option>
                <option value='LPDDR4X'>LPDDR4X</option>
                <option value='DDR5'>DDR5</option>
              </select>
            </div>
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

          <div className='flex justify-end mb-4'>
            <button>Create</button>
          </div>
        </form>
      </div>
    </div>
  );
};
