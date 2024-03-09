import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

export const StyledModal = styled.div`
  z-index: 1600;
  position: fixed;
  top: 0;
  // right: 0;
  // bottom: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  &:hover {
    cursor: pointer;
  }
  .modal {
    width: 90%;
    max-width: 541px;
    height: 80%;
    background-color: white;
    border-radius: 24px;
    position: absolute;
    overflow: hidden;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    &:hover {
      cursor: auto;
    }
  }
`;
export const CloseIcon = styled(GrClose)`
  position: absolute;
  top: 15px;
  right: 15px;
  width: 24px;
  height: 24px;
  stroke: black;
  transition: stroke 300ms linear;
  cursor: pointer;
  background-color: transparent;

  border: none;
`;
export const MoreInfoCarStyles = styled.div`
  padding: 40px;
  border-radius: 12px;
  width: 541px;

  img {
    border-radius: 14px;
    margin-bottom: 14px;
    width: 100%;
  }

  .main-info-container {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-bottom: 14px;
    max-width: 277px;
  }

  .main-info-container .color-title {
    color: rgba(52, 112, 255, 1);
  }

  .main-info-container h2,
  .main-info-container p {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: var(--primary-text-color);
  }

  .more-info-container {
    font-size: 12px;
    line-height: 1.5;
    color: var(--secondary-text-color);
  }

  .more-info-container span {
    margin-right: 6px;
  }

  .more-info-container span:not(:nth-child(5n + 1)) {
    margin-left: 6px;
  }

  .description {
    font-size: 14px;
    line-height: 1.43;
  }

  .access span {
    font-size: 12px;
    line-height: 1.5;
    color: var(--secondary-text-color);
  }
  .access-title,
  .rent-title {
    color: var(--primary-text-color);
    font-weight: 500;
    font-size: 14px;
    line-height: 1.43;
    margin-bottom: 8px;
    margin-top: 24px;
  }
  .rent-positions-container {
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
  }

  .rent-position {
    padding: 7px 14px;
    background-color: rgba(249, 249, 249, 1);
    font-size: 12px;
    line-height: 1.5;
    color: rgba(54, 53, 53, 1);
    border-radius: 35px;
  }

  .colorize {
    font-family: 'Montserrat';
    font-weight: 600;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(52, 112, 255, 1);
  }

  .rent-btn {
    display: block;
    background-color: var(--btn-bg-color);
    padding: 12px 50px;
    color: var(--btn-text-color);
    text-decoration: none;
    width: 168px;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.5;
    border-radius: 12px;
    margin-top: 24px;
    transition: background-color var(--main-cubic);
  }

  .rent-btn:hover,
  .rent-btn:focus {
    background-color: var(--btn-hover-bg-color);
  }
`;
