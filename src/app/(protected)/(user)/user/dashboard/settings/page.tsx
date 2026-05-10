"use client";

import Select2FAMethodSection from "@/src/components/admin/settings/Select2FAMethodSection";
import TwoFactorSection from "@/src/components/admin/settings/TwoFactorSection";
import PageBreadcrumb from "@/src/components/common/PageBreadCrumb";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

const SettingsPage = () => {
    const router = useRouter();

    const [twoFA, setTwoFA] = useState({
        email: { configured: false, enabled: false },
        phone: { configured: false, enabled: false },
    });

    const isAny2FAConfigured = useMemo(() => {
        return !!twoFA.email.configured || !!twoFA.phone.configured;
    }, [twoFA.email.configured, twoFA.phone.configured]);

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

            {isAny2FAConfigured ? (
                <TwoFactorSection
                    title="Two-Factor Authentication is currently enabled"
                    description="Your account is secured. Deposits, withdrawals and logins will require a secondary verification code."
                    email={twoFA.email}
                    phone={twoFA.phone}
                    onEmailSetup={() =>
                        router.push(`/user/dashboard/settings/security/2fa/email-verify`)
                    }
                    onPhoneSetup={() =>
                        router.push(`/user/dashboard/settings/security/2fa/phone-verify`)
                    }
                    onEmailToggle={(v) =>
                        setTwoFA((p) => ({ ...p, email: { ...p.email, enabled: v } }))
                    }
                    onPhoneToggle={(v) =>
                        setTwoFA((p) => ({ ...p, phone: { ...p.phone, enabled: v } }))
                    }
                    onEmailRemove={() =>
                        setTwoFA((p) => ({
                            ...p,
                            email: { configured: false, enabled: false },
                        }))
                    }
                    onPhoneRemove={() =>
                        setTwoFA((p) => ({
                            ...p,
                            phone: { configured: false, enabled: false },
                        }))
                    }
                />
            ) : (
                    <div className="w-full">
                        <Select2FAMethodSection />
                    </div>
                
            )}
        </div>
    );
};

export default SettingsPage;
