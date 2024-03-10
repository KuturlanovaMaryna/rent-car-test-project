import styled from 'styled-components';

export const CarsListStyles = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 50px 29px;
`;
export const LoadMoreBtn = styled.button`
  background-color: transparent;
  border: none;
  color: #3470ff;
  text-decoration: underline;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
  margin-bottom: 150px;
  transition: color 300ms linear;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
