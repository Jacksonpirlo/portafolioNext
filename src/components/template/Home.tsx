"use client"
import Image from "next/image"
import MyImage from "@/assets/My-img8bit-com-Effect.gif"
import { Button } from "../atoms/Button";
import Section from "../atoms/Section";
import useHandleSound from "@/hooks/useHandleSound";

const HomePage = () => {
    const {pathname, handleBackClick} = useHandleSound();
    return(
        <>
        <Section className="p-6 text-white mt-10">
        <>
        <h1 className="font-bold text-4xl pirataOne text-[#f0d18a]">Portfolio</h1>
            <article className="flex flex-col justify-center items-center m-3 mb-8">
                <Image src={MyImage} alt="Photo" width={200} height={266} />
                <h1 className="font-bold text-3xl mt-3 pirataOne text-[#f0d18a]">About me</h1>
                <p>Full Stack Developer</p>
            </article>

            <article className="flex justify-center items-center max-w-230 text-center pl-[10] pr-[10]">
                <p className="max-w-7xl pl-2 pr-2">
                    With two years of hands-on experience in web development, I build reliable and purposeful digital products with a strong focus on quality, usability, and continuous improvement. This portfolio reflects my progression as a Full Stack Developer, my commitment to solving problems with technology, and the discipline I bring to every project. I invite you to explore my work and discover how I turn ideas into thoughtful, scalable experiences.
                </p>
            </article>
        </>
        </Section>
            {pathname == "/dashboard/home" || pathname == "/dashboard/projects" || pathname == "/dashboard/skills" || pathname == "/dashboard/languages" || pathname == "/dashboard/contact" ? (
                            <Button onClick={handleBackClick} className="cursor-pointer font-sarpanch text-[24px] mb-4" text="Back" />
                        ) : ""}

        </>
    )
}

export default HomePage;