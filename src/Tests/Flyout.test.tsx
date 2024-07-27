import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import planetReducer from '../Store/Planets/planetSlice';
import Main from '../components/Main';
import { Planets } from '../Types/appTypes';
import '@testing-library/jest-dom';
import { describe, expect, test } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import { planetsApi } from '../Store/api';
import pagesReducer from '../Store/Pagination/pageSlice';

const mockPlanets: Planets[] = [
  {
    name: 'Tatooine',
    climate: 'arid',
    gravity: '1 standard',
    population: '200000',
  },
];

const renderWithRedux = (component: JSX.Element) => {
  const store = configureStore({
    reducer: {
      planets: planetReducer,
      pagesRed: pagesReducer,
      [planetsApi.reducerPath]: planetsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(planetsApi.middleware),
  });

  return {
    ...render(
      <Provider store={store}>
        <MemoryRouter>{component}</MemoryRouter>
      </Provider>,
    ),
    store,
  };
};

describe('Main Component Flyout', () => {
  test('displays flyout with buttons when items are selected', () => {
    renderWithRedux(<Main planets={mockPlanets} />);

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
    renderWithRedux(<Main planets={mockPlanets} />);
    fireEvent.click(screen.getByRole('checkbox'));
    expect(screen.getByText('1 items selected')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /unselect all/i }));
    expect(screen.queryByText(/items selected/i)).not.toBeInTheDocument();
  });
});
