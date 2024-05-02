import { configureStore } from '@reduxjs/toolkit';

import { participantsSlice } from './participants/slice';
import { teamSlice } from './teams/slice';

const store = configureStore({
  reducer: {
    participants: participantsSlice,
    team: teamSlice
  }
});
export default store;
