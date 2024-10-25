import BlurFade from "./ui/blur-fade"
import BoxReveal from "./ui/box-reveal";

type ExperienceDataType = {
    position: string;
    date: string;
    company: string;
}[]

export const Experience = () => {

    const experienceData:ExperienceDataType = [
        {position: "Team Support Accreditation", date: "November 2023 - September 2024", company: "STIKOM Tunas Bangsa PematangSiantar"},
        {position: "Frontend Web Dev", date: "February 2023 - September 2023", company: "Studi Independen Skilvul #Tech4Impact"},
        {position: "Internship", date: "February 2023 - September 2023", company: "STIKOM Tunas Bangsa Pematangsiantar"}
    ]

    return (
        <>
            <BlurFade inView>
                <div className="w-auto flex my-7">
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
                                            <p className="leading-relaxed font-thin line-clamp-1">{data.date}</p>
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