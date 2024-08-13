import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

const initialState: { pageCount: number | null } = {
  pageCount: null,
};

export const pageSlice = createSlice({
  name: 'pages',
  initialState,
  reducers: {
    setPageCount: (state, action: PayloadAction<number>) => {
      state.pageCount = action.payload;
    },
  },
});

export const { setPageCount } = pageSlice.actions;

export default pageSlice.reducer;
