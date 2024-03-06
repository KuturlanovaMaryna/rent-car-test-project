import { Container, Title, Text } from './HomePage.styled';

const HomePage = () => {
  return (
    <Container>
      <Title>A trusted car rental!</Title>
      <Text>
        The mission of our company is to make car rental service comfortable for
        both business and family; to simplify the life of customers who use our
        service. For this purpose we are guided by such principles as honesty,
        transparency and trust. <br />
        Our main value is reliability!
        <br />
        Let us choose the right car for you.
      </Text>
    </Container>
  );
};

export default HomePage;
