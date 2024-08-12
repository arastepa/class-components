import { combineReducers, configureStore } from '@reduxjs/toolkit';
import planetReducer from './Planets/planetSlice';
import pagesReducer from './Pagination/pageSlice';
import { planetsApi } from './api';
import { createWrapper } from 'next-redux-wrapper';

const rootReducer = combineReducers({
  planets: planetReducer,
  pagesRed: pagesReducer,
  [planetsApi.reducerPath]: planetsApi.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export type PreloadStore = Partial<RootState>;

export const makeStore = (preloadedState?: PreloadStore) =>
  configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(planetsApi.middleware),
    devTools: true,
    preloadedState,
  });

export type AppStore = ReturnType<typeof makeStore>;
export type AppDispatch = AppStore['dispatch'];
export const wrapper = createWrapper<AppStore>(() => makeStore());
