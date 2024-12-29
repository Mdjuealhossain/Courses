"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars, FaStarOfLife } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { BsCheck } from "react-icons/bs";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import Button from "@/components/Button";

const LogIn = () => {
    const [selectedCheckbox, setSelectedCheckbox] = useState(false);
    const [isShowPassword, setIsShowPassword] = useState(false);

    return (
        <div className="mx-2">
            <div style={{ boxShadow: "0px 0px 16px 0px rgba(228, 237, 240, 0.80)" }} className="max-w-[520px] flex-shrink-0 rounded-[4px] bg-white  mx-auto mt-3 lg:mt-9 mb-3 lg:mb-20">
                <div className="pt-2 px-2 pb-2 xs:px-5 md:pt-3 md:px-7 md:pb-5 lg:pt-6 lg:px-[60px] lg:pb-[40px]">
                    <h3 className="mb-3 lg:mb-6 text-black   font-medium text-H3 leading-normal pt-6">Login</h3>
                    <form>
                        <div>
                            <div className="mb-5">
                                <label>
                                    <span className="flex text-body2 font-medium mb-3">
                                        Email Address
                                        <FaStarOfLife size={6} className="text-error_main" />
                                    </span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="p-2 w-full rounded-sm bg-white border border-gray_400 text-black text-body2 font-normal leading-normal  tracking-[-0.14px]  " />
                            </div>

                            <div className="mb-5">
                                <label>
                                    <span className="flex text-body2 font-medium mb-3">
                                        Password
                                        <FaStarOfLife size={6} className="text-error_main" />
                                    </span>
                                </label>
                                <span className="relative">
                                    <input type={isShowPassword ? "text" : "password"} placeholder="Enter your password" className="p-2 w-full rounded-sm bg-white border border-gray_400 text-black text-body2 font-medium" />
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

                            <div className="flex justify-between items-center mb-6">
                                <label className="flex items-center hover:cursor-pointer gap-3      text-body2 font-normal leading-normal w-fit h-min" onChange={() => setSelectedCheckbox((prev) => !prev)}>
                                    <div className="relative flex items-center">
                                        <input type="checkbox" className={`rounded h-4 w-4 ${selectedCheckbox == true ? "bg-[#5DC9F4] text-white" : "bg-white"} border border-[#0094CF] appearance-none`} />
                                        <BsCheck size={16} className="absolute top-0 text-white" />
                                    </div>
                                    <p className="text-black-80   text-body2 font-medium">Remember Me</p>
                                </label>

                                <Link href="/">
                                    <p className="text-black-80   text-body2 font-medium">Forgot Password?</p>
                                </Link>
                            </div>

                            <div className="mb-3 lg:mb-6">
                                <Button className={" bg-warning_main w-full"}>Log In</Button>
                            </div>
                        </div>
                    </form>
                    <div className="flex flex-col gap-2 lg:gap-3">
                        <p className="text-center  text-black text-opacity-60 text-xs font-medium">or</p>
                        <Link href="/">
                            <p className="text-center  text-black text-body2 font-medium leading-normal tracking-[-0.12px]">Login With Phone</p>
                        </Link>
                        <p className="text-center  text-black text-opacity-60 text-xs font-medium">or</p>
                        <Link href={"#"} className=" flex items-center justify-center mb-2 md:mb-2">
                            <FcGoogle />
                        </Link>
                    </div>
                    {/* <Divider /> */}
                    <div>
                        <p className="mb-5 lg:mb-10 text-center text-black text-opacity-75   text-body2 font-normal leading-normal">
                            Don’t have an account?{" "}
                            <Link href="/">
                                <span className="text-black font-semibold">Register</span>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
