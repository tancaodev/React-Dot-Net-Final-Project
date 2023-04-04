import { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { DropDownMenu } from '../../components/DropDownMenu';
import { Footer } from '../../components/Footer';
import { Sidebar } from '../../components/Sidebar';
import { CpuComponent } from './CpuComponent';
import { ProductSkeleton } from '../../components/ProductSkeleton';

export const Cpus = () => {
  const [cpus, setCpus] = useState([]);
  const url = 'https://localhost:44345/api/chipset/get-chipset';

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setCpus(data);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='max-h-full bg-gray-50 block w-[100%] max-w-[1170px] m-auto'>
      <DropDownMenu />
      <Breadcrumbs />

      <div className='flex py-4'>
        <div className='w-1/4'>
          <Sidebar />
        </div>
        <div className='w-3/4 grid grid-cols-3 gap-4 pl-5 '>
          {cpus[0] ? (
            cpus.map((cpu) => {
              return (
                (
                  <Fragment key={cpu.name}>
                    <CpuComponent cpu={cpu} />
                  </Fragment>
                ) || <ProductSkeleton />
              );
            })
          ) : (
            <ProductSkeleton cards={6} />
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};
