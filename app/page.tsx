import HyperText from "@/components/ui/hyper-text";
import WordRotate from "@/components/ui/word-rotate";
import { ArrowBigDownDash, ArrowDown } from "lucide-react";

export default function Home() {

  const wordsRotateHome = ["Web Developer", "Frontend Web Developer", "Fullstack Web Developer"]

  return (
    <div className="bg-black text-white transition-all">
      <main className="w-full h-[100vh] flex items-center px-7">
        <div>
            <HyperText className="font-extrabold text-3xl lg:text-4xl border-b-4 border-yellow-600 tracking-widest text-left" text="Muhammad Rafai"/>
            <WordRotate className="font-bold text-3xl lg:text-4xl tracking-widest text-left" words={wordsRotateHome} />
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <ArrowBigDownDash size={35} className="text-white animate-bounce hover:animate-none transition hover:text-yellow-600" />
        </div>
      </main>
    </div>
  );
}
