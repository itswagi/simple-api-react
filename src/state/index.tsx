import { createContext, useContext, useReducer } from 'react';
import { appReducer } from './reducer';
import { AppProviderProps, Dispatch, State } from './types';

const AppContext = createContext<
  { state: State; dispatch: Dispatch} | undefined
>(undefined)

const initialStateValue = {}

const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(appReducer, initialStateValue)
  const value = { state, dispatch }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

const useApp = () => {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context
}

export { AppProvider, useApp }