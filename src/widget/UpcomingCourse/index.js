"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Button from "@/components/Button";
import Course from "@/components/Course";
import TabCard from "@/components/TabCard";

const UpcomingCourse = ({ tabs }) => {
    const [isTab, setIsTab] = useState("1");
    return (
        <div className="flex flex-col items-center gap-3 rounded-2xl p-0 md:!p-4 bg-none shadow-none md:!bg-white md:!shadow-xl overflow-hidden">
            <div className="flex items-center gap-2">
                <Image src={"/assets/icons/upcoming.svg"} height={40} width={40} alt="upcoming" className=" h-10 w-10" />
                <h2 className=" text-H2 font-bold">আপকামিং লাইভ কোর্স</h2>
            </div>
            <div className="w-full flex flex-col items-center md:!gap-6 gap-4">
                <div className="flex flex-col gap-6 w-full h-full">
                    <div className=" flex items-center overflow-auto gap-3 no-scrollbar">
                        {tabs.map((tab) => (
                            <div onClick={() => setIsTab(tab.id)} key={tab.id}>
                                <TabCard parentClass={`${isTab == tab.id ? " bg-gray_800 border-gray_800 !text-white" : "border-divider hover:bg-gray_500"}`} course={tab.course} workshop={tab.workshop} title={tab.title} img={tab.img} alt={tab.alt} />
                            </div>
                        ))}
                    </div>
                    <div className="w-full !grid grid-cols-1 lg:!grid-cols-3 xl:!grid-cols-4 gap-2 md:!gap-3">
                        {isTab == "1" && (
                            <>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                            </>
                        )}
                        {isTab == "2" && (
                            <>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                            </>
                        )}
                        {isTab == "3" && (
                            <>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                                <Link href={"#"}>
                                    <Course courseCatagory />
                                </Link>
                            </>
                        )}
                    </div>
                    <div className="flex justify-center">
                        <div className="w-full flex flex-col md:!max-w-[375px]">
                            <Link className="w-full" href="/category">
                                <Button size="large" className={" w-full bg-secondary_mid flex items-center justify-center gap-2"}>
                                    সব দেখুন
                                    <Image height={24} width={24} alt="arrow" src={"/assets/icons/arrow_right.svg"} className=" h-6 w-6" />
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpcomingCourse;
