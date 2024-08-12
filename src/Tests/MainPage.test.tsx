import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { mockServer } from './mocks/mockServer';
import { expect, test } from 'vitest';
import MainPage from '../components/MainPage';
import planets from './mockPlanets.json';

mockServer();

test('updates displayed planets based on search input', async () => {
  render(<MainPage planetsData={planets} pageCount={1} />);

  const searchInput = screen.getByTestId('search');
  fireEvent.change(searchInput, { target: { value: 'Tatooine' } });
  fireEvent.submit(screen.getByTestId('searching'));

  const planet = await screen.findByText(/Tatooine/i);
  expect(planet).toBeInTheDocument();
});

test('search input present', async () => {
  render(<MainPage planetsData={planets} pageCount={1} />);

  const searchInput = screen.getByTestId('search');

  expect(searchInput).toBeInTheDocument();
});

test('toggles theme on button click', async () => {
  render(<MainPage planetsData={planets} pageCount={1} />);

  expect(await screen.findByText('Switch to Dark Theme')).toBeInTheDocument();
  const btn = await screen.findByText('Switch to Dark Theme');
  fireEvent.click(btn);
  waitFor(async () => {
    expect(
      await screen.findByText('Switch to Light Theme'),
    ).toBeInTheDocument();
  });
});
