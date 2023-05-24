import { BsInfoCircle } from 'react-icons/bs';
import { CgPerformance } from 'react-icons/cg';
import { HiOutlineChip } from 'react-icons/hi';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { CollapsibleSlider } from '../../components/sidebar/CollapsibleSlider';
import { CollapsibleChecker } from '../../components/sidebar/CollapsibleChecker';

export const CpuFilterSidebar = () => {
  return (
    <div className='block overflow-y-scroll h-[80dvh] sticky top-20 z-0 scrollbar pr-2'>
      <h3 className='block font-bold'>FILTERS</h3>
      <ul className='block'>
        <li className='list-item bg-white shadow-md rounded-xl my-4'>
          <p className='flex'>
            <span className='pr-2'>
              <BsInfoCircle size={20} className='mt-[2px]' />
            </span>
            <span className='text-lg font-semibold'>General Info</span>
          </p>
          <ul className='block'>
            <CollapsibleChecker type={'type'} />
            <CollapsibleChecker type={'CPU socket'} />
            <CollapsibleSlider type={'thermal design power'} />
            <CollapsibleSlider type={'semiconductor size'} />
            <CollapsibleSlider type={'CPU temperature'} />
            <CollapsibleSlider type={'PCIE version'} />
          </ul>
        </li>

        <li className='list-item bg-white shadow-md rounded-xl my-4'>
          <p className='flex'>
            <span className='pr-2'>
              <CgPerformance size={20} className='mt-[2px]' />
            </span>
            <span className='text-lg font-semibold'>Performance</span>
          </p>
          <ul className='block'>
            <CollapsibleSlider type={'CPU speed'} />
            <CollapsibleSlider type={'CPU speed boost'} />
            <CollapsibleSlider type={'CPU threads'} />
          </ul>
        </li>

        <li className='list-item bg-white shadow-md rounded-xl my-2'>
          <p className='flex'>
            <span className='pr-2'>
              <HiOutlineChip size={20} className='mt-[2px]' />
            </span>
            <span className='text-lg font-semibold'>Memory</span>
          </p>
          <ul className='block'>
            <CollapsibleSlider type={'RAM speed'} />
            <CollapsibleSlider type={'DDR memory version'} />
            <CollapsibleSlider type={'memory channels'} />
          </ul>
        </li>

        <li className='list-item bg-white shadow-md rounded-xl my-2'>
          <p className='flex'>
            <span className='pr-2'>
              <AiOutlinePlusCircle size={20} className='mt-[2px]' />
            </span>
            <span className='text-lg font-semibold'>Features</span>
          </p>
          <ul className='block'></ul>
        </li>
      </ul>
    </div>
  );
};
