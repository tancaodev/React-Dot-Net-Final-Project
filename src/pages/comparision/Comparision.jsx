import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { DropDownMenu } from '../../components/DropDownMenu';
import { Footer } from '../../components/Footer';
import { Breadcrumbs } from '../../components/Breadcrumbs';
import { SectionContainer } from '../productDetail/SectionContainer';
import { ShowTwoProductSpec } from '../productDetail/compare/ShowTwoProductSpec';

export const Comparision = () => {
  const [product1, setProduct1] = useState();
  const [product2, setProduct2] = useState();

  const location = useLocation();
  const arr = location.pathname.split('/').filter((x) => x !== '');

  function replaceDash(str) {
    // Sử dụng biểu thức chính quy để tìm kiếm các mẫu phù hợp
    const regex = /(?<!i\d+)-/g;

    // Thực hiện thay thế dấu "-" thành "%20", trừ các trường hợp đã xác định
    return str.replace(regex, '%20');
  }

  let name1 = replaceDash(arr[2]);
  let name2 = replaceDash(arr[3]);

  let url = `https://localhost:44345/api/chipset/compare-chipsets/${name1}/${name2}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        if (
          data[0].result.statusCode === 200 &&
          data[1].result.statusCode === 200
        ) {
          setProduct1(data[0].result.value);
          setProduct2(data[1].result.value);
        } else {
          setProduct2(null);
        }
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [url]);

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
  return (
    <div>
      {product1 && product2 !== null ? (
        <div className='h-[100dvh]'>
          <div className='h-16'></div>
          <DropDownMenu />
          <SectionContainer product={''} page={'compare'} />
          <div className='block pt-8 h-[100%] m-auto min-h-[100%]'>
            <Breadcrumbs page={'product-detail'} />
            <div
              id='overviews'
              className='max-w-[1170px] w-[90%] relative m-auto box-border block pt-24'
            >
              <div>
                <div>
                  <h1 className='text-center'>
                    <div>
                      Compare&nbsp;
                      <span>{product1.name}</span>
                      &nbsp;vs&nbsp;
                      <span>{product2.name}</span>
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
                      <div tabIndex={1} className='w-[100%] mb-4 relative'>
                        <input
                          value={product2.name}
                          type='text'
                          placeholder='Search your product'
                          className='w-[100%] border-2 rounded-[10px] block p-[6px_28px_6px_12px]
                bg-gradient-to-r from-[#ff5631] to-[#ff164b] text-white'
                          readOnly
                        />
                      </div>

                      <div className='float-left h-auto w-[100%]'>
                        <div className='block'>
                          <div className='border rounded-2xl'>
                            {renderImage({
                              type: product2.productType,
                              image: product2.image,
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <ShowTwoProductSpec
              product1={product1}
              product2={product2}
              type={product1.productType}
            />

            <div className='h-4'></div>
            <Footer />
          </div>
        </div>
      ) : (
        <p>Notfound</p>
      )}
    </div>
  );
};
