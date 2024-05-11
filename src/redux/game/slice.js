import { createSlice } from '@reduxjs/toolkit';
import { getAllGamesByRoundRobin, getAllGamesByTimeList, getAllSumoFinalists } from './reducer';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    loading: false,
    error: null,
    gameList: [],
    gameRoundRobinList: [],
    sumoFinalists: []
  },
  reducers: {
    clearGameList(state) {
      state.gameList = [];
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllGamesByTimeList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllGamesByTimeList.fulfilled, (state, action) => {
        state.loading = false;
        state.gameList = action.payload.results;
      })
      .addCase(getAllGamesByTimeList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getAllGamesByRoundRobin.fulfilled, (state, action) => {
        state.loading = false;
        state.gameRoundRobinList = action.payload.results;
      })
      .addCase(getAllSumoFinalists.fulfilled, (state, action) => {
        state.loading = false;
        state.sumoFinalists = action.payload.results;
      });
  }
});

export const { clearGameList } = gameSlice.actions;

export default gameSlice;
