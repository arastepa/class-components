import {
  CombinedState,
  EndpointDefinitions,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { PlanetDetails, Planets } from '../Types/appTypes';
import { HYDRATE } from 'next-redux-wrapper';
import { createApi } from './createApi';
import { Action, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './store';

function isHydrateAction(action: Action): action is PayloadAction<RootState> {
  return action.type === HYDRATE;
}

export const planetsApi = createApi({
  reducerPath: 'planetsApi',
  baseQuery: fetchBaseQuery({ baseUrl: `https://swapi.dev/api/` }),
  extractRehydrationInfo(
    action,
    { reducerPath },
  ): CombinedState<EndpointDefinitions, string, 'planetsApi'> | undefined {
    if (isHydrateAction(action)) {
      return action.payload[reducerPath];
    }
    return undefined;
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
