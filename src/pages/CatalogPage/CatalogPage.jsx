import { Container } from './CatalogPage.styled';
import { useEffect } from 'react';
// import { useSearchParams } from 'react-router-dom';
import { Loader } from '../../components/Loader/Loader';
import {
  selectCarsData,
  selectisLoading,
} from '../../redux/cars/cars.selectors';
import { useDispatch, useSelector } from 'react-redux';
import CarsList from '../../components/CarsList/CarsList';
import { getAllCars } from '../../redux/cars/cars.reducer';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCarsData);
  const isLoading = useSelector(selectisLoading);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <CarsList cars={cars} />
          <button className="load-more-btn">Load more</button>
        </>
      )}
    </Container>
  );
};

export default CatalogPage;
