"use client";
import Home5Partnerships from "@/components/Partnerships/Home5Partnerships";
import MainLayout from "@/components/layout/MainLayout";
import Home5Service from "@/components/service/Home5Service";
import useWow from "@/hooks/useWow";
import React from "react";

const Service4 = () => {
  useWow();
  return (
    <div>
      <Home5Service />
      <Home5Partnerships />
    </div>
  );
};

export default Service4;
