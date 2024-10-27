import { Experience } from "./Experience";
import { SocialMediaDock } from "./SocialMedia-dock";
import BlurFade from "./ui/blur-fade";
import HyperText from "./ui/hyper-text";

export const AboutMe = () => {
  return (
    <>
      <section id="about-me">
        <div className="w-full min-h-[100vh] px-7 py-7">
          <div className="max-w-3xl w-full mx-auto gap-2">
            <div className="mx-auto flex justify-start pb-6">
              <HyperText className="text-3xl lg:text-4xl text-start mr-auto md:text-center font-bold tracking-wide text-white border-b-4 border-yellow-600" text="ABOUT ME" />
            </div>
            <BlurFade inView>
              <p className="text-md text-justify leading-relaxed text-gray-300">
                Hello! My name is <span className="text-yellow-500 font-semibold">Muhammad Rafai</span>, and I am a passionate web developer specializing in building modern, responsive, and user-friendly web applications. I have experience
                working with both frontend and backend technologies, allowing me to create seamless solutions from start to finish.
              </p>
            </BlurFade>

            <BlurFade inView>
              <p className="text-md text-justify leading-relaxed text-gray-300 mt-4">
                I enjoy turning complex problems into elegant code, and I am constantly exploring new tools and technologies to improve my skill set. Whether it&apos;s crafting beautiful interfaces with{" "}
                <span className="text-yellow-500">React.js</span> or building scalable APIs with
                <span className="text-yellow-500"> Node.js</span>, I am always excited to take on new challenges.
              </p>
            </BlurFade>

            <BlurFade inView>
              <p className="text-md text-justify leading-relaxed text-gray-300 mt-4">If you&apos;d like to connect or work together, feel free to reach out! Let&apos;s create something amazing.</p>
            </BlurFade>

            <BlurFade inView>
              <SocialMediaDock />
            </BlurFade>

            {/* Experience */}
            <Experience />
          </div>
        </div>
      </section>
    </>
  );
};
