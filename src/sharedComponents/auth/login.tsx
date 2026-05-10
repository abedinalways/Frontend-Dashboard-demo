"use client";


import Image from "next/image";
import Link from "next/link";
import  { useState } from "react";
import { useForm } from "react-hook-form";
import { FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoEye, GoEyeClosed } from "react-icons/go";
import FooterLegal from "../shared/FooterLegal";

export default function Login() {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState } = useForm<{
        email: string;
        password: string;
    }>({
        mode: "onChange",
        defaultValues: { email: "", password: "" },
    });

    const onSubmit = (data: { email: string; password: string }) => {
        console.log(data);
    };
    const styles = {
        label: "bg-[#0F1A23] text-[#BDBDBD] absolute top-3.5 left-3 px-2.5 text-sm",
        input:
            "w-full xl:w-114 border border-[#7B8594] rounded-xl px-3 py-4 mt-6 focus:outline-none placeholder:text-[#545454]",
        forgot:
            "flex justify-end w-full text-sm tracking-[-0.2px] leading-[155%] mt-2 cursor-pointer text-red-600 hover:underline",
        submit:
            "bg-[#5952FF] px-3 py-4 w-full rounded-xl mt-8 cursor-pointer disabled:cursor-not-allowed disabled:bg-[#909296]",
        social:
            "flex items-center justify-center gap-3 text-base font-semibold p-3 w-full border border-[#BDBDBD] rounded-xl leading-[160%] tracking-[0.08px] cursor-pointer",
        link: "text-[#5952FF]",
    };

    return (
        <div className="flex">
            <div className="min-h-screen bg-[url('/auth.png')] bg-cover bg-bottom  bg-no-repeat w-full border-t-4 border-[#4285F4] px-6.5 xl:px-12.5 relative">
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
                            Welcome back <br /> to Game Arena
                        </h1>
                        <p className="text-sm lg:text-lg leading-[150%] w-[30ch] xl:w-full mt-4">
                            Stay on top of your tasks, analytics, and updates effortlessly
                        </p>
                    </div>
                </div>
            </div>
            <div className="min-h-screen bg-[url('/auth2.png')] bg-cover bg-center  bg-no-repeat w-full flex justify-center items-center px-6.5 xl:px-12.5 relative">
                <div>
                    <h1 className="text-[1.3rem] xl:text-[2rem] text-center font-semibold tracking-[0.16px] leading-[130%] mb-6">
                        Login first to your account
                    </h1>
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="relative">
                            <label htmlFor="login-email" className={styles.label}>
                                Email
                            </label>
                            <input
                                id="login-email"
                                type="text"
                                placeholder="example@company.com"
                                className={styles.input}
                                {...register("email", { required: true })}
                            />
                        </div>
                        <div className="relative">
                            <label htmlFor="login-password" className={styles.label}>
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
                                id="login-password"
                                type={showPassword ? "text" : "password"}
                                placeholder="Enter your password "
                                className={styles.input}
                                {...register("password", { required: true })}
                            />
                        </div>
                        <Link href="/forgot-password" className={styles.forgot}>
                            Forgot Password?
                        </Link>

                        <button
                            type="submit"
                            className={styles.submit}
                            disabled={!formState.isValid}
                        >
                            Login
                        </button>
                    </form>
                    <div className="my-4 px-3 py-4 flex items-center">
                        <hr className="border-[#7B8594] w-full" />
                        <p className="bg-[#0F1A23] text-[#BDBDBD] text-center px-2.5 xl:text-sm lg:w-[60%]">
                            Or <span className="hidden xl:inline-block">login with</span>
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
                        You’re new in here?{" "}
                        <Link href="/sign-up" className={styles.link}>
                            Create Account
                        </Link>
                    </p>
                </div>
                <FooterLegal />
            </div>
        </div>
    );
}