import { Breadcrumbs } from '../../components/Breadcrumbs';
import { TopBar } from '../../components/TopBar'
import { Navbar } from '../../components/Navbar';
import { Footer } from '../../components/Footer';

export const Categories = () => {
  return (
    <div>
      <TopBar />
      <Navbar />
      <Breadcrumbs />
      <div className='flex justify-center' >
        <h1 className='text-2xl'>
          This feature is currently under development
        </h1>
      </div>
      <div className='h-[500px]'></div>
      <Footer />
    </div>
  );
};
