"use client";

import  { useState } from "react";
import { UploadCloud, Trash2, Edit } from "lucide-react";
import ProfileAvatar from "@/src/components/users/ProfileAvatar";
import TextInputField from "@/src/components/ui/input/TextInputField";
import PhoneNumberField from "@/src/components/ui/input/PhoneNumberField";
import SelectFieldBlock from "@/src/components/ui/input/SelectFieldBlock";
import { Button } from "@/components/ui/button";
import UploadButtonWithFileInput from "@/src/components/ui/input/UploadButtonWithFileInput";


export default function ProfileSettingsCard() {
    const [settings, setSettings] = useState({ firstName: "Jannatul", lastName: "Fariha", phone: "+1213421413", email: "jannatulfarinha@mail.com", timezone: "UTC+7", country: "US" });

    const timezones = [{ value: "UTC+6", label: "UTC +6" }, { value: "UTC+7", label: "UTC +7" }, { value: "UTC+8", label: "UTC +8" }];

    const countries = [
        { code: "US", label: "US", flag: <span className="text-base">🇺🇸</span> },
        { code: "BD", label: "BD", flag: <span className="text-base">🇧🇩</span> },
        { code: "ER", label: "Eritrea", flag: "🇪🇷" },
        { code: "EE", label: "Estonia", flag: "🇪🇪" },
        { code: "SZ", label: "Eswatini", flag: "🇸🇿" },
        { code: "ET", label: "Ethiopia", flag: "🇪🇹" },
        { code: "FK", label: "Falkland Islands", flag: "🇫🇰" },
        { code: "FO", label: "Faroe Islands", flag: "🇫🇴" },
        { code: "FJ", label: "Fiji", flag: "🇫🇯" },
        { code: "FI", label: "Finland", flag: "🇫🇮" },
        { code: "FR", label: "France", flag: "🇫🇷" },
        { code: "GF", label: "French Guiana", flag: "🇬🇫" },
        { code: "PF", label: "French Polynesia", flag: "🇵🇫" },
        { code: "TF", label: "French Southern Territories", flag: "🇹🇫" },
        { code: "GA", label: "Gabon", flag: "🇬🇦" },
        { code: "GM", label: "Gambia", flag: "🇬🇲" },
        { code: "GE", label: "Georgia", flag: "🇬🇪" },
        { code: "DE", label: "Germany", flag: "🇩🇪" },
        { code: "GH", label: "Ghana", flag: "🇬🇭" },
        { code: "GI", label: "Gibraltar", flag: "🇬🇮" },
        { code: "GR", label: "Greece", flag: "🇬🇷" },
        { code: "GL", label: "Greenland", flag: "🇬🇱" },
        { code: "GD", label: "Grenada", flag: "🇬🇩" },
        { code: "GP", label: "Guadeloupe", flag: "🇬🇵" },
        { code: "GU", label: "Guam", flag: "🇬🇺" },
        { code: "GT", label: "Guatemala", flag: "🇬🇹" },
        { code: "GG", label: "Guernsey", flag: "🇬🇬" },
        { code: "GN", label: "Guinea", flag: "🇬🇳" },
        { code: "GW", label: "Guinea-Bissau", flag: "🇬🇼" },
        { code: "GY", label: "Guyana", flag: "🇬🇾" },
        { code: "HT", label: "Haiti", flag: "🇭🇹" },
        { code: "HN", label: "Honduras", flag: "🇭🇳" },
        { code: "HK", label: "Hong Kong SAR China", flag: "🇭🇰" },
    ];

    return (
        <section className="w-full rounded-xl border border-[#26344B] bg-[#18222A] ">
            <div className="p-6 sm:p-10">
                <div className="w-full flex items-start justify-between gap-3 pb-2 md:pb-4 border-b border-b-gray-600">
                    <h3 className="text-white text-base font-semibold">Profile Settings</h3>
                    <Button variant="default" >
                        <Edit className="h-4 w-4" />
                        Edit
                    </Button>

                </div>

                <div className="mt-3 md:mt-4 lg:mt-6 w-full flex flex-col gap-4">
                    <div className="w-full flex flex-col gap-3">
                        <p className="text-sm text-white/80 font-medium">Profile Picture</p>

                        <div className="w-full flex flex-col sm:flex-row sm:items-center gap-4">
                            <ProfileAvatar imageSrc="/sidebar/profile_img.jpg" isOnline={true} />

                            <div className="flex flex-wrap items-center gap-2">
                                <UploadButtonWithFileInput onFileChange={(file) => console.log(file)} />
                                <button
                                    type="button"
                                    className="relative inline-flex items-center justify-center gap-2 rounded-lg border border-[#44444A] bg-[#202023] px-4 py-2 text-xs font-semibold text-white/80 shadow-[0_1px_2px_rgba(82,88,102,0.06)] transition hover:text-white before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-b before:from-white/12 before:to-transparent hover:before:from-white/16"
                                >
                                    <Trash2 className="h-4 w-4 relative z-10" />
                                    <span className="relative z-10">Remove</span>
                                </button>

                            </div>
                        </div>

                        <p className="text-xs text-white/40">PNG or JPG files up to 5mb, at least 400px by 400px</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <TextInputField label="First Name" value={settings.firstName} onChange={(e) => setSettings(p => ({ ...p, firstName: e.target.value }))} placeholder="First name" />
                        <TextInputField label="Last Name" value={settings.lastName} onChange={(e) => setSettings(p => ({ ...p, lastName: e.target.value }))} placeholder="Last name" />
                    </div>

                    <PhoneNumberField label="Phone Number" country={settings.country} onCountryChange={(code) => setSettings(p => ({ ...p, country: code }))} value={settings.phone} onChange={(v) => setSettings(p => ({ ...p, phone: v }))} countries={countries} placeholder="+123..." />

                    <TextInputField label="Email Address" value={settings.email} onChange={(e) => setSettings(p => ({ ...p, email: e.target.value }))} placeholder="Email" />

                    <SelectFieldBlock label="Preferred Timezone" value={settings.timezone} onChange={(v) => setSettings(p => ({ ...p, timezone: v }))} options={timezones} />
                </div>

            </div>
          
        </section>
    );
}
