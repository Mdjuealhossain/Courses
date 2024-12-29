import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStarOfLife } from "react-icons/fa";

import Button from "@/components/Button";

const OTPVarificationEmail = () => {
    return (
        <div className="mx-2">
            <div className="max-w-[520px] w-full flex-shrink-0 rounded shadow-sign bg-white  mx-auto mt-3 lg:mt-9 mb-3 lg:mb-20">
                <div className="pt-4 lg:pt-8 pb-3 lg:pb-6 border-b border-gray_400 flex items-center justify-center">
                    <Link href={"/"}>
                        <Image height={28} width={104} alt="logo" src={"/assets/logos/2024-03-20T04-26-32.799Z-ostad_logo_light@512x (2).png"} className=" h-7 w-auto" />
                    </Link>
                </div>
                <div className="pt-2 px-2 pb-2 xs:px-5 md:pt-3 md:px-7 md:pb-5 lg:pt-6 lg:px-[60px] lg:pb-10">
                    <h3 className="mb-1 lg:mb-3 text-black font-bold text-H3">OTP Verification</h3>
                    <p className="mb-5 lg:mb-8 text-black text-opacity-80  text-body2 ">Enter the 5-digit verification code which we sent to your given phone number (321xxx32325).</p>
                    <form>
                        <div>
                            <div className="mb-5">
                                <label>
                                    <span className="flex text-sm font-medium mb-3">
                                        Verification Code
                                        <FaStarOfLife size={6} className="text-error_main" />
                                    </span>
                                </label>
                                <div className="flex gap-3 xs:gap-6 h-8 items-center justify-between">
                                    {[0, 1, 2, 3, 4].map((index) => (
                                        <input
                                            // className="rounded-sm border-[0.5px] border-gray-300 bg-white text-center w-[40px] h-[40px]"
                                            className={`rounded-sm border-[0.5px] border-gray-300 bg-white text-center w-14 h-full`}
                                            key={index}
                                            type="text"
                                            maxLength="1"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="mb-3 lg:mb-6">
                                <Link href={"/reset-password"}>
                                    <Button className={" bg-warning_main w-full"}> Verify Code</Button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default OTPVarificationEmail;
