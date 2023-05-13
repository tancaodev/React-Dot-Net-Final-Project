import React, { useEffect, useRef, useState } from 'react';
import { DropDownMenu } from '../../components/DropDownMenu';
import { Footer } from '../../components/Footer';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { useOutlet } from 'react-router-dom';
import axios from 'axios';

export const ComparisionType = () => {
  const outlet = useOutlet();

  const [data, setData] = useState([]);

  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [results, setResults] = useState([]);
  const resultContainer = useRef(null);
  const [defaultValue, setDefaultValue] = useState('');

  const url_laptop = 'https://localhost:44345/api/laptop/get-laptops';
  const url_cpu = 'https://localhost:44345/api/chipset/get-chipsets';
  const url_phone = 'https://localhost:44345/api/phone/get-phones';

  const laptop_call = axios.get(url_laptop);
  const cpu_call = axios.get(url_cpu);
  const phone_call = axios.get(url_phone);

  const fetchData = async () => {
    Promise.all([laptop_call, cpu_call, phone_call])
      .then((responses) => {
        const list_data = responses[0].data.data.concat(
          responses[1].data.data,
          responses[2].data.data
        );
        setData(list_data);
        setResults(list_data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!resultContainer.current) return;

    resultContainer.current.scrollIntoView({
      block: 'center',
    });
  }, [focusedIndex]);

  const handleKeyDown = (e) => {
    const { key } = e;
    let nextIndexCount = 0;

    // move down
    if (key === 'ArrowDown')
      console.log('Key down: ', focusedIndex, data.length);
      nextIndexCount = (focusedIndex + 1) % results.length;

    // move up
    if (key === 'ArrowUp')
      nextIndexCount = (focusedIndex + results.length - 1) % results.length;
      console.log(nextIndexCount);

    // // hide search results
    // if (key === 'Escape') {
    //   resetSearchComplete();
    // }

    // // select the current item
    // if (key === 'Enter') {
    //   e.preventDefault();
    //   handleSelection(focusedIndex);
    // }

    setFocusedIndex(nextIndexCount);
  };

  // const handleChange = (e) => {
  //   setDefaultValue(e.target.value);
  //   onChange && onChange(e);
  // };

  const handleChange = (e) => {
    setDefaultValue(e.target.value);
    console.log('default value', defaultValue);
    const { target } = e;
    if (!target.value.trim()) return setResults([]);
    const filteredValue = results.filter((data) => {
      console.log(data.name.toLowerCase().startsWith('asus'));
      data.name.toLowerCase().startsWith(target.value);
      console.log('data log: ', data.name.toLowerCase().startsWith(target.value));
    });
    setResults(filteredValue);
  };

  return (
    <div className='h-[100dvh]'>
      <div className='h-16'></div>
      <DropDownMenu />
      <div className='block pt-8 h-[100%] m-auto min-h-[100%]'>
        <Breadcrumbs page={'product-detail'} />
        <div className='max-w-[1170px] w-[90%] relative m-auto box-border block'>
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
                  <div
                    tabIndex={1}
                    onKeyDown={handleKeyDown}
                    className='w-[100%] mb-4 relative'
                  >
                    <input
                      onInput={handleChange}
                      type='text'
                      placeholder='Search your product'
                      className='w-[100%] border-2 rounded-[10px] block p-[6px_28px_6px_12px]'
                    />
                    <div className='absolute mt-1 w-[100%] p-2 shadow-lg rounded-bl rounded-br max-h-56 overflow-y-auto bg-white'>
                      <ul>
                        {data[0] ? (
                          data.map((data, index) => {
                            return (
                              <div
                                key={index}
                                ref={
                                  index === focusedIndex
                                    ? resultContainer
                                    : null
                                }
                                style={{
                                  backgroundColor:
                                    index === focusedIndex
                                      ? 'rgba(0,0,0,0.1)'
                                      : '',
                                }}
                                className={`cursor-pointer hover:bg-black hover:bg-opacity-10 p-2`}
                              >
                                <p>{data.name}</p>
                              </div>
                            );
                          })
                        ) : (
                          <h1>is Loading...</h1>
                        )}
                      </ul>
                    </div>
                  </div>

                  <div className='hidden float-left h-auto w-[100%]'>
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
                  <div className='w-[100%] mb-4 relative '>
                    <input
                      type='text'
                      placeholder='Product name'
                      className='w-[100%] border-2 rounded-[10px] block p-[6px_28px_6px_12px]'
                    />
                  </div>
                  <div className='block float-left h-auto w-[100%]'>
                    <div className='block'>
                      <div className='border bg-white rounded-2xl'>
                        <div className='h-[100%] m-auto max-w-[320px] relative w-[100%] text-center p-4'>
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

            <div className='block invisible'>
              <div>
                <div className='block'>
                  <p>Thông tin cơ bản:</p>
                </div>

                <div className='overflow-hidden rounded-lg border block'>
                  <table className='w-[100%] h-[100dvh]'></table>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='max-w-[1170px] w-[90%] relative m-auto box-border block'>
          <div>
            <div>
              <h1 className='text-center'>
                <div>
                  Compare
                  <span>First Product</span>
                  versus
                  <span>Second Product</span>
                </div>
              </h1>
            </div>

            {outlet || <div className='h-[100dvh]'></div>}
          </div>
        </div> */}
        <Footer />
      </div>
    </div>
  );
};
