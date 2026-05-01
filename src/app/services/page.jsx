"use client";
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React from "react";
import Features from "../features/Features";

const SERVICES = [
  {
    title: "Web Design",
    slug: "/services/web-design",
    description:
      "Custom, responsive websites built to engage visitors and convert them into customers.",
  },
  {
    title: "Digital Marketing",
    slug: "/services/digital-marketing",
    description:
      "SEO, paid ads, email, and content—data-driven marketing that grows your pipeline.",
  },
  {
    title: "Analytics & Insights",
    slug: "/services/analytics",
    description:
      "Reliable tracking, custom dashboards, and clear reporting so you can decide with confidence.",
  },
  {
    title: "Brand Development",
    slug: "/services/brand-development",
    description:
      "Positioning, identity, and guidelines that make your brand memorable and consistent.",
  },
  {
    title: "Automation Services",
    slug: "/services/automation",
    description:
      "Automate repetitive workflows across your CRM, email, and tools—reclaim hours every week.",
  },
  {
    title: "Strategy Consultations",
    slug: "/services/consultations",
    description:
      "Audit, strategy, and a clear action plan—get expert guidance without long-term commitment.",
  },
];

const ServicePage = () => {
  useWow();
  return (
    <MainLayout>
      <div
        className="service-card-section scroll-margin pt-120 mb-120"
        id="service-section"
      >
        <div className="container">
          <div className="row g-4 mb-80">
            {SERVICES.map((s, i) => (
              <div
                key={s.slug}
                className="col-lg-4 col-md-6 wow animate fadeInUp"
                data-wow-delay={`${100 + i * 80}ms`}
                data-wow-duration="800ms"
              >
                <div
                  className="feature-card4"
                  style={{ height: "100%", display: "flex", flexDirection: "column" }}
                >
                  <div className="content" style={{ flex: 1 }}>
                    <h4>
                      <Link href={s.slug}>{s.title}</Link>
                    </h4>
                    <p style={{ marginTop: "12px" }}>{s.description}</p>
                  </div>
                  <div style={{ marginTop: "20px" }}>
                    <Link
                      href={s.slug}
                      className="primary-btn2"
                      data-text="Learn More"
                    >
                      <span>Learn More</span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Features />
      </div>
    </MainLayout>
  );
};

export default ServicePage;
