//libraries
import 'react-loading-skeleton/dist/skeleton.css';
import { Routes, Route } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import jwt_decode from 'jwt-decode';

//hooks
import { useAuth } from './hooks/useAuth';

//components
import { Cpus } from './pages/cpus/Cpus';
import { Phones } from './pages/phones/Phones';
import { Laptops } from './pages/laptops/Laptops';
import { Login } from './pages/login/Login';
import { Categories } from './pages/caterogies/Categories';
import { Homepage } from './pages/homepage/Homepage';
import { ProductDetail } from './pages/productDetail/ProductDetail';
import { Admin } from './admin/Admin';
import { AddChipset } from './admin/AddChipset';
import { AddLaptop } from './admin/AddLaptop';
import { AddPhone } from './admin/AddPhone';
import { AddImage } from './admin/AddImage';
import { ShowChipset } from './admin/ShowChipset';
import { ShowLaptop } from './admin/ShowLaptop';
import { ShowPhone } from './admin/ShowPhone';
import { ShowImage } from './admin/ShowImage';
import { DashboardLayout } from './admin/layouts/dashboard/DashboardLayout';
import { About } from './pages/about/About';
import { Register } from './pages/register/Register';
import { Comparision } from './pages/comparision/Comparision';
import { RequireAuth } from './features/auth/RequireAuth';
import { ROLES } from './config/roles';
function App() {
  let navigate = useNavigate();

  const toAdmin = () => {
    let path = `/admin`;
    navigate(path);
  };

  useEffect(() => {
    // Tìm đối tượng gốc của trang
    const rootElement = document.getElementById('root');

    // Thiết lập thuộc tính scrollTop của đối tượng gốc thành 0 sau mỗi lần render
    rootElement.scrollTop = 0;
  }, []);

  return (
    <SkeletonTheme baseColor='#f2f2f2' highlightColor='#e6e6e6'>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<Homepage />} />
        <Route path='/cpus' element={<Cpus />} />
        <Route path='/cpus/:productName' element={<ProductDetail />} />
        <Route path='/smartphones' element={<Phones />} />
        <Route path='/smartphones/:productName' element={<ProductDetail />} />
        <Route path='/laptops' element={<Laptops />} />
        <Route path='/laptops/:laptopName' element={<ProductDetail />} />
        <Route path='/register' element={<Register />} />
        <Route path='/categories' element={<Categories />} />
        <Route path='/comparisions' element={<Comparision />} />
        <Route path='/about' element={<About />} />


        <Route path='/login' element={<Login />} />

        {/* Protected Routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Admin]} />}>
          <Route path='/admin' element={<Admin />}>
            <Route path='/admin/add-chipset' element={<AddChipset />} />
            <Route path='/admin/add-laptop' element={<AddLaptop />} />
            <Route path='/admin/add-phone' element={<AddPhone />} />
            <Route path='/admin/add-image' element={<AddImage />} />
            <Route path='/admin/show-chipset' element={<ShowChipset />} />
            <Route path='/admin/show-laptop' element={<ShowLaptop />} />
            <Route path='/admin/show-phone' element={<ShowPhone />} />
            <Route path='/admin/show-image' element={<ShowImage />} />
          </Route>
        </Route>
        {/* End Protected Routes */}
      </Routes>
    </SkeletonTheme>
  );
}

export default App;
