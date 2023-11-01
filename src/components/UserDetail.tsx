"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { ITEM, SHIPPING } from "../../@types/Types";
import Image from "next/image";
import { CITY_LABEL, EMAIL_LABEL, HOME_ADDRESS_LABEL, POSTAL_CODE_LABEL, USERNAME_LABEL } from "@/constant/constant";

const UserDetail = () => {
  const CartItem: ITEM[] = useSelector((state: RootState) => state.Items.cart);

  const shippingDetail: SHIPPING = useSelector(
    (state: RootState) => state.shippingDetail?.shippingDetail
  );
  return (
    <>
      <div className="userDetail rounded-md shadow-lg h-auto w-full p-3 bg-gray-50">
        <p>
          {USERNAME_LABEL}
          <strong className="ml-[8rem]">{shippingDetail.FullName}</strong>
          <br />
          {EMAIL_LABEL}
          <strong className="ml-[8rem]"> {shippingDetail.email}</strong>
          <br />
          {HOME_ADDRESS_LABEL}
          <strong className="ml-[4rem]">{shippingDetail.HomeAddress}</strong>
          <br />
          {POSTAL_CODE_LABEL}
          <strong className="ml-[5rem]">{shippingDetail.PostalCode}</strong>
          <br />
          {CITY_LABEL}
          <strong className="ml-[9rem]">{shippingDetail.city}</strong>
          <br />
        </p>
      </div>
      {/* ordered items */}
      <div className="orderedItems w-full flex flex-wrap gap-3 rounded-md shadow-lg h-auto p-3 bg-gray-50">
        {CartItem.map((item: any, index: React.Key | null | undefined) => (
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
        ))}
      </div>
    </>
  );
};

export default UserDetail;
