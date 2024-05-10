import { createSlice } from '@reduxjs/toolkit';
import { getTeamsList } from './reducer';

const teamSlice = createSlice({
  name: 'team',
  initialState: {
    loading: false,
    error: null,
    teamList: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getTeamsList.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTeamsList.fulfilled, (state, action) => {
        state.loading = false;
        state.teamList = action.payload.results;
      })
      .addCase(getTeamsList.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default teamSlice;
