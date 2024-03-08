import { CarItemStyles } from './Car.styled';

const CarItem = ({ car }) => {
  return (
    <>
      <CarItemStyles>
        <div className="photo-container">
          {/* <button className="favorite-btn" onClick={}></button> */}
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
        <button className="learn-more-btn">Learn more</button>
      </CarItemStyles>
    </>
  );
};

export default CarItem;
