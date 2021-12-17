import React from 'react';
import { SearchBar } from '../components/SearchBar';
import { SearchResults } from '../components/SearchResults';
import { HomeContainer, SearchBarWrapper, SearchWrapper } from './styles';

export const Home: React.FC = () => {
  return (
    <HomeContainer>
      <SearchWrapper>
        <SearchBarWrapper>
          <SearchBar />
        </SearchBarWrapper>
        <SearchResults />
      </SearchWrapper>
    </HomeContainer>
  );
};
