import React from 'react';
import { EventsInterface } from 'src/state/types';
import { useApp } from '../../state/hooks';
import { EventCard } from '../cards/EventCard';
import { EventsResultCardsRow, EventsResultContainer } from './styles';

export const EventsResult: React.FC = () => {
  const {
    state: {
      data: { events },
    },
  } = useApp();
  const renderEvents = events?.map((event: EventsInterface) => {
    return <EventCard key={event.id} venue={event.venue} date={event.datetime} />;
  });

  return (
    <EventsResultContainer>
      <EventsResultCardsRow>{renderEvents}</EventsResultCardsRow>
    </EventsResultContainer>
  );
};
