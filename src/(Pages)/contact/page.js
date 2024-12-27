"use client";
import React from "react";

import ScrollAnimatedSection from "@/components/ScrollAnimationSection";
import ContactForm from "@/widgets/ContactForm";
import ContactInfo from "@/widgets/ContactForm/ContactInfo";

const Contact = () => {
    return (
        <div className=" container mx-auto px-4 max-w-xl md:py-100 py-12">
            <ScrollAnimatedSection>
                <h1 className="text-H1 font-bold mb-5">Let’s Connect.</h1>
            </ScrollAnimatedSection>
            <ScrollAnimatedSection animationConfig={{ tension: 200, friction: 40 }}>
                <p className=" text-secondary md:mb-12 mb-6 text-H6">We’d love to hear about your next project.</p>
            </ScrollAnimatedSection>
            <div className=" grid md:grid-cols-2 grid-cols-1 gap-32">
                <ContactForm />
                <ContactInfo />
            </div>
        </div>
    );
};

export default Contact;
