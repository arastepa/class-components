import { fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { PlanetDetails, Planets } from '../Types/appTypes';
import { HYDRATE } from 'next-redux-wrapper';
import { createApi } from './createApi';

export const planetsApi = createApi({
  reducerPath: 'planetsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://swapi.dev/api/` }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      console.log('hiiiii');
      return action.payload[reducerPath];
    }
  },
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
    getPlanetDetail: builder.query<PlanetDetails, number | null>({
      query: (planetNum: number | null) => `planets/${planetNum}`,
    }),
  }),
});

export const {
  useGetAllPlanetsQuery,
  useGetPlanetsQuery,
  useGetPlanetQuery,
  useGetPlanetDetailQuery,
  util: { getRunningQueriesThunk },
} = planetsApi;
