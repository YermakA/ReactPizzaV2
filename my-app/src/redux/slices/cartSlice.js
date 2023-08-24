import { createSlice } from '@reduxjs/toolkit'


const initialState = {
  pizzasArr: [],
  totalAmount: 0,
  totalPrice: 0
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const payload = action.payload
      const indexIsExist = state.pizzasArr.findIndex(pizza => pizza.id === payload.id &&
        pizza.pizzaTypeIndex === payload.pizzaTypeIndex &&
        pizza.pizzaSizeIndex === payload.pizzaSizeIndex
      )
      if (indexIsExist >= 0) {
        state.pizzasArr[indexIsExist].amount += 1
        state.totalAmount += 1
        state.totalPrice += payload.price
      } else {
        state.pizzasArr.push(payload)
        state.totalAmount += 1
        state.totalPrice += payload.price
      }
    }
  }
})

export const { addItem } = cartSlice.actions

export default cartSlice.reducer