"use client";
import React, { useState } from "react";
import DevForm from "@/widgets/DevForm";

import ExpertistRole from "@/widgets/ExpertistRole";
import MiniBanner from "@/components/MiniBanner";

const Developers = () => {
    const [isExpert, setIsExpert] = useState({});
    const [isLocation, setIsLocation] = useState("");

    const handleTableData = (data) => {
        setIsExpert(data);
    };
    const handleLocationData = (loc) => {
        setIsLocation(loc);
    };

    return (
        <div>
            <section>
                <MiniBanner BannerImage="/assets/images/miniBanner/developers.webp" subtitle="The Right Talent, Right Now" title="Hire Experts, Build Excellence" description="Flexible Hiring Models Tailored to Your Business Needs" />
            </section>
            <section className=" bg-secondary_bg">
                <div className="container mx-auto px-4 max-w-xl  md:py-12 py-6">
                    <ExpertistRole handleTableData={handleTableData} handleLocationData={handleLocationData} />
                </div>
            </section>
            <section>
                <div className="container mx-auto px-4 max-w-xl md:py-12 py-6">
                    <DevForm isExpert={isExpert} isLocation={isLocation} />
                </div>
            </section>
        </div>
    );
};

export default Developers;
