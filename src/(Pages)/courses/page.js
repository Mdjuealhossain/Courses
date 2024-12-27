import React from "react";

import { benifits, introData, trainingData, trainingData2 } from "@/app/staticData/course";
import Banner from "@/components/Banner";
import OurCourses from "@/widgets/OurCourses";
import MasterSkills from "@/widgets/MasterSkills";
import PopularCourses from "@/widgets/PopularCourses";
import Benefits from "@/widgets/Benefits";
import Image from "next/image";
import IntroDesign from "@/widgets/IntroDesign";
import Training from "@/widgets/Training";
import ContactButton from "@/components/contactbutton";
import { RootSection, Section } from "@/components/Section";
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import MiniBanner from "@/components/MiniBanner";

const Courses = () => {
    return (
        <RootSection>
            <Section>
                <MiniBanner title={"Our Expert-Led Courses"} subtitle={"Gain In-Demand Skills and Real-World Project Experience"} description={" From Basics to Mastery: Courses Designed for Every Level"} BannerImage="/assets/images/miniBanner/Training.webp" />
            </Section>
            <Section id={"course"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurCourses />
                </div>
            </Section>
            <Section id={"popularCourse"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <PopularCourses />
                </div>
            </Section>
            <Section id={"introDesign"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <IntroDesign title={introData.title} img={introData.img} header={introData.header} subheader={introData.subheader} facilities={introData.facilities} buttonText={introData.buttonText} />
                </div>
            </Section>
            <Section id={"benefits"} bgColor={"bg-custom-gradient"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Benefits benifits={benifits} title={"Your Gateway to Care IT Mastery"} />
                </div>
            </Section>
            <Section id={"masterSkills"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <MasterSkills />
                </div>
            </Section>
            <Section id={"working"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <ScrollAnimatedSection>
                        <h1 className=" text-H1 font-bold md:mb-12 mb-6 text-center">Working With Us</h1>
                    </ScrollAnimatedSection>
                    <div className=" grid grid-cols-4 gap-4">
                        <ScrollAnimatedSection delay={800}>
                            <div className="flex items-center w-full  justify-center flex-shrink-0 h-12 mr-8">
                                <Image src="/assets/images/client/1.webp" height={48} width={150} alt="client1" className="w-auto max-w-full max-h-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-400" />
                            </div>
                        </ScrollAnimatedSection>
                        <ScrollAnimatedSection delay={600}>
                            <div className="flex items-center w-full  justify-center flex-shrink-0 h-12 mr-8">
                                <Image src="/assets/images/client/8.webp" height={48} width={150} alt="client2" className="w-auto max-w-full max-h-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-400" />
                            </div>
                        </ScrollAnimatedSection>
                        <ScrollAnimatedSection delay={400}>
                            <div className="flex items-center w-full  justify-center flex-shrink-0 h-12 mr-8">
                                <Image src="/assets/images/client/33.webp" height={48} width={150} alt="client3" className="w-auto max-w-full max-h-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-400" />
                            </div>
                        </ScrollAnimatedSection>
                        <ScrollAnimatedSection delay={200}>
                            <div className="flex items-center w-full  justify-center flex-shrink-0 h-12 mr-8">
                                <Image src="/assets/images/client/48.webp" height={48} width={150} alt="client4" className="w-auto max-w-full max-h-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-400" />
                            </div>
                        </ScrollAnimatedSection>
                    </div>
                </div>
            </Section>
            <Section id={"computer"} bgColor={"bg-secondary_bg"}>
                <Training title={trainingData.title} subTitle={trainingData.subTitle} organaization={trainingData.organaization} trainees={trainingData.trainees} duration={trainingData.duration} location={trainingData.location} sliderIImg={trainingData.sliderImage} />
            </Section>
            <Section id={"mobile"} bgColor={"bg-white"}>
                <Training title={trainingData2.title} subTitle={trainingData2.subTitle} organaization={trainingData2.organaization} trainees={trainingData2.trainees} duration={trainingData2.duration} location={trainingData2.location} sliderIImg={trainingData2.sliderImage} />
            </Section>
            <Section id={"contactButton"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <ContactButton />
                </div>
            </Section>
        </RootSection>
    );
};

export default Courses;
