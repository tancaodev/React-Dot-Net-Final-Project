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
  const [sortOption, setSortOption] = useState('most_popular'); // Default sorting option

  const url = `https://localhost:44345/api/chipset/get-chipsets?sort=${sortOption}`;

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

  //call api to sort data with filter
  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  useEffect(() => {
    // Fetch phones with selected sorting option
    const url_sort = `https://localhost:44345/api/chipset/get-chipsets?sort=${sortOption}`;
    console.log(url_sort);
    axios
      .get(url_sort)
      .then((response) => {
        setCpus(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [sortOption]);

  return (
    <div className='bg-gray-50'>
      <DropDownMenu />
      <div
        id='web-content'
        className='max-h-full bg-gray-50 block w-[100%] max-w-[1170px] m-auto'
      >
        <Breadcrumbs />

        <div className='flex py-4'>
          <div className='w-1/4 block'>
            <CpuFilterSidebar />
          </div>
          <div id='web-content' className='w-3/4'>
            <div className='text-right'>
              <h1 className='text-2xl mb-4'>CPU Total: {cpusTotal}</h1>
            </div>
            <div className='text-right mb-4'>
              <select
                id='sortOption'
                value={sortOption}
                onChange={handleSortOptionChange}
                className='border-2 border-black'
              >
                <option value='most_popular'>Most Popular</option>
                <option value='release_date_asc'>
                  Release Date (oldest to newest)
                </option>
                <option value='release_date_desc'>
                  Release Date (newest to oldest)
                </option>
              </select>
            </div>
            <div className='grid grid-cols-3 gap-4 pl-5'>
              {cpus[0] ? (
                cpus.map((cpu, index) => {
                  return (
                    <Fragment key={index}>
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
      </div>
      <Footer />
    </div>
  );
};
