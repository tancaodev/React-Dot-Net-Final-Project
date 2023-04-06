import { useLocation } from 'react-router-dom';

import { Breadcrumbs } from '../../components/Breadcrumbs';
import { DropDownMenu } from '../../components/DropDownMenu';
import { Header } from '../../components/Header';
import { ProductImage } from './ProductImage';
import { ProductSpecs } from './ProductSpecs';
import { ProductTitle } from './ProductTitle';
import { SectionContainer } from './SectionContainer';

export const ProductDetail = () => {
  const { state } = useLocation();
  const product = state.cpu ||  state.phone || {}; // <-- unpack the item from state
  return (
    <div className='h-[100dvh]'>
      {/* <Header /> */}
      <div className='h-16'></div>
      <DropDownMenu />
      <SectionContainer />

      <div className='block pt-8 h-[100%] m-auto min-h-[100%]'>
        <Breadcrumbs page={'product-detail'} />
        <ProductImage name={product.name} image={product.image} type={product.type}/>

        <ProductSpecs />
      </div>
    </div>
  );
};
