import { CarItemStyles } from './Car.styled';

const CarItem = ({ car }) => {
  const {
    year,
    make,
    model,
    type,
    img,

    functionalities,
    rentalPrice,
    rentalCompany,
    // address,

    mileage,
  } = car;

  return (
    <>
      <CarItemStyles>
        <div className="img-container">
          <img src={img} alt={`${make} - ${model}`} />
        </div>
        <div className="info-container">
          <div className="title-container">
            <h2>
              {make} <span>{model},</span> {year}
            </h2>
            <p>{rentalPrice}</p>
          </div>

          <div className="more-info-container">
            <span>{rentalCompany}</span>|<span>Premium </span>
            <span>{type}</span>|<span>{model}</span>|<span>{mileage}</span>|
            <span>{functionalities[0]}</span>
          </div>
        </div>
        <button className="learn-more-btn">Learn more</button>
      </CarItemStyles>
    </>
  );
};

export default CarItem;
