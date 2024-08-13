import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { describe, expect, test } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../Store/store';
import App from '../App';
import { mockServer } from './mocks/mockServer';

mockServer();

describe('PageNumbers component', () => {
  test('updates URL query parameter when page changes', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const pageLink = await screen.findByTestId('link-0');

    fireEvent.click(pageLink);

    await waitFor(() => {
      expect(window.location.pathname).toBe('/page/1');
    });
  });
});
