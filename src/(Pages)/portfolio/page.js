"use client";
import React from "react";

import OurStats from "@/widgets/OurStats";
import Cases from "@/widgets/Cases";
import { RootSection, Section } from "@/components/Section";
import Banner from "@/components/Banner";

const Portfolio = () => {
    return (
        <RootSection>
            <Section id={"portfolioBanner"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Banner title={"Our Work, Your Inspiration"} subTitle={"A Legacy of Excellence"} description={"Scroll Down to Explore Proven Results Across Industries"} img={"/assets/images/bannerPort.png"} alt={"portfolio"} />
                </div>
            </Section>
            <Section bgColor={"bg-secondary_bg"} id={"ourStatas"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurStats />
                </div>
            </Section>
            <Section id={"cases"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Cases />
                </div>
            </Section>
        </RootSection>
    );
};

export default Portfolio;
