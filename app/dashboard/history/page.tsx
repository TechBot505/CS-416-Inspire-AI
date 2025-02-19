"use client";
import React from "react";

function History() {
  return (
    <div className="m-5 p-5 border rounded-lg dark:bg-gray-700 bg-white">
      <h2 className="font-bold text-3xl">History</h2>
      <p className="text-gray-500 dark:text-gray-300 pt-2">
        Search your previously generated AI content
      </p>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-7 font-bold rounded-lg dark:text-darkSecondary bg-slate-100 mt-5 p-3">
        <h2 className="col-span-2">TEMPLATE</h2>
        <h2 className="sm:col-span-2">🤖 AI</h2>
        <h2 className="hidden sm:block">DATE</h2>
        <h2 className="hidden sm:block">WORDS</h2>
        <h2>COPY</h2>
      </div>
    </div>
  );
}

export default History;
