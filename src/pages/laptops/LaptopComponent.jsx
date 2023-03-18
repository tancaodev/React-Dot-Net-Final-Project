import { useEffect, useState } from 'react';

export const LaptopComponent = (props) => {
  const [laptops, setLaptops] = useState(props.laptop);

  useEffect(() => {
    setLaptops(laptops)
  }, [laptops])

  return (
    <div className='bg-white border-2 rounded-md shadow-md'>
      <a href='#laptops' className=''>
        <div className='w-[100%] flex justify-center'>
          <img
            src={props.laptop.image}
            alt='/'
            className='h-[300px] object-contain p-2'
          />
        </div>

        <div className=''>
          <p className='px-4 pt-5 pb-8 text-lg'>{props.laptop.name}</p>
          <ul className='font-sans'>
            <li className='py-0 h-8'>
              <div className='inline'>CPU Speed Base</div>
              <progress
                className='w-[100%] pb-2'
                value={props.laptop.cpuSpeedBase}
                max={2.5}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>CPU Speed Boost</div>
              <progress
                className='w-[100%] pb-2'
                value={props.laptop.cpuSpeedBoost}
                max={5}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Ram</div>
              <progress
                className='w-[100%] pb-2'
                value={props.laptop.ram}
                max={128}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Ram Speed</div>
              <progress
                className='w-[100%] pb-2'
                value={props.laptop.ramSpeed}
                max={6400}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Rom</div>
              <progress
                className='w-[100%] pb-2'
                value={props.laptop.inStorage}
                max={2048}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Screen Size</div>
              <progress
                className='w-[100%] pb-2'
                value={props.laptop.screenSize}
                max={18}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Weight</div>
              <progress
                className='w-[100%] pb-2'
                value={8 - props.laptop.weight}
                max={8}
              ></progress>
            </li>
          </ul>
        </div>
      </a>
    </div>
  );
};
