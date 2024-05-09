import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/api/api';

export const getCategoriesList = createAsyncThunk('category/getCategoriesList', async () => {
  try {
    const response = await api.categories.getCategoriesList();
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
