import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/api/api';

export const fetchCategoriesList = createAsyncThunk('category/fetchCategoriesList', async () => {
  try {
    const response = await api.category.getCategoriesList();
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
