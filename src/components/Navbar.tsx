"use client";
import React from "react";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { NAVIGATION_TABS } from "@/constant/constant";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const basket = useSelector((state: RootState) => state.Items.cart);
  const path = usePathname();

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 w-full">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <Link
          href="https://productbox.com/"
          className="flex items-center text-white"
        >
          {/* <img
            src="https://media.licdn.com/dms/image/C4D0BAQE3o3NS8S9Yzg/company-logo_200_200/0/1638522763263/productbox_logo?e=1706745600&v=beta&t=_OyqA-jjeNeLcWe5amPPI9e1sMyy4sjZM66uAZ1ctg8"
            className="h-8 mr-3"
            alt="productbox Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            ProductBox
          </span> */}
          HKB
        </Link>

        <div className="hidden w-full md:block md:w-auto">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
            {NAVIGATION_TABS.map((tab) => (
              <li key={tab.index}>
                <Link
                  href={tab.redirectTo}
                  className={`block py-2 pl-3 pr-4  rounded md:border-0 hover:text-green-600 ${
                    path == tab.redirectTo
                      ? "text-green-500"
                      : "text-white"
                  }`}
                >
                  {tab.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* shopping card */}
        <Link href="/cart" className="cart text-3xl text-white relative">
          <div className="relative inline-block">
            <span className="text-white text-3xl">
              <AiOutlineShoppingCart />
            </span>
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              {basket.length}
            </span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
