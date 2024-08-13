import { screen, fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { afterAll, beforeAll, describe, expect, test, vi } from 'vitest';
import { createRemixStub } from '@remix-run/testing';
import { mockServer } from './mocks/mockServer';
import { loader, MainPage } from '../routes/_index';
import { isResponse } from '@remix-run/react/dist/data';

mockServer();

beforeAll(() => {
  global.URL.createObjectURL = vi.fn(() => 'mock-url');
});

afterAll(() => {
  global.URL.createObjectURL = URL.createObjectURL;
});

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

describe('Main Component Flyout', () => {
  test('displays flyout with buttons when items are selected', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => <MainPage />,
      },
    ]);

    render(<RemixStub initialEntries={['/']} />);

    expect(screen.queryByText(/items selected/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByTestId('flyout-0'));
    expect(screen.getByText('1 items selected')).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /download/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: /unselect all/i }),
    ).toBeInTheDocument();
  });

  test('clears selected items when "unselect all" is clicked', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => <MainPage />,
      },
    ]);

    render(<RemixStub />);

    fireEvent.click(screen.getByTestId('flyout-0'));
    expect(screen.getByText('1 items selected')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('button', { name: /unselect all/i }));
    expect(screen.queryByText(/items selected/i)).not.toBeInTheDocument();
  });
});
