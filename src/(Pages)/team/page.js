import React from "react";

import { RootSection, Section } from "@/components/Section";
import LeaderShip from "@/widgets/LeaderShip";
import Employer from "@/widgets/Employer";
import ContactButton from "@/components/contactbutton";
import MiniBanner from "@/components/MiniBanner";
import FamillyGroup from "@/widgets/FamillyGroup";

const Team = () => {
    return (
        <RootSection>
            <Section id="teamBanner">
                <MiniBanner title="WiztecBD Family" subtitle="Meet the Minds Behind the Magic" BannerImage="/assets/images/miniBanner/OurTeam.webp" />
            </Section>
            <Section id={"leasership"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <h1 className=" text-H1 font-bold md:mb-12 mb-6 text-center">Battle Tested Leadership</h1>
                    <div className=" md:pb-100 pb-12">
                        <LeaderShip
                            name={"Md. Mostafijur Rahaman Sujan"}
                            description="The secret to our success is a combination of innovation, drive, and curiosity to look beyond generic establishments. More than two decades of consistent performance has enabled us to claim our rightful place, and this is just the beginning."
                            img={"/assets/images/jueal.png"}
                            alt="sujon"
                            mission={"The Mission to our success is a combination of innovation, drive, and curiosity to look beyond generic establishments. More than two decades of consistent performance has enabled us to claim our rightful place, and this is just the beginning."}
                            vission={"The Vission to our success is a combination of innovation, drive, and curiosity to look beyond generic establishments. More than two decades of consistent performance has enabled us to claim our rightful place, and this is just the beginning."}
                            value="our volue to our success is a combination of innovation, drive, and curiosity to look beyond generic establishments. More than two decades of consistent performance has enabled us to claim our rightful place, and this is just the beginning."
                        />
                    </div>
                    <div>
                        <LeaderShip
                            reverse
                            name={"Md. Banozir Ahamed"}
                            description="The secret to our success is a combination of innovation, drive, and curiosity to look beyond generic establishments. More than two decades of consistent performance has enabled us to claim our rightful place, and this is just the beginning."
                            img={"/assets/images/jueal.png"}
                            alt="sujon"
                            mission={"The Mission to our success is a combination of innovation, drive, and curiosity to look beyond generic establishments. More than two decades of consistent performance has enabled us to claim our rightful place, and this is just the beginning."}
                            vission={"The Vission to our success is a combination of innovation, drive, and curiosity to look beyond generic establishments. More than two decades of consistent performance has enabled us to claim our rightful place, and this is just the beginning."}
                            value="our volue to our success is a combination of innovation, drive, and curiosity to look beyond generic establishments. More than two decades of consistent performance has enabled us to claim our rightful place, and this is just the beginning."
                        />
                    </div>
                </div>
            </Section>
            <Section id={"employer"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
                    <FamillyGroup />
                </div>
            </Section>
            <Section id={"employer"} bgColor={"bg-white"}>
                <div className=" container mx-auto px-4 max-w-xl md:pb-100 pb-12">
                    <Employer />
                </div>
            </Section>
            <Section id={"contact"} bgColor={"bg-secondary_bg"}>
                <div className=" container mx-auto px-4 max-w-xl py-12 md:py-100">
                    <ContactButton contact />
                </div>
            </Section>
        </RootSection>
    );
};

export default Team;
