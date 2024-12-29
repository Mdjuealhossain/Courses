import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa";

import Button from "@/components/Button";
import Divider from "@/components/Divider";

const ForgetPassword = () => {
    return (
        <div className="mx-2">
            <div className="max-w-[520px] flex-shrink-0 rounded-[4px] bg-white shadow-sign  mx-auto mt-8 lg:mt-16 mb-3 lg:mb-20">
                <div className="pt-4 lg:pt-8 pb-3 lg:pb-6 border-b border-gray_400 flex items-center justify-center">
                    <Link href={"/"}>
                        <Image height={28} width={104} alt="logo" src={"/assets/logos/2024-03-20T04-26-32.799Z-ostad_logo_light@512x (2).png"} className=" h-7 w-auto" />
                    </Link>
                </div>
                <div className="pt-2 px-2 pb-2 xs:px-5 md:pt-3 md:px-7 md:pb-5 lg:pt-6 lg:px-[60px] lg:pb-10">
                    <h3 className="mb-1 lg:mb-3 text-black font-bold  text-H3 ">Forgot Password</h3>
                    <p className="mb-5 lg:mb-8 text-black text-opacity-80   text-body2 ">Enter the email address you used when you joined and we’ll send you instructions to reset your password.</p>
                    <form>
                        <div>
                            <div className="mb-5">
                                <label>
                                    <span className="flex text-body2 font-medium mb-3">
                                        Email Address
                                        <FaStarOfLife size={6} className="text-error_main" />
                                    </span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="p-2 w-full rounded-sm bg-white border border-gray_400 text-black text-body2 " />
                            </div>
                            <div className="mb-3 lg:mb-6">
                                <Link href={"/otp-varification-email"}>
                                    <Button className={" bg-warning_main w-full"}>Send reset instructions</Button>
                                </Link>
                            </div>
                        </div>
                    </form>

                    <Divider />
                    <div>
                        <p className="mb-5 lg:mb-10 text-center text-black text-opacity-75   text-body2 ">
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

export default ForgetPassword;
