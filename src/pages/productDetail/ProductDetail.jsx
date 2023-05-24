import { useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { DropDownMenu } from '../../components/DropDownMenu';
import { ProductImage } from './ProductImage';
import { ProductSpecs } from './ProductSpecs';
import { SectionContainer } from './SectionContainer';
import { Footer } from '../../components/Footer';

export const ProductDetail = () => {
  //call api get data from product name
  const [product, setProduct] = useState([]);

  const location = useLocation();
  const arr = location.pathname.split('/').filter((item) => item !== '');
  let type = arr[0];
  let productName = arr[1];

  //for cpu
  function replaceDash(str) {
    // Sử dụng biểu thức chính quy để tìm kiếm các mẫu phù hợp
    const regex = /(?<!i\d+)-/g;
  
    // Thực hiện thay thế dấu "-" thành "%20", trừ các trường hợp đã xác định
    return str.replace(regex, '%20');
  } 
  let cpuName = replaceDash(productName);

  //for phone and laptop
  const localizeName = (name) => {
    if (!name) return;
    let locallize_name = name.replace(/-/g, '%20');
    return locallize_name;
  };

  const url_product_name = localizeName(productName);

  let url = '';

  if (type === 'cpus') {
    url = `https://localhost:44345/api/chipset/get-chipset-by-name/${cpuName}`;
  } else if (type === 'smartphones') {
    url = `https://localhost:44345/api/phone/get-phone-by-name/${url_product_name}`;
  } else if (type === 'laptops') {
    url = `https://localhost:44345/api/laptop/get-laptop-by-name/${url_product_name}`;
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        const data = response.data;
        setProduct(data);
      } catch (error) {
        console.log(error.response);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div className='h-[100dvh]'>
      <div className='h-16'></div>
      <DropDownMenu />
      <SectionContainer product={product} />

      <div className='block pt-8 h-[100%] m-auto min-h-[100%]'>
        <Breadcrumbs page={'product-detail'} />
        <ProductImage name={product.name} image={product.image} type={type} />

        <ProductSpecs product={product} type={type} />
        <Footer />
      </div>
    </div>
  );
};
