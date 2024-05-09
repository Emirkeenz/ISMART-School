import { configureStore } from '@reduxjs/toolkit';

import participantsSlice from './participants/slice';
import teamSlice from './teams/slice';
import subcategorySlice from './subcategories/slice';
import categorySlice from './categories/slice';
import gameSlice from './game/slice';

const store = configureStore({
  reducer: {
    participants: participantsSlice.reducer,
    team: teamSlice.reducer,
    subcategory: subcategorySlice.reducer,
    category: categorySlice.reducer,
    game: gameSlice.reducer
  }
});
export default store;
