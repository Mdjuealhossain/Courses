import React from "react";

import Services from "@/widgets/Services";
import Banner from "@/components/Banner";
import Benefits from "@/widgets/Benefits";
import FaqHome from "@/widgets/FaqHome/indesx";
import IntroDesign from "@/widgets/IntroDesign";
import RelatedCases from "@/widgets/RelatedCases";
import TechExpartise from "@/widgets/TechExpartise";
import ContactButton from "@/components/contactbutton";
import OurFeatureProjects from "@/widgets/OurFeatureProjects";
import ClientsTestMonials from "@/widgets/ClientsTestmonials";
import { ourFeatureProjectsData } from "@/app/staticData/home";
import { RootSection, Section } from "@/components/Section";
import { benifits, bussinessExpertistData, faqItems } from "@/app/staticData/service/bussinessautomation";
import WorkProcess from "@/components/WorkProcess";
import Industries from "@/widgets/Industries";
import { introData, services } from "@/app/staticData/service/web";

const BusinessAutomation = () => {
    return (
        <RootSection>
            <Section id={"automationBanner"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Banner title={"Business Automation Software Development Service "} img={"/assets/images/banners/Business Auto Banner.webp"} description={" Future-Proof Your Business with Intelligent Automation"} />
                </div>
            </Section>
            <Section id={"automationIntroDesign"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <IntroDesign bug={introData.bug} title={introData.title} img={introData.img} header={introData.header} subheader={introData.subheader} facilities={introData.facilities} buttonText={introData.buttonText} />
                </div>
            </Section>
            <Section id={"automationDevelopmentServices"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Services title={services.title} description={services.description} service={services.service} />
                </div>
            </Section>
            <Section id={"automationTechExpartise"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl  py-12">
                    <TechExpartise expertistData={bussinessExpertistData} />
                </div>
            </Section>
            <Section id={"automationProcess"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <WorkProcess title="Work Process Image" img="/assets/images/service/work-process.webp" alt="Work Process" />
                </div>
            </Section>
            <Section id={"automationBenefits"} bgColor={"bg-custom-gradient"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Benefits title={"Our Engagement Models "} benifits={benifits} />
                </div>
            </Section>
            <Section id={"automationClientsTestMonials"} bgColor={"bg-secondary_bg"}>
                <ClientsTestMonials />
            </Section>
            <Section id={"automationOurFeatureProjects1"}>
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id={"automationOurFeatureProjects1"} bgColor={"bg-secondary_bg"}>
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id={"automationRelatedCases"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <RelatedCases />
                </div>
            </Section>
            <Section id={"automationServedClients"}>
                <div className="  container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Industries />
                </div>
            </Section>
            <Section id={"automationFaqHome"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl  md:py-100 py-12">
                    <FaqHome faqItems={faqItems} />
                </div>
            </Section>
            <Section id={"automationContactButton"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <ContactButton />
                </div>
            </Section>
        </RootSection>
    );
};

export default BusinessAutomation;
