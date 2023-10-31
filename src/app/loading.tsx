"use client";
import React from "react";
import { Oval } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <Oval
        height={50}
        width={50}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#4fa94d"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};

export default Loader;
