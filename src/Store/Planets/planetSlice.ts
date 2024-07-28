import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { PlanetDetails, Planets, PlanetState } from '../../Types/appTypes';

const initialState: PlanetState = {
  items: [],
  isloading: false,
  planetDetail: null,
  selected: [],
};

export const planetSlice = createSlice({
  name: 'planets',
  initialState,
  reducers: {
    setPlanets: (state, action: PayloadAction<Planets[]>) => {
      state.items = action.payload;
    },
    setPlanetDetail: (state, action: PayloadAction<PlanetDetails | null>) => {
      state.planetDetail = action.payload;
    },
    setSelected: (state, action: PayloadAction<Planets>) => {
      if (!state.selected.find((el) => el.name === action.payload.name))
        state.selected = [...state.selected, action.payload];
    },
    rmSelected: (state, action: PayloadAction<Planets>) => {
      if (state.selected.find((el) => el.name === action.payload.name)) {
        state.selected = state.selected.filter(
          (el) => el.name !== action.payload.name,
        );
      }
    },
    clearSelected: (state) => {
      state.selected = [];
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isloading = action.payload;
    },
  },
});

export const {
  setPlanets,
  setLoading,
  setPlanetDetail,
  setSelected,
  rmSelected,
  clearSelected,
} = planetSlice.actions;

export default planetSlice.reducer;
