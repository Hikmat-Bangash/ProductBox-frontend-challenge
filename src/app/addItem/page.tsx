"use client";
import React, { FormEvent, useRef, useState } from "react";
import { ADD_ITEM_INPUTS, ADD_ITEM_PAGE_BUTTON, ADD_ITEM_PAGE_TITLE } from "@/constant/constant";
import { addNewItem } from "@/redux/service/api";
import { useRouter } from "next/navigation";
interface InputItem {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const page = () => {
  const [loading, setloading] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement | null>(null);
  const Navigate = useRouter();

  const submitHandler = async (e: FormEvent) => {
    e.preventDefault();
    setloading(true);
    if (formRef.current) {
      const formData: any = new FormData(formRef.current);
      const newItem: any = {};
      // Access input values using FormData
      for (const [name, value] of formData.entries()) {
        newItem[name] = value;
      }
      // calling api to addItem
      try {
        const res = await addNewItem(newItem);
        if (res.status == 200 || res.data) {
          setloading(false);
          Navigate.push("/items");
          alert("Item Added Successfully");
        }
      } catch (error) {
        alert("Something went wrong");
      }
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="wrapper w-[30%] p-[1rem] flex flex-col gap-8">
        <h1 className="text-xl text-center font-bold tracking-[2px]">
          {ADD_ITEM_PAGE_TITLE}
        </h1>

        <form
          ref={formRef}
          onSubmit={submitHandler}
          className="flex flex-col gap-5"
        >
          {ADD_ITEM_INPUTS.map((Input: InputItem, index: number) => (
            <div key={index} className="name flex flex-col gap-1">
              <label htmlFor={Input.label}>{Input.name}</label>
              <input
                type={Input.type}
                placeholder={Input.placeholder}
                name={Input.name}
                id={Input.label}
                className="w-full px-2 py-4 h-[2rem] rounded-sm outline-none border border-gray-500"
              />
            </div>
          ))}
          {/*  submit button */}
          <button
            type="submit"
            className="w-full mt-2 font-semibold py-2 text-center bg-yellow-500 text-black rounded-sm hover:bg-yellow-600"
          >
            {loading ? "loading..." : ADD_ITEM_PAGE_BUTTON}
          </button>
        </form>
      </div>
    </div>
  );
};

export default page;
