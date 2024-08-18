import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { formData } from '../../types/types';

const initialState: { data: formData[] } = {
  data: [],
};

export const formDataSlice = createSlice({
  name: 'formData',
  initialState,
  reducers: {
    setFormData: (state, action: PayloadAction<formData>) => {
      state.data.push(action.payload);
    },
    clearSelected: (state) => {
      state.data = [];
    },
  },
});

export const { setFormData, clearSelected } = formDataSlice.actions;

export default formDataSlice.reducer;
