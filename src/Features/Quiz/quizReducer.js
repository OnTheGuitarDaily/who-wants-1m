import { createSlice } from "@reduxjs/toolkit";
import { fetchData, setWinnigPrize } from "../../Actions/actions";

const initialState = {
    quiz: [],
    winningPrize: []
}
const gameSlice = createSlice({
    name: 'game',
    initialState,
    extraReducers: (builder) => {
        builder
          .addCase(fetchData.fulfilled, (state, action) => {
            state.quiz = action.payload;
          })
          .addCase(setWinnigPrize.fulfilled, (state, action) => {
            state.winningPrize = action.payload
          })
      },
}
)

export default gameSlice.reducer;