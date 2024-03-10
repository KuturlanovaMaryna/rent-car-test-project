import styled from 'styled-components';
import { PiHeartThin } from 'react-icons/pi';
import { PiHeartStraightFill } from 'react-icons/pi';

export const CarItemStyles = styled.li`
  width: calc((100% - 87px) / 4);
  display: flex;
  flex-direction: column;
  align-items: stretch;

  .img-container {
    max-width: 100%;
    margin-bottom: 14px;
    position: relative;
  }

  .img-container img {
    width: 100%;
    height: 268px;
    background: linear-gradient(rgba(18, 20, 23, 0.5), rgba(18, 20, 23, 0));
    border-radius: 14px;
  }

  .favorite-btn {
    background-color: transparent;
    border: none;
    position: absolute;
    top: 14px;
    right: 14px;
  }

  .info-container {
    margin-bottom: 28px;
  }

  .title-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
  }

  .title-container h2,
  .title-container p {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 1);
  }

  .title-container span {
    color: rgba(52, 112, 255, 1);
  }

  .more-info {
    font-size: 12px;
    line-height: 1.5;
    color: rgba(18, 20, 23, 0.5);
  }

  .more-info span {
    margin-right: 6px;
  }

  .more-info span:not(:nth-child(4n + 1)) {
    margin-left: 6px;
  }

  .learn-more-btn {
    margin-top: auto;
    background-color: #3470ff;
    border-radius: 8px;
    color: #ffffff;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    padding-top: 12px;
    padding-bottom: 12px;
    border: none;
    transition: background-color 250ms linear;
  }

  .learn-more-btn:hover,
  .learn-more-btn:focus {
    background-color: #0b44cd;
  }
`;
export const FavoriteIcon = styled(PiHeartStraightFill)`
  width: 18px;
  height: 18px;
  color: #3470ff;
`;
export const NotFavoriteIcon = styled(PiHeartThin)`
  width: 18px;
  height: 18px;
  color: white;
`;
