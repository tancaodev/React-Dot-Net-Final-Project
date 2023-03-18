import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { DropDownMenu } from '../../components/DropDownMenu';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';
import { PhoneComponent } from './PhoneComponent';

export const Phones = () => {
  const [phones, setPhones] = useState([]);
  const url = 'https://localhost:44345/api/phone/get-phones';

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setPhones(data);
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
          { phones[0] ? (
            phones.map((phone) => {
              return (
                <Fragment key={phone.name}>
                  <PhoneComponent phone={phone} />
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
