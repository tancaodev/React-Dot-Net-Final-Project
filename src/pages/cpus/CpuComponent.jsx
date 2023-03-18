import React from 'react';

export const CpuComponent = ({ cpu }) => {
  return (
    <div className='bg-white border-2 rounded-md shadow-md'>
      <a href='#cpus' className=''>
        <div className='w-[100%] flex justify-center'>
          <img
            src={cpu.image}
            alt='/'
            className='min-h-[300px] object-contain p-2'
          />
        </div>

        <div className=''>
          <p className='px-4 pt-5 pb-8 text-lg'>{ cpu.name }</p>
          <ul className='font-sans'>
            <li className='py-0 h-8'>
              <div className='inline'>Max CPU Speed</div>
              <progress
                className='w-[100%] pb-2'
                value={ cpu.maxCpuSpeed }
                max={6}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>CPU Thread</div>
              <progress
                className='w-[100%] pb-2'
                value={ cpu.cpuThread }
                max={128}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Nanomet Number</div>
              <progress
                className='w-[100%] pb-2'
                value={ 45 - cpu.nanometNumber }
                max={45}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Benchmark</div>
              <progress
                className='w-[100%] pb-2'
                value={ cpu.benchmark }
                max={80000}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Memory</div>
              <progress
                className='w-[100%] pb-2'
                value={ cpu.memory }
                max={8}
              ></progress>
            </li>
          </ul>
        </div>
      </a>
    </div>
  );
};
