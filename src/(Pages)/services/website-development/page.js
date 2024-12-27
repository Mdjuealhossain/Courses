import React from "react";

import { benifits, faqItems, introData, services, webExpertistData } from "@/app/staticData/service/web";
import Services from "@/widgets/Services";
import ClientsTestMonials from "@/widgets/ClientsTestmonials";
import OurFeatureProjects from "@/widgets/OurFeatureProjects";
import { ourFeatureProjectsData } from "@/app/staticData/home";
import { RootSection, Section } from "@/components/Section";
import FaqHome from "@/widgets/FaqHome/indesx";
import IntroDesign from "@/widgets/IntroDesign";
import RelatedCases from "@/widgets/RelatedCases";
import TechExpartise from "@/widgets/TechExpartise";
import WorkProcess from "@/components/WorkProcess";
import ContactButton from "@/components/contactbutton";
import Banner from "@/components/Banner";
import Benefits from "@/widgets/Benefits";

const WebsiteDevelopment = () => {
    return (
        <RootSection>
            <Section id={"webBanner"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Banner subTitle={"Website Development Service our company"} title={"Website Development Service"} description={"Turning Clicks into Connections with Thoughtfully Developed Websites. Brief sentence about your unique service offerings."} img={"/assets/images/banners/Web Dev Banner.webp"} />
                </div>
            </Section>
            <Section id={"webIntroDesign"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <IntroDesign title={introData.title} img={introData.img} header={introData.header} subheader={introData.subheader} facilities={introData.facilities} buttonText={introData.buttonText} />
                </div>
            </Section>
            <Section id={"webDevelopmentServices"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Services title={services.title} description={services.description} service={services.service} />
                </div>
            </Section>
            <Section id={"webTechExpartise"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <TechExpartise expertistData={webExpertistData} />
                </div>
            </Section>
            <Section id={"webWorkProcess"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <WorkProcess title="Work Process Image" img="/assets/images/service/work-process.webp" alt="Work Process" />
                </div>
            </Section>
            <Section id={"webBenefits"} bgColor={"bg-custom-gradient"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Benefits benifits={benifits} title={"Our Engagement Models "} />
                </div>
            </Section>
            <Section id={"webClientsTestMonials"} bgColor={"bg-secondary_bg"}>
                <div className="py-12">
                    <ClientsTestMonials />
                </div>
            </Section>
            <Section id={"webOurFeatureProjects"}>
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id={"webOurFeatureProjects2"} bgColor={"bg-secondary_bg"}>
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id={"webRelatedCases"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <RelatedCases />
                </div>
            </Section>
            <Section id={"webFaqHome"} bgColor={"bg-white"}>
                <div className="  container mx-auto px-4 max-w-xl  md:py-100 py-12">
                    <FaqHome faqItems={faqItems} />
                </div>
            </Section>
            <Section id={"webContactButton"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <ContactButton />
                </div>
            </Section>
        </RootSection>
    );
};

export default WebsiteDevelopment;
