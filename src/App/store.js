import { configureStore } from '@reduxjs/toolkit';
import gameReducer from '../Features/Quiz/quizReducer';


const store = configureStore({
  reducer: {
    game: gameReducer,
  },
});

export default store;
