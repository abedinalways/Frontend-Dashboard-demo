import { Suspense } from "react";
import SettingsContainer from "@/src/components/admin/settings/SettingsContainer";

function SettingsContent() {
  return <SettingsContainer />;
}

export default function AdminSettingsPage() {
  return (
    <Suspense fallback={<div className="w-full h-screen flex items-center justify-center">Loading...</div>}>
      <SettingsContent />
    </Suspense>
  );
}