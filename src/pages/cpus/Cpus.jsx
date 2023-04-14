import axios from 'axios';
import { useState, useEffect, Fragment } from 'react';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { DropDownMenu } from '../../components/DropDownMenu';
import { Footer } from '../../components/Footer';
import { CpuComponent } from './CpuComponent';
import { ProductSkeleton } from '../../components/ProductSkeleton';
import { CpuFilterSidebar } from './CpuFilterSidebar';

export const Cpus = () => {
  const [cpus, setCpus] = useState([]);
  const [cpusTotal, setCpusTotal] = useState('');
  
  const url = 'https://localhost:44345/api/chipset/get-chipsets';

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setCpus(data.data);
      setCpusTotal(data.total);
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
      <div id='web-content' className='max-h-full bg-gray-50 block w-[100%] max-w-[1170px] m-auto'>
        <Breadcrumbs />

        <div className='flex py-4'>
          <div className='w-1/4 block'>
            <CpuFilterSidebar />
          </div>
          <div id='web-content' className='w-3/4'>
            <div className='text-right'>
              <h1 className='text-2xl mb-4'>CPU comparision: {cpusTotal}</h1>
            </div>
            <div className='grid grid-cols-3 gap-4 pl-5'>
              {cpus[0] ? (
                cpus.map((cpu) => {
                  return (
                    <Fragment key={cpu.name}>
                      <CpuComponent cpu={cpu} />
                    </Fragment>
                  );
                })
              ) : (
                <ProductSkeleton cards={6} />
              )}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
