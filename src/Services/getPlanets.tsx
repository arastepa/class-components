import { Planets } from '../Types/appTypes';

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
