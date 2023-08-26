import { createSlice } from "@reduxjs/toolkit";
import ICartSlice from "./ICartSlice";
const initialState: ICartSlice = {
  pizzasArr: [],
  totalAmount: 0,
  totalPrice: 0,
  pizzaTypeArr: ["тонкое", "традиционное"],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const payload = action.payload;
      const indexIsExist = state.pizzasArr.findIndex(
        (pizza) =>
          pizza.id === payload.id &&
          pizza.pizzaTypeIndex === payload.pizzaTypeIndex &&
          pizza.pizzaSizeIndex === payload.pizzaSizeIndex,
      );
      if (indexIsExist >= 0) {
        const searchElement = state.pizzasArr[indexIsExist];
        searchElement.amount += 1;
        state.totalAmount += 1;
        searchElement.price += payload.price;
        state.totalPrice += payload.price;
      } else {
        state.pizzasArr.push(payload);
        state.totalAmount += 1;
        state.totalPrice += payload.price;
      }
    },
    incrementItem(state, action) {
      const payload = action.payload;
      const indexIsExist = state.pizzasArr.findIndex(
        (pizza) =>
          pizza.id === payload.id &&
          pizza.pizzaTypeIndex === payload.pizzaTypeIndex &&
          pizza.pizzaSizeIndex === payload.pizzaSizeIndex,
      );
      const searchElement = state.pizzasArr[indexIsExist];
      searchElement.amount += 1;
      state.totalAmount += 1;
      searchElement.price += payload.itemPrice;
      state.totalPrice += payload.itemPrice;
    },
    decrementItem(state, action) {
      const payload = action.payload;
      const indexIsExist = state.pizzasArr.findIndex(
        (pizza) =>
          pizza.id === payload.id &&
          pizza.pizzaTypeIndex === payload.pizzaTypeIndex &&
          pizza.pizzaSizeIndex === payload.pizzaSizeIndex,
      );
      const searchElement = state.pizzasArr[indexIsExist];
      searchElement.amount -= 1;
      state.totalAmount -= 1;
      searchElement.price -= payload.itemPrice;
      state.totalPrice -= payload.itemPrice;
    },
    clearItem(state, action) {
      const payload = action.payload;
      const indexIsExist = state.pizzasArr.findIndex(
        (pizza) =>
          pizza.id === payload.id &&
          pizza.pizzaTypeIndex === payload.pizzaTypeIndex &&
          pizza.pizzaSizeIndex === payload.pizzaSizeIndex,
      );
      const searchElement = state.pizzasArr[indexIsExist];
      state.totalAmount -= searchElement.amount;
      state.totalPrice -= searchElement.price;
      state.pizzasArr.splice(indexIsExist, 1);
    },
    clearAllItems(state) {
      state.pizzasArr = [];
      state.totalAmount = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addItem,
  incrementItem,
  decrementItem,
  clearItem,
  clearAllItems,
} = cartSlice.actions;

export default cartSlice.reducer;
