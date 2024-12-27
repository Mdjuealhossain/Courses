import React from "react";

import Banner from "@/components/Banner";
import { ourFeatureProjectsData } from "@/app/staticData/home";
import OurFeatureProjects from "@/widgets/OurFeatureProjects";

import { RootSection, Section } from "@/components/Section";
import SelectFilter from "@/widgets/SelectFilter/index.js";

const Product = () => {
    return (
        <RootSection>
            <Section id={"productBanner"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Banner subTitle={"Smart Tools, Better Business"} title={"Our Product"} description={" Empowering Businesses with Innovative Solutions"} img={"/assets/images/bannerPort.png"} />
                </div>
            </Section>
            <Section id="filter" bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl py-12">
                    <SelectFilter />
                </div>
            </Section>
            <Section id="feature1">
                <div className="container mx-auto px-4 max-w-xl py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id={"feature2"} bgColor=" bg-secondary_bg">
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id={"feature3"}>
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id={"feature4"} bgColor=" bg-secondary_bg">
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id={"feature5"}>
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id={"feature6"} bgColor=" bg-secondary_bg">
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id={"feature7"}>
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id={"feature8"} bgColor=" bg-secondary_bg">
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
        </RootSection>
    );
};

export default Product;
