import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { createRemixStub } from '@remix-run/testing';
import MainPage, { loader } from '../routes/page.$id';
import { isResponse } from '@remix-run/react/dist/data';
import { SelectedProvider } from '../SelectedContext/SelectedContext';

const arg = {
  params: { id: 1 },
  context: {},
  request: new Request('http://localhost/'),
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

describe('MainPage component', () => {
  test('updates displayed planets based on search input', async () => {
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

    const searchInput = screen.getByTestId('search');
    fireEvent.change(searchInput, { target: { value: 'Tatooine' } });
    fireEvent.submit(screen.getByTestId('searching'));

    const planet = await screen.findByText(/Tatooine/i);
    expect(planet).toBeInTheDocument();
  });

  test('search input present', async () => {
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

    const searchInput = screen.getByTestId('search');
    expect(searchInput).toBeInTheDocument();
  });

  test('toggles theme on button click', async () => {
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

    expect(await screen.findByText('Switch to Dark Theme')).toBeInTheDocument();
    const btn = await screen.findByText('Switch to Dark Theme');
    fireEvent.click(btn);
    waitFor(async () => {
      expect(
        await screen.findByText('Switch to Light Theme'),
      ).toBeInTheDocument();
    });
  });
});
