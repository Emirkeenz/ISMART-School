import { configureStore } from '@reduxjs/toolkit';

import { participantsSlice } from './participants/slice';
import { teamSlice } from './teams/slice';
import { categorySlice } from './categories/slice';
import { subcategorySlice } from './subcategories/slice';

const store = configureStore({
  reducer: {
    participants: participantsSlice.reducer,
    team: teamSlice.reducer,
    category: categorySlice.reducer,
    subcategory: subcategorySlice.reducer
  }
});
export default store;

export const getState = store.getState();
