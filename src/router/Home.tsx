import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { SearchResults } from '../components/SearchResults';
import { HomeContainer, SearchBarWrapper, SearchWrapper } from './styles';

export const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  return (
    <HomeContainer>
      <SearchWrapper>
        <SearchBarWrapper>
          <SearchBar setSearchTerm={setSearchTerm} />
        </SearchBarWrapper>
        <SearchResults searchTerm={searchTerm} />
      </SearchWrapper>
    </HomeContainer>
  );
};
