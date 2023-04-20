import { BsInfoCircle } from 'react-icons/bs';
import { IoIosArrowDropright } from 'react-icons/io';
import { CgPerformance } from 'react-icons/cg';
import { HiOutlineChip } from 'react-icons/hi';
import { AiOutlinePlusCircle } from 'react-icons/ai';

export const CpuFilterSidebar = () => {
  return (
    <div className='block overflow-y-scroll h-[600px] sticky top-20 z-0 scrollbar'>
      <h3 className='block font-bold'>FILTERS</h3>
      <ul className='block'>
        <li className='list-item'>
          <p className='flex'>
            <span className='pr-2'>
              <BsInfoCircle size={20} className='mt-[2px]' />
            </span>
            <span className='text-lg font-semibold'>General Info</span>
          </p>
          <ul className='block'>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between '>
                <span className='w-[90%]'>Weight</span>
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
              {/* <div className='block p-[0_5px_9px]'>
                <div className='block p-[10px_10px_10px_25px]'>
                  <div className='block box-border rounded-md h-[14px] p-[5px_0] relative w-[100%]'>
                  </div>
                    <input type="range" value='50' className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'/>
                </div>
              </div> */}
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
                <span className='w-[90%]'>Weight</span>
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
              <CgPerformance size={20} className='mt-[2px]' />
            </span>
            <span className='text-lg font-semibold'>Performance</span>
          </p>
          <ul className='block'>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between '>
                <span className='w-[90%]'>CPU Speed</span>
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
                <span className='w-[90%]'>CPU Threads</span>
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
              <HiOutlineChip size={20} className='mt-[2px]' />
            </span>
            <span className='text-lg font-semibold'>Memory</span>
          </p>
          <ul className='block'>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between '>
                <span className='w-[90%]'>RAM Speed</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>DDR Memory Version</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>Memory Channels</span>
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
          <ul className='block'>
            {/* <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between '>
                <span className='w-[90%]'>RAM Speed</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>DDR Memory Version</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li>
            <li className='m-[0_4px] box-border rounded-lg duration-150 ease-linear delay-[0] bg-gray-100 border hover:bg-slate-200'>
              <div className='flex relative p-[9px_5px_9px_15px] justify-between'>
                <span className='w-[90%]'>Memory Channels</span>
                <span className='absolute right-1'>
                  <IoIosArrowDropright size={20} />
                </span>
              </div>
            </li> */}
          </ul>
        </li>
      </ul>
    </div>
  );
};
