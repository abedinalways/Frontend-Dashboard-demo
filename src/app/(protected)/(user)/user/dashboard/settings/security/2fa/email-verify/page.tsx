import VerifyEmailContainer from "@/src/components/admin/settings/email/VerifyEmailContainer";
import PageBreadcrumb from "@/src/components/common/PageBreadCrumb";
import { Suspense } from "react";

const EmailLayout = () => {
    return (
        <div className="space-y-6 w-full">
            <div>
                <PageBreadcrumb
                    pageTitle="Secure Your Account"
                    pageDescription="Enable Two-Factor Authentication (2FA) to add an extra layer of security This is critical for protecting your crypto wallet funds and competitive match history from unauthorized access."
                    breadcrumbs={[
                        { label: "Dashboard", href: "/user/dashboard" },
                        { label: "Settings", href: "/user/dashboard/settings" },
                        { label: "Security" },
                    ]}
                />
            </div>
            <div>
                <Suspense fallback={null}>
                    <VerifyEmailContainer userType="user" />
                </Suspense>
            </div>

        </div>
    )
}
export default EmailLayout;