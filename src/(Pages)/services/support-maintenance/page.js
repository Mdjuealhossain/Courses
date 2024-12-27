import React from "react";

import { ourFeatureProjectsDataSupport1, ourFeatureProjectsDataSupport2, ourFeatureProjectsDataSupport3, ourFeatureProjectsDataSupport4, ourFeatureProjectsDataSupport5, ourFeatureProjectsDataSupport6 } from "@/app/staticData/service/support";
import Banner from "@/components/Banner";
import ContactButton from "@/components/contactbutton";
import { RootSection, Section } from "@/components/Section";
import OurFeatureProjects from "@/widgets/OurFeatureProjects";
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";

const SupportMaintenance = () => {
    return (
        <RootSection>
            <Section id={"supportBanner"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Banner subTitle={"Support & Maintenance Service our company"} title={"Support & Maintenance Service"} description={"Turning Clicks into Connections with Thoughtfully Developed WebsitesBrief sentence about your unique service offerings."} img={"/assets/images/banners/Support.webp"} />
                </div>
            </Section>
            <Section id={"supportOurFeatureProjects1"} bgColor={"bg-secondary_bg"}>
                <div className="container mx-auto px-4 max-w-xl  py-12">
                    <ScrollAnimatedSection>
                        <h1 className=" text-H1 font-bold mb-16 text-center">Our E-commerce Platform Development Services</h1>
                    </ScrollAnimatedSection>
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsDataSupport1} />
                </div>
            </Section>
            <Section id={"supportOurFeatureProjects2"} bgColor={"bg-white"}>
                <div className="container mx-auto px-4 max-w-xl  py-12">
                    <OurFeatureProjects reverse ourFeatureProjectsData={ourFeatureProjectsDataSupport2} />
                </div>
            </Section>
            <Section id={"supportOurFeatureProjects3"} bgColor={"bg-secondary_bg"}>
                <div className="container mx-auto px-4 max-w-xl  py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsDataSupport3} />
                </div>
            </Section>
            <Section id={"supportOurFeatureProjects4"} bgColor={"bg-white"}>
                <div className="container mx-auto px-4 max-w-xl  py-12">
                    <OurFeatureProjects reverse ourFeatureProjectsData={ourFeatureProjectsDataSupport4} />
                </div>
            </Section>
            <Section id={"supportOurFeatureProjects5"} bgColor={"bg-secondary_bg"}>
                <div className="container mx-auto px-4 max-w-xl  py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsDataSupport5} />
                </div>
            </Section>
            <Section id={"supportOurFeatureProjects6"} bgColor={"bg-white"}>
                <div className="container mx-auto px-4 max-w-xl  py-12">
                    <OurFeatureProjects reverse ourFeatureProjectsData={ourFeatureProjectsDataSupport6} />
                </div>
            </Section>
            <Section id={"supportContact"}>
                <div className=" container mx-auto px-4 max-w-xl  py-12">
                    <ContactButton />
                </div>
            </Section>
        </RootSection>
    );
};

export default SupportMaintenance;
