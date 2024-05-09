import { createSlice } from '@reduxjs/toolkit';
import { getCategoriesList } from './reducer';

const categorySlice = createSlice({
  name: 'category',
  initialState: {
    loading: false,
    error: null,
    categoriesList: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategoriesList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCategoriesList.fulfilled, (state, action) => {
        state.loading = false;
        state.categoriesList = action.payload;
      })
      .addCase(getCategoriesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default categorySlice;
