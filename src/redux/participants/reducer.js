import api from '../../service/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getParticipantsList = createAsyncThunk(
  'participants/getParticipantsList',
  async () => {
    try {
      const response = await api.participants.getParticipantsList();
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
