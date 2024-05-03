import { createSlice } from '@reduxjs/toolkit';
import { fetchCategoriesList } from './categoryReducer'; // Импортируем наше асинхронное действие

export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    loading: false,
    error: null,
    categoriesList: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategoriesList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategoriesList.fulfilled, (state, action) => {
        state.loading = false;
        state.categoriesList = action.payload;
      })
      .addCase(fetchCategoriesList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const selectCategoriesList = (state) => state.category.categoriesList;

export default categorySlice.reducer;
