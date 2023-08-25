import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const fetchPizzas = createAsyncThunk("pizza/fetchPizzasStatus", async (params) => {
  const { category, sort } = params
  const { data } = await axios.get(`https://64de1ae9825d19d9bfb213b0.mockapi.io/items/?category=${category}${sort}`)

  return data
})
const initialState = {
  pizzaProps: [],
  status: "loading"

}

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      console.log("loading")
      state.status = "loading"
    },
    [fetchPizzas.rejected]: (state) => {
      console.log("rejected")
      state.status = "rejected"
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      console.log("fulfilled")
      console.log(action)
      state.pizzaProps = action.payload
      state.status = "fulfilled"

    }
  }
})



export default pizzaSlice.reducer