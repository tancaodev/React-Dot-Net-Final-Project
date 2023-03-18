import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Footer } from '../../components/Footer';
import { DropDownMenu } from '../../components/DropDownMenu';
import { Sidebar } from '../../components/Sidebar';
import { LaptopComponent } from './LaptopComponent';

export const Laptops = () => {
  const [laptops, setLaptops] = useState([]);
  const url = 'https://localhost:44345/api/laptop/get-laptops';

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setLaptops(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='max-h-full bg-gray-50'>
      <DropDownMenu />
      <Breadcrumbs />

      <div className='flex py-4'>
        <div className='w-1/4 pl-[74px]'>
          <Sidebar />
        </div>
        <div className='w-3/4 grid grid-cols-3 gap-4 pl-5 pr-[160px]'>
          { laptops[0] ? (
            laptops.map((laptop) => {
              return (
                <Fragment key={laptop.name}>
                  <LaptopComponent laptop={laptop} />
                </Fragment>
              );
            })
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
