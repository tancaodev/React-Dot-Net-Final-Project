import React from 'react';
import { Link } from 'react-router-dom';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { Footer } from '../../components/Footer';
import { DropDownMenu } from '../../components/DropDownMenu';
import { Sidebar } from '../../components/Sidebar';
import { LaptopComponent } from './LaptopComponent';
import { Outlet } from 'react-router-dom';

export const Laptops = () => {
  return (
    <div className='max-h-full bg-gray-50'>
      <DropDownMenu />
      <Breadcrumbs />

      <div className='flex py-4'>
        <div className='w-1/4 pl-[74px]'>
          <Sidebar />
        </div>
        <div className='w-3/4 grid grid-cols-3 gap-4 pl-5 pr-[160px]'>
          <LaptopComponent />
          <div className='bg-white border-2 rounded-md shadow-md'>
            <Link to='/laptops/1' href='/laptops/1' className=''>
              <div className='w-[100%] flex justify-center'>
                <img
                  src='https://images.versus.io/objects/lenovo-thinkpad-x1-extreme-16-wquxga-intel-core-i7-12800h-1-8ghz-nvidia-geforce-rtx-3070-ti-laptop-64gb-ram-4tb-ssd.front.variety.1676384767281.jpg'
                  alt='/'
                  className='w-[100%] h-[100%] object-contain p-2'
                />
              </div>

              <div className=''>
                <p className='px-4 pt-5 pb-8 text-lg'>
                  Lenovo ThinkPad X1 Extreme 16" WQUXGA Intel Core i7-12800H
                </p>
                <ul className='font-sans'>
                  <li className='py-1'>
                    <div>CPU Speed Base</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>CPU Speed Boost</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Ram</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Ram Speed</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[80%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Screen Size</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[30%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Resolution</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[60%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Weight</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[50%] bg-green-400'></div>
                    </div>
                  </li>
                </ul>
              </div>
            </Link>
          </div>

          <div className='bg-white border-2 rounded-md shadow-md'>
            <a href='#laptops' className=''>
              <div className='w-[100%] flex justify-center'>
                <img
                  src='https://images.versus.io/objects/lenovo-thinkpad-x1-extreme-16-wquxga-intel-core-i7-12800h-1-8ghz-nvidia-geforce-rtx-3050-ti-laptop-64gb-ram-4tb-ssd-4tb-ssd.front.variety.1676462190014.jpg'
                  alt='/'
                  className='w-[100%] h-[100%] object-contain p-2'
                />
              </div>

              <div className=''>
                <p className='px-4 pt-5 pb-8 text-lg'>
                  Lenovo ThinkPad X1 Extreme 16" WQUXGA Intel Core i7-12800H
                </p>
                <ul className='font-sans'>
                  <li className='py-1'>
                    <div>CPU Speed Base</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>CPU Speed Boost</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Ram</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Ram Speed</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[80%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Screen Size</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[30%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Resolution</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[60%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Weight</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[50%] bg-green-400'></div>
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </div>

          <div className='bg-white border-2 rounded-md shadow-md'>
            <a href='#laptops' className=''>
              <div className='w-[100%] flex justify-center'>
                <img
                  src='https://images.versus.io/objects/msi-gt77-titan-12ugs-008-17-3-uhd-intel-core-i9-12900hx-1-5ghz-nvidia-geforce-rtx-3070-ti-laptop-128gb-ram-2tb-ssd.front.variety.1677509813653.jpg'
                  alt='/'
                  className='w-[100%] h-[100%] object-contain p-2'
                />
              </div>

              <div className=''>
                <p className='px-4 pt-5 pb-8 text-lg'>
                  MSI GT77 Titan 12UGS-008 17.3" UHD Intel Core i9-12900HX
                  1.5GHz / Nvidia GeForce RTX 3070 Ti Laptop / 128GB RAM / 2TB
                  SSD
                </p>
                <ul className='font-sans'>
                  <li className='py-1'>
                    <div>CPU Speed Base</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>CPU Speed Boost</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Ram</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Ram Speed</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[80%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Screen Size</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[30%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Resolution</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[60%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Weight</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[50%] bg-green-400'></div>
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </div>

          <div className='bg-white border-2 rounded-md shadow-md'>
            <a href='#laptops' className=''>
              <div className='w-[100%] flex justify-center'>
                <img
                  src='https://images.versus.io/objects/dell-alienware-x17-r1-intel-core-i9-11980hk-2-6ghz-nvidia-geforce-rtx-3080-laptop-64gb-ram-4tb-ssd.front.variety.1624554048803.jpg'
                  alt='/'
                  className='w-[100%] h-[100%] object-contain p-2'
                />
              </div>

              <div className=''>
                <p className='px-4 pt-5 pb-8 text-lg'>
                  Dell Alienware X17 R1 Intel Core i9-11980HK 2.6GHz / Nvidia
                  GeForce RTX 3080 Laptop / 64GB RAM / 4TB SSD
                </p>
                <ul className='font-sans'>
                  <li className='py-1'>
                    <div>CPU Speed Base</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>CPU Speed Boost</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Ram</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Ram Speed</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[80%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Screen Size</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[30%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Resolution</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[60%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Weight</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[50%] bg-green-400'></div>
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </div>

          <div className='bg-white border-2 rounded-md shadow-md'>
            <a href='#laptops' className=''>
              <div className='w-[100%] flex justify-center'>
                <img
                  src='https://images.versus.io/objects/razer-blade-17-2022-17-3-uhd-intel-core-i9-12900h-1-8ghz-nvidia-geforce-rtx-3080-ti-laptop-32gb-ram-1tb-ssd.front.variety.1643286281455.jpg'
                  alt='/'
                  className='w-[100%] h-[100%] object-contain p-2'
                />
              </div>

              <div className=''>
                <p className='px-4 pt-5 pb-8 text-lg'>
                  Razer Blade 17 (2022) 17.3" UHD Intel Core i9-12900H 1.8GHz /
                  Nvidia GeForce RTX 3080 Ti Laptop / 32GB RAM / 1TB SSD
                </p>
                <ul className='font-sans'>
                  <li className='py-1'>
                    <div>CPU Speed Base</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>CPU Speed Boost</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Ram</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Ram Speed</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[80%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Screen Size</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[30%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Resolution</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[60%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Weight</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[50%] bg-green-400'></div>
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </div>
      <Outlet />
        </div>


      </div>
      <Footer />
    </div>
  );
}
