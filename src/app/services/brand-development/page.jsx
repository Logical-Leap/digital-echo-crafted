"use client";
import React from "react";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import faqs from "@/data/serviceFaqs.json";

const BrandDevelopmentPage = () => (
  <ServicePageTemplate
    title="Brand"
    highlight="Development."
    description="Build a brand people remember. From positioning and naming to logos, color, and voice, we create cohesive identities that stand out and scale."
    features={[
      "Brand Strategy & Positioning",
      "Logo & Visual Identity",
      "Typography & Color Systems",
      "Brand Voice & Messaging",
      "Brand Guidelines",
      "Launch Assets",
    ]}
    faqSectionTitle="Brand Development FAQs"
    faqSubtitle="Common questions about our branding process and deliverables."
    faqItems={faqs.brandDevelopment}
    faqIdPrefix="brand-development-faq"
  />
);

export default BrandDevelopmentPage;
