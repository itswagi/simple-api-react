import React from 'react';
import { useApp } from '../../../state/hooks';
import { fetchArtistEventsAPI } from '../../../state/api';
import { SearchResultsCard } from '../../SearchResults/styles';
import {
  CardContainer,
  CardContentContainer,
  CardImgContainer,
  CardLink,
  CardLinkWrapper,
  CardName,
  SearchResultCardsCol,
} from './styles';

export type Props = {
  name: string;
  img: string;
  socialLink: string;
  setShowBack: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ArtistCard: React.FC<Props> = ({
  name,
  img,
  socialLink,
  setShowBack,
}) => {
  const { dispatch } = useApp();
  const handleArtistCardClick = async () => {
    setShowBack(true);
    await fetchArtistEventsAPI(dispatch, { name: name.toLowerCase() });
  };

  return (
    <SearchResultCardsCol onClick={handleArtistCardClick} data-testid="artistcard">
      <SearchResultsCard>
        <CardContainer>
          <CardImgContainer>
            <img src={img} alt="img" />
          </CardImgContainer>
          <CardContentContainer>
            <CardName>{name}</CardName>
            <CardLinkWrapper>
              <CardLink>{socialLink}</CardLink>
            </CardLinkWrapper>
          </CardContentContainer>
        </CardContainer>
      </SearchResultsCard>
    </SearchResultCardsCol>
  );
};
