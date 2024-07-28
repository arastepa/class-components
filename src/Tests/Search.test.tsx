import { render, screen, fireEvent } from '@testing-library/react';
import { describe, test, beforeEach, vi, expect } from 'vitest';
import Search from '../components/Search';

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
    const mockHandleChange = vi.fn();

    render(
      <Search
        onHandleSubmit={mockHandleSubmit}
        onHandleChange={mockHandleChange}
      />,
    );

    const input = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: /find/i });

    fireEvent.change(input, { target: { value: 'Tatooine' } });
    fireEvent.click(searchButton);

    expect(localStorage.getItem('previous')).toBe('Tatooine');
  });

  test('retrieves value from local storage upon mounting', () => {
    localStorage.setItem('previous', 'Alderaan');

    const mockHandleSubmit = vi.fn();
    const mockHandleChange = vi.fn();

    render(
      <Search
        onHandleSubmit={mockHandleSubmit}
        onHandleChange={mockHandleChange}
      />,
    );

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('Alderaan');
  });
});
