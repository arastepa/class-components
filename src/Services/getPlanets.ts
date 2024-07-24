import { Planets } from '../Types/appTypes';

export const getPageCount = (data: { count: number; results: Planets[] }) => {
  const count: number = data.count;
  const planets: Planets[] = data.results;
  const pageCount = count / planets.length;
  return pageCount;
};
