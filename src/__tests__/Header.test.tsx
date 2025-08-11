import { render, screen } from '@testing-library/react';
import { Header } from '@/components/Header';

// Mock next/image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} />;
  },
}));

describe('Header', () => {
  it('renders the logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('Soluciones Integrales Logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders navigation links', () => {
    render(<Header />);
    expect(screen.getByText('Nosotros')).toBeInTheDocument();
    expect(screen.getByText('Projectos')).toBeInTheDocument();
    expect(screen.getByText('Testimonios')).toBeInTheDocument();
  });

  it('renders the quote button', () => {
    render(<Header />);
    const quoteButtons = screen.getAllByText('Cotizar');
    expect(quoteButtons.length).toBeGreaterThan(0);
  });
});
