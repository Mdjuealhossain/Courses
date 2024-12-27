import React from "react";

import { benifits, ecomerseExpertistData, faqItems, introData, ourFeatureProjectsData1, ourFeatureProjectsData2 } from "@/app/staticData/service/ecomerce";
import Banner from "@/components/Banner";
import Benefits from "@/widgets/Benefits";
import FaqHome from "@/widgets/FaqHome/indesx";
import RelatedCases from "@/widgets/RelatedCases";
import TechExpartise from "@/widgets/TechExpartise";
import DreamjobEcom from "@/widgets/DreemJobsEcom";
import ContactButton from "@/components/contactbutton";
import OurFeatureProjects from "@/widgets/OurFeatureProjects";
import { RootSection, Section } from "@/components/Section";
import WorkProcess from "@/components/WorkProcess";
import ClientsTestMonials from "@/widgets/ClientsTestmonials";
import IntroDesign from "@/widgets/IntroDesign";

const EcommercePlatform = () => {
    return (
        <RootSection>
            <Section id={"ecomerseBanner"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Banner subTitle={"E-commerce Platform Service our company"} title={"E-commerce Platform Development Services"} description={"We deliver exceptional E-commerce experiences to bring out the favorable business outcomes"} img={"/assets/images/banners/ecomers.webp"} />
                </div>
            </Section>
            <Section id={"automationIntroDesign"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <IntroDesign bug={introData.bug} title={introData.title} img={introData.img} header={introData.header} subheader={introData.subheader} facilities={introData.facilities} buttonText={introData.buttonText} />
                </div>
            </Section>
            <Section id={"ecomerseDreamjobEcom"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <DreamjobEcom />
                </div>
            </Section>
            <Section id={"ecomerseTechExpartise"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <TechExpartise expertistData={ecomerseExpertistData} />
                </div>
            </Section>
            <Section id={"ecomerseWorkProcess"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <WorkProcess title="Work Process Image" img="/assets/images/service/work-process.webp" alt="Work Process" />
                </div>
            </Section>
            <Section id={"ecomerseBenefits"} bgColor={"bg-custom-gradient"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Benefits benifits={benifits} title={"Our Engagement Models "} />
                </div>
            </Section>
            <Section id={"ecomerseClientsTestMonials"} bgColor={"bg-secondary_bg"}>
                <div className="py-12">
                    <ClientsTestMonials />
                </div>
            </Section>
            <Section id={"ecomerseOurFeatureProjects1"} bgColor={"bg-white"}>
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData1} />
                </div>
            </Section>
            <Section id={"ecomerseOurFeatureProjects2"} bgColor={"bg-secondary_bg"}>
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData2} />
                </div>
            </Section>
            <Section id={"ecomerseRelatedCases"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <RelatedCases />
                </div>
            </Section>
            <Section id={"ecomerseFaqHome"} bgColor={"bg-white"}>
                <div className="  container mx-auto px-4 max-w-xl  md:py-100 py-12">
                    <FaqHome faqItems={faqItems} />
                </div>
            </Section>
            <Section id={"ecomerseContactButton"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <ContactButton />
                </div>
            </Section>
        </RootSection>
    );
};

export default EcommercePlatform;
