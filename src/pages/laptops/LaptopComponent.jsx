import { Link } from 'react-router-dom';

export const LaptopComponent = ({ laptop }) => {
  //change spacing on url from '%20' to '-'
  let name = laptop.name;
  name = name.replace(/\s+/g, '-');
  const url = `/laptops/${name}`;

  return (
    <div className='bg-white border-2 rounded-md shadow-md'>
      <Link
        to={`${url}`}
        state={{ laptop: { name: laptop.name, type: 'laptop' } }}
      >
        <div className='w-[100%] flex justify-center'>
          <img
            src={laptop.image}
            alt='/'
            className='h-[300px] object-contain p-2'
          />
        </div>

        <div className=''>
          <p className='px-4 pt-5 pb-8 text-lg'>{laptop.name}</p>
          <ul className='font-sans'>
            <li className='py-0 h-8'>
              <div className='inline'>CPU Speed Base</div>
              <progress
                className='w-[100%] pb-2'
                value={laptop.cpuSpeedBase}
                max={2.5}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>CPU Speed Boost</div>
              <progress
                className='w-[100%] pb-2'
                value={laptop.cpuSpeedBoost}
                max={5}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Ram</div>
              <progress
                className='w-[100%] pb-2'
                value={laptop.ram}
                max={128}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Ram Speed</div>
              <progress
                className='w-[100%] pb-2'
                value={laptop.ramSpeed}
                max={6400}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Rom</div>
              <progress
                className='w-[100%] pb-2'
                value={laptop.inStorage}
                max={2048}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Screen Size</div>
              <progress
                className='w-[100%] pb-2'
                value={laptop.screenSize}
                max={18}
              ></progress>
            </li>
            <li className='py-0 h-8'>
              <div>Weight</div>
              <progress
                className='w-[100%] pb-2'
                value={8 - laptop.weight}
                max={8}
              ></progress>
            </li>
          </ul>
        </div>
      </Link>
    </div>
  );
};
