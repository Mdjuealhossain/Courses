"use client";
import { useEffect, useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { IoEyeOff, IoEyeSharp } from "react-icons/io5";

import Divider from "@/components/Divider";
import Link from "next/link";
import Image from "next/image";
import Button from "@/components/Button";

const ResetPassword = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

    return (
        <div className="mx-2">
            <div className="max-w-[520px] flex-shrink-0 rounded-[4px] bg-white  mx-auto mt-8 lg:mt-16 mb-3 lg:mb-20">
                <div className="pt-4 lg:pt-8 pb-3 lg:pb-6 border-b border-gray_400 flex items-center justify-center">
                    <Link href={"/"}>
                        <Image height={28} width={104} alt="logo" src={"/assets/logos/2024-03-20T04-26-32.799Z-ostad_logo_light@512x (2).png"} className=" h-7 w-auto" />
                    </Link>
                </div>
                <div className="pt-2 px-2 pb-2 xs:px-5 md:pt-3 md:px-7 md:pb-5 lg:pt-6 lg:px-[60px] lg:pb-10">
                    <h3 className="mb-3 lg:mb-6 text-black text-H3 font-bold">Reset Your Password</h3>
                    <form>
                        <div>
                            <div className="mb-5">
                                <label>
                                    <span className="flex text-body2 mb-3">
                                        Password
                                        <FaStarOfLife size={6} className="text-error_main" />
                                    </span>
                                </label>
                                <span className="relative">
                                    <input type={isShowPassword ? "text" : "password"} placeholder="Enter your password" className="p-2 w-full rounded-sm bg-white border border-gray_400 text-black  text-body2" />
                                    {isShowPassword ? (
                                        <span onClick={() => setIsShowPassword(false)} className="absolute right-2 top-[3px] hover:cursor-pointer">
                                            <IoEyeSharp size={16} className="text-gray_600" />
                                        </span>
                                    ) : (
                                        <span onClick={() => setIsShowPassword(true)} className="absolute right-2 top-[3px] hover:cursor-pointer">
                                            <IoEyeOff size={16} className="text-gray_600" />
                                        </span>
                                    )}
                                </span>
                            </div>
                            <div className="mb-6">
                                <label>
                                    <span className="flex text-body2 mb-3">
                                        Confirm Password
                                        <FaStarOfLife size={6} className="text-error_main" />
                                    </span>
                                </label>
                                <span className="relative">
                                    <input type={isShowConfirmPassword ? "text" : "password"} placeholder="Re-type your password" className="p-2 w-full rounded-sm bg-white border border-gray_400 text-black  text-body2" />
                                    {isShowConfirmPassword ? (
                                        <span onClick={() => setIsShowConfirmPassword(false)} className="absolute right-2 top-[3px] hover:cursor-pointer">
                                            <IoEyeSharp size={16} className="text-gray_600" />
                                        </span>
                                    ) : (
                                        <span onClick={() => setIsShowConfirmPassword(true)} className="absolute right-2 top-[3px] hover:cursor-pointer">
                                            <IoEyeOff size={16} className="text-gray_600" />
                                        </span>
                                    )}
                                </span>
                            </div>
                            <div className="mb-3 lg:mb-6">
                                <Link href={"/"}>
                                    <Button className={" bg-warning_main w-full"}> Register</Button>
                                </Link>
                            </div>
                        </div>
                    </form>
                    <div className="flex flex-col gap-2 lg:gap-3">
                        <p className="text-black text-opacity-80 text-center text-[14px] font-normal leading-5">
                            By continuing, you agree that you have read and accept our <span className="text-black font-semibold text-body2">T&Cs</span> and <span className="text-black font-semibold text-body2">Privacy Policy.</span>
                        </p>
                    </div>
                    <Divider />
                    <div>
                        <p className="mb-5 lg:mb-10 text-center text-black text-opacity-75  text-body2">
                            Already have an account?
                            <Link href={"/login"}>
                                <span className="text-black font-semibold">Login</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
