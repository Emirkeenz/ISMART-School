import { createSlice } from '@reduxjs/toolkit';
import { getTeamsList } from './reducer';

const teamSlice = createSlice({
  name: 'team',
  initialState: {
    loading: false,
    success: false,
    error: false,
    teamList: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeamsList.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.teamList = action.payload.results;
    });
  }
});

export default teamSlice;
