import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import MainPage from '../components/MainPage';
import planets from './mockPlanets.json';
import { SelectedProvider } from '../SelectedContext/SelectedContext';

describe('Header', () => {
  test('renders header correctly', () => {
    render(
      <SelectedProvider>
        <MainPage planetsData={planets} pageCount={1} />
      </SelectedProvider>,
    );

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });
  test('renders header correctly', () => {
    render(
      <SelectedProvider>
        <MainPage planetsData={planets} pageCount={1} />
      </SelectedProvider>,
    );

    const headerElement = screen.getByTestId('headerImg');
    expect(headerElement).toBeInTheDocument();
  });
});
