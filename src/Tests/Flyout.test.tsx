import { screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { afterAll, beforeAll, describe, expect, Mock, test, vi } from 'vitest';
import { mockServer } from './mocks/mockServer';
import Page from '../app/page';
import { getPageCount, getPlanets } from '../Services/getPlanets';
import mockPlanetsData from './mockPlanets.json';
import PageDynamic from '../app/page/[id]/page';

mockServer();

beforeAll(() => {
  global.URL.createObjectURL = vi.fn(() => 'mock-url');
});

afterAll(() => {
  global.URL.createObjectURL = URL.createObjectURL;
});
vi.mock('../Services/getPlanets', () => ({
  getPlanets: vi.fn(),
  getPageCount: vi.fn(),
}));
describe('Main Component Flyout', () => {
  test('displays flyout with buttons when items are selected', async () => {
    const mockPageCount = 1;

    (getPlanets as Mock).mockResolvedValueOnce(mockPlanetsData);
    (getPageCount as Mock).mockResolvedValueOnce(mockPageCount);
    const Component = await Page({ params: { id: '1' } });
    render(Component);

    expect(screen.queryByText(/items selected/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('flyout-0'));
    expect(screen.getByText('1 items selected')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /download/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /unselect all/i }),
    ).toBeInTheDocument();
  });

  test('clears selected items when "unselect all" is clicked', async () => {
    const mockPageCount = 1;

    (getPlanets as Mock).mockResolvedValueOnce(mockPlanetsData);
    (getPageCount as Mock).mockResolvedValueOnce(mockPageCount);
    const Component = await PageDynamic({ params: { id: '1' } });
    render(Component);
    fireEvent.click(screen.getByTestId('flyout-0'));
    expect(screen.getByText('1 items selected')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /unselect all/i }));
    expect(screen.queryByText(/items selected/i)).not.toBeInTheDocument();
  });
});
