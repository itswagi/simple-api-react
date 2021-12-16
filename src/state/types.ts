import { ReactNode } from "react";
import { ActionType, StatusEnum } from "../utils/constants/context";

export type AppProviderProps = { children: ReactNode }

interface StatusType {
  search: ActionType
  events: ActionType
}

interface ErrorType {
  search: string | null | undefined
}

export interface VeuneInterface {
    country: string;
    city: string;
    name: string;
}

export interface EventsInterface {
  id?: string;
  datetime?: string;
  venue?: VeuneInterface
}

interface StateDataType {
  search: {
    name?: string
    facebook_page_url?: string
    image_url?: string
  }
  events?: EventsInterface[]
}

export interface State {
  data: StateDataType
  status: StatusType
  error: ErrorType
}

interface ActionPayload {
  events?: EventsInterface[]
  search?: {
    name?: string
    facebook_page_url?: string
    image_url?: string
  }
}

export type Action = { 
  type: ActionType,  
  status: StatusEnum
  payload?: ActionPayload
  error?: string
} 

export type Dispatch = (action: Action) => void