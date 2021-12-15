import React from "react";
import { SearchBarContainer, SearchBarInput, SearchIconContainer } from "./styles";
import  { BsSearch }  from 'react-icons/bs'

export const SearchBar: React.FC = () => {
  return (
    <SearchBarContainer>
      <SearchBarInput type="text" placeholder="Search Artist" />
      <SearchIconContainer>
        <BsSearch />
      </SearchIconContainer>
    </SearchBarContainer>
      
  )
}