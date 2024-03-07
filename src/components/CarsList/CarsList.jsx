import { CarsListStyles } from './CarsList.styled';
import CarItem from '../Car/Car';

const CarsList = ({ cars }) => {
  return (
    <CarsListStyles>
      {cars?.map((car) => (
        <CarItem car={car} key={car.id} />
      ))}
    </CarsListStyles>
  );
};

export default CarsList;
