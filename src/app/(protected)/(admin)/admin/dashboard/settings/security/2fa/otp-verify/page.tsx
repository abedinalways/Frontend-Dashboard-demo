import { Suspense } from "react";
import PageBreadcrumb from "@/src/components/common/PageBreadCrumb";
import OTPVerifyClient from "@/src/components/admin/settings/email/OTPVerifyClient";


export default function OTPVerifyPage() {
    return (
        <div className="w-full space-y-6">
            <PageBreadcrumb
                pageTitle="Secure Your Account"
                pageDescription="Enable Two-Factor Authentication (2FA) to add an extra layer of security."
                breadcrumbs={[
                    { label: "Dashboard", href: "/admin/dashboard" },
                    { label: "Settings", href: "/admin/dashboard/settings" },
                    { label: "Security", href: "/admin/dashboard/settings?tab=security" },
                    { label: "OTP Verification" },
                ]}
            />

            {/* ✅ Suspense boundary */}
            <Suspense fallback={null}>
                <OTPVerifyClient  userType="admin"/>
            </Suspense>
        </div>
    );
}
