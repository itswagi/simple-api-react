import { ActionType } from '../../utils/constants/context';

export const mockStateValue2 = {
  data: {
    search: {},
    events: [
      {
        id: '1',
        datetime: '06, June 2021',
        venue: {
          country: 'country1',
          city: 'city1',
          name: 'venue1',
        },
      },
      {
        id: '2',
        datetime: '07, June 2021',
        venue: {
          country: 'country2',
          city: 'city2',
          name: 'venue2',
        },
      },
    ],
  },
  status: {
    search: ActionType.IDLE,
    events: ActionType.IDLE,
  },
  error: {
    search: null,
  },
};

export const mockStateValue1 = {
  data: {
    search: {
      name: 'Adele',
      facebook_page_url: 'www',
      image_url: 'img',
    },
    events: [],
  },
  status: {
    search: ActionType.FULFILLED,
    events: ActionType.IDLE,
  },
  error: {
    search: null,
  },
};
