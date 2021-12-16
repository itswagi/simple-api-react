import React from "react";
import { VeuneInterface } from "../../../state/types";
import { convertDate } from "../../../utils/helpers";
import { EventResultsCard, CardContainer, EventsResultCardsCol, CardHeading, CardContent, CardContentContainer, ContentTitle, ContentInfo } from "./styles";

export type Props = {
  venue: VeuneInterface,
  date: string
}

export const EventCard: React.FC<Props> = ({ venue, date }) => {
  return (
    <EventsResultCardsCol>
      <EventResultsCard>
        <CardContainer>
          <CardHeading>
            Event Details
          </CardHeading>
          <CardContentContainer>
            <CardContent>
              <ContentTitle>Country</ContentTitle>
              <ContentInfo>{venue?.country}</ContentInfo>
            </CardContent>
            <CardContent>
              <ContentTitle>City</ContentTitle>
              <ContentInfo>{venue?.city}</ContentInfo>
            </CardContent>
            <CardContent>
              <ContentTitle>Venue</ContentTitle>
              <ContentInfo>{venue?.name}</ContentInfo>
            </CardContent>
            <CardContent>
              <ContentTitle>Date</ContentTitle>
              <ContentInfo>{convertDate(date)}</ContentInfo>
            </CardContent>
          </CardContentContainer>
        </CardContainer>
      </EventResultsCard>
    </EventsResultCardsCol>
  )
}