"use client";
import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  console.log(count)

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <div className="bg-white shadow-2xl rounded-2xl p-8 w-80 text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Simple Counter
        </h1>

        <p className="text-5xl font-extrabold text-indigo-600 mb-6">{count}</p>

        <div className="space-x-3">
          <button
            onClick={() => setCount(count + 1)}
            className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
          >
            Increment
          </button>

          <button
            onClick={() => setCount(0)}
            className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg transition"
          >
            Reset
          </button>

          <button
            onClick={() => setCount(count - 1)}
            className="px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
