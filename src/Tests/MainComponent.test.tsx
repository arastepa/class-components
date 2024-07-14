import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Main from '../components/Main';
import { Planets } from '../Types/appTypes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { describe, expect, Mock, test, vi } from 'vitest';
import { getPlanet } from '../Services/getPlanets';

vi.mock('../Services/getPlanets');

const mockPlanets: Planets[] = [
  {
    name: 'Tatooine',
    gravity: '1 standard',
    population: '200000',
    climate: 'arid',
  },
  {
    name: 'Alderaan',
    gravity: '1 standard',
    population: '2000000000',
    climate: 'temperate',
  },
];

const mockPlanetDetails = {
  name: 'Tatooine',
  gravity: '1 standard',
  population: '200000',
  climate: 'arid',
  orbital_period: '304',
  diameter: '10465',
  rotation_period: '23',
  surface_water: '1',
  terrain: 'desert',
};

describe('Main component', () => {
  //   test('displays loading indicator while fetching data', async () => {
  //     render(
  //       <BrowserRouter>
  //         <Routes>
  //           <Route
  //             path="/"
  //             element={<Main pageCount={1} planets={mockPlanets} />}
  //           />
  //         </Routes>
  //       </BrowserRouter>,
  //     );

  //     const firstCard = await waitFor(() => {
  //       return screen.getByTestId('planet-0');
  //     });
  //     if (firstCard) {
  //       fireEvent.click(firstCard);
  //       await waitFor(() => {
  //         expect(window.location.search).toBe('?details=1');
  //       });
  //     }

  //     // expect(
  //     //   await waitFor(() => {
  //     //     return screen.queryByTestId('spinner');
  //     //   }),
  //     // ).toBeNull();
  //   });

  test('renders the specified number of cards', async () => {
    render(
      <BrowserRouter>
        <Main pageCount={1} planets={mockPlanets} />
      </BrowserRouter>,
    );

    const cards = await waitFor(() => {
      return screen.getAllByRole('listitem');
    });
    expect(cards).toHaveLength(mockPlanets.length);
  });

  test('displays an appropriate message if no cards are present', async () => {
    render(
      <BrowserRouter>
        <Main pageCount={1} planets={[]} />
      </BrowserRouter>,
    );

    const noDataMessage = await waitFor(() => {
      return screen.getByText('No Data');
    });
    expect(noDataMessage).toBeInTheDocument();
  });

  test('renders the relevant card data', () => {
    render(
      <BrowserRouter>
        <Main pageCount={1} planets={mockPlanets} />
      </BrowserRouter>,
    );

    const tatooineCard = screen.getByText('Name: Tatooine');
    const alderaanCard = screen.getByText('Name: Alderaan');

    expect(tatooineCard).toBeInTheDocument();
    expect(alderaanCard).toBeInTheDocument();
  });

  test('clicking on a Card opens a detailed view', async () => {
    (getPlanet as Mock).mockResolvedValue(mockPlanetDetails);

    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Main pageCount={1} planets={mockPlanets} />}
          />
        </Routes>
      </BrowserRouter>,
    );

    const firstCard = await waitFor(() => {
      return screen.getByTestId('planet-0');
    });
    if (firstCard) {
      fireEvent.click(firstCard);
      await waitFor(() => {
        expect(window.location.search).toBe('?details=1');
      });
    }
  });

  test('clicking triggers an additional API call to fetch detailed information', async () => {
    (getPlanet as Mock).mockResolvedValue(mockPlanetDetails);

    render(
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Main pageCount={1} planets={mockPlanets} />}
          />
        </Routes>
      </BrowserRouter>,
    );

    const firstCard = await waitFor(() => {
      return screen.getByTestId('planet-0');
    });
    if (firstCard) {
      fireEvent.click(firstCard);
      await waitFor(() => {
        expect(getPlanet).toHaveBeenCalled();
        expect(getPlanet).toHaveBeenCalledWith(
          'https://swapi.dev/api/planets/1',
        );
      });
      await waitFor(() => {
        expect(screen.getByText('Orbital Period: 304')).toBeInTheDocument();
      });
    }
  });
});
