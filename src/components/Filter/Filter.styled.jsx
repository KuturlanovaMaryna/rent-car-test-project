import styled from 'styled-components';

export const StyledInputForm = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-bottom: 50px;
  margin-top: 50px;
  position: relative;

  .formSelect {
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
  }

  .formSelect svg {
    position: absolute;
    top: 12px;
    right: 10px;
  }

  .formDrop {
    z-index: 1000;
    position: absolute;
    top: 50px;
    border: 1px solid rgba(18, 20, 23, 0.05);
    border-radius: 14px;
    box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
    background: white;
    width: 224px;
    height: 272px;
    overflow: auto;
    padding: 10px 18px;
  }

  .formDrop li {
    color: rgba(18, 20, 23, 0.5);
    font-size: 16px;
    font-weight: 500;
    line-height: 20px;
    padding: 4px 0;
    cursor: pointer;
  }

  .formDrop li:hover {
    color: black;
  }

  .visible {
    display: block;
  }

  .hidden {
    display: none;
  }

  .searchbtn {
    border-radius: 12px;
    padding: 14px 44px;
    width: 136px;
    height: 48px;
    background-color: #3470ff;
    border: none;
    color: white;
    font-weight: 600;
    font-size: 14px;
    line-height: 1.41;
  }
`;
