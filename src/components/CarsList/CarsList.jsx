import { CarsListStyles, LoadMoreBtn } from './CarsList.styled';
import CarItem from '../Car/Car';
import { useState } from 'react';

const CarsList = ({ cars }) => {
  const [showMore, setShowMore] = useState(12);
  const loadMore = () => {
    setShowMore((prev) => prev + 12);
  };
  return (
    <>
      <CarsListStyles>
        {cars?.slice(0, showMore).map((car) => (
          <CarItem car={car} key={car.id} />
        ))}
      </CarsListStyles>
      <LoadMoreBtn onClick={loadMore}>Load more</LoadMoreBtn>
    </>
  );
};

export default CarsList;
