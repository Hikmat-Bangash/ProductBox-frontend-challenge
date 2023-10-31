"use client";
import React, { Dispatch } from "react";
import { ShippingData_validation } from "../../../validation/Shipping";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { ShippingDetail } from "@/redux/features/ShippingDetail.Slice";
import { SHIPPING } from "../../../../@types/Types";
import { AnyAction } from "@reduxjs/toolkit";
import { useRouter } from "next/navigation";
const page = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  }: any = useForm<any>({
    resolver: yupResolver(ShippingData_validation),
  });
  const dispatch: Dispatch<AnyAction> = useDispatch();
  const Navigate = useRouter();

  const onSubmit = async (data: SHIPPING) => {
    console.log("shipping data: ", data);
    dispatch(ShippingDetail(data));
    Navigate.push("/order");
  };

  return (
    <div className="shipping-address  w-full py-3 h-screen flex justify-center items-center ">
      {/* wrapper */}
      <div className="wrapper w-[40rem] h-auto flex flex-col items-center  gap-[1rem] ">
        {/* heading */}
        <div className="text-[2rem] text-black font-bold">Shipping Address</div>

        {/* form */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-[90%]"
        >
          <div className="flex flex-col w-full">
            <label className="text-black text-sm mb-2">Enter Fullname</label>
            <input
              id="FullName"
              type="text"
              {...register("FullName")}
              placeholder="Hikmat Bangash"
              className={`outline-none px-4 w-full py-2 rounded-md border border-gray-500  text-sm ${
                errors.FullName ? "focus:border-red-500" : ""
              }`}
            />
            <div className="text-sm text-red-500">
              {errors.FullName?.message}
            </div>
          </div>

          {/* email address */}
          <div className="flex flex-col w-full">
            <label className="text-black text-sm mb-2">Email Address</label>
            <input
              id="email"
              type="text"
              {...register("email")}
              placeholder="hikmat@gmail.com"
              className={`outline-none px-4 w-full py-2 rounded-md border border-gray-500  text-sm ${
                errors.firstName ? "focus:border-red-500" : ""
              }`}
            />
            <div className="text-sm text-red-500">{errors.email?.message}</div>
          </div>

          {/* city */}
          <div className="flex flex-col w-full">
            <label className="text-black text-sm mb-2">City</label>
            <input
              id="city"
              type="text"
              {...register("city")}
              placeholder="Peshawar"
              className={`outline-none px-4 w-full py-2 rounded-md border border-gray-500  text-sm ${
                errors.city ? "focus:border-red-500" : ""
              }`}
            />
            <div className="text-sm text-red-500">{errors.city?.message}</div>
          </div>

          {/* complete address */}
          <div className="flex flex-col w-full">
            <label className="text-black text-sm mb-2">
              Enter Home address
            </label>
            <input
              id="HomeAddress"
              type="text"
              {...register("HomeAddress")}
              placeholder="Hayatabad phase-3 street-2"
              className={`outline-none px-4 w-full py-2 rounded-md border border-gray-500  text-sm ${
                errors.HomeAddress ? "focus:border-red-500" : ""
              }`}
            />
            <div className="text-sm text-red-500">
              {errors.HomeAddress?.message}
            </div>
          </div>

          {/* postal code */}
          <div className="flex flex-col w-full">
            <label className="text-black text-sm mb-2">Postal Code</label>
            <input
              id="PostalCode"
              type="number"
              {...register("PostalCode")}
              placeholder="0867"
              className={`outline-none px-4 w-full py-2 rounded-md border border-gray-500  text-sm ${
                errors.PostalCode ? "focus:border-red-500" : ""
              }`}
            />
            <div className="text-sm text-red-500">
              {errors.PostalCode?.message}
            </div>
          </div>

          {/* button section */}
          <button
            type="submit"
            className=" outline-none mt-3 w-full py-2 rounded-md bg-yellow-600 flex justify-center items-center"
          >
            <span className="text-white text-sm font-bold">Continue</span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
