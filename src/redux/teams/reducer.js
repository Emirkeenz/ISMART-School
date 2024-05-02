import api from '../../service/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const getTeamsList = createAsyncThunk('team/getTeamsList', async () => {
  try {
    const response = await api.team.getTeamList();
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const createTeam = createAsyncThunk('team/createTeam', async (data, { dispatch }) => {
  try {
    const response = await api.team.createTeam(data);
    dispatch(getTeamsList());
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
export const deleteTeam = createAsyncThunk('team/deleteTeam', async (id, { dispatch }) => {
  try {
    const response = await api.team.deleteTeam(id);
    dispatch(getTeamsList());
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
export const updateTeam = createAsyncThunk(
  'team/updateTeam',
  async ({ id, data }, { dispatch }) => {
    try {
      const response = await api.team.updateTeam({ id, data });
      dispatch(getTeamsList());
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
