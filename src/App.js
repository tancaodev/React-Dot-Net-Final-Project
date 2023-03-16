import { Routes, Route } from 'react-router-dom';
import { CpuDetail } from './components/CpuDetail';
import { Categories } from './pages/Categories';
import { Cpus } from './pages/Cpus';
import { Homepage } from './pages/Homepage';
import { LaptopDetails } from './pages/laptops/LaptopDetails';
import { Laptops } from './pages/laptops/Laptops';
import { Login } from './pages/Login';
import { Phones } from './pages/Phones';
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
