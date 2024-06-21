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
`;
const Searchh = styled.div`
  width: 500px;
  margin-left: 1px;
  display: flex;
  justify-content: end;
  border: 1px solid purple;
  border-radius: 5px;
  background: white;
`;
const SearchButton = styled.button`
  margin-right: 10px;
  background: transparent;
  color: black;
  outline: none;
  border: none;
  cursor: pointer;
`;

const DropDownMenu = styled.select`
  width: 50px;
  border: 1px solid purple;
  border-radius: 5px;
  cursor: pointer;
`;

const DropDownList = styled.option``;

const ToggleButton = styled.button`
  width: 50px;
  border: 1px solid purple;
  border-radius: 5px;
  cursor: pointer;
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
