import React from "react";

import Banner from "@/components/Banner";
import Benefits from "@/widgets/Benefits";
import Services from "@/widgets/Services";
import FaqHome from "@/widgets/FaqHome/indesx";
import IntroDesign from "@/widgets/IntroDesign";
import RelatedCases from "@/widgets/RelatedCases";
import ContactButton from "@/components/contactbutton";
import OurFeatureProjects from "@/widgets/OurFeatureProjects";
import WorkProcess from "@/components/WorkProcess";
import ClientsTestMonials from "@/widgets/ClientsTestmonials";
import TechExpartise from "@/widgets/TechExpartise";
import { benifits, expertistData, faqItems, introData, services } from "@/app/staticData/service/erp";
import { ourFeatureProjectsData } from "@/app/staticData/home";
import { RootSection, Section } from "@/components/Section";
import Industries from "@/widgets/Industries";

const ERPSoftwareDevelopment = () => {
    return (
        <RootSection>
            <Section id={"erpBanner"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Banner subTitle={"ERP Software Development Service our company"} title={"ERP Software Development Service"} description={"Empowering Businesses with Fully Integrated ERP Solutions"} img={"/assets/images/banners/ERP bannar.webp"} />
                </div>
            </Section>
            <Section id={"erpIntroDesign"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <IntroDesign title={introData.title} img={introData.img} header={introData.header} subheader={introData.subheader} facilities={introData.facilities} buttonText={introData.buttonText} />
                </div>
            </Section>
            <Section id={"erpDevelopmentServices"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Services title={services.title} description={services.description} service={services.service} />
                </div>
            </Section>
            <Section id={"erpBenefits"} bgColor={" bg-custom-gradient"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Benefits title={"Our Engagement Models "} benifits={benifits} />
                </div>
            </Section>
            <Section id={"erpServedClients"}>
                <div className="  container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Industries />
                </div>
            </Section>
            <Section id={"erpTechExpartise"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <TechExpartise expertistData={expertistData} />
                </div>
            </Section>
            <Section id={"erpWorkProcess"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <WorkProcess title="Work Process Image" img="/assets/images/service/work-process.webp" alt="Work Process" />
                </div>
            </Section>

            <Section id={"erpClientsTestMonials"} bgColor={"bg-secondary_bg"}>
                <div className="py-12">
                    <ClientsTestMonials />
                </div>
            </Section>
            <Section id={"erpOurFeatureProjects1"}>
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id={"erpOurFeatureProjects2"} bgColor={"bg-secondary_bg"}>
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id={"erpRelatedCases"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <RelatedCases />
                </div>
            </Section>
            <Section id={"erpFaqHome"} bgColor={"bg-white"}>
                <div className="  container mx-auto px-4 max-w-xl  md:py-100 py-12">
                    <FaqHome faqItems={faqItems} />
                </div>
            </Section>
            <Section id={"erpFaqHome"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <ContactButton />
                </div>
            </Section>
        </RootSection>
    );
};

export default ERPSoftwareDevelopment;
