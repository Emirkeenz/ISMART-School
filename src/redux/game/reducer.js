import { createAsyncThunk } from '@reduxjs/toolkit';
import api from '../../service/api/api';

export const getAllGamesByTimeList = createAsyncThunk(
  'game/getAllGamesByTimeList',
  async ({ params }) => {
    try {
      const response = await api.game.getAllGameResults(params);
      console.log(response.data.results);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);
export const startGameByTime = createAsyncThunk(
  'game/startGameByTime',
  async ({ data }, { dispatch }) => {
    try {
      const response = await api.game.startGameByTime(data);
      dispatch(getAllGamesByTimeList({ params: { subcategory: data.id } }));
      console.log('response');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

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

export const startGameByRoundRobin = createAsyncThunk(
  'game/startGameByRoundRobin',
  async ({ data }) => {
    try {
      const response = await api.game.startGameByRoundRobin(data);
      // dispatch(getAllGamesByTimeList({ params: { subcategory: data.id } }));
      console.log('response');
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const getAllGamesByRoundRobin = createAsyncThunk(
  'game/getAllGamesByRoundRobin',
  async ({ params }) => {
    try {
      const response = await api.game.getAllGameRoundRobinResults(params);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
);

export const getAllSumoFinalists = createAsyncThunk('game/getAllSumoFinalists', async () => {
  try {
    const response = await api.game.getAllSumoFinalists();
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
});
