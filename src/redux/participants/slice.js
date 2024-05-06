import { createSlice } from '@reduxjs/toolkit';
import { getParticipantsList } from './reducer';
import { getState } from '../store';

export const participantsSlice = createSlice({
  name: 'participants',
  initialState: {
    loading: false,
    success: false,
    error: false,
    participantsList: []
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getParticipantsList.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.participantsList = action.payload;
    });
  }
});

export const selectParticipantsList = () => getState.participants.participantsList;

export default participantsSlice.reducer;
