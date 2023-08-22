import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  word: '',
}

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    inputWord: (state, action) => {
      state.word = action.payload
    }
  }
})

export const { inputWord } = searchSlice.actions

export default searchSlice.reducer