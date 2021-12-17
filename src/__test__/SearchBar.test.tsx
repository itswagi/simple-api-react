import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { SearchBar } from '../components/SearchBar';
import { AppProvider } from '../state';

const mockedSetSearchTerm = jest.fn();

jest.mock('../state/api', () => {
  return {
    searchArtistAPI: jest.fn(),
  };
});

const MockSearchBar = () => {
  return (
    <AppProvider>
      <SearchBar setSearchTerm={mockedSetSearchTerm} />
    </AppProvider>
  );
};

describe('SearchBar', () => {
  it('should render SearchBar', async () => {
    render(<MockSearchBar />);
    const inputElement = screen.getByPlaceholderText(/Search Artist/i);
    expect(inputElement).toBeInTheDocument();
  });
  it('should be able to type into input', () => {
    render(<MockSearchBar />);
    const inputElement = screen.getByPlaceholderText(/Search Artist/i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: 'Adele' } });
    expect(inputElement.value).toBe('Adele');
  });
  it('should call function on button click', async () => {
    render(<MockSearchBar />);
    const inputElement = screen.getByPlaceholderText(/Search Artist/i);
    fireEvent.click(inputElement);
    fireEvent.change(inputElement, { target: { value: 'Adele' } });
    const buttonElement = screen.getByRole('button');
    act(() => {
      fireEvent.click(buttonElement);
    });
    await waitFor(() => expect(mockedSetSearchTerm).toBeCalled());
  });
});
