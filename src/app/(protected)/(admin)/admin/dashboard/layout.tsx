import AdminDashboardShell from "@/src/sharedComponents/layouts/AdminDashboardShell";
import React from "react";

export default function AdminDashboardLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div>
      <AdminDashboardShell>{children}</AdminDashboardShell>
    </div>
  );
}
