import { PlanetDetails, Planets } from '../Types/appTypes';

export const getPlanets = async (url: string) => {
  const requestOptions = {
    method: 'GET',
  };

  try {
    const response = await fetch(`${url}`, requestOptions);
    const result: Planets[] = (await response.json()).results.map(
      (planet: Planets) => ({
        name: planet.name,
        climate: planet.climate,
        gravity: planet.gravity,
        population: planet.population,
      }),
    );
    return result;
  } catch (error) {
    return [];
  }
};

export const getPageCount = async () => {
  const requestOptions = {
    method: 'GET',
  };

  try {
    const response = await fetch(
      `https://swapi.dev/api/planets/`,
      requestOptions,
    );
    const result: { count: number; results: Planets[] } = await response.json();
    const count: number = result.count;
    const planets: Planets[] = result.results;
    const pageCount = count / planets.length;
    return pageCount;
  } catch (error) {
    return 0;
  }
};

export const getPlanet = async (url: string) => {
  const requestOptions = {
    method: 'GET',
  };

  try {
    const response = await fetch(`${url}`, requestOptions);
    const result: PlanetDetails = await response.json();
    return result;
  } catch (error) {
    return null;
  }
};
