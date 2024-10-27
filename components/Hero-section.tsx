import Link from "next/link"
import BlurFade from "./ui/blur-fade"
import HyperText from "./ui/hyper-text"
import WordRotate from "./ui/word-rotate"
import { ArrowBigDownDash } from "lucide-react"

export const HeroSection = () => {
    
    const wordsRotateHome = [
        "Web Developer", 
        "Frontend Web Developer", 
        "Fullstack Web Developer"
    ]

    return (
        <>
            <main className="w-full mx-auto max-w-3xl h-[100vh] flex items-center px-7">
                <div>
                    <BlurFade delay={.25} duration={1.2} inView>
                        <HyperText duration={1100} className="font-extrabold text-3xl lg:text-4xl border-b-4 border-yellow-600 tracking-widest text-left" text="Muhammad Rafai"/>
                    </BlurFade>
                    <BlurFade inView duration={1}>
                        <WordRotate className="font-bold text-3xl lg:text-4xl tracking-widest text-left" words={wordsRotateHome} />
                    </BlurFade>
                </div>
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <Link href={"#about-me"}>
                    <ArrowBigDownDash size={35} className="text-white animate-bounce hover:animate-none transition hover:text-yellow-600" />
                </Link>
                </div>
            </main>
        </>
    )
}