import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import mockPlanetDetails from './mockPlanetDetails.json';
import { describe, expect, test, vi } from 'vitest';
import Details from '../components/Details';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

describe('Details component', () => {
  test('renders detailed card data correctly', () => {
    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Details details={mockPlanetDetails} setDetails={() => {}} />
            }
          />
        </Routes>
      </BrowserRouter>,
    );

    expect(screen.getByText('Name: Tatooine')).toBeInTheDocument();
    expect(screen.getByText('Gravity: 1 standard')).toBeInTheDocument();
    expect(screen.getByText('Population: 200000')).toBeInTheDocument();
    expect(screen.getByText('Climate: arid')).toBeInTheDocument();
    expect(screen.getByText('Orbital Period: 304')).toBeInTheDocument();
    expect(screen.getByText('Diameter: 10465')).toBeInTheDocument();
    expect(screen.getByText('Rotation Period: 23')).toBeInTheDocument();
    expect(screen.getByText('Surface Water: 1')).toBeInTheDocument();
    expect(screen.getByText('Terrain: desert')).toBeInTheDocument();
  });

  test('clicking close button hides the component', async () => {
    const setDetailsMock = vi.fn();

    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Details
                details={mockPlanetDetails}
                setDetails={setDetailsMock}
              />
            }
          />
        </Routes>
      </BrowserRouter>,
    );

    const closeBtn = await waitFor(() => {
      return screen.getByTestId('closeBtn');
    });

    fireEvent.click(closeBtn);
    await waitFor(() => {
      expect(setDetailsMock).toHaveBeenCalledTimes(1);
    });
  });
});
