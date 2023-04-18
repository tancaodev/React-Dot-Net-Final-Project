import { Breadcrumbs } from '../../components/Breadcrumbs';
import { TopBar } from '../../components/TopBar';
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';
import { Link } from 'react-scroll';
import { useState } from 'react';
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
      </section>
      <section
        id='projects'
        className='grid items-center bg-blue-100 h-[100vh] text-xl font-bold about text-center'
      >
        PROJECTS
      </section>
      <section
        id='blog'
        className='grid items-center bg-yellow-100 h-[100vh] text-xl font-bold about text-center'
      >
        BLOG
        <table class="table-auto">
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
