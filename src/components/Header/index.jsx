import React from "react";
import styled from "styled-components";

const Title = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: ${({ theme }) => theme.textPrimary};
  line-height: 100px;
`;

const Header = () => {
  return <Title>To Do List</Title>;
};

export default Header;
