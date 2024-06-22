import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 100px;

  @media screen and (max-width: 1020px) {
    font-size: 30px;
    font-weight: 600;
    line-height: 90px;
  }

  @media screen and (max-width: 720px) {
    font-size: 20px;
    font-weight: 500;
    line-height: 70px;
  }

  @media screen and (max-width: 480px) {
    font-size: 10px;
    font-weight: 400;
    line-height: 50px;
  }
  @media screen and (max-width: 240px) {
    font-size: 5px;
    font-weight: 400;
    line-height: 30px;
  }
`;

const Header = () => {
  return <Title>To Do List</Title>;
};

export default Header;
