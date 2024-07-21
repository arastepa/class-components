import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { Planets, PlanetState } from '../../Types/appTypes';

const initialState: PlanetState = {
  items: [],
  isloading: false,
};

export const planetSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    setPlanets: (state, action: PayloadAction<Planets[]>) => {
      state.items = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isloading = action.payload;
    },
  },
});

export const { setPlanets, setLoading } = planetSlice.actions;

export default planetSlice.reducer;
