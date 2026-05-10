"use client";

import { IllustrationIcon } from "@/src/icons";
import FooterLegal from "@/src/sharedComponents/shared/FooterLegal";
import Image from "next/image";
import Link from "next/link";
import React, { useMemo, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { GoEye, GoEyeClosed } from "react-icons/go";

type ForgotPasswordForm = {
    email: string;
    code: string[];
    password: string;
    confirmPassword: string;
};

const CODE_LENGTH = 6;

export default function ForgotPasswordPage() {
    const [step, setStep] = useState<"email" | "code" | "reset" | "success">(
        "email",
    );
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register, handleSubmit, watch, formState, setValue, getValues } =
        useForm<ForgotPasswordForm>({
            mode: "onChange",
            shouldUnregister: true,
            defaultValues: {
                email: "",
                code: Array(CODE_LENGTH).fill(""),
                password: "",
                confirmPassword: "",
            },
        });

    const onSubmit = (data: ForgotPasswordForm) => {
        console.log(data);
        if (step === "email") {
            setStep("code");
            return;
        }
        if (step === "code") {
            setStep("reset");
            return;
        }
        if (step === "reset") {
            setStep("success");
        }
    };

    const passwordValue = watch("password");

    const styles = {
        label:
            "bg-[#0F1A23] text-[#BDBDBD] absolute top-3.5 left-3 px-2.5 text-sm",
        input:
            "w-full xl:w-114 border border-[#7B8594] rounded-xl px-3 py-4 mt-6 focus:outline-none placeholder:text-[#545454]",
        submit:
            "bg-[#5952FF] px-3 py-4 w-full rounded-xl mt-8 cursor-pointer disabled:cursor-not-allowed disabled:bg-[#909296] flex items-center justify-center",
        link: "text-[#5952FF] hover:underline",
        codeInput:
            "w-16 h-16 text-center bg-[#2D2D2D] text-2xl font-semibold border border-[#383A3F] rounded-xl text-white focus:outline-none",
        outlineButton:
            "border border-[#7B8594] px-3 py-4 w-full rounded-xl mt-4 cursor-pointer text-white flex items-center justify-center",
    };

    const codeInputs = useMemo(
        () => Array.from({ length: CODE_LENGTH }, (_, index) => index),
        [],
    );
    const codeInputRefs = useRef<Array<HTMLInputElement | null>>([]);

    const focusCodeInput = (index: number) => {
        codeInputRefs.current[index]?.focus();
        codeInputRefs.current[index]?.select();
    };

    const setCodeValue = (index: number, value: string) => {
        setValue(`code.${index}`, value, {
            shouldValidate: true,
            shouldDirty: true,
        });
    };

    const handleCodeChange = (index: number, value: string) => {
        const digits = value.replace(/\D/g, "");
        if (digits.length === 0) {
            setCodeValue(index, "");
            return;
        }
        if (digits.length === 1) {
            setCodeValue(index, digits);
            if (index < CODE_LENGTH - 1) {
                focusCodeInput(index + 1);
            }
            return;
        }

        const maxFill = Math.min(digits.length, CODE_LENGTH - index);
        for (let i = 0; i < maxFill; i += 1) {
            setCodeValue(index + i, digits[i]);
        }
        const nextIndex = Math.min(index + maxFill, CODE_LENGTH - 1);
        focusCodeInput(nextIndex);
    };

    const handleCodeKeyDown = (index: number, key: string) => {
        if (key === "Backspace") {
            const currentValue = getValues(`code.${index}`);
            if (!currentValue && index > 0) {
                focusCodeInput(index - 1);
            }
        }
        if (key === "ArrowLeft" && index > 0) {
            focusCodeInput(index - 1);
        }
        if (key === "ArrowRight" && index < CODE_LENGTH - 1) {
            focusCodeInput(index + 1);
        }
    };

    const handleCodePaste = (
        event: React.ClipboardEvent<HTMLInputElement>,
        startIndex: number,
    ) => {
        event.preventDefault();
        const digits = event.clipboardData.getData("text").replace(/\D/g, "");
        if (!digits) return;

        const maxFill = Math.min(digits.length, CODE_LENGTH - startIndex);
        for (let i = 0; i < maxFill; i += 1) {
            setCodeValue(startIndex + i, digits[i]);
        }
        const nextIndex = Math.min(startIndex + maxFill, CODE_LENGTH - 1);
        focusCodeInput(nextIndex);
    };

    return (
        <div className="min-h-screen bg-[url('/auth2.png')] bg-cover bg-center bg-no-repeat flex justify-center items-center px-6.5 xl:px-12.5 relative">
            <div className="w-full max-w-md text-center">
                {step === "email" && (
                    <>
                        <h1 className="text-2xl xl:text-3xl font-semibold leading-[130%]">
                            Reset Your Password
                        </h1>
                        <p className="text-sm text-[#BDBDBD] mt-2">
                            Enter your email. If it matches an existing account, a reset link
                            will be sent.
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                            <div className="relative">
                                <label htmlFor="forgot-email" className={styles.label}>
                                    Email
                                </label>
                                <input
                                    id="forgot-email"
                                    type="text"
                                    placeholder="example@company.com"
                                    className={styles.input}
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <button
                                type="submit"
                                className={styles.submit}
                                disabled={!formState.isValid}
                            >
                                Login
                            </button>
                        </form>
                    </>
                )}

                {step === "code" && (
                    <>
                        <h1 className="text-2xl xl:text-3xl font-semibold leading-[130%]">
                            Verify Your Email
                        </h1>
                        <p className="text-sm text-[#BDBDBD] mt-2">
                            Enter verification code
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                            <div className="flex justify-center gap-3">
                                {codeInputs.map((index) => (
                                    <input
                                        key={index}
                                        type="text"
                                        inputMode="numeric"
                                        autoComplete="one-time-code"
                                        maxLength={1}
                                        className={styles.codeInput}
                                        onPaste={(event) => handleCodePaste(event, index)}
                                        onKeyDown={(event) =>
                                            handleCodeKeyDown(index, event.key)
                                        }
                                        {...(() => {
                                            const registration = register(`code.${index}`, {
                                                required: true,
                                            });
                                            return {
                                                ...registration,
                                                onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
                                                    registration.onChange(event);
                                                    handleCodeChange(index, event.target.value);
                                                },
                                                ref: (element: HTMLInputElement | null) => {
                                                    registration.ref(element);
                                                    codeInputRefs.current[index] = element;
                                                },
                                            };
                                        })()}
                                    />
                                ))}
                            </div>
                            <p className="text-xs text-[#A0AEC0] mt-4">
                                A 6-digit code was sent to your email.{" "}
                                <button type="button" className={styles.link}>
                                    Resend Code
                                </button>
                            </p>
                            <button
                                type="submit"
                                className={styles.submit}
                                disabled={!formState.isValid}
                            >
                                Verify
                            </button>
                            <Link href="/login" className={styles.outlineButton}>
                                Back To Login
                            </Link>
                        </form>
                    </>
                )}

                {step === "reset" && (
                    <>
                        <h1 className="text-2xl xl:text-3xl font-semibold leading-[130%]">
                            Verify Your Email
                        </h1>
                        <p className="text-sm text-[#BDBDBD] mt-2">
                            Enter verification code
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                            <div className="relative">
                                <label htmlFor="forgot-password" className={styles.label}>
                                    Password
                                </label>
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-4 cursor-pointer"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                >
                                    {showPassword ? <GoEyeClosed size={22} /> : <GoEye size={22} />}
                                </button>
                                <input
                                    id="forgot-password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Input your password"
                                    className={styles.input}
                                    {...register("password", { required: true })}
                                />
                            </div>
                            <div className="relative">
                                <label htmlFor="forgot-confirm" className={styles.label}>
                                    Confirm Password
                                </label>
                                <button
                                    type="button"
                                    className="absolute top-1/2 right-4 cursor-pointer"
                                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                                >
                                    {showConfirmPassword ? (
                                        <GoEyeClosed size={22} />
                                    ) : (
                                        <GoEye size={22} />
                                    )}
                                </button>
                                <input
                                    id="forgot-confirm"
                                    type={showConfirmPassword ? "text" : "password"}
                                    placeholder="Input your password"
                                    className={styles.input}
                                    {...register("confirmPassword", {
                                        required: true,
                                        validate: (value) => value === passwordValue,
                                    })}
                                />
                            </div>
                            <button
                                type="submit"
                                className={styles.submit}
                                disabled={!formState.isValid}
                            >
                                Reset password
                            </button>
                        </form>
                    </>
                )}

                {step === "success" && (
                    <>
                        <div className="mx-auto mb-6 flex items-center justify-center ">
                            <IllustrationIcon/>
                        </div>
                        <h1 className="text-2xl xl:text-3xl font-semibold leading-[130%]">
                            Your successfully changed your password
                        </h1>
                        <p className="text-sm text-[#BDBDBD] mt-2">
                            Password updated! You're all set to continue
                        </p>
                        <Link href="/login" className={styles.submit}>
                            Back to Login
                        </Link>
                    </>
                )}
            </div>

            <FooterLegal />
        </div>
    );
}