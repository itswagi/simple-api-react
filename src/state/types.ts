import { ReactNode } from 'react';
import { ActionType, StatusEnum } from '../utils/constants/context';

export type AppProviderProps = { children: ReactNode };

interface StatusType {
  search: ActionType;
  events: ActionType;
}

// interface ErrorType {
//   search: string | null
// }

export interface VeuneInterface {
  country: string;
  city: string;
  name: string;
}

export interface EventsInterface {
  id: string;
  datetime: string;
  venue: VeuneInterface;
  artist_id: string;
}

interface StateDataType {
  search: {
    id?: string;
    name?: string;
    facebook_page_url?: string;
    image_url?: string;
  };
  events: EventsInterface[];
}

interface ErrorType {
  search?: string;
  events?: string;
}

export interface State {
  data: StateDataType;
  status: StatusType;
  error: ErrorType;
}

type EventsActionPayload = {
  events: EventsInterface[];
};

type SeachActionPayload = {
  search: {
    name: string;
    facebook_page_url: string;
    image_url: string;
  };
};

type ActionPayload = EventsActionPayload | SeachActionPayload;

interface ActionTypeWithPayload {
  type: ActionType;
  status: StatusEnum;
  payload?: ActionPayload;
  error?: string;
}

export type Action = ActionTypeWithPayload;

export type Dispatch = (action: Action) => void;
