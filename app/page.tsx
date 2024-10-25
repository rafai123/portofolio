"use client"
import { AboutMe } from "@/components/AboutMe-section";
import { HeroSection } from "@/components/Hero-section";

import React from "react";

export default function Home() {

  return (
    <div className="bg-black text-white transition-all">
      <HeroSection />
      <AboutMe />
    </div>
  );
}
