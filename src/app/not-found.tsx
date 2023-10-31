"use client";
import Link from "next/link";
import React from "react";

const NotFoundPage = () => {
  return (
    <section className="flex justify-center items-center h-screen w-screen   bg-gray-50">
      <div className="container flex flex-col items-center ">
        <div className="flex flex-col gap-6 max-w-md text-center">
          <h2 className="font-extrabold text-9xl text-gray-600">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl md:text-3xl dark:text-gray-400">
            Sorry, we couldn&apos;t find this page.
          </p>
          <Link
            href="/"
            className="px-8 py-4 text-xl cursor-pointer font-semibold rounded bg-purple-600 text-gray-50 hover:text-gray-200"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
