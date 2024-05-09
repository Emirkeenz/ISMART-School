import { createSlice } from '@reduxjs/toolkit';
import { getAllGamesByTimeList } from './reducer';

const gameSlice = createSlice({
  name: 'game',
  initialState: {
    loading: false,
    error: null,
    gameList: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllGamesByTimeList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllGamesByTimeList.fulfilled, (state, action) => {
        state.loading = false;
        state.gameList = action.payload;
      })
      .addCase(getAllGamesByTimeList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default gameSlice;
