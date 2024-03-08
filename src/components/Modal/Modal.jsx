import { useEffect } from 'react';
import { StyledModal } from './Modal.styled';

const Modal = ({ closeModal }) => {
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
      <div className="modal">
        <button onClick={() => closeModal(false)} className="closeBtn">
          ❌
        </button>
        <h2>Car Details</h2>
      </div>
    </StyledModal>
  );
};

export default Modal;
