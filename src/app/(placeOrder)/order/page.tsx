"use client";
import React from "react";
import UserDetail from "@/components/UserDetail";
import OrderSummary from "@/components/OrderSummary";
import { ORDER_PAGE_TITLE } from "@/constant/constant";

const Page = () => {
  return (
    <div className="w-full mt-[8rem] h-auto flex justify-center items-center ">
      <div className="wrapper w-[80%] flex justify-between">
        {/* left side */}
        <div className="leftSide w-[50%] h-[40rem]  flex flex-col gap-5">
          <div className="wrapper flex flex-col gap-3">
            <h1 className="text-black text-2xl font-bold  rounded-md shadow-lg h-[3rem] text-center py-1">
              {ORDER_PAGE_TITLE}
            </h1>
            <UserDetail/>           
          </div>
        </div>

        {/* order summary */}
       <OrderSummary/>
      </div>
    </div>
  );
};

export default Page;
