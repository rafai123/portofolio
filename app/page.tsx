"use client"
import { HeroSection } from "@/components/Hero-section";
import { MyDock } from "@/components/MyDock";
import BlurFade from "@/components/ui/blur-fade";
import { Dock, DockIcon } from "@/components/ui/dock";
import HyperText from "@/components/ui/hyper-text";
import WordRotate from "@/components/ui/word-rotate";
import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { ArrowBigDownDash, ArrowDown, GitGraphIcon, GithubIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export type IconProps = React.HTMLAttributes<SVGElement>

const Icons = {
  gitHub: (props: IconProps) => <GithubIcon {...props} />,
  linkedIn: (props: IconProps) => <FaLinkedin {...props} />,
  instagram: (props: IconProps) => <IoLogoInstagram {...props} />,
};


export default function Home() {

  return (
    <div className="bg-black text-white transition-all">
      <HeroSection />
      <section id="about-me">
        <div className="w-full min-h-[100vh] px-7 py-4">
          <div className="max-w-3xl w-full mx-auto gap-2">
            <div className="mx-auto flex justify-start md:justify-center pb-6">
              <HyperText 
                className="text-3xl lg:text-4xl text-start mr-auto md:text-center font-bold tracking-wide text-white border-b-4 border-yellow-600" 
                text="ABOUT ME"
              />
            </div>
            <BlurFade inView>
              <p className="text-lg text-justify leading-relaxed text-gray-300">
                Hello! My name is <span className="text-yellow-500 font-semibold">Muhammad Rafai</span>, 
                and I am a passionate web developer specializing in building modern, responsive, 
                and user-friendly web applications. I have experience working with both frontend 
                and backend technologies, allowing me to create seamless solutions from start to finish.
              </p>
            </BlurFade>

          <BlurFade inView>
            <p className="text-lg text-justify leading-relaxed text-gray-300 mt-4">
              I enjoy turning complex problems into elegant code, and I am constantly exploring new 
              tools and technologies to improve my skill set. Whether it’s crafting beautiful interfaces 
              with <span className="text-yellow-500">React.js</span> or building scalable APIs with 
              <span className="text-yellow-500"> Node.js</span>, I am always excited to take on new challenges.
            </p>
          </BlurFade>

          <BlurFade inView>
            <p className="text-lg text-justify leading-relaxed text-gray-300 mt-4">
              If you'd like to connect or work together, feel free to reach out! Let's create something amazing.
            </p>
          </BlurFade>

          <BlurFade inView>
            <div className="relative">
              <Dock direction="middle" className="px-2 " magnification={60} distance={100}>
                <DockIcon>
                  <Icons.gitHub className="size-7 hover:text-black hover:bg-white transition rounded" />
                </DockIcon>
                <DockIcon>
                  <Icons.linkedIn className="size-7 hover:text-blue-400" />
                </DockIcon>
                <DockIcon>
                  <Link href={"https://www.instagram.com/muhammad_rafai_28/"}>
                    <Icons.instagram className="size-8 hover:text-pink-600" />
                  </Link> 
                </DockIcon>
              </Dock>
              {/* <MyDock /> */}
            </div>
          </BlurFade>
        </div>
        </div>
      </section>
    </div>
  );
}
