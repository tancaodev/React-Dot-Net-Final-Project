import Skeleton from 'react-loading-skeleton';

export const ProductSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((item, i) => (
      <div className='rounded-md shadow-md' key={i}>
        <Skeleton height={600} />
      </div>
    ));
};
