import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "javascript",
//   "dart",
//   "java",
  "react",
  "react",
//   "flutter",
//   "android",
    "nextdotjs",
    "tailwindcss",
    "prisma",
    "drizzle",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
//   "cypress",
  "docker",
  "git",
//   "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "visualstudiocode",
//   "androidstudio",
//   "sonarqube",
  "figma",
];

export function SkillCloud() {
  return (
    <div className="relative mx-auto flex size-full max-w-lg items-center justify-center overflow-hidden rounded-lg bg-black px-20 pb-20 pt-8 ">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
