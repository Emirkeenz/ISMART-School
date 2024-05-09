import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../service/api/api';

export const login = createAsyncThunk('auth/login', async (data) => {
  try {
    const response = await api.auth.login(data);
    localStorage.setItem('data', JSON.stringify(response.data));
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
