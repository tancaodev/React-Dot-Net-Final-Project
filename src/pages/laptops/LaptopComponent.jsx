import React from 'react';

export const LaptopComponent = () => {
  return (
    <div className='bg-white border-2 rounded-md shadow-md'>
      <a href='#laptops' className=''>
        <div className='w-[100%] flex justify-center'>
          <img
            src='https://images.versus.io/objects/lenovo-thinkpad-x1-extreme-16-wquxga-intel-core-i9-12900h-2-5ghz-nvidia-geforce-rtx-3080-ti-laptop-64gb-ram-4tb-ssd.front.variety.1676373221082.jpg'
            alt='/'
            className='w-[100%] h-[100%] object-contain p-2'
          />
        </div>

        <div className=''>
          <p className='px-4 pt-5 pb-8 text-lg'>
            Lenovo ThinkPad X1 Extreme 16" Intel Core i9-12900H
          </p>
          <ul className='font-sans'>
            <li className='py-0 h-8'>
              <div className='inline'>CPU Speed Base</div>
              <progress
                className='w-[100%] pb-2'
                value={2.5}
                max={2.5}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>CPU Speed Boost</div>
              <progress
                className='w-[100%] pb-2'
                value={2.5}
                max={5}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Ram</div>
              <progress
                className='w-[100%] pb-2'
                value={2.5}
                max={128}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Ram Speed</div>
              <progress
                className='w-[100%] pb-2'
                value={2.5}
                max={6400}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Screen Size</div>
              <progress
                className='w-[100%] pb-2'
                value={2.5}
                max={18}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Resolution</div>
              <progress
                className='w-[100%] pb-2'
                value={2.5}
                max={2048}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Weight</div>
              <progress
                className='w-[100%] pb-2'
                value={2.5}
                max={8}
              ></progress>
            </li>
          </ul>
        </div>
      </a>
    </div>
  );
};
