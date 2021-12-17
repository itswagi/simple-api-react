import styled from 'styled-components';
import { breakpoints } from '../../../../utils/constants';

export const EventsResultCardsCol = styled.div`
  display: flex;
  padding-right: 10px;
  padding-left: 10px;
  max-width: 100%;
  flex: 1 1 100%;
  :hover {
    transform: scale(1.025);
  }

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
  width: 100%;
`;

export const EventResultsCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #fff;
  border: 1px solid #fff;
  box-shadow: 0px 1px 10px rgb(0 0 0 / 8%);
  padding: 24px 20px;
  margin-top: 20px;
  overflow: hidden;
`;

export const CardHeading = styled.div`
  border-bottom: 1px solid #d6d6d6;
  padding-bottom: 10px;
  text-transform: uppercase;
`;

export const CardContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  row-gap: 25px;
  margin-top: 20px;
`;

export const CardContent = styled.div``;

export const ContentTitle = styled.div`
  font-weight: 600;
`;

export const ContentInfo = styled.div`
  margin-top: 8px;
`;
