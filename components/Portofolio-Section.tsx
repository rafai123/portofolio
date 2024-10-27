import Image from "next/image"
import HyperText from "./ui/hyper-text"
import ShineBorder from "./ui/shine-border"
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri"
import { FaBootstrap, FaReact } from "react-icons/fa"
import { SiPrisma } from "react-icons/si"
import { BiLogoPostgresql } from "react-icons/bi"
import ShinyButton from "./ui/shiny-button"
import Link from "next/link"
import { DiMongodb } from "react-icons/di"

export const PortofolioSection = () => {
    return (
        <>
            <div className="w-full min-h-[100vh] px-7 py-7">
                <div className="max-w-3xl w-full mx-auto gap-2">
                    <div className="mx-auto flex justify-start pb-6">
                        <HyperText className="text-3xl lg:text-4xl text-start mr-auto md:text-center font-bold tracking-wide text-white border-b-4 border-yellow-600" text="Projects" />
                    </div>
                    <div className="grid gap-5 grid-cols-1 md:grid-cols-2">
                    <ShineBorder
                        className="relative flex w-full flex-col items-start justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                        >
                        <div>
                            <Image src="/nextvul.png" width={600} height={600} alt="project" />
                        </div>
                        <div className="my-2 grid gap-3">
                            <h2 className="text-center border-b-2 border-yellow-600">Nextvul Cafe App</h2>
                            <div>
                                <p className="text-justify text-gray-300">A
                                Developed a robust SaaS management platform for cafes, featuring seamless CRUD operations. Built with Next.js and styled with Tailwind CSS, the application ensures a sleek user experience. Integrated Clerk Auth for secure authentication and employed Prisma ORM for efficient database management, while React Query streamlines data fetching and enhances responsiveness.</p>
                                <p>built with :</p>
                                <div className="flex mt-2 justify-around items-center flex-wrap">
                                    <RiNextjsLine className="size-7" />
                                    <FaReact className="size-7" />
                                    <RiTailwindCssFill className="size-7" />
                                    <SiPrisma className="size-7" />
                                    <BiLogoPostgresql className="size-7" />
                                </div>
                                <div className="flex justify-center mt-7">
                                    <Link href={"https://nextvulcafe.netlify.app"}>
                                        <ShinyButton className="mx-auto border">visit</ShinyButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ShineBorder>
                    <ShineBorder
                        className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                        >
                        <div>
                            <Image src="/bmiroast.png" width={600} height={600} alt="project" />
                        </div>
                        <div className="my-2 grid gap-3">
                            <h2 className="text-center border-b-2 border-yellow-600">BMI Roast</h2>
                            <div>
                                <p className="text-justify text-gray-300">A
                                Developed a BMI roasting website using Next.js and Tailwind CSS, leveraging Gemini AI to analyze users' height and weight for personalized feedback. The platform not only provides insightful roasting but also motivates users to achieve their ideal BMI through tailored guidance and encouragement.</p>
                                <p>built with :</p>
                                <div className="flex mt-2 justify-around items-center flex-wrap">
                                    <RiNextjsLine className="size-7" />
                                    <FaReact className="size-7" />
                                    <RiTailwindCssFill className="size-7" />
                                    
                                </div>
                                <div className="flex justify-center mt-7">
                                    <Link href={"https://bmi-roast.vercel.app/"}>
                                        <ShinyButton className="mx-auto border">visit</ShinyButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ShineBorder>
                    <ShineBorder
                        className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                        >
                        <div>
                            <Image src="/netflixclone.png" width={600} height={600} alt="project" />
                        </div>
                        <div className="my-2 grid gap-3">
                            <h2 className="text-center border-b-2 border-yellow-600">Netflix Clone</h2>
                            <div>
                                <p className="text-justify text-gray-300">A
                                Final project for the Kampus Merdeka program at Skilvul is Carevul, a web application for booking doctor appointments. The platform features articles, a BMI calculator, and a chat function with doctors, built using React, Prisma, and Bootstrap.</p>
                                <p>built with :</p>
                                <div className="flex mt-2 justify-around items-center flex-wrap">
                                    <RiNextjsLine className="size-7" />
                                    <FaReact className="size-7" />
                                    <RiTailwindCssFill className="size-7" />
                                    <DiMongodb />
                                    <SiPrisma className="size-7" />
                                </div>
                                <div className="flex justify-center mt-7">
                                    <Link href={"https://netflix-clone-rafai.vercel.app/"}>
                                        <ShinyButton className="mx-auto border">visit</ShinyButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ShineBorder>
                    <ShineBorder
                        className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl"
                        color={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
                        >
                        <div>
                            <Image src="/carevul.png" width={600} height={600} alt="project" />
                        </div>
                        <div className="my-2 grid gap-3">
                            <h2 className="text-center border-b-2 border-yellow-600">Carevul</h2>
                            <div>
                                <p className="text-justify text-gray-300">A
                                Final project for the Kampus Merdeka program at Skilvul is Carevul, a web application for booking doctor appointments. The platform features articles, a BMI calculator, and a chat function with doctors, built using React, Prisma, and Bootstrap.</p>
                                <p>built with :</p>
                                <div className="flex mt-2 justify-around items-center flex-wrap">
                                    <FaReact className="size-7" />
                                    <SiPrisma className="size-7" /
                                    >
                                    <FaBootstrap />
                                </div>
                                <div className="flex justify-center mt-7">
                                    <Link href={"https://carevul-five.vercel.app/"}>
                                        <ShinyButton className="mx-auto border">visit</ShinyButton>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </ShineBorder>
                    </div>
                </div>
            </div>
        </>
    )
}