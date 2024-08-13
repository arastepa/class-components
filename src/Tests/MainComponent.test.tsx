import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { mockServer } from './mocks/mockServer';
import planets from './mockPlanets.json';
import MainPage from '../components/MainPage';
import { SelectedProvider } from '../SelectedContext/SelectedContext';

mockServer();

describe('Main component', () => {
  test('renders the specified number of cards', async () => {
    render(
      <SelectedProvider>
        <MainPage planetsData={planets} pageCount={1} />
      </SelectedProvider>,
    );

    const cards = await waitFor(() => {
      return screen.getAllByRole('listitem');
    });
    expect(cards).toHaveLength(2);
  });

  test('renders the relevant card data', async () => {
    render(
      <SelectedProvider>
        <MainPage planetsData={planets} pageCount={1} />
      </SelectedProvider>,
    );

    const tatooineCard = await screen.findByText('Name: Tatooine');

    expect(tatooineCard).toBeInTheDocument();
  });
});
