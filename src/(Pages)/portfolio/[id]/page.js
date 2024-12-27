"use client";
import React from "react";

import CaseStudiesBanner from "@/widgets/CaseStudiesBanner";
import RelatedCases from "@/widgets/RelatedCases";
import ContactButton from "@/components/contactbutton";
import FaqHome from "@/widgets/FaqHome/indesx";
import { RootSection, Section } from "@/components/Section";
import CompanyBackground from "@/widgets/CompanyBackground";
import { cases } from "@/app/staticData/portfolio";
import Problems from "@/widgets/Problem";
import Statement from "@/components/Statement";
import Encountered from "@/widgets/Encountered";
import ProjectTarget from "@/widgets/ProjectTarget";
import Result from "@/widgets/FinalResult";
import ResolutionOffered from "@/widgets/ResolutionOffered";
import Product from "@/widgets/Product";

const CaseStudies = () => {
    return (
        <RootSection>
            <Section id={"casebanner"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <CaseStudiesBanner title={cases.title} description={cases.description} img={cases.img} alt={cases.alt} intro={cases.intro} />
                </div>
            </Section>
            <Section id={"companiBackground"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <CompanyBackground description={cases.companyBack.description} />
                </div>
            </Section>
            <Section id={"problem"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Problems description={cases.problems.description} img={cases.problems.img} alt={cases.problems.alt} />
                </div>
            </Section>
            <Section id={"projectTerget"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <ProjectTarget description={cases.projectTargets.description} img={cases.projectTargets.img} alt={cases.projectTargets.alt} />
                </div>
            </Section>
            <Section>
                <Statement title={cases.managerStatement.title} description={cases.managerStatement.description} />
            </Section>
            <Section id={"encountered"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Encountered title={cases.challenges.title} list={cases.challenges.list} />
                </div>
            </Section>
            <Section id={"resolution"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <ResolutionOffered offers={cases.resolutionOffered.offers} title={cases.resolutionOffered.title} description={cases.resolutionOffered.description} />
                </div>
            </Section>
            <Section id={"product1"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Product revers={cases.products[0].revers} title={cases.products[0].title} description={cases.products[0].description} img={cases.products[0].img} alt={cases.products[0].alt} />
                </div>
            </Section>
            <Section id={"product2"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Product revers={cases.products[1].revers} title={cases.products[1].title} description={cases.products[1].description} img={cases.products[1].img} alt={cases.products[1].alt} />
                </div>
            </Section>
            <Section id={"product3"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Product revers={cases.products[2].revers} title={cases.products[2].title} description={cases.products[2].description} img={cases.products[2].img} alt={cases.products[2].alt} />
                </div>
            </Section>
            <Section id={"product4"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Product revers={cases.products[3].revers} title={cases.products[3].title} description={cases.products[3].description} img={cases.products[3].img} alt={cases.products[3].alt} />
                </div>
            </Section>
            <Section id={"findResult"} bgColor={" bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:p-100 py-12">
                    <Result list={cases.results.list} houre={cases.results.houre} savings={cases.results.savings} uses={cases.results.uses} />
                </div>
            </Section>
            <Section>
                <Section>
                    <Statement title={cases.projectStatement.title} description={cases.projectStatement.description} />
                </Section>
            </Section>

            <Section id={"findResult"} bgColor={" bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <ContactButton />
                </div>
            </Section>
            <Section id={"findResult"}>
                <div className="  container mx-auto px-4 max-w-xl  md:py-100 py-12">
                    <FaqHome faqItems={faqItems} />
                </div>
            </Section>
            <Section bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <RelatedCases />
                </div>
            </Section>
        </RootSection>
    );
};

export default CaseStudies;
const faqItems = [
    { id: 1, title: "Can we customize the Project as per our requirement?", description: "We have a team of professionals whose high performance brings forth growth and success." },
    { id: 2, title: "How can we get a quotation?", description: "We have a team of professionals whose high performance brings forth growth and success." },
];
