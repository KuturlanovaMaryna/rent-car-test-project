import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';

export const StyledModal = styled.div`
  z-index: 1600;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
  background-color: rgba(18, 20, 23, 0.5);
  &:hover {
    cursor: pointer;
  }
`;
export const ModalBlok = styled.div`
  width: 90%;
  max-width: 541px;
  min-height: 70%;
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
`;
export const CloseButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
  transition: stroke 300ms linear;
  cursor: pointer;
  background-color: transparent;
  border: none;
`;
export const CloseIcon = styled(GrClose)`
  width: 24px;
  height: 24px;
  stroke: black;
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

  .more-info-container {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }

  .more-info-container span {
    margin-right: 6px;
  }

  .more-info-container span:not(:nth-child(5n + 1)) {
    margin-left: 6px;
  }

  .access span {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }
  .access-title,
  .rent-title {
    color: #121417;
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
    font-weight: 600;
    font-size: 12px;
    line-height: 1.5;
    color: rgba(52, 112, 255, 1);
  }
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-bottom: 14px;
  max-width: 277px;

  .color-title {
    color: rgba(52, 112, 255, 1);

   h2,
   p {
    font-weight: 500;
    font-size: 18px;
    line-height: 1.33;
    color: #121417;
  }
`;
export const Description = styled.div`
  font-size: 14px;
  line-height: 1.43;
`;
export const RentButton = styled.a`
  display: block;
  background-color: #3470ff;
  padding: 12px 50px;
  color: #ffffff;
  text-decoration: none;
  width: 168px;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 12px;
  margin-top: 24px;
  transition: background-color 250ms linear;

  :hover,
  :focus {
    background-color: #0b44cd;
  }
`;
