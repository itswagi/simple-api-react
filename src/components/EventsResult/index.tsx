import React, { useState } from 'react';
import { EventsInterface } from 'src/state/types';
import { useApp } from '../../state/hooks';
import { EventCard } from '../cards/EventCard';
import {
  EventsLoadMore,
  EventsResultCardsRow,
  EventsResultContainer,
} from './styles';

export const EventsResult: React.FC = () => {
  const {
    state: {
      data: { events },
    },
  } = useApp();
  const [index, setIndex] = useState<number>(6);
  const slicedEvents = events?.slice(0, index)?.map((event: EventsInterface) => {
    return <EventCard key={event.id} venue={event.venue} date={event.datetime} />;
  });

  const handleClick = () => {
    const totalLength = events.length;
    const newIndex = index + 6;
    if (index < totalLength && newIndex <= totalLength) {
      setIndex(newIndex);
    } else if (index < totalLength && newIndex > totalLength) {
      setIndex(totalLength);
    } else {
      setIndex(totalLength);
    }
  };
  return (
    <EventsResultContainer>
      <EventsResultCardsRow>{slicedEvents}</EventsResultCardsRow>
      {slicedEvents.length !== events.length && (
        <EventsLoadMore onClick={handleClick}>Load More</EventsLoadMore>
      )}
    </EventsResultContainer>
  );
};
