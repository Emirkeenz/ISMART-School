import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/api/api';

export const fetchSubcategoriesList = createAsyncThunk(
  'subcategory/fetchSubcategoriesList',
  async () => {
    try {
      const response = await api.subcategories.getSubcategoriesList();
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const fetchSubcategory = createAsyncThunk(
  'category/fetchCategory',
  async ({ id, data }, { dispatch }) => {
    try {
      const response = await api.subcategories.getSubcategory();
      dispatch(getParticipantsList());
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
