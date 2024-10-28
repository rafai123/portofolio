import { DiResponsive } from "react-icons/di"
import { FaGitAlt } from "react-icons/fa"
import { FaCss3Alt, FaHtml5, FaReact } from "react-icons/fa6"
import { IoLogoJavascript } from "react-icons/io5"
import { RiTailwindCssFill } from "react-icons/ri"
import { SiExpress, SiNextdotjs, SiPrisma, SiTypescript } from "react-icons/si"
import { TbApi } from "react-icons/tb"
import BoxReveal from "./ui/box-reveal"

export const Skill = () => {
    return (
        <div className="w-full min-h-[50vh] px-7 pt-2 ">
            <div className="max-w-3xl mx-auto sm:px-0">
                <div className="flex mt-12 mb-10">
                    <h2 className="font-bold text-2xl tracking-widest border-b-4 w-auto border-yellow-600">Skills</h2>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-7 place-items-center mx-auto">
                    <BoxReveal boxColor="#CA8A04">
                        <div className="text-center">
                            <FaHtml5  className="size-7 sm:size-9 lg:size-12  mx-auto inline-block hover:text-yellow-600" />
                            <p className="font-thin text-sm mt-2">HTML5</p>
                        </div>
                    </BoxReveal>
                    <BoxReveal boxColor="#60A5FA">
                        <div className="text-center">
                            <FaCss3Alt className="size-7 sm:size-9 lg:size-12  mx-auto inline-block hover:text-blue-400" />
                            <p className="font-thin text-sm mt-2">CSS3</p>
                        </div>
                    </BoxReveal>
                    <BoxReveal boxColor="#FACC15">
                        <div className="text-center">
                            <IoLogoJavascript className="size-7 sm:size-9 lg:size-12  mx-auto inline-block hover:text-yellow-400" />
                            <p className="font-thin text-sm mt-2">Javascript ES6</p>
                        </div>
                    </BoxReveal>
                    <BoxReveal boxColor="#3B82F6">
                        <div className="text-center">
                            <SiTypescript className="size-7 sm:size-9 lg:size-12  mx-auto inline-block hover:text-blue-500" />
                            <p className="font-thin text-sm mt-2">TypeScript</p>
                        </div>
                    </BoxReveal>
                    <BoxReveal boxColor="#3B82F6">
                        <div className="text-center">
                            <FaReact className="size-7 sm:size-9 lg:size-12  mx-auto inline-block hover:text-blue-500" />
                            <p className="font-thin text-sm mt-2">React.js</p>
                        </div>
                    </BoxReveal>
                    <BoxReveal boxColor="#D1D1D4">
                        <div className="text-center">
                            <SiNextdotjs className="size-7 sm:size-9 lg:size-12  mx-auto inline-block hover:text-white/80" />
                            <p className="font-thin text-sm mt-2">Next.js</p>
                        </div>
                    </BoxReveal>
                    <BoxReveal boxColor="#14B8A6">
                        <div className="text-center">
                            <RiTailwindCssFill className="size-7 sm:size-9 lg:size-12  mx-auto inline-block hover:text-teal-500" />
                            <p className="font-thin text-sm mt-2">Tailwind CSS</p>
                        </div>
                    </BoxReveal>
                    <BoxReveal boxColor="#E9E9EA">
                        <div className="text-center">
                            <SiExpress className="size-7 sm:size-9 lg:size-12  mx-auto inline-block hover:text-white/90" />
                            <p className="font-thin text-sm mt-2">Express JS</p>
                        </div>
                    </BoxReveal>
                    <BoxReveal>
                        <div className="text-center">
                            <SiPrisma className="size-7 sm:size-9 lg:size-12  mx-auto inline-block hover:bg-white hover:text-black transition-all rounded" />
                            <p className="font-thin text-sm mt-2 ">Prisma ORM</p>
                        </div>
                    </BoxReveal>
                    <BoxReveal boxColor="#EA580C">
                        <div className="text-center">
                            <FaGitAlt className="size-7 sm:size-9 lg:size-12  mx-auto inline-block hover:text-orange-600" />
                            <p className="font-thin text-sm mt-2">Git</p>
                        </div>
                    </BoxReveal>
                    <BoxReveal boxColor="#EA580C">
                        <div className="text-center">
                            <DiResponsive className="size-14 mx-auto inline-block" />
                            <p className="font-thin text-sm mt-2">Responsive Design</p>
                        </div>
                    </BoxReveal>
                    <BoxReveal boxColor="#EA580C">
                        <div className="text-center">
                            <TbApi className="size-7 sm:size-9 lg:size-12  mx-auto inline-block" />
                            <p className="font-thin text-sm mt-2">API</p>
                        </div>
                    </BoxReveal>
                    
                </div>
            </div>
        </div>
    )
}