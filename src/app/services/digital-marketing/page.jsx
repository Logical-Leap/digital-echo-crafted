"use client";
import React from "react";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import faqs from "@/data/serviceFaqs.json";

const DigitalMarketingPage = () => (
  <ServicePageTemplate
    title="Digital"
    highlight="Marketing."
    description="We grow your business with data-driven digital marketing—SEO, paid ads, email, and content—designed to attract the right audience and turn clicks into customers."
    features={[
      "Search Engine Optimization",
      "Google & Social Ads",
      "Email Marketing",
      "Content Strategy",
      "Conversion Tracking",
      "Monthly Reporting",
    ]}
    faqSectionTitle="Digital Marketing FAQs"
    faqSubtitle="Common questions about our marketing services, pricing, and process."
    faqItems={faqs.digitalMarketing}
    faqIdPrefix="digital-marketing-faq"
    secondaryCtaLabel="See Marketing FAQs"
    secondaryCtaTarget="faq"
  />
);

export default DigitalMarketingPage;
