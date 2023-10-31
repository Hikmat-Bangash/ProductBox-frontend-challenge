"use client";
import { createSlice } from "@reduxjs/toolkit";
import { ITEM } from "../../../@types/Types";

export const Items = createSlice({
  name: "items",
  initialState: {
    cart: [] as ITEM[],
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
      state.cart.push(action.payload);
    },

    // Add items into cart array
    removeItemFromCart: (state, action: { payload: number }) => {
      const itemIdToRemove = action.payload;
      const updatedCart = state.cart.filter(
        (item: { id: number }) => item.id !== itemIdToRemove
      );
      return {
        ...state,
        cart: updatedCart,
      };
    },

    APIRequestError: (state, action) => {
      state.loading = false;
      state.error = true;
    },
  },
});

export const {
  MakingApiRequest,
  RetrievingItems,
  AddItemsIntoCart,
  removeItemFromCart,
  APIRequestError,
} = Items.actions;

export default Items.reducer;
