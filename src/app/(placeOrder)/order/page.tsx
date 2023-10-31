"use client";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ITEM, SHIPPING } from "../../../../@types/Types";

const Page = () => {
  const CartItem: ITEM[] = useSelector((state: RootState) => state.Items.cart);

  const shippingDetail: SHIPPING = useSelector(
    (state: RootState) => state.shippingDetail?.shippingDetail
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

// JSX SECTION
  return (
    <div className="w-full mt-[8rem] h-auto flex justify-center items-center ">
      <div className="wrapper w-[80%] flex justify-between">
        {/* left side */}
        <div className="leftSide w-[50%] h-[40rem]  flex flex-col gap-5">
          <div className="wrapper flex flex-col gap-3">
            <h1 className="text-black text-2xl font-bold  rounded-md shadow-lg h-[3rem] text-center py-1">
              Shipping Detail
            </h1>
            {/* user detail */}
            <div className="userDetail rounded-md shadow-lg h-auto w-full p-3 bg-gray-50">
              <p>
                Name:
                <strong className="ml-[8rem]">{shippingDetail.FullName}</strong>
                <br />
                Email:
                <strong className="ml-[8rem]"> {shippingDetail.email}</strong>
                <br />
                Home Address:
                <strong className="ml-[4rem]">
                  {shippingDetail.HomeAddress}
                </strong>
                <br />
                Postal Code:
                <strong className="ml-[5rem]">
                  {shippingDetail.PostalCode}
                </strong>
                <br />
                City:
                <strong className="ml-[9rem]">
                  {shippingDetail.city}
                </strong>
                <br />
              </p>
            </div>

            {/* ordered items */}
            <div className="orderedItems w-full flex flex-wrap gap-3 rounded-md shadow-lg h-auto p-3 bg-gray-50">
              {CartItem.map(
                (item: any, index: React.Key | null | undefined) => (
                  <div
                    key={index}
                    className="w-[12rem] h-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                  >
                    <div className="images w-full overflow-hidden h-[10rem] flex justify-center items-center">
                      <Image
                        className="p-4 object-cover rounded-t-lg"
                        src={item?.img.replace(".", "")}
                        width={180}
                        height={160}
                        alt="product image"
                      />
                    </div>
                    {/* below item detail */}
                    <div className="item-detail mt-5">
                      <div className="px-5 pb-5">
                        <h5 className="text-md font-semibold tracking-tight text-gray-900 ">
                          {item?.name}
                        </h5>

                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold text-gray-900">
                          ${item?.price}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* right side */}
        <div className="checkout w-[50%] flex justify-center fixed top-[8rem] right-4">
          <div className="wrapper w-[50%] h-auto rounded-md p-8 bg-gray-100 flex flex-col gap-2">
            <h1 className="text-lg font-bold">Order Summary</h1>

            <div className="sub-total w-full py-3 border-b border-gray-300 flex justify-between">
              <p className="text-gray-500 text-sm">Items: </p>
                          <h4>{CartItem.length}</h4>
            </div>

            <div className="sub-total w-full py-3 border-b border-gray-300 flex justify-between">
              <p className="text-gray-500 text-sm">Subtotal</p>
              <h4>${totalPrice}</h4>
            </div>

            {/* checkout button */}
            <button className=" w-full flex mt-3 justify-center items-center py-2 rounded-md bg-blue-700 text-white text-[0.8rem] cursor-not-allowed opacity-50">
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
