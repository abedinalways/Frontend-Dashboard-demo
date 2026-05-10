
import UserShell from "@/src/sharedComponents/layouts/UserShell";

export default function UserDashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <UserShell>{children}</UserShell>;
}
