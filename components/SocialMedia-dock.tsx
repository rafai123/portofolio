import Link from "next/link"
import { Dock, DockIcon } from "./ui/dock"
import { GithubIcon } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

export type IconProps = React.HTMLAttributes<SVGElement>

export const SocialMediaDock = () => {

    const Icons = {
        gitHub: (props: IconProps) => <GithubIcon {...props} />,
        linkedIn: (props: IconProps) => <FaLinkedin {...props} />,
        instagram: (props: IconProps) => <IoLogoInstagram {...props} />,
    };

    return (
        <>
            <div className="relative">
                <Dock direction="middle" className="px-2 " magnification={60} distance={100}>
                    <DockIcon>
                        <Link href={"https://github.com/rafai123"}>
                            <Icons.gitHub className="size-7 hover:text-black hover:bg-white transition rounded" />
                        </Link>
                    </DockIcon>
                    <DockIcon>
                        <Link href={"https://www.linkedin.com/in/muhammad-rafai-126249148/"}>
                            <Icons.linkedIn className="size-7 hover:text-blue-400" />
                        </Link>
                    </DockIcon>
                    <DockIcon>
                        <Link href={"https://www.instagram.com/muhammad_rafai_28/"}>
                            <Icons.instagram className="size-8 hover:text-pink-600" />
                        </Link> 
                    </DockIcon>
                </Dock>
            {/* <MyDock /> */}
            </div>
        </>
    )
}