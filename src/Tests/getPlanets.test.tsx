import { describe, it, expect, vi, Mock } from 'vitest';
import { getPlanets } from '../Services/getPlanets';

describe('getPlanets', () => {
  it('should fetch and return the planets data', async () => {
    const mockResponse = {
      results: [
        {
          name: 'Tatooine',
          climate: 'arid',
          gravity: '1 standard',
          population: '200000',
        },
        {
          name: 'Alderaan',
          climate: 'temperate',
          gravity: '1 standard',
          population: '2000000000',
        },
      ],
    };

    (global.fetch as Mock) = vi.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      } as Response),
    );

    const planets = await getPlanets('https://swapi.dev/api/planets/');

    expect(fetch).toHaveBeenCalledWith('https://swapi.dev/api/planets/', {
      method: 'GET',
    });
    expect(planets).toEqual(mockResponse.results);
  });
});
