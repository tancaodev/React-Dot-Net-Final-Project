import React from 'react';
import { DropDownMenu } from '../../components/DropDownMenu';
import { Footer } from '../../components/Footer';

export const Comparision = () => {
  return (
    <div className='h-[100dvh]'>
      <div className='h-16'></div>
      <DropDownMenu />

      <div className='block pt-8 h-[100%] m-auto min-h-[100%]'>
        <div className='max-w-[1170px] w-[90%] relative m-auto box-border block'>
          <div>
            <div>
              <div>
                <div>
                  {/* div này để show hình ảnh sản phẩm */}
                  <h1 className='text-center'>
                    <div>
                      Compare
                      <span></span>
                    </div>
                  </h1>

                  <div className='flex'>
                    <div className='block basis-0 flex-grow flex-shrink p-3'></div>
                    <div className='block basis-0 flex-grow flex-shrink p-3 w-[25%]'>
                      <div>name</div>
                      <div className='block float-left h-auto w-[100%]'>
                        <div className='block'>
                          <div className='border rounded-2xl'>
                            <div className='m-auto max-w-[320px] w-[100%] p-4 relative text-center'>
                              <img
                                src='https://images.versus.io/objects/google-pixel-6.front.variety.1634674732794.jpg'
                                alt='/'
                                className='w-[160px] h-[320px] m-auto block'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className='block basis-0 flex-grow flex-shrink p-3 w-[25%]'>
                      <div>name</div>
                      <div className='block float-left h-auto w-[100%]'>
                        <div className='block'>
                          <div className='border bg-white rounded-2xl'>
                            <div className='h-[100%] m-auto max-w-[320px] relative w-[100%] text-center p-4 bg-red-300'>
                              <img
                                src='https://images.versus.io/objects/amd-ryzen-threadripper-pro-3995wx.front.variety.1616077215068.jpg'
                                alt='/'
                                className='w-[160px] h-[320px] m-auto block'
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>

                <div className='block'>
                    <div>
                        <div className='block'>
                            <p>Thông tin cơ bản:</p>
                        </div>

                        <div className='overflow-hidden rounded-lg border block'>
                            <table className='w-[100%]'>

                            </table>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
