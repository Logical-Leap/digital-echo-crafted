"use client";
import React from "react";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import faqs from "@/data/serviceFaqs.json";

const ConsultationsPage = () => (
  <ServicePageTemplate
    title="Strategy"
    highlight="Consultations."
    description="Get expert guidance without the long-term commitment. We audit your current setup, identify quick wins, and map out a clear plan you can execute."
    features={[
      "Free Discovery Call",
      "Website & Marketing Audit",
      "Growth Strategy Session",
      "Tech Stack Recommendations",
      "Actionable Next Steps",
      "Optional Workshops",
    ]}
    faqSectionTitle="Consultation FAQs"
    faqSubtitle="Common questions about our consultation process."
    faqItems={faqs.consultations}
    faqIdPrefix="consultations-faq"
    secondaryCtaLabel="Book a Free Call"
    secondaryCtaTarget="contact"
  />
);

export default ConsultationsPage;
