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
import { getAllCars, FilteredCars } from '../../redux/cars/cars.reducer';
import FiltersForm from '../../components/Filter/Filter';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCarsData);
  const isLoading = useSelector(selectisLoading);

  useEffect(() => {
    dispatch(getAllCars());
  }, [dispatch]);

  const onFilterSubmit = (value) => {
    dispatch(FilteredCars(value));
  };
  return (
    <Container>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <FiltersForm onClick={onFilterSubmit} />
          <CarsList cars={cars} />
        </>
      )}
    </Container>
  );
};

export default CatalogPage;
