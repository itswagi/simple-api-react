/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useApp } from '../../state/hooks';
import { ArtistCard } from '../cards/ArtistCard';
import {
  ArrowContainer,
  BackToResultsContainer,
  SearchResultCardsRow,
  SearchResultsContainer,
  SearchResultsHeading,
} from './styles';
import { MdArrowBackIosNew } from 'react-icons/md';
import { EventsResult } from '../EventsResult';

type Props = {
  searchTerm: string | null;
};

export const SearchResults: React.FC<Props> = ({ searchTerm }) => {
  const {
    state: {
      data: {
        search: { image_url, name, facebook_page_url },
      },
    },
  } = useApp();
  const [showBack, setShowBack] = useState<boolean>(false);
  const handleBackClick = () => {
    setShowBack(false);
  };
  return (
    <>
      <SearchResultsContainer>
        {showBack && (
          <BackToResultsContainer onClick={handleBackClick}>
            <ArrowContainer>
              <MdArrowBackIosNew />
            </ArrowContainer>
            Back to results
          </BackToResultsContainer>
        )}
        {searchTerm && !showBack && (
          <SearchResultsHeading>
            Result found for '{searchTerm}'
          </SearchResultsHeading>
        )}
        <SearchResultCardsRow>
          {name && facebook_page_url && image_url && (
            <ArtistCard
              name={name}
              socialLink={facebook_page_url}
              img={image_url}
              setShowBack={setShowBack}
            />
          )}
        </SearchResultCardsRow>
      </SearchResultsContainer>
      {showBack && <EventsResult />}
    </>
  );
};
