import { useState } from 'react';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { IoIosArrowDropright } from 'react-icons/io';

export const Categories = () => {
  const [value, setValue] = useState([20, 37]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function valuetext(value) {
    return `${value}°C`;
  }

  return (
    <div className='bg-gray-200 w-full h-[100dvh]'>
      <div className='relative w-[400px] overflow-hidden'>
        <input
          type='checkbox'
          className='absolute top-0 inset-x-0 w-full h-12 opacity-0 z-10 cursor-pointer peer'
        />
        <div className='bg-blue-500 h-12 w-full pl-5 flex items-center'>
          <h1 className='text-lg font-semibold text-white'>
            What is Tailwindcss
          </h1>
        </div>
        <div className='absolute top-3 right-3 text-white transition-transform duration-500 rotate-0 peer-checked:rotate-90'>
          <IoIosArrowDropright size={20} />
        </div>

        <div
          className='bg-white overflow-hidden transition-all duration-500
        max-h-0 peer-checked:max-h-[400px]'
        >
          <Box className='p-4'>
            <Slider
              getAriaLabel={() => 'Temperature range'}
              value={value}
              onChange={handleChange}
              getAriaValueText={valuetext}
            />
          </Box>
        </div>

        <div
          className='bg-white overflow-hidden transition-all duration-500
        max-h-0 peer-checked:max-h-[400px]'
        >
         <Box className='px-4 pt-2'>
          {/* <Slider
            size='small'
            aria-label='Small'
            onChange={handleChange}
          /> */}
          <Slider
            size='small'
            getAriaLabel={() => 'Temperature range'}
            value={value}
            onChange={handleChange}
            valueLabelDisplay='auto'
            getAriaValueText={valuetext}
          />
          <p>{value[0]}</p>
        </Box>
        </div>
      </div>
    </div>
  );
};
