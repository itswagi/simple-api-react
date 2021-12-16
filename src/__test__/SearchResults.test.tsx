import { render, screen, fireEvent, waitFor } from "@testing-library/react"
import { SearchResults } from "../components/SearchResults"
import { AppContext } from "../state"
import { mockStateValue1 } from './constants/mocks'

type Props = {
  searchTerm: string
}

const mockSearchTerm = 'Adele'

const MockSearchResults:React.FC<Props> = ({searchTerm}) => {
  return (
    <AppContext.Provider value={{state: mockStateValue1, dispatch: jest.fn()}}>
      <SearchResults searchTerm={searchTerm}/>
    </AppContext.Provider>
  )
}

describe('SearchResults', () => {
  it('should render a heading with search term', () => {
    render(<MockSearchResults searchTerm={mockSearchTerm}/>)
    const divElement = screen.getByText(/Result found for "Adele"/i);
    expect(divElement).toBeInTheDocument()
  })
  it("should render artist card", () => {
    render(<MockSearchResults searchTerm={mockSearchTerm}/>)
    const divElement = screen.getByTestId("artistcard");
    expect(divElement).toBeInTheDocument()
  })
})