import { BsInfoCircle } from 'react-icons/bs';
import { IoIosArrowDropright } from 'react-icons/io';

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
                  <div className='block box-border rounded-md h-[14px] p-[5px_0] relative w-[100%]'>
                  </div>
                    <input type="range" value='50' className='w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700'/>
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
          </ul>
        </li>
      </ul>
    </div>
  );
};
