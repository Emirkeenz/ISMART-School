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

export const createParticipant = createAsyncThunk(
  'participants/createParticipant',
  async (data, { dispatch }) => {
    try {
      const response = await api.participants.createParticipant(data);
      dispatch(getParticipantsList());
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
export const deleteParticipant = createAsyncThunk(
  'participants/deleteParticipant',
  async (id, { dispatch }) => {
    try {
      const response = await api.participants.deleteParticipant(id);
      dispatch(getParticipantsList());
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
export const updateParticipant = createAsyncThunk(
  'participants/updateParticipant',
  async ({ id, data }, { dispatch }) => {
    try {
      const response = await api.participants.updateParticipant({ id, data });
      dispatch(getParticipantsList());
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
