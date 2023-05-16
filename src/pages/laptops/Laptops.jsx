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
  const [sortOption, setSortOption] = useState('price_asc'); // Default sorting option

  const url = `https://localhost:44345/api/laptop/get-laptops?sort=${sortOption}`;

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

  //call api to sort data with filter
  const handleSortOptionChange = (event) =>{
    setSortOption(event.target.value);
  }

  useEffect(() => {
    // Fetch phones with selected sorting option
    const url_sort = `https://localhost:44345/api/laptop/get-laptops?sort=${sortOption}`
    axios.get(url_sort)
      .then(response => {
        setLaptops(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [sortOption]);

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
                Laptop Total: {laptopTotal}
              </h1>
            </div>
            <div className='text-right mb-4'>
              <select
                id='sortOption'
                value={sortOption}
                onChange={handleSortOptionChange}
                className='border-2 border-black'
              >
                <option value='price_asc'>Price (low to high)</option>
                <option value='price_desc'>Price (high to low)</option>
                <option value='release_date_asc'>
                  Release Date (oldest to newest)
                </option>
                <option value='release_date_desc'>
                  Release Date (newest to oldest)
                </option>
                <option value='most_popular'>
                  Most Popular
                </option>
              </select>
            </div>
            <div className='grid grid-cols-3 gap-4 pl-5'>
              {laptops[0] ? (
                laptops.map((laptop, index) => {
                  return (
                    <Fragment key={index}>
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
