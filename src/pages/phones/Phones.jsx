import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { DropDownMenu } from '../../components/DropDownMenu';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';
import { PhoneComponent } from './PhoneComponent';
import { ProductSkeleton } from '../../components/ProductSkeleton';

export const Phones = () => {
  const [phones, setPhones] = useState([]);
  const [phoneTotal, setPhoneTotal] = useState('');

  const url = 'https://localhost:44345/api/phone/get-phones';

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setPhones(data.data);
      setPhoneTotal(data.total)
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
            <Sidebar />
          </div>
          <div className='w-3/4'>
            <div className='text-right'>
              <h1 className='text-2xl mb-4'>Smartphone comparision: {phoneTotal}</h1>
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
