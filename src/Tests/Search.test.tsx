import { screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, test, beforeEach, vi, expect } from 'vitest';
import Search from '../components/Search';
import { createMockRouter } from './createMockRouter';
import { renderWithProviders } from './rennderWithProviders';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

describe('Search component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('saves entered value to local storage on Search button click', () => {
    const mockHandleSubmit = vi.fn((ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      const formData = new FormData(ev.currentTarget);
      const searchValue = formData.get('search') as string;
      localStorage.setItem('previous', searchValue);
    });
    const mockSetSearch = vi.fn();

    const router = createMockRouter({ query: { id: '1' } });
    renderWithProviders(
      <RouterContext.Provider value={router}>
        <Search
          search=""
          onHandleSubmit={mockHandleSubmit}
          setSearch={mockSetSearch}
        />
        ,
      </RouterContext.Provider>,
    );

    const input = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: /find/i });

    fireEvent.change(input, { target: { value: 'Tatooine' } });
    fireEvent.click(searchButton);
    waitFor(() => {
      expect(localStorage.getItem('previous')).toBe('Tatooine');
    });
  });
});
