import { configureStore } from '@reduxjs/toolkit';
import planetReducer from './Planets/planetSlice';
import { planetsApi } from './api';

export const store = configureStore({
  reducer: {
    planets: planetReducer,
    [planetsApi.reducerPath]: planetsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(planetsApi.middleware),
});
