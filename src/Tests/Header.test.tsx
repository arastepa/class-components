// App.test.tsx
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import AppRoutes from '../AppRoutes';

describe('Header', () => {
  test('renders header correctly', () => {
    render(
      <BrowserRouter>
        <AppRoutes pageCount={1} setPageCount={() => {}} />
      </BrowserRouter>,
    );

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });
});
