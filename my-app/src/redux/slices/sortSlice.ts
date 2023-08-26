import { createSlice } from "@reduxjs/toolkit";
import ISortSlice from "./ISortSlice";

const initialState: ISortSlice = {
  sortTypeArr: [
    { name: "популярности", typeProperty: "rating" },
    { name: "цене", typeProperty: "price" },
    { name: "алфавиту", typeProperty: "title" },
  ],
  currentType: { name: "популярности", typeProperty: "rating" },
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    getSortType(state, action) {
      state.currentType = action.payload;
    },
    getCurrentType(state, action) {
      state.sortTypeArr.filter((type) => {
        if (type.typeProperty === action.payload.sortProperty)
          state.currentType = type;
      });
    },
  },
});

export const { getSortType, getCurrentType } = sortSlice.actions;

export default sortSlice.reducer;
