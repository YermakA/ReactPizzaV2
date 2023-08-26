import { createSlice } from "@reduxjs/toolkit";
import ICategorySlice from "./ICategorySlice";

const initialState: ICategorySlice = {
  typesArr: ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"],
  categoryId: 0,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    getCategoryId(state, action) {
      state.categoryId = action.payload;
    },
  },
});

export const { getCategoryId } = categorySlice.actions;
export default categorySlice.reducer;
