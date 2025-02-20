"use client";
import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";

function Dashboard() {
  const [searchInput, setSearchInput] = useState<string>("");
  return (
    <div className="h-full bg-slate-100">
      <SearchSection onSearchInput={(value: string) => setSearchInput(value)} />
    </div>
  );
}

export default Dashboard;