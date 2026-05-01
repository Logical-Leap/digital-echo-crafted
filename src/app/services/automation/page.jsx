"use client";
import React from "react";
import ServicePageTemplate from "@/components/service/ServicePageTemplate";
import faqs from "@/data/serviceFaqs.json";

const AutomationPage = () => (
  <ServicePageTemplate
    title="Automation"
    highlight="Services."
    description="Reclaim hours every week. We automate repetitive workflows—lead routing, follow-ups, reporting, and CRM tasks—so your team can focus on high-value work."
    features={[
      "Workflow Automation (Zapier, Make, n8n)",
      "CRM & Email Integrations",
      "Lead Capture & Routing",
      "Automated Reporting",
      "Custom API Integrations",
      "Monitoring & Error Handling",
    ]}
    faqSectionTitle="Automation FAQs"
    faqSubtitle="Common questions about workflow automation and integrations."
    faqItems={faqs.automation}
    faqIdPrefix="automation-faq"
    secondaryCtaLabel="Map My Workflow"
    secondaryCtaTarget="contact"
  />
);

export default AutomationPage;
