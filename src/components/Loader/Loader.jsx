import { ThreeDots } from 'react-loader-spinner';
import { LoaderWrrap } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderWrrap>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#fcfcfc"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </LoaderWrrap>
  );
};
