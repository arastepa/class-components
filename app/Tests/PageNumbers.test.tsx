import { screen, render } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import { createRemixStub } from '@remix-run/testing';
import MainPage, { loader } from '../routes/_index';
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
describe('PageNumbers component', () => {
  test('next page link present', async () => {
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

    const pageLink = await screen.findByTestId('next-page');

    expect(pageLink).toBeInTheDocument();
  });

  test('previous page link present', async () => {
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

    const pageLink = await screen.findByTestId('prev-page');

    expect(pageLink).toBeInTheDocument();
  });
});
