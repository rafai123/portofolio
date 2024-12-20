"use client"
import { AboutMe } from "@/components/AboutMe-section";
import { HeroSection } from "@/components/Hero-section";
import { PortofolioSection } from "@/components/Portofolio-Section";
import { Skill } from "@/components/Skill-section";
import { ExtraSkills } from "@/components/extra-skills";
import { FooterSection } from "@/components/footer-section";

import React from "react";

export default function Home() {

  return (
    <div className="bg-black text-white transition-all">
      <HeroSection />
      <AboutMe />
      <Skill />
      <ExtraSkills />
      <PortofolioSection />
      <FooterSection />
    </div>
  );
}
