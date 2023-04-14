import React from 'react';
import { BsLaptop } from 'react-icons/bs';

export const AddLaptop = () => {
  return (
    <div className='max-h-full block box-border bg-slate-100/70'>
      <div className='m-auto w-[90%]'>
        <div className='flex'>
          <span>
            <BsLaptop size={40} className='mr-2' />
          </span>
          <h1 className='text-4xl'>CREATE LAPTOPS</h1>
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
              CPU ID
            </label>
            <div className='block w-[80%] border border-gray-300 rounded-lg bg-gray-50'>
              <select
                name=''
                id=''
                className='block w-[100%] m-auto p-2 border rounded-lg '
              >
                <option value='027b46bd-fbcc-4014-9de1-8db3ae9c4d06'>
                  Back_End_Dot_Net.Models.Chipset
                </option>
                <option value='05641cc5-74fa-49c2-9bd3-abceb17d53c9'>
                  Back_End_Dot_Net.Models.Chipset
                </option>
                <option value='9b750167-d333-4fde-9a0a-d51a6e94b637'>
                  Back_End_Dot_Net.Models.Chipset
                </option>
              </select>
            </div>
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
              Thickness
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
              RAM Speed
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
};
