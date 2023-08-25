import { configureStore } from "@reduxjs/toolkit";
import searchReducer from './slices/searchSlice'
import sortReducer from './slices/sortSlice'
import categoryReducer from './slices/categorySlice'
import cartReducer from './slices/cartSlice'
import pizzaReducer from './slices/pizzaSlice'
const store = configureStore(
  {
    reducer: {
      pizza: pizzaReducer,
      search: searchReducer,
      sort: sortReducer,
      category: categoryReducer,
      cart: cartReducer
    }
  }
)

export default store