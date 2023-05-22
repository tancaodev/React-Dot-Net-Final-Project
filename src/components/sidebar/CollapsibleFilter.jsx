import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { IoIosArrowDropright } from 'react-icons/io';

export const CollapsibleFilter = ({type}) => {
  const [value, setValue] = useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <li
      className='relative m-[0_4px] overflow-hidden box-border rounded-lg duration-150 ease-linear delay-[0]
        border hover:bg-slate-100 peer-checked:bg-slate-100 group'
    >
      <input
        type='checkbox'
        className='absolute top-0 inset-x-0 w-full h-[54px] opacity-0 z-10 cursor-pointer peer'
      />
      <div className='w-full pl-3 flex items-center text-black text-[13px]'>
        <p className='capitalize'>{type}</p>
      </div>
      <div className='invisible absolute right-3 top-4 text-black transition-transform duration-500 rotate-0 
      peer-checked:rotate-90 group-hover:visible peer-checked:visible'>
        <IoIosArrowDropright size={20} />
      </div>
      <div className='overflow-hidden transition-all duration-500 max-h-0 peer-checked:max-h-[100px]'>
        <Box className='p-4'>
          <Slider
            getAriaLabel={() => 'Temperature range'}
            // value={value}
            // onChange={handleChange}
            // getAriaValueText={valuetext}
          />
        </Box>
      </div>
    </li>
  );
};
