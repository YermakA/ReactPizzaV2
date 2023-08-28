import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import IPizzaSlice, { IParams } from "./IPizzaSlice";

export const fetchPizzas = createAsyncThunk(
  "pizza/fetchPizzasStatus",
  async (params: IParams): Promise<any> => {
    const { category, sort } = params;
    const { data } = await axios.get(
      `https://64de1ae9825d19d9bfb213b0.mockapi.io/items/?category=${category}${sort}`,
    );

    return data;
  },
);
const initialState: IPizzaSlice = {
  pizzaProps: [],
  status: "loading",
};

const pizzaSlice = createSlice({
  name: "pizza",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchPizzas.rejected, (state) => {
      state.status = "rejected";
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzaProps = action.payload;
      state.status = "fulfilled";
    });
  },
});

export default pizzaSlice.reducer;
