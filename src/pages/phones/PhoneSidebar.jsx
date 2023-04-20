import React from 'react';

import { IoIosArrowDropright, IoIosBatteryCharging } from 'react-icons/io';
import { SlScreenSmartphone } from 'react-icons/sl';
import { AiOutlinePicture } from 'react-icons/ai';
import { RiCameraLensLine } from 'react-icons/ri';
import { CgPerformance } from 'react-icons/cg';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export const PhoneSidebar = () => {
  return (
    <div className='block overflow-y-scroll h-[600px] sticky top-20 z-0 scrollbar'>
      <h3 className='block font-bold'>FILTERS</h3>
      <ul className='block'>
        <li className='list-item'>
          <p className='flex'>
            <span className='pr-2'>
              <CgPerformance size={20} className='mt-[2px]' />
            </span>
            <span className='text-lg font-semibold'>Performance</span>
          </p>
          <ul className='block'>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>CPU Speed Base</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>CPU Speed Boost</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>RAM</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>RAM Speed</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>In Storage</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>Performance Features</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
          </ul>
        </li>

        <li className='list-item'>
          <p className='flex'>
            <span className='pr-2'>
              <SlScreenSmartphone size={20} className='mt-[2px]' />
            </span>
            <span className='text-lg font-semibold'>Design</span>
          </p>
          <ul className='block'>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>Weight</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>Height</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>Width</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>Design Features</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
          </ul>
        </li>

        <li className='list-item'>
          <p className='flex'>
            <span className='pr-2'>
              <AiOutlinePicture size={20} className='mt-[2px]' />
            </span>
            <span className='text-lg font-semibold'>Display</span>
          </p>
          <ul className='block'>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between '>
                <span className='w-[90%]'>Screen Size</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>Resolution</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>Screen Hz</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>Nits</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>PPI</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>Screen Features</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
          </ul>
        </li>

        <li className='list-item'>
          <p className='flex'>
            <span className='pr-2'>
              <RiCameraLensLine size={20} className='mt-[2px]' />
            </span>
            <span className='text-lg font-semibold'>Cameras</span>
          </p>
          <ul className='block'>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>Main Camera MP</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>Front Camera MP</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
          </ul>
        </li>

        <li className='list-item'>
          <p className='flex'>
            <span className='pr-2'>
              <IoIosBatteryCharging size={20} className='mt-[2px]' />
            </span>
            <span className='text-lg font-semibold'>Battery</span>
          </p>
          <ul className='block'>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between '>
                <span className='w-[90%]'>Battery Power</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>Charging</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>Mag Safe</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
          </ul>
        </li>

        <li className='list-item'>
          <p className='flex'>
            <span className='pr-2'>
              <AiOutlinePlusCircle size={20} className='mt-[2px]' />
            </span>
            <span className='text-lg font-semibold'>Features</span>
          </p>
          {/* <ul className='block'>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between '>
                <span className='w-[90%]'>Weight</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between bg-green-200'>
                <span className='w-[90%]'>Width</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
              <div className='block p-[0_5px_9px]'>
                <div className='block p-[10px_10px_10px_25px]'>
                  <div className='block box-border rounded-md h-[14px] p-[5px_0] relative w-[100%]'></div>
                  <input
                    type='range'
                    value='50'
                    className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'
                  />
                </div>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0]'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between bg-green-200'>
                <span className='w-[90%]'>Height</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0]'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between bg-green-200'>
                <span className='w-[90%]'>Weight</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
          </ul> */}
        </li>
      </ul>
    </div>
  );
};
