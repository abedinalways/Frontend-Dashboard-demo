"use client";


import PageBreadcrumb from "@/src/components/common/PageBreadCrumb";
import OTPVerifyClient from "@/src/components/admin/settings/email/OTPVerifyClient";
import { Suspense } from "react";

export default function OTPVerifyPage() {


    return (
        <div className="w-full space-y-6">
            <PageBreadcrumb
                pageTitle="Secure Your Account"
                pageDescription="Enable Two-Factor Authentication (2FA) to add an extra layer of security."
                breadcrumbs={[
                    { label: "Dashboard", href: "/user/dashboard" },
                    { label: "Settings", href: "/user/dashboard/settings" },
                    { label: "Security", href: "/user/dashboard/settings?tab=security" },
                    { label: "OTP Verification" },
                ]}
            />

            <Suspense fallback={null}>
                <OTPVerifyClient userType="user"/>
            </Suspense>
        </div>
    );
}
