import styled from '@emotion/styled';
import background from '../../assets/20945729.jpg';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.5),
      rgba(46, 47, 66, 0.5)
    ),
    url(${background});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Title = styled.h1`
  margin: 0;
  margin-right: 10px;
  color: white;
  font-size: 44px;
  font-weight: 800;
  margin-bottom: 48px;
`;
export const Text = styled.p`
  width: 900px;
  color: white;
  font-size: 26px;
  font-weight: 500;
`;
