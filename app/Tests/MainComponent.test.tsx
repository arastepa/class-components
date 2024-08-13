import { render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { createRemixStub } from '@remix-run/testing';
import MainPage, { loader } from '../routes/_index';
import { isResponse } from '@remix-run/react/dist/data';
import { SelectedProvider } from '../SelectedContext/SelectedContext';

const arg = {
  params: { id: 1 },
  context: {},
};
const loaderResult = await loader(arg);
console;
const data =
  loaderResult !== null && isResponse(loaderResult)
    ? await loaderResult.json()
    : {};

vi.mock('@remix-run/react', async () => {
  const actual = await vi.importActual('@remix-run/react');
  return {
    ...actual,
    useLoaderData: () => data,
  };
});

describe('Main component', () => {
  test('renders the specified number of cards', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => (
          <SelectedProvider>
            <MainPage />
          </SelectedProvider>
        ),
      },
    ]);

    render(<RemixStub />);

    const cards = await waitFor(() => {
      return screen.getAllByRole('listitem');
    });
    expect(cards).toHaveLength(10);
  });

  test('renders the relevant card data', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => (
          <SelectedProvider>
            <MainPage />
          </SelectedProvider>
        ),
      },
    ]);

    render(<RemixStub />);

    const tatooineCard = await screen.findByText('Name: Tatooine');

    expect(tatooineCard).toBeInTheDocument();
  });
});
