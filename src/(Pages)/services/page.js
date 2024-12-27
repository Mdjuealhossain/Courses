import React from "react";

import SoftwerSection from "@/widgets/SoftwerSection";
import DesignSection from "@/widgets/DesignSection";
import RelatedCases from "@/widgets/RelatedCases";
import EcommercePlatform from "@/widgets/EcommercePlatform";
import SupportMaintanence from "@/widgets/SupportMaintanence";
import ItTraining from "@/widgets/ItTraining";
import ItConsultncy from "@/widgets/ItConsultncy";
import Banner from "@/components/Banner";
import ServedClients from "@/widgets/ServedClients";
import ContactButton from "@/components/contactbutton";
import ClientsTestMonials from "@/widgets/ClientsTestmonials";
import { RootSection, Section } from "@/components/Section";

const Services = () => {
  return (
    <RootSection>
      <Section id={"serviceBanner"}>
        <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
          <Banner title="Our Services In WiztecBd" subTitle="Show all services our company" description="Brief sentence about your unique service offerings." img="/assets/images/banners/Service Banner.webp" />
        </div>
      </Section>
      <Section id={"serviceSoftwerSection"} bgColor={"bg-secondary_bg"}>
        <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
          <SoftwerSection />
        </div>
      </Section>
      <Section id={"serviceServedClients"} bgColor={"bg-white"}>
        <div className=" py-12">
          <ServedClients title={"Delightly Served Clients"} />
        </div>
      </Section>
      <Section id={"serviceEcommercePlatform"}>
        <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
          <EcommercePlatform />
        </div>
      </Section>

      <Section id={"serviceRelatedCases"} bgColor={"bg-secondary_bg"}>
        <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
          <RelatedCases />
        </div>
      </Section>
      <Section id={"serviceSupportMaintanence"} bgColor={"bg-white"}>
        <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
          <SupportMaintanence />
        </div>
      </Section>
      <Section id={"serviceDesignSection"}>
        <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
          <DesignSection />
        </div>
      </Section>
      <Section id={"serviceItTraining"} bgColor={"bg-secondary_bg"}>
        <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
          <ItTraining />
        </div>
      </Section>
      <Section id={"serviceItConsultncy"} bgColor={"bg-white"}>
        <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
          <ItConsultncy />
        </div>
      </Section>
      <Section id={"serviceClientsTestMonials"} bgColor={"bg-secondary_bg"}>
        <div className="py-12">
          <ClientsTestMonials />
        </div>
      </Section>
      <Section id={"serviceContactButton"}>
        <div className=" container mx-auto px-4 max-w-xl py-12 md:py-100">
          <ContactButton contact />
        </div>
      </Section>
    </RootSection>
  );
};

export default Services;
