import { screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { mockServer } from './mocks/mockServer';
import { createMockRouter } from './createMockRouter';
import { renderWithProviders } from './rennderWithProviders';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import MainWithPage from '../pages/page/[id]';

mockServer();

describe('PageNumbers component', () => {
  test('updates URL query parameter when page changes', async () => {
    const router = createMockRouter({ query: { id: '1' } });
    renderWithProviders(
      <RouterContext.Provider value={router}>
        <MainWithPage />,
      </RouterContext.Provider>,
    );
    const pageLink = await screen.findByTestId('link-0');

    fireEvent.click(pageLink);

    waitFor(() => {
      expect(window.location.pathname).toBe('/page/1');
    });
  });
  test('next present', async () => {
    const router = createMockRouter({ query: { id: '1' } });
    renderWithProviders(
      <RouterContext.Provider value={router}>
        <MainWithPage />,
      </RouterContext.Provider>,
    );
    const pageLink = await screen.findByTestId('next-page');

    expect(pageLink).toBeInTheDocument;
  });
  test('prev present', async () => {
    const router = createMockRouter({ query: { id: '1' } });
    renderWithProviders(
      <RouterContext.Provider value={router}>
        <MainWithPage />,
      </RouterContext.Provider>,
    );
    const pageLink = await screen.findByTestId('prev-page');

    expect(pageLink).toBeInTheDocument;
  });
});
