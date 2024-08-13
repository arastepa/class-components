import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import ErrorPage from '../Pages/ErrorPage';

describe('ErrorPage', () => {
  test('should display 404 page for non-existent routes', () => {
    render(<ErrorPage />);

    expect(screen.getByText(/404 not found/i)).toBeInTheDocument();
  });
});
