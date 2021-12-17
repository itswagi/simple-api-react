import styled from 'styled-components';

export const EventsResultContainer = styled.div`
  /* animation: fadeIn 0.25s ease 1; */
  animation-delay: 0.1s;
  height: 0;
  width: auto;
  transition: height 1s;
  overflow: hidden;
  &.trans {
    height: 500px;
  }
  &.height {
    height: auto;
  }
`;

export const EventsResultCardsRow = styled.div`
  display: flex;
  margin-left: -10px;
  margin-right: -10px;
  flex-wrap: wrap;
  padding: 5px;
`;
export const EventsLoadMore = styled.div`
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  color: #b6b6b6;
  cursor: pointer;
`;
