import React from 'react';
import axios from 'axios';
import { useState } from 'react';

import { Breadcrumbs } from '../components/Breadcrumbs';
import { LaptopComponent } from './laptops/LaptopComponent';

export const Categories = () => {
  const [laptops, setLaptops] = useState([]);

  const getLaptops = () => {
    axios
      .get('https://localhost:44345/api/laptop/get-laptops')
      .then((res) => {
        console.log(res.data[0].cpu);
        setLaptops(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Breadcrumbs />
      <button onClick={getLaptops}>Click me Daddy!!!~</button>
      {laptops.map((laptop) => (
        <div key={laptop.id}>
          {laptop.cpu}
          <img src={laptop.image} alt='' />
        </div>
      ))}
      <div className='w-[300px] h-[700px]'>
      <LaptopComponent />

      </div>
    </div>
  );
};
