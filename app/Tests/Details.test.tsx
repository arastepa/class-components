import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../Store/store';
import Main from '../components/Main';
import { mockServer } from './mocks/mockServer';

mockServer();

describe('Details component', () => {
  test('renders Details component when a planet is selected', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
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
        </MemoryRouter>
      </Provider>,
    );

    const planetItem = await screen.findByText('Name: Tatooine');
    planetItem.click();
    await waitFor(() => {
      expect(screen.getByText('Rotation Period: 23')).toBeInTheDocument();
      expect(screen.getByText('Orbital Period: 304')).toBeInTheDocument();
      expect(screen.getByText('Diameter: 10465')).toBeInTheDocument();
      expect(screen.getByText('Surface Water: 1')).toBeInTheDocument();
      expect(screen.getByText('Terrain: desert')).toBeInTheDocument();
    });
  });
});
