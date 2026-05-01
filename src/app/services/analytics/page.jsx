"use client";
import React from "react";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import faqs from "@/data/serviceFaqs.json";

const AnalyticsPage = () => (
  <ServicePageTemplate
    title="Analytics &"
    highlight="Insights."
    description="Make confident decisions with clean data. We set up tracking, build dashboards, and turn raw numbers into clear insights that move your business forward."
    features={[
      "GA4 & Tag Manager Setup",
      "Custom Dashboards",
      "Conversion Tracking",
      "Funnel & Cohort Analysis",
      "Privacy-Compliant Tracking",
      "Ongoing Reporting",
    ]}
    faqSectionTitle="Analytics FAQs"
    faqSubtitle="Common questions about analytics, tracking, and reporting."
    faqItems={faqs.analytics}
    faqIdPrefix="analytics-faq"
  />
);

export default AnalyticsPage;
