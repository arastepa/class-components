import { configureStore } from '@reduxjs/toolkit';
import planetReducer from './Planets/planetSlice';
import pagesReducer from './Pagination/pageSlice';
import { planetsApi } from './api';

export const makeStore = () => {
  return configureStore({
    reducer: {
      planets: planetReducer,
      pagesRed: pagesReducer,
      [planetsApi.reducerPath]: planetsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(planetsApi.middleware),
  });
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
