import { SkillCloud } from "./skill-cloud";
import { useEffect, useState } from "react";
import BlurFade from "./ui/blur-fade";

export const ExtraSkills = () => {

//     const [isDarkMode, setIsDarkMode] = useState(false);

//   useEffect(() => {
//     // Cek preferensi pengguna dari localStorage atau default ke light mode
//     const theme = localStorage.getItem("theme");
//     const isDark = theme === "dark" || (!theme && window.matchMedia("(prefers-color-scheme: dark)").matches);
//     setIsDarkMode(isDark);
//     document.documentElement.classList.toggle("dark", isDark);
//   }, []);

//   const toggleDarkMode = () => {
//     const newTheme = isDarkMode ? "light" : "dark";
//     setIsDarkMode(!isDarkMode);
//     document.documentElement.classList.toggle("dark", !isDarkMode);
//     localStorage.setItem("theme", newTheme); // Simpan preferensi pengguna
//   };
    return (
        <>
            <div className="w-full mx-auto min-h-[100vh] px-7 flex items-center justify-center text-white">
                <div className="max-w-3xl z-10 grid min-h-64 items-center justify-center rounded-lg !text-white bg-black dark:bg-black">
                    {/* <TextReveal 
                        className="!text-white bg-black dark:bg-black"
                        text=".this is the text"
                    /> */}
                    <BlurFade inView duration={1}>
                        <h1 className="text-lg lg:text-2xl text-center">&quot;...and I learn new things every day.&quot;</h1>
                    </BlurFade>
                    <BlurFade inView duration={1}>
                        <SkillCloud />
                    </BlurFade>
                </div>
            </div>

            {/* <div className="z-10 flex min-h-64 items-center justify-center  text-blue-500 dark:bg-black">
                <div>
                    <TextReveal 
                        className="text-blue-500 font-light dark:bg-black"
                        text="...and there's so much more to explore.
                        I grow with every new skill, tool, and challenge—learning never stops."
                    />
                </div>
            </div> */}
        </>
    )
}