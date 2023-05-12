import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { TopBar } from '../../components/TopBar';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Link } from 'react-scroll';
import { blueGrey, yellow } from '@mui/material/colors';

export const Categories = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Breadcrumbs />
      <div className='sticky top-0 justify-center'>
        <nav>
          <ul className='flex'>
            <li>
              <Link
                activeClass='active'
                spy={true}
                to='about'
                className='hover:underline cursor-pointer'
              >
                ABOUT
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                spy={true}
                to='projects'
                className='hover:underline cursor-pointer'
              >
                PROJECTS
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                spy={true}
                to='blog'
                className='hover:underline cursor-pointer'
              >
                BLOG
              </Link>
            </li>
            <li>
              <Link
                activeClass='active'
                spy={true}
                to='contact'
                className='hover:underline cursor-pointer'
              >
                CONTACT ME
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <section
        id='about'
        className='grid items-center bg-slate-100 h-[80vh] text-xl font-bold about text-center '
      >
        ABOUT
        <Box
          sx={{
            width: '300px',
            height: '300px',
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: 'black',
          }}
        >
          <span className='text-white'>Hi</span>
          <Slider
            size='small'
            defaultValue={70}
            aria-label='Small'
            valueLabelDisplay='auto'
          />
          <Slider
            sx={{
              backgroundColor: 'white',
            }}
            defaultValue={50}
            aria-label='Default'
            valueLabelDisplay='auto'
          />
        </Box>
      </section>
      <section
        id='projects'
        className='grid items-center bg-blue-100 h-[100vh] text-xl font-bold about text-center align'
      >
        PROJECTS
        <div class='container' className='w-[100%] border border-[#d3d3d3]'>
          <div class='header' className='w-[100%] bg-[#d3d3d3] p-[2px] cursor-pointer font-bold'>
            <span>Expand</span>
          </div>
          <div class='content' className='p-1'>
            <ul>
              <li>This is just some random content.</li>
              <li>This is just some random content.</li>
              <li>This is just some random content.</li>
              <li>This is just some random content.</li>
            </ul>
          </div>
        </div>
      </section>
      <section
        id='blog'
        className='grid items-center bg-yellow-100 h-[100vh] text-xl font-bold about text-center'
      >
        BLOG
        <table class='table-auto'>
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
              <td>Malcolm Lockyer</td>
              <td>1961</td>
            </tr>
            <tr>
              <td>Witchy Woman</td>
              <td>The Eagles</td>
              <td>1972</td>
            </tr>
            <tr>
              <td>Shining Star</td>
              <td>Earth, Wind, and Fire</td>
              <td>1975</td>
            </tr>
          </tbody>
        </table>
      </section>
      <section
        id='contact'
        className='grid items-center bg-cyan-100  h-[100vh] text-xl font-bold about text-center'
      >
        CONTACT ME
        <input
          type='range'
          className='transparent h-1.5 w-full cursor-pointer appearance-none rounded-lg border-transparent bg-neutral-200'
        />
      </section>
      <Footer />
    </div>
  );
};
