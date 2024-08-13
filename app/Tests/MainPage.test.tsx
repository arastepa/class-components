import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../Store/store';
import App from '../App';
import { mockServer } from './mocks/mockServer';
import { expect, test } from 'vitest';

mockServer();

test('shows loading spinner while fetching data', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(screen.getByTestId('spinner')).toBeInTheDocument();

  const planet = await screen.findByText(/Tatooine/i);
  expect(planet).toBeInTheDocument();
});

test('updates displayed planets based on search input', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  const searchInput = screen.getByTestId('search');
  fireEvent.change(searchInput, { target: { value: 'Tatooine' } });
  fireEvent.submit(screen.getByTestId('searching'));

  await waitFor(() =>
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument(),
  );

  const planet = await screen.findByText(/Tatooine/i);
  expect(planet).toBeInTheDocument();
});

test('toggles theme on button click', async () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );

  expect(await screen.findByText('Switch to Dark Theme')).toBeInTheDocument();
  const btn = await screen.findByText('Switch to Dark Theme');
  fireEvent.click(btn);
  expect(await screen.findByText('Switch to Light Theme')).toBeInTheDocument();
});
