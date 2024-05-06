import { createSlice } from '@reduxjs/toolkit';
import { fetchSubcategoriesList } from './reducer';
import { getState } from '../store';

export const subcategorySlice = createSlice({
  name: 'subcategory',
  initialState: {
    loading: false,
    error: null,
    subcategoriesList: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSubcategoriesList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSubcategoriesList.fulfilled, (state, action) => {
        state.loading = false;
        state.subcategoriesList = action.payload;
      })
      .addCase(fetchSubcategoriesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const selectSubcategoriesList = () => getState.subcategoriesList;

export default subcategorySlice.reducer;
