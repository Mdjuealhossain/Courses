import React from "react";

import { benifits, faqItems, introData, mobileExpertistData, services } from "@/app/staticData/service/mobileApp";
import Services from "@/widgets/Services";
import Banner from "@/components/Banner";
import Benefits from "@/widgets/Benefits";
import FaqHome from "@/widgets/FaqHome/indesx";
import IntroDesign from "@/widgets/IntroDesign";
import RelatedCases from "@/widgets/RelatedCases";
import TechExpartise from "@/widgets/TechExpartise";
import ContactButton from "@/components/contactbutton";
import OurFeatureProjects from "@/widgets/OurFeatureProjects";
import { ourFeatureProjectsData } from "@/app/staticData/home";
import WorkProcess from "@/components/WorkProcess";
import ClientsTestMonials from "@/widgets/ClientsTestmonials";
import { RootSection, Section } from "@/components/Section";

const MobileAppDevelopment = () => {
    return (
        <RootSection>
            <Section id="mobileBanner">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Banner subTitle={"Show Mobile App Development Service our company"} img={"/assets/images/banners/Mobile App Banner.webp"} title={"Mobile App Development Service"} description={"Building Apps That Connect, Engage, and Inspire"} />
                </div>
            </Section>
            <Section id="mobileIntroDesign" bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <IntroDesign bug={introData.bug} title={introData.title} img={introData.img} header={introData.header} subheader={introData.subheader} facilities={introData.facilities} buttonText={introData.buttonText} />
                </div>
            </Section>
            <Section id="mobilDevelopmentServices" bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Services title={services.title} description={services.description} service={services.service} />
                </div>
            </Section>
            <Section id="mobileTechExpartise" bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <TechExpartise expertistData={mobileExpertistData} />
                </div>
            </Section>
            <Section id="mobileWorkProcess">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <WorkProcess title="Work Process Image" img="/assets/images/service/work-process.webp" alt="Work Process" />
                </div>
            </Section>
            <Section id="mobileBenefits" bgColor={"bg-custom-gradient"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Benefits title={"Our Engagement Models "} benifits={benifits} />
                </div>
            </Section>
            <Section id="mobileClientsTestMonials" bgColor={"bg-secondary_bg"}>
                <div className="py-12">
                    <ClientsTestMonials />
                </div>
            </Section>
            <Section id="mobileOurFeatureProjects1" bgColor={"bg-white"}>
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id="mobileOurFeatureProjects1" bgColor={"bg-secondary_bg"}>
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id="mobileRelatedCases" bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <RelatedCases />
                </div>
            </Section>
            <Section id="mobileFaqHome">
                <div className="  container mx-auto px-4 max-w-xl  md:py-100 py-12">
                    <FaqHome faqItems={faqItems} />
                </div>
            </Section>
            <Section id="mobileContactButton" bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <ContactButton />
                </div>
            </Section>
        </RootSection>
    );
};

export default MobileAppDevelopment;
