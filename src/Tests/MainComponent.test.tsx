import { screen, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { renderWithProviders } from './rennderWithProviders';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { mockServer } from './mocks/mockServer';
import MainPage from '../pages';
import { createMockRouter } from './createMockRouter';
import MainWithPage from '../pages/page/[id]';

mockServer();

describe('Main component', () => {
  test('renders the specified number of cards', async () => {
    const router = createMockRouter({ query: { id: '1' } });
    renderWithProviders(
      <RouterContext.Provider value={router}>
        <MainPage />,
      </RouterContext.Provider>,
    );

    const cards = await waitFor(() => {
      return screen.getAllByRole('listitem');
    });
    expect(cards).toHaveLength(1);
  });

  test('renders the relevant card data', async () => {
    const router = createMockRouter({ query: { id: '1' } });
    renderWithProviders(
      <RouterContext.Provider value={router}>
        <MainWithPage />,
      </RouterContext.Provider>,
    );

    const tatooineCard = await screen.findByText('Name: Tatooine');

    expect(tatooineCard).toBeInTheDocument();
  });
});
