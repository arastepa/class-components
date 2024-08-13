import { screen, fireEvent, waitFor, render } from '@testing-library/react';
import { describe, test, beforeEach, vi, expect } from 'vitest';
import { createRemixStub } from '@remix-run/testing';
import Search from '../components/Search';
import useHandleLS from '../Hooks/useHandleLS';

describe('Search component', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  vi.mock('../Hooks/useHandleLS', () => ({
    __esModule: true,
    default: () => ({
      setPrevSearch: vi.fn(),
    }),
  }));

  test('saves entered value to local storage on Search button click', async () => {
    const mockHandleLS = useHandleLS();
    const mockOnGetResponse = vi.fn();
    const mockOnSetPlanets = vi.fn();

    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => (
          <Search
            onGetResponse={mockOnGetResponse}
            onSetPlanets={mockOnSetPlanets}
          />
        ),
      },
    ]);

    render(<RemixStub />);

    const input = screen.getByRole('textbox');
    const searchButton = screen.getByRole('button', { name: /find/i });

    fireEvent.change(input, { target: { value: 'Tatooine' } });
    fireEvent.click(searchButton);

    waitFor(() => {
      expect(mockHandleLS.setPrevSearch).toHaveBeenCalledWith('Tatooine');
      expect(mockOnGetResponse).toHaveBeenCalledWith('Tatooine');
      expect(localStorage.getItem('previous')).toBe('Tatooine');
    });
  });

  test('retrieves value from local storage upon mounting', () => {
    localStorage.setItem('previous', 'Alderaan');

    const mockOnGetResponse = vi.fn();
    const mockOnSetPlanets = vi.fn();

    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => (
          <Search
            onGetResponse={mockOnGetResponse}
            onSetPlanets={mockOnSetPlanets}
          />
        ),
      },
    ]);

    render(<RemixStub />);

    const input = screen.getByRole('textbox');
    expect(input).toHaveValue('Alderaan');
  });
});
