import React, { useState } from 'react';
import { useEffect } from 'react';
import { EventsInterface } from 'src/state/types';
import { eventsResultAnimation } from 'src/utils/helpers';
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
  const [css, setCss] = useState<boolean>(false);
  const [css1, setCss1] = useState<boolean>(false);

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
  useEffect(() => {
    eventsResultAnimation(setCss, setCss1);
  }, []);
  return (
    <EventsResultContainer
      className={`${css ? 'trans' : ''} ${css1 ? 'height' : ''}`}
    >
      <EventsResultCardsRow>{slicedEvents}</EventsResultCardsRow>
      {slicedEvents.length !== events.length && (
        <EventsLoadMore onClick={handleClick}>Load More</EventsLoadMore>
      )}
    </EventsResultContainer>
  );
};
