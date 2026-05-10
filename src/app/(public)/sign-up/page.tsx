"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoEye, GoEyeClosed } from "react-icons/go";

type SignupForm = {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    acceptTerms: boolean;
};

export default function SignupPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const { register, handleSubmit, watch, formState } = useForm<SignupForm>({
        mode: "onChange",
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            acceptTerms: false,
        },
    });

    const onSubmit = (data: SignupForm) => {
        console.log(data);
    };

    const passwordValue = watch("password");

    const styles = {
        label: "bg-[#0F1A23] text-[#BDBDBD] absolute top-3.5 left-3 px-2.5 text-sm",
        input:
            "w-full  border border-[#7B8594] rounded-xl px-3 py-4 mt-6 focus:outline-none placeholder:text-[#545454]",
        submit:
            "bg-[#5952FF] px-3 py-4 w-full rounded-xl mt-8 cursor-pointer disabled:cursor-not-allowed disabled:bg-[#909296]",
        social:
            "flex items-center justify-center gap-3 text-base font-semibold p-3 w-full border border-[#BDBDBD] rounded-xl leading-[160%] tracking-[0.08px] cursor-pointer",
        link: "text-[#5952FF]",
        checkbox:
            "size-4 rounded border border-[#7B8594] bg-transparent text-[#5952FF] focus:ring-0",
    };

    return (
        <div className="flex">
            <div className="min-h-screen bg-[url('/auth.png')] bg-cover bg-bottom bg-no-repeat w-full border-t-4 border-[#4285F4] px-6.5 xl:px-12.5 relative">
                <Image
                    src="/auth-game-char.png"
                    alt="Logo"
                    width={270}
                    height={546}
                    className="absolute bottom-0 right-0 h-100 2xl:h-136.5 w-auto"
                />
                <div className="mt-50.75">
                    <Image src="/logo.svg" alt="Logo" width={162} height={162} />
                    <div className="relative z-20">
                        <h1 className="text-3xl lg:text-5xl font-bold leading-[130%] mt-4">
                            Create Your Account
                        </h1>
                        <p className="text-sm lg:text-lg leading-[150%] w-[30ch] xl:w-full mt-4">
                            Join the Arena and start competing in skill-based matches.
                        </p>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-[url('/auth2.png')] bg-cover bg-center bg-no-repeat w-full flex justify-center items-center px-6.5 xl:px-12.5 relative">
                <div className=" mt-10 xl:mt-0">
                    <h1 className="text-[1.3rem] xl:text-[2rem] font-semibold tracking-[0.16px] leading-[130%] mb-2">
                        Sign Up Today, Keep Your <br /> Balance &amp; Winnings Organized
                    </h1>
                    <p className="text-sm lg:text-base text-[#BDBDBD] mb-6">
                        Join Today &amp; Start Competing
                    </p>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative">
                            <label htmlFor="signup-name" className={styles.label}>
                                Name
                            </label>
                            <input
                                id="signup-name"
                                type="text"
                                placeholder="Input your full name"
                                className={styles.input}
                                {...register("name", { required: true })}
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="signup-email" className={styles.label}>
                                Email
                            </label>
                            <input
                                id="signup-email"
                                type="text"
                                placeholder="example@company.com"
                                className={styles.input}
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="signup-password" className={styles.label}>
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
                                id="signup-password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Input your password"
                                className={styles.input}
                                {...register("password", { required: true })}
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="signup-confirm" className={styles.label}>
                                Retype Password
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
                                id="signup-confirm"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="Input your password"
                                className={styles.input}
                                {...register("confirmPassword", {
                                    required: true,
                                    validate: (value) => value === passwordValue,
                                })}
                            />
                        </div>
                        <label className="flex items-center gap-2 text-sm text-[#BDBDBD] mt-4">
                            <input
                                type="checkbox"
                                className={styles.checkbox}
                                {...register("acceptTerms", { required: true })}
                            />
                            By creating an account, you agree to our{" "}
                            <Link href="/" className={styles.link}>
                                Term &amp; Conditions
                            </Link>
                        </label>

                        <button
                            type="submit"
                            className={styles.submit}
                            disabled={!formState.isValid}
                        >
                            Create Account
                        </button>
                    </form>
                    <div className="my-4 px-3 py-4 flex items-center">
                        <hr className="border-[#7B8594] w-full" />
                        <p className="bg-[#0F1A23] text-[#BDBDBD] text-center px-2.5 text-sm w-[60%]">
                            Or login with
                        </p>
                        <hr className="border-[#7B8594] w-full" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <button className={styles.social}>
                            <FcGoogle size={22} /> Google
                        </button>
                        <button className={styles.social}>
                            <FaApple size={22} /> Apple
                        </button>
                    </div>
                    <p className="text-sm text-[#A0AEC0] text-center leading-[140%] tracking-[0.07px] w-full mt-8">
                        Already have an account?{" "}
                        <Link href="/" className={styles.link}>
                            Login here
                        </Link>
                    </p>
                    <footer className="mt-10  ">
                        <p className="text-sm text-center text-[#A0AEC0] leading-[140%] tracking-[0.07px] p-4">
                            © 2025 gameareana. Al rights reserved.
                            <Link href="/" className={styles.link}>
                                Terms &amp; Conditions
                            </Link>{" "}
                            <Link href="/" className={styles.link}>
                                Privacy Policy
                            </Link>
                        </p>
                    </footer>
                </div>
            </div>
        </div>
    );
}