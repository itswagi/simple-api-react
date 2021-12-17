import React, { useState, useEffect } from 'react';
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
import { ActionType } from 'src/utils/constants/context';

export const SearchResults: React.FC = () => {
  const {
    state: {
      data: {
        search: { image_url, name, facebook_page_url },
      },
      status: { search, events },
    },
  } = useApp();
  const [showBack, setShowBack] = useState<boolean>(false);
  const handleBackClick = () => {
    setShowBack(false);
  };
  useEffect(() => {
    console.log(showBack);
  }, [showBack]);

  if (search === ActionType.LOADING) {
    return <SearchResultsContainer></SearchResultsContainer>;
  }

  return (
    <>
      <SearchResultsContainer>
        {showBack && events === ActionType.FULFILLED && (
          <BackToResultsContainer onClick={handleBackClick}>
            <ArrowContainer>
              <MdArrowBackIosNew />
            </ArrowContainer>
            Back to results
          </BackToResultsContainer>
        )}
        {search === ActionType.FULFILLED && !showBack && (
          <SearchResultsHeading>Result found for '{name}'</SearchResultsHeading>
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
