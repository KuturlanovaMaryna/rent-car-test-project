import { useEffect } from 'react';
import {
  StyledModal,
  CloseIcon,
  MoreInfoCarStyles,
  ModalBlok,
  CloseButton,
  InfoContainer,
  Description,
  RentButton,
} from './Modal.styled';

const Modal = ({ car, closeModal }) => {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [closeModal]);

  const handleOverayClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <StyledModal onClick={handleOverayClick}>
      <ModalBlok>
        <CloseButton onClick={() => closeModal(false)} className="closeBtn">
          <CloseIcon />
        </CloseButton>
        <MoreInfoCarStyles>
          <img src={car.img} alt={`${car.make} - ${car.model}`} />
          <InfoContainer>
            <h2>
              {car.make} <span className="color-title">{car.model},</span>{' '}
              {car.year}
            </h2>
            <div className="more-info-container">
              <span>{car.address.split(', ')[1]}</span>|
              <span>{car.address.split(', ')[2]}</span>|<span>Id:{car.id}</span>
              |<span>Year: {car.year} </span> |<span>Type: {car.type}</span>{' '}
              <span>Fuel Consumption{car.fuelConsumption}</span>|
              <span>Engine Size: {car.engineSize}</span>
            </div>
          </InfoContainer>
          <Description>{car.description}</Description>
          <div className="access-func">
            <h3 className="access-title">Accessories and functionalities:</h3>
            <div className="access">
              {car.accessories.map((access, index, arr) => (
                <span key={access}>
                  {index === arr.length - 1 ? access : `${access} | `}
                </span>
              ))}
              {car.functionalities.map((func, index, arr) => (
                <span key={func}>
                  {index === arr.length - 1 ? func : `${func} | `}{' '}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="rent-title">Rental Conditions </h3>
            <div className="rent-positions-container">
              {car.rentalConditions.split('\n').map((el, index) =>
                index === 0 ? (
                  <p key={index} className="rent-position monserat">
                    {el.split(' ')[0]} {el.split(' ')[1]}{' '}
                    <span className="colorize">{el.split(' ')[2]}</span>
                  </p>
                ) : (
                  <p key={index} className="rent-position manrope">
                    {el}
                  </p>
                )
              )}
              <p className="rent-position monserat">
                Mileage:{' '}
                <span className="colorize">
                  {car.mileage.toLocaleString('ru-RU')}
                </span>
              </p>
              <p className="rent-position monserat">
                Price: <span className="colorize">{car.rentalPrice}</span>
              </p>
            </div>
          </div>
          <RentButton href="tel:++380730000000">Rental car</RentButton>
        </MoreInfoCarStyles>
      </ModalBlok>
    </StyledModal>
  );
};

export default Modal;
