import { createSlice } from '@reduxjs/toolkit';
import { getSubcategoriesList } from './reducer';

const subcategorySlice = createSlice({
  name: 'subcategory',
  initialState: {
    loading: false,
    error: null,
    subcategoriesList: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSubcategoriesList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getSubcategoriesList.fulfilled, (state, action) => {
        state.loading = false;
        state.subcategoriesList = action.payload.results;
      })
      .addCase(getSubcategoriesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default subcategorySlice;
