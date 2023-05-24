import axios from 'axios';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { DropDownMenu } from '../../components/DropDownMenu';
import { Footer } from '../../components/Footer';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { SectionContainer } from '../productDetail/SectionContainer';

export const ComparisionType = () => {
  //get first product type and name from url
  const location = useLocation();
  const arr = location.pathname.split('/').filter((x) => x !== '');
  let type = arr[0];

  //search input
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [results, setResults] = useState([]);
  const resultContainer = useRef(null);
  const [selectedProduct, setSelectedProduct] = useState();
  const [showResults, setShowResults] = useState(false);

  // first product
  const [product1, setProduct1] = useState();

  let navigate = useNavigate();

  //use param get first product name from url
  let name1 = replaceDash(arr[2]);

  //fetch first product data from api
  const api_cpu = `https://localhost:44345/api/chipset/get-chipset-by-name/${name1}`;
  const api_phone = `https://localhost:44345/api/phone/get-phone-by-name/${name1}`;
  const api_laptop = `https://localhost:44345/api/laptop/get-laptop-by-name/${name1}`;

  let api_call = '';

  //fetch list product
  const url_laptop = 'https://localhost:44345/api/laptop/get-laptops';
  const url_cpu = 'https://localhost:44345/api/chipset/get-chipsets';
  const url_phone = 'https://localhost:44345/api/phone/get-phones';

  let url = '';

  //use to replace '-' to '%20'
  function replaceDash(str) {
    // Sử dụng biểu thức chính quy để tìm kiếm các mẫu phù hợp
    const regex = /(?<!i\d+)-/g;

    // Thực hiện thay thế dấu "-" thành "%20", trừ các trường hợp đã xác định
    return str.replace(regex, '%20');
  }

  const checkFirstProductType = () => {
    if (type === 'cpus') {
      url = url_cpu;
      api_call = api_cpu;
    } else if (type === 'smartphones') {
      url = url_phone;
      api_call = api_phone;
    } else if (type === 'laptops') {
      url = url_laptop;
      api_call = api_laptop;
    }
  };

  checkFirstProductType();

  //fetch data from api
  useEffect(() => {
    const getFirstProduct = async () => {
      try {
        const response = await axios.get(api_call);
        const data = response.data;
        setProduct1(data);
      } catch (error) {
        console.log(error.response);
      }
    };

    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setData(data.data);
        setResults(data.data);
      } catch (error) {
        console.log(error.response);
      }
    };

    getFirstProduct();
    fetchData();
  }, [api_call, url]);

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
  };

  //when user pick item
  const handleSelection = (selectedIndex) => {
    const selectedItem = results[selectedIndex];
    if (!selectedItem) return resetSearchComplete();
    setSelectedProduct(selectedItem);
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

  //this function used to render image for each product type
  const renderImage = ({ type, image }) => {
    if (type === 'phone') {
      return (
        <div className='h-[100%] m-auto max-w-[320px] relative w-[100%] text-center p-4'>
          <img
            src={image}
            alt='/'
            className='w-[160px] h-[320px] m-auto block'
          />
        </div>
      );
    } else if (type === 'cpu') {
      return (
        <div className='h-[320px] m-auto max-w-[320px] relative w-[100%] text-center p-4'>
          <img src={image} alt='/' className='flex h-[100%] w-[100%]' />
        </div>
      );
    } else if (type === 'laptop') {
      return (
        <div className='h-[100%] m-auto max-w-[320px] relative w-[100%] text-center p-4'>
          <img src={image} alt='/' className='h-[300px] object-contain' />
        </div>
      );
    }
  };

  const fetchProduct = () => {
    const routeChange = () => {
      const localizeName = (name) => {
        if (!name) return;
        let locallize_name = name.replace(/ /g, '-');
        return locallize_name;
      };

      let product1Name = localizeName(product1.name);
      let product2Name = localizeName(selectedProduct.name);

      let path = `/${type}/comparisions/${product1Name}/${product2Name}`;

      navigate(path, {
        state: {
          product1: product1.name,
          product2: selectedProduct.name,
        },
      });
    };

    routeChange();
  };

  return (
    <>
      {product1 ? (
        <div className='h-[100dvh]'>
          <div className='h-16'></div>
          <DropDownMenu />
          <div className='block pt-8 h-[100%] m-auto min-h-[100%]'>
            <Breadcrumbs page={'product-detail'} />
            <div
              id='overviews'
              className='max-w-[1170px] w-[90%] relative m-auto box-border block pt-16'
            >
              <div>
                <div>
                  <h1 className='text-center'>
                    <div>
                      Compare&nbsp;
                      <span
                        className='text-xl text-transparent bg-clip-text 
                      bg-gradient-to-r from-[#3c59fc] to-[#7600e0]'
                      >
                        {product1.name}
                      </span>
                      &nbsp;vs&nbsp;
                      {selectedProduct ? (
                        <span
                          className='text-xl text-transparent bg-clip-text 
                          bg-gradient-to-r from-[#ff5631] to-[#ff164b]'
                        >
                          {selectedProduct.name}
                        </span>
                      ) : (
                        <span></span>
                      )}
                    </div>
                  </h1>

                  <div className='flex'>
                    <div className='block basis-0 flex-grow flex-shrink p-3'></div>

                    <div className='block basis-0 flex-grow flex-shrink p-3 w-[25%]'>
                      <div className='w-[100%] mb-4 relative '>
                        <input
                          value={product1.name}
                          type='text'
                          placeholder={'Product name'}
                          className='w-[100%] border-2 rounded-[10px] block p-[6px_28px_6px_12px] 
                      bg-gradient-to-r from-[#3c59fc] to-[#7600e0] text-white'
                          readOnly
                        />
                      </div>
                      <div className='block float-left h-auto w-[100%]'>
                        <div className='block'>
                          <div className='border bg-white rounded-2xl'>
                            {renderImage({
                              type: product1.productType,
                              image: product1.image,
                            })}
                          </div>
                        </div>
                      </div>
                    </div>

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
                          className='w-[100%] border-2 rounded-[10px] block p-[6px_28px_6px_12px]
                      bg-gradient-to-r from-[#ff5631] to-[#ff164b] text-white'
                        />
                        {showResults && (
                          <div className='z-10 absolute mt-1 w-[100%] p-2 shadow-lg rounded-bl rounded-br max-h-56 overflow-y-auto bg-white'>
                            <ul>
                              {results.length === 0 ? (
                                <h1>Can't find product</h1>
                              ) : (
                                results.map((data, index) => {
                                  return (
                                    <div
                                      key={index}
                                      onMouseDown={() => {
                                        handleSelection(index);
                                      }}
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

                      <div className='float-left h-auto w-[100%]'>
                        <div className='block'>
                          <div className='border rounded-2xl'>
                            {/* {renderImage()} */}
                            {selectedProduct
                              ? renderImage({
                                  type: product1.productType,
                                  image: selectedProduct.image,
                                })
                              : renderImage({
                                  type: product1.productType,
                                  image:
                                    'https://cdn2.cellphones.com.vn/x/media/icon/icon-phtb-2.png',
                                })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className='text-right'>
                <button
                  className='border-2 p-4 mr-4 mb-4 bg-purple-400 hover:bg-blue-500 hover:text-white'
                  onClick={fetchProduct}
                >
                  Compare
                </button>
              </div>
            </div>

            {/* {outlet} */}
            <div className='h-4'></div>
            <Footer />
          </div>
        </div>
      ) : (
        <h1>Please wait</h1>
      )}
    </>
  );
};
