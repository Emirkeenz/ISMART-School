import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/api/api';

export const getAllGamesByTimeList = createAsyncThunk(
  'game/getAllGamesByTimeList',
  async ({ params }) => {
    try {
      const response = await api.game.getAllGameResults(params);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
export const startGameByTime = createAsyncThunk('game/startGameByTime', async ({ data }) => {
  try {
    const response = await api.game.startGameByTime(data);
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});

export const changeGameByTimeValue = createAsyncThunk(
  'game/changeGameByTimeValue',
  async ({ id, data, category_id }, { dispatch }) => {
    try {
      const response = await api.game.changeGameValueByTime(id, data);
      dispatch(getAllGamesByTimeList({ params: { team__subcategory: category_id } }));
      console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
