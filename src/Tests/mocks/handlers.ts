import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('https://swapi.dev/api/planets', async () => {
    return HttpResponse.json({
      count: 1,
      results: [
        {
          name: 'Tatooine',
          climate: 'arid',
          gravity: '1 standard',
          population: '200000',
        },
      ],
    });
  }),

  http.get('https://swapi.dev/api/planets?search=Tatooine', async () => {
    return HttpResponse.json({
      count: 1,
      results: [
        {
          name: 'Tatooine',
          climate: 'arid',
          gravity: '1 standard',
          population: '200000',
        },
      ],
    });
  }),
  http.get('https://swapi.dev/api/planets/1', async () => {
    return HttpResponse.json({
      name: 'Tatooine',
      climate: 'arid',
      gravity: '1 standard',
      population: '200000',
      rotation_period: '23',
      orbital_period: '304',
      diameter: '10465',
      surface_water: '1',
      terrain: 'desert',
    });
  }),
  http.get('https://swapi.dev/api/planets/planets?search=&page=2', async () => {
    return HttpResponse.json({
      Name: 'Geonosis',
      Gravity: '0.9 standard',
      Population: '100000000000',
      Climate: 'temperate, arid',
    });
  }),
];
