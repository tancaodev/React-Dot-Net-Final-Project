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
