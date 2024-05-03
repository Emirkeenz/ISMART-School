import { configureStore } from '@reduxjs/toolkit';

import { participantsSlice } from './participants/slice';
import { teamSlice } from './teams/slice';

const store = configureStore({
  reducer: {
    participants: participantsSlice.reducer,
    team: teamSlice.reducer
  }
});
export default store;

export const getState = store.getState();
