import styled from 'styled-components';
import { breakpoints } from '../../utils/constants';

export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 100vh;
  flex-grow: 1;
  overflow-x: hidden;
  padding: 20px 0;
`;

export const SearchWrapper = styled.div`
  max-width: 100%;
  margin: 0 auto;
  width: 100%;
  padding-left: 15px;
  padding-right: 15px;
  @media ${breakpoints.xs} {
    max-width: 540px;
  }
  @media ${breakpoints.sm} {
    max-width: 720px;
  }
  @media ${breakpoints.md} {
    max-width: 720px;
  }
  @media ${breakpoints.lg} {
    max-width: 960px;
  }
  @media ${breakpoints.xl} {
    max-width: 1100px;
  }
`;

export const SearchBarWrapper = styled.div`
  max-width: 500px;
  width: 100%;
  padding: 0 5px;
`;

export const EventsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1080px;
  margin: 0 auto;
  width: 100%;
  padding: 20px;
`;
