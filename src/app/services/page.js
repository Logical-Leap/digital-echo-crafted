"use client";
import MainLayout from "@/components/layout/MainLayout";
import useWow from "@/hooks/useWow";
import Link from "next/link";
import React from "react";
import ServiceDetails from "./service-details/ServiceDetails";
import ServiceDetails2 from "./service-details/ServiceDetails2";
import ServiceDetails3 from "./service-details/ServiceDetails3";
import ServiceDetails4 from "./service-details/ServiceDetails4";
import Service2 from "./service2/Service2";
import Service3 from "./service3/Service3";
import Features from "../features/Features";
import Home5Service from "@/components/service/Home5Service";
import LogoMarquee from "@/components/marquee/LogoMarquee";
import Home3WorkProcess from "@/components/workProcess/Home3WorkProcess";
import Home3Tools from "@/components/tools/Home3Tools";
import Home3Feature from "@/components/feature/Home3Feature";
const ServicePage = () => {
  useWow();
  return (
    <MainLayout>
      <div
        className="service-card-section scroll-margin pt-120 mb-120"
        id="service-section"
      >
        {" "}
        <Features />
        <Home3Feature />
        <Service2 />
        <Service3 />
        <ServiceDetails />
        <Home3WorkProcess />
        <Home3Tools />
      </div>
    </MainLayout>
  );
};

export default ServicePage;
<Home5Service />;
/* <LogoMarquee /> */
/* <ServiceDetails />
        <ServiceDetails2 />
        <ServiceDetails3 />
        <ServiceDetails4 /> */
