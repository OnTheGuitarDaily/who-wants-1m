import { configureStore } from '@reduxjs/toolkit';
import quizReducer from '../Features/Quiz/quizReducer';


const store = configureStore({
  reducer: {
    quiz: quizReducer,
  },
});

export default store;
