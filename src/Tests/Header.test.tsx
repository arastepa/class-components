import { screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { createMockRouter } from './createMockRouter';
import { renderWithProviders } from './rennderWithProviders';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import MainWithPage from '../pages/page/[id]';

describe('Header', () => {
  test('renders header correctly', () => {
    const router = createMockRouter({ query: { id: '1' } });
    renderWithProviders(
      <RouterContext.Provider value={router}>
        <MainWithPage />,
      </RouterContext.Provider>,
    );

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });
  test('renders header correctly', () => {
    const router = createMockRouter({ query: { id: '1' } });
    renderWithProviders(
      <RouterContext.Provider value={router}>
        <MainWithPage />,
      </RouterContext.Provider>,
    );

    const headerElement = screen.getByTestId('headerImg');
    expect(headerElement).toBeInTheDocument();
  });
});
