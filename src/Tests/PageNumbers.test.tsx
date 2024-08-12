import { screen, render } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { mockServer } from './mocks/mockServer';
import MainPage from '../components/MainPage';
import planets from './mockPlanets.json';

mockServer();

describe('PageNumbers component', () => {
  test('next present', async () => {
    render(<MainPage planetsData={planets} pageCount={1} />);

    const pageLink = await screen.findByTestId('next-page');

    expect(pageLink).toBeInTheDocument;
  });
  test('prev present', async () => {
    render(<MainPage planetsData={planets} pageCount={1} />);

    const pageLink = await screen.findByTestId('prev-page');

    expect(pageLink).toBeInTheDocument;
  });
});
