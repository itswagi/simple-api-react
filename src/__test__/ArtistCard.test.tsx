import { render, screen } from '@testing-library/react';
import { ArtistCard, Props } from '../components/cards/ArtistCard';
import { AppProvider } from '../state';

const MockArtistCard: React.FC<Props> = ({ name, socialLink, img}) => {
  return (
    <AppProvider>
        <ArtistCard name={name} socialLink={socialLink} img={img} />
    </AppProvider>
  )
}

describe('ArtistCard', () => {
  const name = 'name'
  const socialLink = 'www.link.com'
  const img = ''
  beforeEach(() => {
    render(
      <MockArtistCard 
        name={name}
        socialLink={socialLink}
        img={img}
      />
    );
  })
  it('should render name', () => {
    const nameElement = screen.getByText(name);
    expect(nameElement).toBeInTheDocument()
  });
  it('should render social media link', () => {
    const linkElement = screen.getByText(socialLink);
    expect(linkElement).toBeInTheDocument()
  });
  it('should render image', () => {
    const imgElement = screen.getByRole('img');
    expect(imgElement).toBeInTheDocument()
  });
})
