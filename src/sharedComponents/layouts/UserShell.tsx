
"use client";

import { useSidebar } from "@/src/context/SidebarContext";
import AppHeader from "@/src/layout/AppHeader";
import AppSidebar from "@/src/layout/AppSidebar";
import Backdrop from "@/src/layout/Backdrop";
import React from "react";

export default function UserShell({
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
      <AppSidebar role="user" />
      <Backdrop />
      <div
        className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin} overflow-x-hidden bg-gray-50 dark:bg-[#0B151D]`}
      >
        {/* Header */}
        <AppHeader role="user"/>
        <div className="p-1 md:p-2">{children}</div>
      </div>
    </div>
  );
}





// "use client";

// import { useSidebar } from "@/src/context/SidebarContext";
// import AppHeader from "@/src/layout/AppHeader";
// import AppSidebar from "@/src/layout/AppSidebar";
// import Backdrop from "@/src/layout/Backdrop";
// import React from "react";

// export default function UserShell({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const { isExpanded, isHovered, isMobileOpen } = useSidebar();


//   const mainContentMargin = isMobileOpen
//     ? "ml-0"
//     : isExpanded || isHovered
//       ? "lg:ml-[290px]"
//       : "lg:ml-[90px]";

//   return (
//     <div className="min-h-screen xl:flex">
//       <AppSidebar />
//       <Backdrop />
//       <div
//         className={`flex-1 transition-all  duration-300 ease-in-out ${mainContentMargin}`}
//       >
//         <AppHeader />
//         <div className="p-4 mx-auto max-w-(--breakpoint-2xl) md:p-6">{children}</div>
//       </div>
//     </div>
//   );
// }


