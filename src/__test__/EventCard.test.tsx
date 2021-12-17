import { render, screen } from '@testing-library/react';
import { EventCard, Props } from '../components/cards/EventCard';
import { AppProvider } from '../state';

const MockEventCard: React.FC<Props> = ({ date, venue }) => {
  return (
    <AppProvider>
      <EventCard date={date} venue={venue} />
    </AppProvider>
  );
};

describe('EventCard', () => {
  const date = '06, June 2021';
  const venue = {
    country: 'Pakistan',
    city: 'Multan',
    name: 'Killa',
  };
  beforeEach(() => {
    render(<MockEventCard date={date} venue={venue} />);
  });
  it('should render country', () => {
    const countryElement = screen.getByText(venue.country);
    expect(countryElement).toBeInTheDocument();
  });
  it('should render date', () => {
    const dateElement = screen.getByText(date);
    expect(dateElement).toBeInTheDocument();
  });
  it('should render city', () => {
    const cityElement = screen.getByText(venue.city);
    expect(cityElement).toBeInTheDocument();
  });
  it('should render venue', () => {
    const venueElement = screen.getByText(venue.name);
    expect(venueElement).toBeInTheDocument();
  });
});
