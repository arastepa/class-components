import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { mockServer } from './mocks/mockServer';
import planets from './mockPlanets.json';
import MainPage from '../components/MainPage';

mockServer();

describe('Main component', () => {
  test('renders the specified number of cards', async () => {
    render(<MainPage planetsData={planets} pageCount={1} />);

    const cards = await waitFor(() => {
      return screen.getAllByRole('listitem');
    });
    expect(cards).toHaveLength(2);
  });

  test('renders the relevant card data', async () => {
    render(<MainPage planetsData={planets} pageCount={1} />);

    const tatooineCard = await screen.findByText('Name: Tatooine');

    expect(tatooineCard).toBeInTheDocument();
  });
});
