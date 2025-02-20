"use client";
import React, { useState } from "react";
import SideNav from "./_components/SideNav";
import Header from "./_components/Header";

function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  return (
    <div className="h-full dark:bg-darkPrimary bg-slate-100">
      <div>
        <SideNav showSidebar={showSideBar} setShowSidebar={setShowSideBar} />
      </div>
      <div className="lg:ml-64">
        <Header setShowSidebar={setShowSideBar} />
        {children}
      </div>
    </div>
  );
}

export default DashboardLayout;
