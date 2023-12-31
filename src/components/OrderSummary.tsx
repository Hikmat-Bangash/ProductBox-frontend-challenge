"use client";
import React from 'react'
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ITEM } from '../../@types/Types';
import { BASKET_ITEMS, ORDER_SUMMARY_HEADING, PLACED_ORDER_BUTTON, SUB_TOTAL_HEADING } from '@/constant/constant';

const OrderSummary = () => {
     const CartItem: ITEM[] = useSelector(
       (state: RootState) => state.Items.cart
     );

     // calculating total Price
     const totalPrice = CartItem.reduce(
       (accumulator: any, item: { price: any }) => {
         const price = parseFloat(item.price);
         if (!isNaN(price)) {
           return accumulator + price;
         }

         return accumulator;
       },
       0
     );
  return (
    <>
      <div className="checkout w-[50%] flex justify-center fixed top-[8rem] right-4">
        <div className="wrapper w-[50%] h-auto rounded-md p-8 bg-gray-100 flex flex-col gap-2">
          <h1 className="text-lg font-bold">{ORDER_SUMMARY_HEADING}</h1>

          <div className="sub-total w-full py-3 border-b border-gray-300 flex justify-between">
            <p className="text-gray-500 text-sm">{BASKET_ITEMS} </p>
            <h4>{CartItem.length}</h4>
          </div>

          <div className="sub-total w-full py-3 border-b border-gray-300 flex justify-between">
            <p className="text-gray-500 text-sm">{SUB_TOTAL_HEADING}</p>
            <h4>${totalPrice}</h4>
          </div>

          {/* checkout button */}
          <button className=" w-full flex mt-3 justify-center items-center py-2 rounded-md bg-blue-700 text-white text-[0.8rem] cursor-not-allowed opacity-50">
            {PLACED_ORDER_BUTTON}
          </button>
        </div>
      </div>
    </>
  );
}

export default OrderSummary