"use client";
import { createSlice } from "@reduxjs/toolkit";
import { SHIPPING } from "../../../@types/Types";

export const Shipping = createSlice({
  name: "shipping",
  initialState: {
    shippingDetail: {} as SHIPPING,
  },

  reducers: {
    ShippingDetail: (state, action: { payload: SHIPPING }) => {
      state.shippingDetail = action.payload;
    },
  },
});

export const { ShippingDetail } = Shipping.actions;

export default Shipping.reducer;
