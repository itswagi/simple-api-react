import styled from 'styled-components';
import { breakpoints } from '../../../../utils/constants';

export const SearchResultCardsCol = styled.div`
  display: flex;
  padding-right: 10px;
  padding-left: 10px;
  max-width: 100%;
  flex: 1 1 100%;

  @media ${breakpoints.sm} {
    max-width: 50%;
    flex: 1 1 50%;
  }

  @media ${breakpoints.lg} {
    max-width: 33.33%;
    flex: 1 1 33.33%;
  }
`;
export const CardContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const CardImgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-radius: 50%;
  overflow: hidden;
  border: none;
  margin-right: 16px;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${breakpoints.sm} {
    width: 50px;
    height: 50px;
  }

  @media ${breakpoints.md} {
    width: 70px;
    height: 70px;
  }
`;

export const CardContentContainer = styled.div``;

export const CardName = styled.div`
  font-size: 16px;
  line-height: 20px;
  color: #121f3e;
  font-weight: 600;
  margin-bottom: 2px;
`;
export const CardLinkWrapper = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
export const CardLink = styled.a`
  font-size: 14px;
  line-height: 18px;
  color: #858585;
  font-weight: 400;
  margin-bottom: 0px;
  text-decoration: none;
  cursor: pointer;
  & :hover,
  & :focus {
    color: #d6d6d6;
    text-decoration: none;
  }
`;
