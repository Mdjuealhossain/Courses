import React from "react";

import ContactButton from "@/components/contactbutton";
import Benefits from "@/widgets/Benefits";
import Training from "@/widgets/Training";
import { RootSection, Section } from "@/components/Section";
import MiniBanner from "@/components/MiniBanner";
import List from "@/components/List";
import { benifits, lists, trainingData, trainingData2, trainingData3, trainingData4, trainingData5, trainingData6, trainingData7, trainingData8 } from "@/app/staticData/service/it-training";

const ItTraining = () => {
    return (
        <RootSection>
            <Section id="itBanner">
                <MiniBanner title="Our Professional IT/Technical Training" subtitle="Hands-On Training for Tomorrow’s Innovators" description="Master the Future of Technology with Expert Guidance" BannerImage="/assets/images/miniBanner/Training.webp" />
            </Section>
            <Section id="itBenefits" bgColor={"bg-custom-gradient"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Benefits benifits={benifits} title={"Provided Training Courses"} />
                </div>
            </Section>
            <Section id="itServices" bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <h1 className=" text-H1 font-bold md:mb-12 mb-6 text-center">Provided Services</h1>
                    <div className=" flex flex-col md:flex-row justify-between gap-5 md:gap-0 mb-6 md:mb-12">
                        <List lists={lists.slice(0, 5)} />
                        <div className=" border-l border-divider"></div>
                        <List lists={lists.slice(5, 11)} />
                    </div>
                </div>
            </Section>
            <Section className=" bg-custom-gradient">
                <div className=" container mx-auto px-4 max-w-xl  py-12">
                    <h1 className="  text-H1 font-bold text-center">Completed Training</h1>
                </div>
            </Section>
            <Section id="itTraining1">
                <Training title={trainingData.title} subTitle={trainingData.subTitle} organaization={trainingData.organaization} trainees={trainingData.trainees} duration={trainingData.duration} location={trainingData.location} sliderIImg={trainingData.sliderImage} />
            </Section>
            <Section id="itTraining2" bgColor={"bg-secondary_bg"}>
                <Training title={trainingData2.title} subTitle={trainingData2.subTitle} organaization={trainingData2.organaization} trainees={trainingData2.trainees} duration={trainingData2.duration} location={trainingData2.location} sliderIImg={trainingData2.sliderImage} />
            </Section>
            <Section id="itTraining3" bgColor={"bg-white"}>
                <Training title={trainingData3.title} subTitle={trainingData3.subTitle} organaization={trainingData3.organaization} trainees={trainingData3.trainees} duration={trainingData3.duration} location={trainingData3.location} sliderIImg={trainingData3.sliderImage} />
            </Section>
            <Section id="itTraining4">
                <Training title={trainingData4.title} subTitle={trainingData4.subTitle} organaization={trainingData4.organaization} trainees={trainingData4.trainees} duration={trainingData4.duration} location={trainingData4.location} sliderIImg={trainingData4.sliderImage} />
            </Section>

            <Section id="itTraining6" bgColor={"bg-secondary_bg"}>
                <Training title={trainingData6.title} subTitle={trainingData6.subTitle} organaization={trainingData6.organaization} trainees={trainingData6.trainees} duration={trainingData6.duration} location={trainingData6.location} sliderIImg={trainingData6.sliderImage} />
            </Section>
            <Section id="itTraining7">
                <Training title={trainingData7.title} subTitle={trainingData7.subTitle} organaization={trainingData7.organaization} trainees={trainingData7.trainees} duration={trainingData7.duration} location={trainingData7.location} sliderIImg={trainingData7.sliderImage} />
            </Section>
            <Section id="itTraining8" bgColor={"bg-white"}>
                <Training title={trainingData8.title} subTitle={trainingData8.subTitle} organaization={trainingData8.organaization} trainees={trainingData8.trainees} duration={trainingData8.duration} location={trainingData8.location} sliderIImg={trainingData8.sliderImage} />
            </Section>
            <Section id="itContactButton" bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <ContactButton />
                </div>
            </Section>
        </RootSection>
    );
};

export default ItTraining;
