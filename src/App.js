import { Routes, Route } from 'react-router-dom';
import Cpus from './pages/Cpus';
import Homepage from './pages/Homepage';
import Laptops from './pages/Laptops';
import Phones from './pages/Phones';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/cpus' element={<Cpus />} />
        <Route path='/smartphones' element={<Phones />} />
        <Route path='/laptops' element={<Laptops />} />
      </Routes>
    </>
  );
}

export default App;
