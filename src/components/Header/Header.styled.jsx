import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 20px;
  background-color: #7d97f4;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 26px;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  width: 126px;
  padding: 8px 16px;
  color: black; /* White text color */
  font-size: 20px;
  padding: 10px;
  border-radius: 16px;
  border: 1px solid rgb(254, 130, 120, 0.5);
  transition: all 0.3s;
  font-size: 24px;
  margin-right: 20px;
  text-align: center;
  background-color: #feb3b0;

  &:hover,
  &:focus {
    background-color: #ff847c;
    color: black;
  }

  &.active {
    background-color: #ff847c;
    color: black;
  }
`;
