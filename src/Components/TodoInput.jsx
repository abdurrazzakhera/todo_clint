import axios from "axios";
import React, { useState } from "react";
import { useQuery } from "react-query";
import TodoTable from "./TodoTable";

const TodoInput = () => {
  const {
    data: todowork,
    isLoading,
    refetch,
  } = useQuery("todowork", () =>
    fetch("http://localhost:5000/todo").then((res) => res.json())
  );
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  const todofrom = (e) => {
    e.preventDefault();
    const text = e.target.todoText.value;
    const category = e.target.todoCategory.value;
    const date = e.target.date.value;
    const todoDec = { text, category, date };
    console.log(todoDec);
    // axios
    axios.post("http://localhost:5000/todo", todoDec).then((res) => {
      console.log(res);
      refetch();
    });
  };

  return (
    <div className="container  mx-auto pt-12">
      <div className="w-9/12 mx-auto">
        <form className=" mx-auto grid lg:grid-cols-5 " onSubmit={todofrom}>
          <div class=" col-span-2 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              name="todoText"
              placeholder="Doe"
            />
          </div>
          <div class="w-full  px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Category
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                name="todoCategory"
              >
                <option>Personal</option>
                <option>Office</option>
                <option>Body workout</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div>
            <label
              class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-state"
            >
              Select Date
            </label>
            {/* <DatePicker
            className="bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
            selected={startDate}
            onChange={(date: Date) => setStartDate(date)}
          /> */}
            <input
              className="bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 "
              type="date"
              name="date"
              id=""
            />
          </div>
          <div className="relative">
            <input
              type="submit"
              className="bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 absolute bottom-0"
              name=""
              id=""
              value="ADD TASK"
            />
          </div>
        </form>
        <div>
          <TodoTable todowork={todowork} refetch={refetch} />
        </div>
      </div>
    </div>
  );
};

export default TodoInput;
