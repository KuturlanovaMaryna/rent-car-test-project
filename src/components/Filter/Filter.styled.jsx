import styled from 'styled-components';

export const StyledInputForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
  margin-bottom: 50px;
  margin-top: 50px;
  position: relative;

  .dropDown {
    z-index: 1000;
    position: absolute;
    top: 70px;
    border: 1px solid rgba(18, 20, 23, 0.05);
    border-radius: 14px;
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
    background: white;
    width: 224px;
    height: 272px;
    overflow: auto;
    padding: 14px;
    scrollbar-width: thin;
  }

  .dropDown li {
    color: rgba(18, 20, 23, 0.5);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    padding: 4px 0;
    cursor: pointer;
  }

  .dropDown li:hover {
    color: black;
    background-color: rgba(52, 112, 255, 0.5);
    width: 100%;
  }

  .visible {
    display: block;
  }

  .hidden {
    display: none;
  }
`;
export const SelectedForm = styled.div`
  position: relative;
  border-radius: 14px;
  border: 1px solid #f7f7fb;
  background: #f7f7fb;
  width: 224px;
  height: 48px;
  padding: 14px 18px;
  color: rgb(18, 20, 23);
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  cursor: pointer;
`;
export const TextInput = styled.p`
  margin-bottom: 8px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.33;
  padding-left: 14px;
  color: #8a8a89;
`;
export const SearchButton = styled.button`
  border-radius: 12px;
  padding: 14px 44px;
  width: 136px;
  height: 48px;
  background-color: #3470ff;
  border: none;
  color: white;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.43;
`;
