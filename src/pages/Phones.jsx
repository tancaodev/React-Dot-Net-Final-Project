import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { DropDownMenu } from '../components/DropDownMenu';
import { Footer } from '../components/Footer';
import { Sidebar } from '../components/Sidebar';

export const Phones = () => {
  return (
    <div className='max-h-full bg-gray-50'>
      <DropDownMenu />
      <Breadcrumbs />

      <div className='flex py-4'>
        <div className='w-1/4 pl-[74px]'>
          <Sidebar />
        </div>
        <div className='w-3/4 grid grid-cols-3 gap-4 pl-5 pr-[160px]'>
          <div className='bg-white border-2 rounded-md shadow-md'>
            <a href='#phones' className=''>
              <div className='w-[100%] flex justify-center'>
                <img
                  src='https://images.versus.io/objects/xiaomi-13-pro.front.variety.1670866778917.jpg'
                  alt='/'
                  className='w-[120px] h-[260px] pt-2'
                />
              </div>

              <div className=''>
                <p className='px-4 pt-5 pb-8 text-lg'>Xiaomi 13 Pro</p>
                <ul className='font-sans'>
                  <li className='py-1'>
                    <div>Design</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Display</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Performance</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Cameras</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[80%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Operating System</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[30%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Battery</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[60%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Audio</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[50%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Features</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[10%] bg-green-400'></div>
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </div>

          <div className='bg-white border-2 rounded-md shadow-md'>
            <a href='#phones' className=''>
              <div className='w-[100%] flex justify-center'>
                <img
                  src='https://images.versus.io/objects/samsung-galaxy-s23-ultra.front.variety.1675277566339.jpg'
                  alt='/'
                  className='w-[120px] h-[260px] pt-2'
                />
              </div>

              <div className=''>
                <p className='px-4 pt-5 pb-8 text-lg'>
                  Samsung Galaxy S23 Ultra
                </p>
                <ul className='font-sans'>
                  <li className='py-1'>
                      <div>Design</div>
                        <progress
                          className='w-[100%] h-[4px] p-0 m-0'
                          value={2.5}
                          max={5}
                        ></progress>
                        {/* <div className='text-right py-[2px] text-white w-[90%] aria bg-green-400'></div> */}
                  </li>
                  <li className='py-1'>
                    <div>Design</div>
                    <div className='w-[100%]'>
                      <progress
                        className='w-[100%]'
                        value={2.5}
                        max={5}
                      ></progress>
                      {/* <div className='text-right py-[2px] text-white w-[90%] aria bg-green-400'></div> */}
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Design</div>
                    <div className='w-[100%]'>
                      <progress
                        className='w-[100%]'
                        value={2.5}
                        max={5}
                      ></progress>
                      {/* <div className='text-right py-[2px] text-white w-[90%] aria bg-green-400'></div> */}
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Design</div>
                    <div className='w-[100%]'>
                      <progress
                        className='w-[100%] h-[4px]'
                        value={2.5}
                        max={5}
                      ></progress>
                      {/* <div className='text-right py-[2px] text-white w-[90%] aria bg-green-400'></div> */}
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Design</div>
                    <div className='w-[100%]'>
                      <progress
                        className='w-[100%] h-[4px]'
                        value={2.5}
                        max={5}
                      ></progress>
                      {/* <div className='text-right py-[2px] text-white w-[90%] aria bg-green-400'></div> */}
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Design</div>
                    <div className='w-[100%]'>
                      <progress
                        className='w-[100%] h-[4px]'
                        value={2.5}
                        max={5}
                      ></progress>
                      {/* <div className='text-right py-[2px] text-white w-[90%] aria bg-green-400'></div> */}
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Design</div>
                    <div className='w-[100%]'>
                      <progress
                        className='w-[100%] h-[4px]'
                        value={2.5}
                        max={5}
                      ></progress>
                      {/* <div className='text-right py-[2px] text-white w-[90%] aria bg-green-400'></div> */}
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Design</div>
                    <div className='w-[100%]'>
                      <progress
                        className='w-[100%] h-[4px]'
                        value={2.5}
                        max={5}
                      ></progress>
                      {/* <div className='text-right py-[2px] text-white w-[90%] aria bg-green-400'></div> */}
                    </div>
                  </li>

                  {/* <li className='py-1'>
                    <div>Display</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Performance</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Cameras</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[80%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Operating System</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[30%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Battery</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[60%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Audio</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[50%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Features</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[10%] bg-green-400'></div>
                    </div>
                  </li> */}
                </ul>
              </div>
            </a>
          </div>

          <div className='bg-white border-2 rounded-md shadow-md'>
            <a href='#phones'>
              <div className='w-[100%] flex justify-center'>
                <img
                  src='https://images.versus.io/objects/apple-iphone-14-pro.front.variety.1662577348693.jpg'
                  alt='/'
                  className='w-[120px] h-[260px] pt-2'
                />
              </div>

              <div className=''>
                <p className='px-4 pt-5 pb-8 text-lg'>Apple Iphone 14 Pro</p>
                <ul className='font-sans'>
                  <li className='py-1'>
                    <div>Design</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Display</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Performance</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Cameras</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[80%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Operating System</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[30%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Battery</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[60%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Audio</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[50%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Features</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[10%] bg-green-400'></div>
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </div>

          <div className='bg-white border-2 rounded-md shadow-md'>
            <a href='#phones'>
              <div className='w-[100%] flex justify-center'>
                <img
                  src='https://images.versus.io/objects/apple-iphone-14-pro.front.variety.1662577348693.jpg'
                  alt='/'
                  className='w-[120px] h-[260px] pt-2'
                />
              </div>

              <div className=''>
                <p className='px-4 pt-5 pb-8 text-lg'>Apple Iphone 14 Pro</p>
                <ul className='font-sans'>
                  <li className='py-1'>
                    <div>Design</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Display</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Performance</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Cameras</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[80%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Operating System</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[30%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Battery</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[60%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Audio</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[50%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Features</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[10%] bg-green-400'></div>
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </div>
          <div className='bg-white border-2 rounded-md shadow-md'>
            <a href='#phones'>
              <div className='w-[100%] flex justify-center'>
                <img
                  src='https://images.versus.io/objects/apple-iphone-14-pro.front.variety.1662577348693.jpg'
                  alt='/'
                  className='w-[120px] h-[260px] pt-2'
                />
              </div>

              <div className=''>
                <p className='px-4 pt-5 pb-8 text-lg'>Apple Iphone 14 Pro</p>
                <ul className='font-sans'>
                  <li className='py-1'>
                    <div>Design</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Display</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Performance</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Cameras</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[80%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Operating System</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[30%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Battery</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[60%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Audio</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[50%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Features</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[10%] bg-green-400'></div>
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </div>
          <div className='bg-white border-2 rounded-md shadow-md'>
            <a href='#phones'>
              <div className='w-[100%] flex justify-center'>
                <img
                  src='https://images.versus.io/objects/apple-iphone-14-pro.front.variety.1662577348693.jpg'
                  alt='/'
                  className='w-[120px] h-[260px] pt-2'
                />
              </div>

              <div className=''>
                <p className='px-4 pt-5 pb-8 text-lg'>Apple Iphone 14 Pro</p>
                <ul className='font-sans'>
                  <li className='py-1'>
                    <div>Design</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Display</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Performance</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[90%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Cameras</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[80%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Operating System</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[30%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Battery</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[60%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Audio</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[50%] bg-green-400'></div>
                    </div>
                  </li>
                  <li className='py-1'>
                    <div>Features</div>
                    <div className='w-[100%] bg-gray-300'>
                      <div className='text-right py-[2px] text-white w-[10%] bg-green-400'></div>
                    </div>
                  </li>
                </ul>
              </div>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

