import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components";
import { FaSearch } from "react-icons/fa";
import { FiMoon, FiSun } from "react-icons/fi";
import { darkMode } from "../../themes/themes";
const SearchContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;
const SearchInput = styled.input`
  width: 90%;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 1020px) {
    width: 90%;
  }

  @media screen and (max-width: 720px) {
    width: 80%;
    height: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 70%;
    height: 60%;
  }
  @media screen and (max-width: 240px) {
    width: 60%;
    height: 40%;
  }
`;
const Searchh = styled.div`
  width: 500px;
  margin-left: 1px;
  display: flex;
  justify-content: end;
  border: 1px solid purple;
  border-radius: 5px;
  background: white;
  @media screen and (max-width: 1020px) {
    width: 500px;
  }

  @media screen and (max-width: 720px) {
    width: 400px;
    height: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 300px;
    height: 60%;
  }
  @media screen and (max-width: 240px) {
    width: 200px;
    height: 40%;
  }
`;
const SearchButton = styled.button`
  margin-right: 10px;
  background: transparent;
  color: black;
  outline: none;
  border: none;
  cursor: pointer;
     &:hover{
    transform: scale(1.1);
    transition: 0.2s all ease-in-out;
   }
  @media screen and (max-width: 1020px) {
    margin-right: 10px;
  }

  @media screen and (max-width: 720px) {
    margin-right: 9px;
  }

  @media screen and (max-width: 480px) {
    margin-right: 7px;
  }
  @media screen and (max-width: 240px) {
    margin-right: 5px;
  }
`;

const DropDownMenu = styled.select`
  width: 50px;
  border: 1px solid purple;
  border-radius: 5px;
  cursor: pointer;
    @media screen and (max-width: 1020px) {
    width: 50px;
  }

  @media screen and (max-width: 720px) {
    width: 40px;
    height: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 30px;
    height: 60%;
  }
  @media screen and (max-width: 240px) {
    width: 20px;
    height: 40%;
  }
`;

const DropDownList = styled.option``;

const ToggleButton = styled.button`
  width: 50px;
  border: 1px solid purple;
  border-radius: 5px;
  cursor: pointer;
       &:hover{
    transform: scale(1.1);
    transition: 0.2s all ease-in-out;
   }
  @media screen and (max-width: 1020px) {
    width: 50px;
  }

  @media screen and (max-width: 720px) {
    width: 40px;
    height: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 30px;
    height: 60%;
  }
  @media screen and (max-width: 240px) {
    width: 20px;
    height: 40%;
  }
`;

const Search = ({ toggleTheme }) => {
  const themeContext = useContext(ThemeContext); //using useContext to pass props through the component tree directly
  const ToggleIcon = themeContext === darkMode ? FiSun : FiMoon; //will change the icon in every click event according the mode.

  return (
    <SearchContainer>
      <Searchh>
        <SearchInput />
        <SearchButton>
          <FaSearch />
        </SearchButton>
      </Searchh>
      <DropDownMenu>
        <DropDownList>ALL</DropDownList>
        <DropDownList>Completed</DropDownList>
        <DropDownList>Incomplete</DropDownList>
      </DropDownMenu>
      <ToggleButton
        onClick={() => {
          toggleTheme();
        }}
      >
        <ToggleIcon />
      </ToggleButton>
    </SearchContainer>
  );
};

export default Search;
