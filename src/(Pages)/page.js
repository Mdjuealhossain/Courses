import dynamic from "next/dynamic";

// Import the first Section for immediate load
import HerroBanner from "@/widgets/HerroBanner";
import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import { RootSection, Section } from "@/components/Section";

// Dynamically load Sections
const ClientsTestMonials = dynamic(() => import("@/widgets/ClientsTestmonials"), { ssr: false });
const GlobalClients = dynamic(() => import("@/widgets/GlobalClients"));
const ContactForm = dynamic(() => import("@/widgets/ContactForm"));
const OverViews = dynamic(() => import("@/widgets/OverViews"), { ssr: false });
const ServedClients = dynamic(() => import("@/widgets/ServedClients"), { ssr: false });
const OurServices = dynamic(() => import("@/widgets/OurServices"), { ssr: false });
const Benefits = dynamic(() => import("@/widgets/Benefits"), { ssr: false });
const TechPower = dynamic(() => import("@/widgets/TechPower"), { ssr: false });
const Industries = dynamic(() => import("@/widgets/Industries"), { ssr: false });
const OurCaseStudies = dynamic(() => import("@/widgets/FeaturedProjects"), { ssr: false });
const OurFeatureProjects = dynamic(() => import("@/widgets/OurFeatureProjects"), { ssr: false });
const ContactInfo = dynamic(() => import("@/widgets/ContactForm/ContactInfo"), { ssr: false });

// Static data
const { ourFeatureProjectsData } = require("../staticData/home");
const { benifits } = require("../staticData/course");

const Home = () => {
    return (
        <RootSection>
            <Section id="herro" bgColor="bg-white">
                <HerroBanner />
            </Section>
            <Section id="overview" bgColor="bg-custom-gradient" className={"md:hidden"}>
                <div className="md:py-100 py-12 ">
                    <OverViews />
                </div>
            </Section>
            <Section id="serveClient">
                <div className=" py-12">
                    <ServedClients title={"Delightly Served Clients"} />
                </div>
            </Section>
            <Section id="Services" bgColor="bg-secondary_bg">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurServices />
                </div>
            </Section>
            <Section id="choose" bgColor="bg-custom-gradient">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Benefits benifits={benifits} title={"Why Choose Us?"} />
                </div>
            </Section>
            <Section id="testmonials" bgColor="bg-secondary_bg">
                <div className=" py-12">
                    <ClientsTestMonials />
                </div>
            </Section>
            <Section id="golobal Client" bgColor="bg-white">
                <div className="  container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <GlobalClients />
                </div>
            </Section>
            <Section id="techPower">
                <div className=" py-12">
                    <TechPower />
                </div>
            </Section>
            /
            <Section id="industries" bgColor="bg-secondary_bg">
                <div className="  container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <Industries />
                </div>
            </Section>
            <Section id="project1">
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <ScrollAnimatedSection delay={200}>
                        <div className=" md:mb-12 mb-6">
                            <h1 className=" text-center text-H1  font-bold mb-2">Our Feature Projects</h1>
                        </div>
                    </ScrollAnimatedSection>
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id="project2" bgColor="bg-secondary_bg">
                <div className="container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <OurFeatureProjects ourFeatureProjectsData={ourFeatureProjectsData} />
                </div>
            </Section>
            <Section id="ourCaseStudies" bgColor="bg-white">
                <div className="  container mx-auto px-4 max-w-xl  md:py-100 py-12">
                    <OurCaseStudies />
                </div>
            </Section>
            <Section id="contactform">
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12 grid md:grid-cols-2 grid-cols-1 gap-16">
                    <ContactForm />
                    <ContactInfo />
                </div>
            </Section>
        </RootSection>
    );
};

export default Home;
