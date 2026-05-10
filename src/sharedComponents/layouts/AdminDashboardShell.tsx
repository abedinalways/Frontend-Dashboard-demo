"use client";

import { useSidebar } from "@/src/context/SidebarContext";
import AppHeader from "@/src/layout/AppHeader";
import AppSidebar from "@/src/layout/AppSidebar";
import Backdrop from "@/src/layout/Backdrop";
import React from "react";

export default function AdminDashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isExpanded, isMobileOpen } = useSidebar();


  const mainContentMargin = isMobileOpen
    ? "ml-0"
    : isExpanded
    ? "lg:ml-[312px]" 
    : "lg:ml-[122px]"; 

  return (
    <div className="min-h-screen xl:flex overflow-x-hidden bg-gray-50 dark:bg-[#0B151D]">
      {/* Sidebar and Backdrop */}
      <AppSidebar role="admin" />
      <Backdrop />
      <div
        className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin} overflow-x-hidden bg-gray-50 dark:bg-[#0B151D]`}
      >
        {/* Header */}
        <AppHeader />
        {/* Page Content */}
        <div className="p-1 md:p-2">{children}</div>
      </div>
    </div>
  );
}

