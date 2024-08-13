import { configureStore } from '@reduxjs/toolkit';
import planetReducer from './Planets/planetSlice';
import pagesReducer from './Pagination/pageSlice';
import { planetsApi } from './api';

export const store = configureStore({
  reducer: {
    planets: planetReducer,
    pagesRed: pagesReducer,
    [planetsApi.reducerPath]: planetsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(planetsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
