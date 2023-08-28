import { createSlice } from "@reduxjs/toolkit";
import ISearchSlice from "./ISearchSlice";

const initialState: ISearchSlice = {
  word: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    inputWord: (state, action) => {
      state.word = action.payload;
    },
  },
});

export const { inputWord } = searchSlice.actions;

export default searchSlice.reducer;
