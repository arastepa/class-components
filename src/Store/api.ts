import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Planets } from '../Types/appTypes';

export const planetsApi = createApi({
  reducerPath: 'planetsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://swapi.dev/api/` }),
  endpoints: (builder) => ({
    getAllPlanets: builder.query<{ count: number; results: Planets[] }, void>({
      query: () => 'planets',
    }),
    getPlanets: builder.query<{ count: number; results: Planets[] }, number>({
      query: (page: number) => `planets?search=&page=${page}`,
    }),
    getPlanet: builder.query<{ count: number; results: Planets[] }, string>({
      query: (search: string) => `planets?search=${search.trim()}`,
    }),
  }),
});

export const { useGetAllPlanetsQuery, useGetPlanetsQuery, useGetPlanetQuery } =
  planetsApi;
