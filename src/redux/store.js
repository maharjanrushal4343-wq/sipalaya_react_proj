import { configureStore } from "@reduxjs/toolkit";
import OrderReducer from "../redux/features/OrderListSlice";

export const store = configureStore({
  reducer: {
    order: OrderReducer,
  },
});
