import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, expect, test } from 'vitest';
import PageNumbers from '../components/PageNumbers';

describe('PageNumbers component', () => {
  test('updates URL query parameter when page changes', async () => {
    render(
      <BrowserRouter>
        <PageNumbers pageCount={3} />
      </BrowserRouter>,
    );

    const pageLinks = screen.getAllByRole('link');

    fireEvent.click(pageLinks[1]);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/page/2');
    });
  });
});
