import React, { useCallback, useEffect, useRef, useState } from 'react';
import { DropDownMenu } from '../../components/DropDownMenu';
import { Footer } from '../../components/Footer';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { useOutlet } from 'react-router-dom';
import axios from 'axios';

export const ComparisionType = () => {
  const outlet = useOutlet();

  //search input
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [results, setResults] = useState([]);
  const resultContainer = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState();
  const [showResults, setShowResults] = useState(false);

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

  //fetch data from api
  useEffect(() => {
    fetchData();
  }, []);

  //make focus on div has focusedIndex
  useEffect(() => {
    if (!resultContainer.current) return;

    resultContainer.current.scrollIntoView({
      block: 'center',
    });
  }, [focusedIndex]);

  // useEffect(() => {
  //   if (results.length > 0 && !showResults) setShowResults(true);

  //   if (results.length <= 0) setShowResults(false);
  // }, [results]);

  //make searchText has data from onClick or enter 
  useEffect(() => {
    if (selectedProduct) {
      setSearchText(selectedProduct.name);
    } 
  }, [selectedProduct]);

  //move up and down, escape and enter button event
  const handleKeyDown = (e) => {
    const { key } = e;
    let nextIndexCount = 0;
    if (results.length === 0) {
      setFocusedIndex(0);
    }
    // move down
    if (key === 'ArrowDown') {
      nextIndexCount = (focusedIndex + 1) % results.length;
    }

    // move up
    if (key === 'ArrowUp') {
      nextIndexCount = (focusedIndex + results.length - 1) % results.length;
    }

    // hide search results
    if (key === 'Escape') {
      resetSearchComplete();
    }

    // select the current item
    if (key === 'Enter') {
      e.preventDefault();
      handleSelection(focusedIndex);
    }

    if (results.length === 0) {
      setFocusedIndex(-1);
    }
    setFocusedIndex(nextIndexCount);
  };

  //when user focus on input show view
  const handleShow = () => {
    setShowResults(true);
  }

  //when user pick item
  const handleSelection = (selectedIndex) => {
    const selectedItem = results[selectedIndex];
    if (!selectedItem) return resetSearchComplete();
    setSelectedProduct(selectedItem)
    resetSearchComplete();
  };

  //when user delete all text in input
  const resetSearchComplete = useCallback(() => {
    setFocusedIndex(-1);
    setShowResults(false);
  }, []);

  //show data base on user's input
  const handleInputChange = (e) => {
    // setDefaultValue(e.target.value);
    const { target } = e;
    setShowResults(true);

    setSearchText(target.value);

    if (!target.value.trim()) return setResults(data);

    const filteredValue = data.filter(({ name }) => {
      return name.toLowerCase().includes(searchText.toLowerCase());
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
                    onBlur={resetSearchComplete}
                    onKeyDown={handleKeyDown}
                    className='w-[100%] mb-4 relative'
                  >
                    <input
                      onChange={handleInputChange}
                      onFocus={handleShow}
                      value={searchText}
                      type='text'
                      placeholder='Search your product'
                      className='w-[100%] border-2 rounded-[10px] block p-[6px_28px_6px_12px]'
                    />
                    {showResults && (
                      <div className='absolute mt-1 w-[100%] p-2 shadow-lg rounded-bl rounded-br max-h-56 overflow-y-auto bg-white'>
                        <ul>
                          {results.length === 0 ? (
                            <h1>Can't find product</h1>
                          ) : (
                            results.map((data, index) => {
                              return (
                                <div
                                  key={index}
                                  onMouseDown={() => handleSelection(index)}
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
                          )}
                        </ul>
                      </div>
                    )}
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
