import React from 'react';
import { TopBar } from '../components/TopBar';

export const NotFound = () => {
  return (
    <div>
      <TopBar />
      <div>
        <h1>Not Found</h1>
        <h1>The request resource was not found on this server.</h1>
        <h1>
          Go back
          <a
            href='/'
            className='text-purple-400 hover:text-purple-700 hover:font-medium 
            transition-all duration-500'
          >
            {' '}
            to Homepage
          </a>
        </h1>
      </div>
    </div>
  );
};
