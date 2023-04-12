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
  const { state } = useLocation();
  const getProduct = state.cpu || state.phone || state.laptop || {}; // <-- unpack the item from state
  const productName = getProduct.name
  const type = getProduct.type

  //call api get data from product name
  const [product, setProduct] = useState([]);

  let url = '';
  if (type === 'cpu') {
    url = `https://localhost:44345/api/chipset/get-chipset-by-name/${productName}`;
  } else if (type === 'phone') {
    url = `https://localhost:44345/api/phone/get-phone-by-name/${productName}`;
  }
  else if (type === 'laptop') {
    url = `https://localhost:44345/api/laptop/get-laptop-by-name/${productName}`
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(url);
      const data = response.data;
      setProduct(data[0]);
    } catch (error) {
      console.log(error.response);
    }
  };

  useEffect(() => {
    fetchData();
  },);

  return (
    <div className='h-[100dvh]'>
      <div className='h-16'></div>
      <DropDownMenu />
      <SectionContainer />

      <div className='block pt-8 h-[100%] m-auto min-h-[100%]'>
        <Breadcrumbs page={'product-detail'} />
        <ProductImage
          name={product.name}
          image={product.image}
          type={type}
        />

        <ProductSpecs product={product} type={type} />
      <Footer />
      </div>

    </div>
  );
};
