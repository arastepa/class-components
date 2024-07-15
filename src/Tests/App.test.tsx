import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, expect, it, vi } from 'vitest';

describe('App Component', () => {
  it('renders correctly with pageCount 1', async () => {
    vi.mock('./Services/getPlanets', () => ({
      getPageCount: vi.fn().mockResolvedValue(1),
    }));

    render(<App />);
    expect(await screen.findByTestId('search')).toBeInTheDocument();
  });
});
