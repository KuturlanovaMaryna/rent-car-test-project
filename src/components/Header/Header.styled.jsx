import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  padding: 20px;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 26px;
  justify-content: center;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  padding: 8px 16px;
  color: black; /* White text color */
  font-size: 20px;
  padding: 10px;
  border-radius: 16px;
  border: 1px solid rgb(31, 40, 51, 0.5);
  transition: all 0.3s;
  display: inline-flex;
  margin-right: 20px;
  text-align: center;

  &:hover,
  &:focus {
    color: #00baff; /* Blue text color on hover/focus */
    
`;
