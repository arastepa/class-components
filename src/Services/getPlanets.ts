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
    console.error(error);
  }
};

export const getPageCount = (data: { count: number; results: Planets[] }) => {
  const count: number = data.count;
  const planets: Planets[] = data.results;
  const pageCount = count / planets.length;
  return pageCount;
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
    console.error(error);
  }
};
