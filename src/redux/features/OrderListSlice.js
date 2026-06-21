import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orderList",
  initialState: {
    orderList: [],
  },
  reducers: {
    addToOrder: (state, action) => {
      const order = state.orderList.find(
        (item) => item.id === action.payload.id,
      );
      
      if (order) {
        order.quantity += 1;
      } else {
        state.orderList.push({ ...action.payload, quantity: 1 });
      }
      console.log(state.orderList);
      
    },

    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const targetItem = state.orderList.find((item) => item.id === id);
      if (targetItem && quantity > 0) {
        targetItem.quantity = quantity;
      }
    },

    removeFromOrder: (state, action) => {
      state.orderList = state.orderList.filter(
        (item) => item.id !== action.payload,
      );
    },
  },
});

export const { addToOrder, updateQuantity, removeFromOrder } =
  orderSlice.actions;

export default orderSlice.reducer;
