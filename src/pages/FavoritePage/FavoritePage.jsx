import { useSelector } from 'react-redux';
import { selectIsFavorites } from '../../redux/favorite.selectors';

import {
  AditionalText,
  Container,
  FavoritesPageStyles,
  Title,
} from './FavoritePage.styled';
import CarsList from '../../components/CarsList/CarsList';

const Favorite = () => {
  const favoriteCars = useSelector(selectIsFavorites);
  return (
    <FavoritesPageStyles>
      <Container>
        <Title>Yours favorite cars:</Title>
        {favoriteCars && favoriteCars.length === 0 && (
          <AditionalText>
            Sorry, but you do not have any favorite car.{'😎'}
          </AditionalText>
        )}
        {favoriteCars && favoriteCars.length > 0 && (
          <CarsList cars={favoriteCars} />
        )}
      </Container>
    </FavoritesPageStyles>
  );
};

export default Favorite;
