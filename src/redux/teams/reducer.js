import api from '../../service/api/api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAllGamesByTimeList } from '../game/reducer';

export const getTeamsList = createAsyncThunk('team/getTeamsList', async () => {
  try {
    const response = await api.team.getTeamList();
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const updateTeam = createAsyncThunk(
  'team/updateTeam',
  async ({ id, data, category_id }, { dispatch }) => {
    try {
      const response = await api.team.updateTeam({ id, data });
      dispatch(getAllGamesByTimeList({ params: { team__subcategory: category_id } }));
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
