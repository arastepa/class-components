import { render, screen } from '@testing-library/react';
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

describe('Header', () => {
  test('renders header correctly', () => {
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

    const headerElement = screen.getByTestId('header');
    expect(headerElement).toBeInTheDocument();
  });

  test('renders header image correctly', () => {
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

    const headerElement = screen.getByTestId('headerImg');
    expect(headerElement).toBeInTheDocument();
  });
});
