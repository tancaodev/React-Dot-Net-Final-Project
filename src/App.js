import { Routes, Route } from 'react-router-dom';

import { Cpus } from './pages/cpus/Cpus';
import { LaptopDetails } from './pages/laptops/LaptopDetails';
import { Phones } from './pages/phones/Phones';
import { Laptops } from './pages/laptops/Laptops'
import { Login } from './pages/login/Login';
import { Categories } from './pages/caterogies/Categories';
import { Homepage } from './pages/homepage/Homepage';
import { CpuDetail } from './pages/cpus/CpuDetail';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/cpus' element={<Cpus />}>
        <Route path=':cpuID' element={<CpuDetail />} />
      </Route>
      <Route path='/smartphones' element={<Phones />} />
      <Route path='/laptops' element={<Laptops />}>
      </Route>
        <Route path='/laptops/1' element={<LaptopDetails />} />
      <Route path='/login' element={<Login />} />
      <Route path='/categories' element={<Categories />} />
    </Routes>
  );
}

export default App;
