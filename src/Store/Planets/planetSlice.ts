import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PlanetDetails, Planets, PlanetState } from '../../Types/appTypes';

const initialState: PlanetState = {
  items: [],
  isloading: false,
  planetDetail: null,
};

export const planetSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    setPlanets: (state, action: PayloadAction<Planets[]>) => {
      state.items = action.payload;
    },
    setPlanetDetail: (state, action: PayloadAction<PlanetDetails>) => {
      state.planetDetail = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isloading = action.payload;
    },
  },
});

export const { setPlanets, setLoading, setPlanetDetail } = planetSlice.actions;

export default planetSlice.reducer;
