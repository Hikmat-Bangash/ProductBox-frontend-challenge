"use client"
import { createSlice } from "@reduxjs/toolkit";

interface ITEM {
  id: number;
  name: string;
  price: string;
  img: string;
}  


export const Items = createSlice({
  name: "items",
  initialState: {
    cart: [] as any,
    items: [],
    totalAmount: 0,
    totalQuantity: 23,
    loading: false,
    error: false,
  },

  reducers: {
    // start api request for fetching datas
    MakingApiRequest: (state) => {
      state.loading = true;
    },

    RetrievingItems: (state, action) => {
      state.loading = false;
      state.items = action.payload;
    },

    // Add items into cart array
    AddItemsIntoCart: (state, action: { payload: ITEM }) => {
         state.cart.push(action.payload)
    },

    APIRequestError: (state, action) => {
      state.loading = false;
      state.error = true;
      // toast.error(action.payload, {
      //   position: "top-center",
      //   style: { width: "auto", height: "auto" },
      //   duration: 3000,
      // });
    },
  },
});

export const { MakingApiRequest, RetrievingItems, AddItemsIntoCart, APIRequestError } =
  Items.actions;

export default Items.reducer;
