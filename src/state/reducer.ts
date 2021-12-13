import { State, Action } from "./types"

export const appReducer = (state: State, action: Action) => {
  switch (action.type) {
    case '': {
      return {}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}