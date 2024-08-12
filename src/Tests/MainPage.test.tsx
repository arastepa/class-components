import { fireEvent, screen, waitFor } from '@testing-library/react';
import { mockServer } from './mocks/mockServer';
import { expect, test } from 'vitest';
import { createMockRouter } from './createMockRouter';
import { renderWithProviders } from './rennderWithProviders';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import MainPage from '../pages';
import MainWithPage from '../pages/page/[id]';

mockServer();

test('updates displayed planets based on search input', async () => {
  const router = createMockRouter({ query: { id: '1' } });
  renderWithProviders(
    <RouterContext.Provider value={router}>
      <MainPage />,
    </RouterContext.Provider>,
  );

  const searchInput = screen.getByTestId('search');
  fireEvent.change(searchInput, { target: { value: 'Tatooine' } });
  fireEvent.submit(screen.getByTestId('searching'));

  const planet = await screen.findByText(/Tatooine/i);
  expect(planet).toBeInTheDocument();
});

test('search input present', async () => {
  const router = createMockRouter({ query: { id: '1' } });
  renderWithProviders(
    <RouterContext.Provider value={router}>
      <MainPage />,
    </RouterContext.Provider>,
  );

  const searchInput = screen.getByTestId('search');

  expect(searchInput).toBeInTheDocument();
});

test('toggles theme on button click', async () => {
  const router = createMockRouter({ query: { id: '1' } });
  renderWithProviders(
    <RouterContext.Provider value={router}>
      <MainWithPage />,
    </RouterContext.Provider>,
  );

  expect(await screen.findByText('Switch to Dark Theme')).toBeInTheDocument();
  const btn = await screen.findByText('Switch to Dark Theme');
  fireEvent.click(btn);
  waitFor(async () => {
    expect(
      await screen.findByText('Switch to Light Theme'),
    ).toBeInTheDocument();
  });
});
