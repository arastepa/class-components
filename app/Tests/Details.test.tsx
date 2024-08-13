import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { describe, expect, test, vi } from 'vitest';
import Details from '../components/Details';
import details from './mockPlanetDetails.json';
import planets from './mockPlanets.json';
import Main from '../components/Main';

import { createRemixStub } from '@remix-run/testing';
import { SelectedProvider } from '../SelectedContext/SelectedContext';

describe('Details component', () => {
  test('renders Details component when a planet is selected via Main component', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => (
          <SelectedProvider>
            <Main planets={planets} pageCount={1} />
          </SelectedProvider>
        ),
      },
    ]);

    render(<RemixStub />);

    const planetItem = await screen.findByText('Name: Tatooine');
    fireEvent.click(planetItem);

    waitFor(() => {
      expect(screen.getByText('Rotation Period: 23')).toBeInTheDocument();
      expect(screen.getByText('Orbital Period: 304')).toBeInTheDocument();
      expect(screen.getByText('Diameter: 10465')).toBeInTheDocument();
      expect(screen.getByText('Surface Water: 1')).toBeInTheDocument();
      expect(screen.getByText('Terrain: desert')).toBeInTheDocument();
    });
  });

  test('close to be in the document', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => <Details details={details} setDetails={vi.fn()} />,
      },
    ]);

    render(<RemixStub />);

    waitFor(() => {
      const close = screen.getByText('close');
      expect(close).toBeInTheDocument();
    });
  });

  test('handles close button click in Details component with RemixStub', async () => {
    const RemixStub = createRemixStub([
      {
        path: '/',
        Component: () => <Details details={details} setDetails={vi.fn()} />,
      },
    ]);

    render(<RemixStub />);

    waitFor(() => {
      const close = screen.getByText('close');
      expect(close).toBeInTheDocument();
      fireEvent.click(close);
    });

    waitFor(() => {
      expect(screen.queryByText('close')).not.toBeInTheDocument();
    });
  });
});
