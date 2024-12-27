import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

const FreeCourse = () => {
    return (
        <div>
            <div className="w-full px-4 mx-auto sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-lg">
                <div className="sticky transition-all duration-[200ms] ease-in-out top-[72px] z-10 !border-b border-ostad-black-opac p-3 bg-white flex flex-col gap-6 h-full">
                    <div className="style-module_wrapper__5Imz5">
                        <div className=" flex items-center overflow-auto gap-3 no-scrollbar p-3">
                            {tabs.map((tab) => (
                                <div key={tab.id}>
                                    <Button className={" !border-divider flex items-center justify-center gap-2"}>
                                        <Image height={18} width={18} alt="arrow" src={"/assets/icons/web.png"} />
                                        {tab.title}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className=" h-screen">dgvdfv</div>
            <div className=" h-screen">dgvdfv</div>
        </div>
    );
};

export default FreeCourse;
const tabs = [
    {
        id: "Web & App Development",
        title: "Web & App Development",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
    {
        id: "Product Management & Design",
        title: "Product Management & Design",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
    {
        id: "Business & Marketing",
        title: "Business & Marketing",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
    {
        id: "Data Engineering",
        title: "Data Engineering",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
    {
        id: "Creatives",
        title: "Creatives",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
    {
        id: "6",
        title: "Blockchain Development",
        img: "/assets/icons/tab-icon.png",
        alt: "icon",
    },
];
