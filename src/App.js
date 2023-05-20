//libraries
import 'react-loading-skeleton/dist/skeleton.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';

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
import { About } from './pages/about/About';
import { Register } from './pages/register/Register';
import { Comparision } from './pages/comparision/Comparision';
import { RequireAuth } from './features/auth/RequireAuth';
import { ROLES } from './config/roles';
import { ComparisionType } from './pages/comparision/ComparisionType';
import { ChangePassword } from './pages/login/ChangePassword';
import { NotFound } from './pages/404';

function App() {
  const { role } = useAuth();

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
        <Route path='/comparisions' element={<Comparision />}></Route>
        <Route path='/comparisions/:product1' element={<ComparisionType />}>
          {/* <Route
            path='/comparisions/:product1-vs-product2'
            element={<Comparision />}
          /> */}
        </Route>
        <Route path='/about' element={<About />} />

        {role === 'Guest' ? (
          <Route path='/login' element={<Login />} />
        ) : (
          <Route element={<RequireAuth allowedRoles={[]} />}>
            <Route path='/login' element={<Login />} />
          </Route>
        )}

        <Route path='/change-password' element={<ChangePassword />} />

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

        <Route path='*' element={<Navigate to='/404' replace />} />
        <Route path='/404' element={<NotFound />} />
      </Routes>
    </SkeletonTheme>
  );
}

export default App;
