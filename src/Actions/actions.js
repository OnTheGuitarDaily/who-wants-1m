import { createAsyncThunk } from "@reduxjs/toolkit";
 
 export const fetchData =createAsyncThunk('quiz/fetchData', async () => {
    try {
      const res = await fetch('./questionsData.json');
      const data = await res.json()
      return data.questions
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
 )