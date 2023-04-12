import React from 'react';
import { Link } from 'react-router-dom';

export const CpuComponent = ({ cpu }) => {
  //change spacing on url from '%20' to '-'
  let name = cpu.name;
  name = name.replace(/\s+/g, '-');
  const url = `/cpus/${name}`;

  return (
    <div className='bg-white border-2 rounded-md shadow-md'>
      <Link to={`${url}`} state={{ cpu: { name: cpu.name, type: 'cpu' } }}>
        <div className='w-[100%] flex justify-center'>
          <img
            src={cpu.image}
            alt='/'
            className='min-h-[300px] object-contain p-2'
          />
        </div>

        <div className=''>
          <p className='px-4 pt-5 pb-8 text-lg'>{cpu.name}</p>
          <ul className='font-sans'>
            <li className='py-0 h-8'>
              <div className='inline'>Max CPU Speed</div>
              <progress
                className='w-[100%] pb-2'
                value={cpu.cpuSpeedBoost}
                max={6}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>CPU Thread</div>
              <progress
                className='w-[100%] pb-2'
                value={cpu.cpuThread}
                max={128}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Nanomet Number</div>
              <progress
                className='w-[100%] pb-2'
                value={14 - cpu.semiconductorSize}
                max={14}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>TDP</div>
              <progress
                className='w-[100%] pb-2'
                value={cpu.tdp}
                max={125}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Ram Speed</div>
              <progress
                className='w-[100%] pb-2'
                value={cpu.ramSpeed}
                max={6400}
              ></progress>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};
