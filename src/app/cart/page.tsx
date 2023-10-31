"use client";
import Image from "next/image";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { removeItemFromCart } from "@/redux/features/ItemSlice";
import { useDispatch } from "react-redux";
import Link from "next/link";
import EmptyCart from "../../../public/assets/emptyCart.svg";

const Page = () => {
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.Items.cart);
  // calculating total Price
  const totalPrice = items.reduce((accumulator: any, item: { price: any }) => {
    const price = parseFloat(item.price);
    if (!isNaN(price)) {
      return accumulator + price;
    }
    return accumulator;
  }, 0);

  return (
    <div className="w-full mt-[8rem] h-auto flex justify-center items-center ">
      <div className="wrapper w-[80%] flex justify-between">
        {items.length <= 0 ? (
          <>
            <div className="empty-basket w-full flex justify-center items-center flex-col gap-4">
              <h2 className="text-lg text-black">
                Your Shopping cart is empty!
              </h2>
              <Image
                src={EmptyCart}
                className=" w-[25rem] h-[25rem]"
                alt="cartPic"
              />
            </div>
          </>
        ) : (
          <>
            {/* left side */}
            <div className="leftSide w-[50%] flex flex-col gap-5">
              {items.map((item: any, index: React.Key | null | undefined) => (
                <div
                  key={index}
                  className="w-auto h-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow"
                >
                  <div className="images w-full overflow-hidden h-auto flex justify-center items-center">
                    <Image
                      className="p-4 object-cover rounded-t-lg"
                      src={item?.img.replace(".", "")}
                      width={350}
                      height={260}
                      alt="product image"
                    />
                  </div>
                  {/* below item detail */}
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
                          onClick={() => dispatch(removeItemFromCart(item.id))}
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
                        >
                          remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* right side */}
            <div className="checkout w-[50%] flex justify-center fixed top-[8rem] right-4">
              <div className="wrapper w-[50%] h-[12rem] rounded-md p-8 bg-gray-100 flex flex-col gap-2">
                <h1 className="text-lg font-bold">Order Summary</h1>
                <div className="sub-total w-full py-3 border-b border-gray-300 flex justify-between">
                  <p className="text-gray-500 text-sm">Subtotal</p>
                  <h4>${totalPrice}</h4>
                </div>

                {/* checkout button */}
                <Link
                  href="/shipping"
                  className=" w-full flex mt-3 justify-center items-center py-2 rounded-md bg-blue-700 text-white text-[0.8rem]"
                >
                  Checkout
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
