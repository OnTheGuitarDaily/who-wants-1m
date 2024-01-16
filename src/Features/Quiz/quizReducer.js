import { createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../Actions/actions";

const initialState = {
    quiz: []
}
const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(fetchData.fulfilled, (state, action) => {
            state.quiz = action.payload;
          })
      },
}
)

export default quizSlice.reducer;