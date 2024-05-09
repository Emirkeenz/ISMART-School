import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/api/api';

export const getSubcategoriesList = createAsyncThunk(
  'subcategory/getSubcategoriesList',
  async () => {
    try {
      const response = await api.subcategories.getSubcategoriesList();
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
