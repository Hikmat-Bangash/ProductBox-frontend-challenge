import { NOT_FOUND_BACK_TO_HOME, NOT_FOUND_ERROR, NOT_FOUND_ERROR_CODE, NOT_FOUND_MESSAGE } from "@/constant/constant";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <section className="flex justify-center items-center h-screen w-screen   bg-gray-50">
      <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-gray-600">
            <span className="sr-only">{NOT_FOUND_ERROR}</span> {NOT_FOUND_ERROR_CODE}
          </h2>
          <p className="text-2xl md:text-3xl dark:text-gray-400">
            {NOT_FOUND_MESSAGE}
          </p>
          <Link
            href="/"
            className="px-8 py-4 text-xl cursor-pointer font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200"
          >
            {NOT_FOUND_BACK_TO_HOME}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
