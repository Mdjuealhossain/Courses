import React from "react";

import Banner from "@/components/Banner";
import { RootSection, Section } from "@/components/Section";

import IntroDesign from "@/widgets/IntroDesign";
import CourseOverview from "@/widgets/CourseOverview";
import { title } from "process";
import { courseDetailsData } from "@/app/staticData/course";

const CourseDetails = () => {
    return (
        <RootSection>
            <Section id={"courseBanner"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Banner subTitle={`${courseDetailsData.overview.title} courese our company`} title={courseDetailsData.title} description={courseDetailsData.description} img={courseDetailsData.img} />
                </div>
            </Section>
            <Section id={"courseIntroDesign"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <IntroDesign title={courseDetailsData.introData.title} img={courseDetailsData.introData.img} header={courseDetailsData.introData.header} subheader={courseDetailsData.introData.subheader} facilities={courseDetailsData.introData.facilities} buttonText={courseDetailsData.introData.buttonText} />
                </div>
            </Section>
            <Section id={"CourseOverview"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <CourseOverview />
                </div>
            </Section>
        </RootSection>
    );
};

export default CourseDetails;
