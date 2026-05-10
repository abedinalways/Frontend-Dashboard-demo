import SettingsShell from "@/src/components/user/settings/SettingsShell";

export default function SettingsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <SettingsShell>{children}</SettingsShell>;
}