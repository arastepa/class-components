import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Main from '../components/Main';
import { mockServer } from './mocks/mockServer';
import './__mocks__/next-navigation';
import Details from '../components/Details';
import details from './mockPlanetDetails.json';

mockServer();

describe('Details component', () => {
  test('renders Details component when a planet is selected', async () => {
    render(
      <Main
        planets={[
          {
            name: 'Tatooine',
            climate: 'arid',
            gravity: '1 standard',
            population: '200000',
          },
        ]}
        pageCount={1}
      />,
    );

    const planetItem = await screen.findByText('Name: Tatooine');
    fireEvent.click(planetItem);
    waitFor(() => {
      expect(screen.getByText('Rotation Period: 23')).toBeInTheDocument();
      expect(screen.getByText('Orbital Period: 304')).toBeInTheDocument();
      expect(screen.getByText('Diameter: 10465')).toBeInTheDocument();
      expect(screen.getByText('Surface Water: 1')).toBeInTheDocument();
      expect(screen.getByText('Terrain: desert')).toBeInTheDocument();
    });
  });
  test('renders Details component when a planet is selected', async () => {
    render(<Details details={details} setDetails={vi.fn()} />);

    waitFor(async () => {
      const close = await screen.findByText('close');
      expect(close).toBeInTheDocument();
    });
  });
  test('renders Details component when a planet is selected', async () => {
    render(<Details details={details} setDetails={vi.fn()} />);

    waitFor(async () => {
      const close = await screen.findByText('close');
      expect(close).toBeInTheDocument();
      fireEvent.click(close);
      waitFor(() => {
        expect(close).not.toBeInTheDocument();
      });
    });
  });
});
