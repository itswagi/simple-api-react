/* eslint-disable @typescript-eslint/no-explicit-any */
import { AxiosResponse } from 'axios';
import { server } from '../utils/api';
import { ActionType, StatusEnum } from '../utils/constants/context';
import { Dispatch } from './types';

interface PayloadType {
  name: string;
}

export const searchArtistAPI = async (dispatch: Dispatch, payload: PayloadType) => {
  dispatch({ type: ActionType.LOADING, status: StatusEnum.SEARCH, error: '' });
  try {
    const response: AxiosResponse = await server.get(`${payload.name}`);
    console.log(
      '🚀 ~ file: api.ts ~ line 14 ~ searchArtistAPI ~ response',
      response
    );
    dispatch({
      type: ActionType.FULFILLED,
      status: StatusEnum.SEARCH,
      payload: { search: response.data, events: [] },
    });
  } catch (error: any) {
    console.log('🚀 ~ file: api.ts ~ line 18 ~ searchArtistAPI ~ error', error);
    dispatch({
      type: ActionType.REJECTED,
      status: StatusEnum.SEARCH,
      error: error.message,
    });
  }
};

export const fetchArtistEventsAPI = async (
  dispatch: Dispatch,
  payload: PayloadType
) => {
  console.log(payload);
  dispatch({ type: ActionType.LOADING, status: StatusEnum.EVENTS, error: '' });
  try {
    const response: AxiosResponse = await server.get(`${payload.name}/events`);
    console.log(
      '🚀 ~ file: api.ts ~ line 31 ~ fetchArtistEventsAPI ~ response',
      response
    );
    dispatch({
      type: ActionType.FULFILLED,
      status: StatusEnum.EVENTS,
      payload: { events: response.data },
    });
  } catch (error: any) {
    console.log('🚀 ~ file: api.ts ~ line 32 ~ fetchArtistEventsAPI ~ error', error);
    dispatch({
      type: ActionType.REJECTED,
      status: StatusEnum.EVENTS,
      error: error.message,
    });
  }
};
