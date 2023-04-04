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
  const cpu = state.cpu || {}; // <-- unpack the item from state

  return (
    <div>
      <div className='block  md:h-16'></div>
      <Header />
      <DropDownMenu />
      <SectionContainer />
      <div className='block pt-8 h-[100%] m-auto min-h-[100%]'>
        <Breadcrumbs page={'product-detail'} />
        <ProductImage name={cpu.name} image={cpu.image} />

        <ProductTitle name={cpu.name} />
        <ProductSpecs />
      </div>
    </div>
  );
};
