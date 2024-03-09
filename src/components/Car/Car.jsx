import Modal from '../Modal/Modal';
import { CarItemStyles, NotFavoriteIcon, FavoriteIcon } from './Car.styled';
import { useState } from 'react';

const CarItem = ({ car }) => {
  const [openModal, setOpenModal] = useState(false);
  const [isFavorite, setisFavorite] = useState(false);
  const handleToggleisFavorite = () => {
    setisFavorite(!isFavorite);
  };
  return (
    <>
      <CarItemStyles>
        <div className="photo-container">
          <button className="favorite-btn" onClick={handleToggleisFavorite}>
            {!isFavorite ? <NotFavoriteIcon size={18} /> : <FavoriteIcon />}
          </button>

          <img src={car.img} alt={`${car.make} - ${car.model}`} />
        </div>
        <div className="info-container">
          <div className="title-container">
            <h2>
              {car.make} <span>{car.model},</span> {car.year}
            </h2>
            <p>{car.rentalPrice}</p>
          </div>

          <div className="more-info">
            <span>{car.address.split(', ')[1]}</span>|
            <span>{car.address.split(', ')[2]}</span>|
            <span>{car.rentalCompany}</span>|<span>Premium </span>
            <span>{car.type}</span>|<span>{car.model}</span>|
            <span>{car.mileage}</span>|<span>{car.functionalities[0]}</span>
          </div>
        </div>
        <button className="learn-more-btn" onClick={() => setOpenModal(true)}>
          Learn more
        </button>
      </CarItemStyles>
      {openModal && <Modal car={car} closeModal={setOpenModal} />}
    </>
  );
};

export default CarItem;
