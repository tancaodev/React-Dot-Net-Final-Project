import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';

import { Activities } from '../../components/Activities';
import { Contact } from '../../components/Contact';
import { Footer } from '../../components/Footer';
import { PhoneGallery } from '../../components/PhoneGallery';
import { Hero } from '../../components/Hero';
import { DropDownMenu } from '../../components/DropDownMenu';
import { useState } from 'react';

export const Homepage = () => {
  const [cpuBo5, setCpuBo5] = useState([]);
  const [phoneBo5, setPhoneBo5] = useState([]);
  const [laptopBo5, setLaptopBo5] = useState([]);

  const url_get_5_cpus =
    'https://localhost:44345/api/chipset/top-5-accessed-chipsets';
  const url_get_5_phones =
    'https://localhost:44345/api/phone/top-5-accessed-phones';
  const url_get_5_laptops =
    'https://localhost:44345/api/laptop/top-5-accessed-laptops';

  const cpu_call = axios.get(url_get_5_cpus);
  const phone_call = axios.get(url_get_5_phones);
  const laptop_call = axios.get(url_get_5_laptops);

  Promise.all([laptop_call, cpu_call, phone_call])
    .then((responses) => {
      setLaptopBo5(responses[0].data);
      setCpuBo5(responses[1].data);
      setPhoneBo5(responses[2].data);
    })
    .catch((err) => {
      console.log(err.message);
    });

  // useEffect(() => {
  //   // Fetch phones with selected sorting option
  //   const url_sort = `https://localhost:44345/api/chipset/get-chipsets?sort=${sortOption}`;
  //   axios
  //     .get(url_sort)
  //     .then((response) => {
  //       setCpus(response.data.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, [sortOption]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div>
      <div className='h-16'></div>
      <DropDownMenu />
      <Hero />
      <Activities />
      <PhoneGallery type='best of 5 cpu' products={cpuBo5} background={'bg-gray-100'}/>
      <PhoneGallery type='best of 5 phone' products={phoneBo5} />
      <PhoneGallery type='best of 5 laptop' products={laptopBo5} background={'bg-gray-100'}/>
      <Contact />
      <Footer />
    </div>
  );
};
