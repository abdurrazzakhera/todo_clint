import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const TodoTable = ({ todowork, refetch }) => {
  const handelPriduct = (id) => {
    console.log(id);
    const url = `http://localhost:5000/todo/${id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
        }
        console.log(data);
      });
  };

  return (
    <div class="overflow-x-auto relative">
      <h1>Total data are{todowork.length} </h1>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Todo Text
            </th>
            <th scope="col" class="py-3 px-6">
              Category
            </th>
            <th scope="col" class="py-3 px-6">
              Date
            </th>
            <th scope="col" class="py-3 px-6">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {todowork.map((todo) => (
            <>
              {console.log(todo?.text)}{" "}
              <tr class="bg-white dark:bg-gray-800">
                <th
                  scope="row"
                  class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {todo?.text}
                </th>
                <td class="py-4 px-6">{todo?.category}</td>
                <td class="py-4 px-6">{todo?.date}</td>
                <td class="py-4 px-6">
                  <button
                    onClick={() => handelPriduct(todo?._id)}
                    class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TodoTable;
