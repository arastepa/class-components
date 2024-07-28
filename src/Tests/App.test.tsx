import { render, screen } from '@testing-library/react';
import App from '../App';
import { describe, expect, it } from 'vitest';
import { Provider } from 'react-redux';
import { store } from '../Store/store';

describe('App Component', () => {
  it('renders correctly with pageCount 1', async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
    expect(await screen.findByTestId('search')).toBeInTheDocument();
  });
});
