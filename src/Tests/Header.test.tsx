import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { describe, expect, test } from 'vitest';
import App from '../App';
import { store } from '../Store/store';

describe('Header', () => {
  test('renders header correctly', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });
});
