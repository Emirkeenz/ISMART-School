import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/api/api'; // Предполагается, что ваш API находится здесь

export const fetchCategoriesList = createAsyncThunk('category/fetchCategoriesList', async () => {
  try {
    const response = await api.category.getCategoriesList(); // Предполагается, что у вас есть метод getCategoriesList в вашем API
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
