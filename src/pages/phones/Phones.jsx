import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { DropDownMenu } from '../../components/DropDownMenu';
import { Footer } from '../../components/Footer';
import { PhoneComponent } from './PhoneComponent';
import { ProductSkeleton } from '../../components/ProductSkeleton';
import { PhoneSidebar } from './PhoneSidebar';

export const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [phoneTotal, setPhoneTotal] = useState('');
  const [sortOption, setSortOption] = useState('price_asc'); // Default sorting option

  const url = `https://localhost:44345/api/phone/get-phones?sort=${sortOption}`;

  //call api to get data
  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setPhones(data.data);
      setPhoneTotal(data.total);
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
    const url_sort = `https://localhost:44345/api/phone/get-phones?sort=${sortOption}`;
    console.log(url_sort);
    axios.get(url_sort)
      .then(response => {
        setPhones(response.data.data);
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
            <PhoneSidebar />
          </div>
          <div className='w-3/4 relative'>
            <div className='text-right'>
              <h1 className='text-2xl mb-4'>Smartphone Total: {phoneTotal}</h1>
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
              {phones[0] ? (
                phones.map((phone) => {
                  return (
                    <Fragment key={phone.name}>
                      <PhoneComponent phone={phone} />
                    </Fragment>
                  );
                })
              ) : (
                <ProductSkeleton cards={6} />
              )}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};
