import { ActionType } from "../utils/constants/context"
import { State, Action } from "./types"

export const appReducer = (state: State, action: Action) => {
  switch (action.type) {
    case ActionType.LOADING: {
      return {
        ...state,
        status: {
          ...state.status,
          [action.status]: ActionType.LOADING
        }
      }
    }
    case ActionType.FULFILLED: {
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload
        },
        status: {
          ...state.status,
          [action.status]: ActionType.FULFILLED
        }
      }
    }
    case ActionType.REJECTED: {
      return {
        ...state,
        status: {
          ...state.status,
          [action.status]: ActionType.REJECTED
        },
        error: {
          ...state.error,
          [action.status]: action.error
        }
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}