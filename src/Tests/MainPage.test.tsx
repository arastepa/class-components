import { render, screen, waitFor } from '@testing-library/react';
import { getPlanets, getPageCount } from '../Services/getPlanets';
import { BrowserRouter } from 'react-router-dom';
import { expect, Mock, test, vi } from 'vitest';
import MainPage from '../Pages/MainPage';

vi.mock('../Services/getPlanets', () => ({
  getPlanets: vi.fn(),
  getPageCount: vi.fn(),
}));

test('displays loading spinner while fetching data', async () => {
  (getPlanets as Mock).mockResolvedValueOnce([]);
  (getPageCount as Mock).mockResolvedValueOnce(1);

  render(
    <BrowserRouter>
      <MainPage pageCount={0} setPageCount={() => {}} />
    </BrowserRouter>,
  );

  expect(screen.getByTestId('spinner')).toBeInTheDocument();

  await waitFor(() => {
    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });
});
