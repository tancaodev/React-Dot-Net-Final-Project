import { Routes, Route } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

import { Cpus } from './pages/cpus/Cpus';
import { Phones } from './pages/phones/Phones';
import { Laptops } from './pages/laptops/Laptops';
import { Login } from './pages/login/Login';
import { Categories } from './pages/caterogies/Categories';
import { Homepage } from './pages/homepage/Homepage';
import { ProductDetail } from './pages/productDetail/ProductDetail';

function App() {
  return (
    <SkeletonTheme baseColor='#f2f2f2' highlightColor='#e6e6e6'>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/cpus' element={<Cpus />} />
        <Route path='/cpus/:productName' element={<ProductDetail />} />
        <Route path='/smartphones' element={<Phones />} />
        <Route path='/smartphones/:productName' element={<ProductDetail />} />
        <Route path='/laptops' element={<Laptops />} />
        <Route path='/laptops/:laptopName' element={<ProductDetail />} />
        <Route path='/login' element={<Login />} />
        <Route path='/categories' element={<Categories />} />
      </Routes>
    </SkeletonTheme>
  );
}

export default App;
