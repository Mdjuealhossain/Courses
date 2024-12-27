import React from "react";

import { benifits, customExpertistData, faqItems, introData, services } from "@/app/staticData/service/customSoftwer";
import { ourFeatureProjectsData } from "@/app/staticData/home";
import { RootSection, Section } from "@/components/Section";
import Services from "@/widgets/Services";
import Banner from "@/components/Banner";
import Benefits from "@/widgets/Benefits";
import FaqHome from "@/widgets/FaqHome/indesx";
import IntroDesign from "@/widgets/IntroDesign";
import RelatedCases from "@/widgets/RelatedCases";
import TechExpartise from "@/widgets/TechExpartise";
import ContactButton from "@/components/contactbutton";
import OurFeatureProjects from "@/widgets/OurFeatureProjects";
import WorkProcess from "@/components/WorkProcess";
import ClientsTestMonials from "@/widgets/ClientsTestmonials";

const CustomSoftwareDevelopment = () => {
    return (
        <RootSection>
            <Section id={"customBanner"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Banner subTitle={"Show Custom Software Development Service our company"} img={"/assets/images/banners/Web Dev Banner.webp"} title={"Custom Software Development Service"} description={"Transforming Complex Challenges into Seamless Software Solutions"} />
                </div>
            </Section>
            <Section id={"customIntroDesign"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <IntroDesign bug={introData.bug} title={introData.title} img={introData.img} header={introData.header} subheader={introData.subheader} facilities={introData.facilities} buttonText={introData.buttonText} />
                </div>
            </Section>
            <Section id={"customDevelopmentServices"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Services title={services.title} description={services.description} service={services.service} />
                </div>
            </Section>
            <Section id={"customTechExpartise"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl py-12">
                    <TechExpartise expertistData={customExpertistData} />
                </div>
            </Section>
            <Section id={"customWorkProcess"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <WorkProcess title="Work Process Image" img="/assets/images/service/work-process.webp" alt="Work Process" />
                </div>
            </Section>
            <Section id={"customBenefits"} bgColor={"bg-custom-gradient"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Benefits title={"Our Engagement Models "} benifits={benifits} />
                </div>
            </Section>
            <Section id={"customClientsTestMonials"} bgColor={"bg-secondary_bg"}>
                <div className="py-12">
                    <ClientsTestMonials />
                </div>
            </Section>
            <Section id={"customOurFeatureProjects"}>
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id={"customOurFeatureProjects2"} bgColor={"bg-secondary_bg"}>
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id={"customRelatedCases"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <RelatedCases />
                </div>
            </Section>
            <Section id={"customFaqHome"} bgColor={"bg-white"}>
                <div className="  container mx-auto px-4 max-w-xl  md:py-100 py-12">
                    <FaqHome faqItems={faqItems} />
                </div>
            </Section>
            <Section id={"customContactButton"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <ContactButton />
                </div>
            </Section>
        </RootSection>
    );
};

export default CustomSoftwareDevelopment;
