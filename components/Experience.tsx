import BlurFade from "./ui/blur-fade"
import BoxReveal from "./ui/box-reveal";

type ExperienceDataType = {
    position: string;
    date: string;
    company: string;
}[]

export const Experience = () => {

    const experienceData:ExperienceDataType = [
        {position: "Team Support Accreditation", date: "Nov 2023 - Sep 2024", company: "STIKOM Tunas Bangsa PematangSiantar"},
        {position: "Frontend Web Dev", date: "Feb 2023 - Sep 2023", company: "Studi Independen Skilvul #Tech4Impact"},
        {position: "Internship", date: "Oct 2022 - Feb 2023", company: "STIKOM Tunas Bangsa Pematangsiantar"},
        {position: "Internship", date: "Aug 2019 - Nov 2019", company: "Telkom Akses Tanjung Morawa"}
    ]

    return (
        <>
            <BlurFade inView>
                <div className="w-auto lg:mx-auto flex my-7">
                    <h1 className="font-bold text-2xl tracking-widest border-b-4 w-auto border-yellow-600">Experience</h1>
                </div>
                <div className="grid gap-5 tracking-wide">
                    {experienceData.map((data, index) => (
                        <div className="w-full" key={index}>
                            <div className="border-b-2 border-yellow-600 grid py-2" >
                                <div className="w-full">
                                    <div className="flex justify-between">
                                        <BoxReveal boxColor="#CA8A04">
                                            <p className="font-bold text-yellow-500">{data.position}</p>
                                        </BoxReveal>
                                        <BoxReveal boxColor="#CA8A04">
                                            <p className="leading-relaxed font-thin text-xs sm:text-sm">{data.date}</p>
                                        </BoxReveal>
                                    </div>
                                    <BoxReveal boxColor="#CA8A04">
                                        <p>{data.company}</p>
                                    </BoxReveal>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </BlurFade>
        </>
    )
}