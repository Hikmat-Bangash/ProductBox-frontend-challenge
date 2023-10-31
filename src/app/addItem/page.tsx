"use client";
import React, { FormEvent, useRef } from 'react'
import { ADD_ITEM_INPUTS } from '@/constant/constant';


interface InputItem {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

const page = () => {
  console.log("component rendered")
 const formRef = useRef<HTMLFormElement | null>(null);

  const submitHandler = (e: FormEvent) => {
    e.preventDefault();
    if (formRef.current) {
      const formData: any = new FormData(formRef.current);
     
      const newItem:any = {};
      // Access input values using FormData
      for (const [name, value] of formData.entries()) {
        console.log(`${name}: ${value}`);
        newItem[name] = value;
      }

      console.log("New Item data is: ", newItem)
    }
  };
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="wrapper w-[30%] p-[1rem] flex flex-col gap-8">
        <h1 className="text-xl text-center font-bold tracking-[2px]">
          Add New Item
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
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default page