import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Footer } from '../../components/Footer';
import { DropDownMenu } from '../../components/DropDownMenu';
import { LaptopComponent } from './LaptopComponent';
import { ProductSkeleton } from '../../components/ProductSkeleton';
import { LaptopSidebar } from './LaptopSidebar';

export const Laptops = () => {
  const [laptops, setLaptops] = useState([]);
  const [laptopTotal, setLaptopTotal] = useState('');

  const url = 'https://localhost:44345/api/laptop/get-laptops';

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setLaptops(data.data);
      setLaptopTotal(data.total);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='bg-gray-50'>
      <DropDownMenu />

      <div className='max-h-full bg-gray-50 block w-[100%] max-w-[1170px] m-auto'>
        <Breadcrumbs />
        <div className='flex py-4'>
          <div className='w-1/4'>
            <LaptopSidebar />
          </div>
          <div className='w-3/4'>
            <div className='text-right'>
              <h1 className='text-2xl mb-4'>
                Laptop comparision: {laptopTotal}
              </h1>
            </div>
            <div className='grid grid-cols-3 gap-4 pl-5'>
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
        </div>
      </div>
      <Footer />
    </div>
  );
};
