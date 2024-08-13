import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Provider } from 'react-redux';
import App from '../App';
import { store } from '../Store/store';
import { mockServer } from './mocks/mockServer';

mockServer();

describe('Main component', () => {
  test('renders the specified number of cards', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const cards = await waitFor(() => {
      return screen.getAllByRole('listitem');
    });
    expect(cards).toHaveLength(1);
  });

  test('renders the relevant card data', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const tatooineCard = await screen.findByText('Name: Tatooine');

    expect(tatooineCard).toBeInTheDocument();
  });

  test('renders the relevant card data', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const tatooineCard = await screen.findByText('Name: Tatooine');

    expect(tatooineCard).toBeInTheDocument();
  });
});
