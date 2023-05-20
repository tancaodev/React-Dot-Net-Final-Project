import { ProductTitle } from './ProductTitle';

export const ProductImage = ({ name, image, type }) => {
  const renderImage = () => {
    if (type === 'smartphones') {
      return (
        <div className='h-[320px] m-auto max-w-[320px] relative w-[100%] text-center'>
          <img src={image} alt='/' className='w-[160px] h-full m-auto block' />
        </div>
      );
    } else if (type === 'cpus') {
      return (
        <div className='h-[320px] m-auto max-w-[320px] relative w-[100%] text-center'>
          <img src={image} alt='/' className='flex h-[100%] w-[100%]' />
        </div>
      );
    } else if (type === 'laptops') {
      return (
        <div className='h-[320px] m-auto max-w-[320px] relative w-[100%] text-center'>
          <img src={image} alt='/' className='h-[300px] object-contain p-2'/>
        </div>
      );
    }
  };

  return (
    <section id='overviews' className='pt-[108px]'>
      <div className='flex flex-col m-auto max-w-[1025px] relative w-[100%] bg-slate-100/80'>
        <div className='flex justify-center relative mb-4'>
          <div className='flex items-center min-w-[50%] w-[50%] box-border px-[45px]'>
            <div className='flex mr-2 invisible'>
              <div className='w-[46px] h-[46px] mr-2 min-w-[46px] relative'></div>
            </div>
          </div>
        </div>

        <div className='flex justify-center'>
          <div className='flex flex-col self-start m-[0_auto] min-w-[50%] w-[50%]'>
            <div className='block relative'>{renderImage()}</div>
          </div>
        </div>
      </div>
      <ProductTitle name={name} />
    </section>
  );
};
