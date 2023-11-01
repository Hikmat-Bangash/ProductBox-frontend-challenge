"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { FetchingItems } from "@/redux/service/api";
import { AnyAction, Dispatch } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { AddItemsIntoCart } from "@/redux/features/ItemSlice";
import { ITEM } from "../../../@types/Types";
import Loader from "../loading";
import { ADD_TO_CART_BUTTON } from "@/constant/constant";

const page = () => {
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const { loading, items }: any = useSelector(
    (state: RootState) => state.Items
  );

  const AddToCart = (item: ITEM) => {
    dispatch(AddItemsIntoCart(item));
  };

  useEffect(() => {
    FetchingItems(dispatch);
  }, []);

  return (
    <div className="w-full mt-[8rem] h-auto flex justify-center items-center ">
      <div className="wrapper w-[80%] flex gap-[1rem] flex-wrap">
        {loading ? (
          <>
            <Loader/>
          </>
        ) : (
          items.map((item: any, index: React.Key | null | undefined) => (
            <div
              key={index}
              className="w-[18rem] h-[20rem] max-w-sm bg-white border border-gray-200 rounded-lg shadow"
            >
              <div className="images w-full overflow-hidden h-[10rem] flex justify-center items-center">
                <Image
                  className="p-4 object-cover rounded-t-lg"
                  src={item?.img.replace(".", "")}
                  width={200}
                  height={160}
                  alt="product image"
                />
              </div>
              {/* below is the item detail */}
              <div className="item-detail mt-5">
                <div className="px-5 pb-5">
                  <h5 className="text-md font-semibold tracking-tight text-gray-900 ">
                    {item?.name}
                  </h5>
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900">
                      ${item?.price}
                    </span>
                    <button
                      onClick={() => AddToCart(item)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      {ADD_TO_CART_BUTTON}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default page;
