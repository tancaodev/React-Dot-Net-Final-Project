import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Footer } from '../../components/Footer';
import { DropDownMenu } from '../../components/DropDownMenu';
import { Sidebar } from '../../components/Sidebar';
import { LaptopComponent } from './LaptopComponent';
import { ProductSkeleton } from '../../components/ProductSkeleton';

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
        <div className='hidden lg:flex lg:w-1/4 pl-[74px]'>
          <Sidebar />
        </div>
        <div
          className='grid grid-cols-1 justify-center gap-4 mx-4
        md:grid-cols-2
        lg:w-3/4 lg:grid-cols-3 lg:pl-5 lg:pr-[160px]'
        >
          {laptops[0] ? (
            laptops.map((laptop) => {
              return (
                <Fragment key={laptop.name}>
                  <LaptopComponent laptop={laptop} />
                </Fragment>
              );
            })
          ) : (
            <>
              <ProductSkeleton cards={6} />
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
