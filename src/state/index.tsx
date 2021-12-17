import { createContext, useReducer } from 'react';
import { ActionType } from '../utils/constants/context';
import { appReducer } from './reducer';
import { AppProviderProps, Dispatch, State } from './types';

export const AppContext = createContext<
  { state: State; dispatch: Dispatch } | undefined
>(undefined);

export const initialStateValue: State = {
  data: {
    search: {},
    events: [],
  },
  status: {
    search: ActionType.IDLE,
    events: ActionType.IDLE,
  },
  error: {},
};

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialStateValue);
  const value = { state, dispatch };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export { AppProvider };
