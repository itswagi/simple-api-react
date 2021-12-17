export enum ActionType {
  IDLE = 'idle',
  LOADING = 'loading',
  FULFILLED = 'fulfilled',
  SEARCHFULFILLED = 'search succeeded',
  EVENTSFULFILLED = 'events succeeded',
  REJECTED = 'failed',
  EVENTTOGGLE = 'showEvents',
}

export enum StatusEnum {
  SEARCH = 'search',
  EVENTS = 'events',
  SHOWEVENTS = 'showEvents',
}
