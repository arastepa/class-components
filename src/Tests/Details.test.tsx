import { fireEvent, screen, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import Main from '../components/Main';
import { mockServer } from './mocks/mockServer';
import { renderWithProviders } from './rennderWithProviders';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';
import { createMockRouter } from './createMockRouter';
import Details from '../components/Details';

mockServer();

describe('Details component', () => {
  test('router uses correct link when clicking to planet', async () => {
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

    const planetItem = await screen.findByText('Name: Tatooine');
    fireEvent.click(planetItem);
    expect(router.push).toHaveBeenCalledWith('/?details=1');
  });
  test('renders Details component when a planet is selected', async () => {
    renderWithProviders(
      <RouterContext.Provider
        value={createMockRouter({ query: { id: '1' }, pathname: '/page/1' })}
      >
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
    renderWithProviders(
      <RouterContext.Provider
        value={createMockRouter({
          query: { id: '1', details: '1' },
        })}
      >
        <Details />,
      </RouterContext.Provider>,
    );

    waitFor(async () => {
      const close = await screen.findByText('close');
      expect(close).toBeInTheDocument();
    });
  });
  test('renders Details component when a planet is selected', async () => {
    renderWithProviders(
      <RouterContext.Provider
        value={createMockRouter({
          query: { id: '1', details: '1' },
        })}
      >
        <Details />,
      </RouterContext.Provider>,
    );

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
