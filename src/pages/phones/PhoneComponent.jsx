import React from 'react';
import { Link } from 'react-router-dom';

export const PhoneComponent = ({ phone }) => {
  //change spacing on url from '%20' to '-'
  let name = phone.name;
  name = name.replace(/\s+/g, '-');
  const url = `/smartphones/${name}`;

  phone.type = 'phone';
  return (
    <div className='bg-white border-2 rounded-md shadow-md'>
      <Link to={`${url}`} state={{ phone: phone }}>
        <div className='w-[100%] flex justify-center'>
          <img src={phone.image} alt='/' className='w-[120px] h-[260px] pt-2' />
        </div>

        <div className=''>
          <p className='px-4 pt-5 pb-8 text-lg'>{phone.name}</p>
          <ul className='font-sans'>
            <li className='py-0 h-8'>
              <div className='inline'>Battery Power</div>
              <progress
                className='w-[100%] pb-2'
                value={phone.batteryPower}
                max={5000}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Charging</div>
              <progress
                className='w-[100%] pb-2'
                value={phone.charging}
                max={200}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>In Storage</div>
              <progress
                className='w-[100%] pb-2'
                value={phone.inStorage}
                max={1024}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Nits</div>
              <progress
                className='w-[100%] pb-2'
                value={phone.nits}
                max={2000}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Ram</div>
              <progress
                className='w-[100%] pb-2'
                value={phone.ram}
                max={18}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Screen Hz</div>
              <progress
                className='w-[100%] pb-2'
                value={phone.screenHz}
                max={200}
              ></progress>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};
