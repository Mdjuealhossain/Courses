import React from "react";

import RecruitmentNotice from "@/widgets/RecruitmentNotice";
import JobSummary from "@/widgets/JobSummary";
import MiniBanner from "@/components/MiniBanner";
import { vacanciData } from "@/app/staticData/career";

const Vacancies = () => {
    return (
        <>
            <section>
                <MiniBanner title={"Executive, Internal Audit"} subtitle={"Explined our Vacancies"} BannerImage="/assets/images/miniBanner/Career.webp" />
            </section>
            <section id={"contentVac"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 md:flex md:space-x-16 space-y-16 md:space-y-0">
                    <div className=" md:w-2/3 w-full bg-white ">
                        <RecruitmentNotice vacanciData={vacanciData} />
                    </div>
                    <div className=" md:w-1/3 bg-white w-full h-full md:sticky md:top-8">
                        <JobSummary location="The Pearl Trade Center, 8th Floor, Cha-90/3 Pragati Sarani, North Badda, Dhaka 1212" vacancies={1} jobType="Full Time" workingday={5} deadline="Oct 15, 2024" salary={vacanciData.companiesBanifit.salary} />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Vacancies;
