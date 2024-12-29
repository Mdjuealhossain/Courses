"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa";
import { IoEyeOff, IoEyeSharp } from "react-icons/io5";

import Button from "@/components/Button";
import Divider from "@/components/Divider";

const LogOut = () => {
    const [isShowPassword, setIsShowPassword] = useState(false);
    const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

    return (
        <div className="mx-2">
            <div className="max-w-[520px] flex-shrink-0 rounded bg-white shadow-sign mx-auto lg:mt-16 mt-8 mb-3 lg:mb-20">
                <div className="pt-4 lg:pt-8 pb-3 lg:pb-6 border-b border-gray_400 flex items-center justify-center">
                    <Link href={"/"}>
                        <Image height={28} width={104} alt="logo" src={"/assets/logos/2024-03-20T04-26-32.799Z-ostad_logo_light@512x (2).png"} className=" h-7 w-auto" />
                    </Link>
                </div>
                <div className="pt-2 px-2 pb-2 xs:px-5 md:pt-3 md:px-7 md:pb-5 lg:pt-6 lg:px-[60px] lg:pb-10">
                    <h3 className="mb-3 lg:mb-6 text-black text-H3 font-bold ">Register</h3>
                    <form>
                        <div>
                            <div className="mb-5">
                                <label>
                                    <span className="flex text-body2 font-medium mb-3">
                                        First Name
                                        <FaStarOfLife size={6} className="text-error_main" />
                                    </span>
                                </label>
                                <input
                                    type="text" // Change type to text to allow leading zeros
                                    placeholder="Your first name"
                                    className="p-2 w-full rounded-sm text-body2 bg-white border border-gray_400"
                                />
                            </div>
                            <div className="mb-5">
                                <label>
                                    <span className="flex text-body2 font-medium mb-3">
                                        Last Name
                                        <FaStarOfLife size={6} className="text-error_main" />
                                    </span>
                                </label>
                                <input
                                    type="text" // Change type to text to allow leading zeros
                                    placeholder="Your last name"
                                    className="p-2 w-full rounded-sm text-body2 bg-white border border-gray_400"
                                />
                            </div>
                            <div className="mb-5">
                                <label>
                                    <span className="flex text-body2 font-medium mb-3">
                                        Phone Number
                                        <FaStarOfLife size={6} className="text-error_main" />
                                    </span>
                                </label>
                                <input
                                    type="number" // Change type to text to allow leading zeros
                                    placeholder="Enter your phone number"
                                    className="p-2 w-full rounded-sm text-body2 bg-white border border-gray_400"
                                />
                            </div>
                            <div className="mb-5">
                                <label>
                                    <span className="flex text-body2 font-medium mb-3">
                                        Email Address
                                        <FaStarOfLife size={6} className="text-error_main" />
                                    </span>
                                </label>
                                <input type="email" placeholder="Enter your email address" className="p-2 w-full rounded-sm bg-white border border-gray_400 text-black  text-body2" />
                            </div>
                            <div className="mb-5">
                                <label>
                                    <span className="flex text-body2 font-medium mb-3">
                                        Password
                                        <FaStarOfLife size={6} className="text-error_main" />
                                    </span>
                                </label>
                                <span className="relative">
                                    <input type={isShowPassword ? "text" : "password"} placeholder="Enter your password" className="p-2 w-full rounded-sm bg-white border border-gray_400 text-black text-body2 " />
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
                                    <span className="flex text-body2 font-medium mb-3">
                                        Confirm Password
                                        <FaStarOfLife size={6} className="text-error_main" />
                                    </span>
                                </label>
                                <span className="relative">
                                    <input type={isShowConfirmPassword ? "text" : "password"} placeholder="Re-type your password" className="p-2 w-full rounded-sm bg-white border border-gray_400 text-black text-body2 " />
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
                                <Button className={" bg-warning_main w-full"}>Register</Button>
                            </div>
                        </div>
                    </form>
                    <div className="flex flex-col gap-2 lg:gap-3">
                        <p className="text-black text-opacity-80 text-center text-body2 font-normal ">
                            By continuing, you agree that you have read and accept our <span className="text-black text-body2 font-bold ">T&Cs</span> and <span className="text-black text-body2 font-semibold ">Privacy Policy.</span>
                        </p>
                    </div>
                    <Divider />
                    <div>
                        <p className="mb-5 lg:mb-10 text-center text-black text-opacity-75 text-body2 font-normal leading-normal">
                            Already have an account?
                            <Link href={"/login"}>
                                <span className="text-black font-bold">Login</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogOut;
