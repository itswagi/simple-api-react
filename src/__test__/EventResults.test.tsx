import { render, screen } from '@testing-library/react';
import { EventsResult } from '../components/EventsResult';
import { AppContext, initialStateValue } from '../state';
import { mockStateValue2 } from './constants/mocks';

const MockEventResults: React.FC<any> = ({ value }) => {
  return (
    <AppContext.Provider value={{ state: value, dispatch: () => {} }}>
      <EventsResult />
    </AppContext.Provider>
  );
};
describe('EventResults', () => {
  it('should not render event cards if no events in state', () => {
    render(<MockEventResults value={initialStateValue} />);
    const eventCards = screen.queryAllByText(/Event Details/i);
    expect(eventCards.length).toBe(0);
  });
  it('should render two event cards', () => {
    render(<MockEventResults value={mockStateValue2} />);
    const eventCards = screen.getAllByText(/Event Details/i);
    expect(eventCards.length).toBe(2);
  });
});
