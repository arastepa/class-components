import { screen, fireEvent } from '@testing-library/react';
import Main from '../components/Main';
import '@testing-library/jest-dom';
import { afterAll, beforeAll, describe, expect, test, vi } from 'vitest';
import { mockServer } from './mocks/mockServer';
import { createMockRouter } from './createMockRouter';
import { renderWithProviders } from './rennderWithProviders';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

mockServer();

beforeAll(() => {
  global.URL.createObjectURL = vi.fn(() => 'mock-url');
});

afterAll(() => {
  global.URL.createObjectURL = URL.createObjectURL;
});

describe('Main Component Flyout', () => {
  test('displays flyout with buttons when items are selected', () => {
    const router = createMockRouter({ query: { id: '1' } });
    renderWithProviders(
      <RouterContext.Provider value={router}>
        <Main
          planets={[
            {
              name: 'Tatooine',
              climate: 'arid',
              gravity: '1 standard',
              population: '200000',
            },
          ]}
        />
        ,
      </RouterContext.Provider>,
    );

    expect(screen.queryByText(/items selected/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByText('1 items selected')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /download/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /unselect all/i }),
    ).toBeInTheDocument();
  });

  test('clears selected items when "unselect all" is clicked', () => {
    const router = createMockRouter({ query: { id: '1' } });
    renderWithProviders(
      <RouterContext.Provider value={router}>
        <Main
          planets={[
            {
              name: 'Tatooine',
              climate: 'arid',
              gravity: '1 standard',
              population: '200000',
            },
          ]}
        />
        ,
      </RouterContext.Provider>,
    );
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByText('1 items selected')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /unselect all/i }));
    expect(screen.queryByText(/items selected/i)).not.toBeInTheDocument();
  });
});
