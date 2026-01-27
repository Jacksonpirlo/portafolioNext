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
        <Section className="p-6 text-white">
        <>
        <h1 className="font-bold text-4xl pirataOne">Portfolio</h1>
            <article className="flex flex-col justify-center items-center m-3 mb-8">
                <Image src={MyImage} alt="Photo" width={200} height={266} />
                <h1 className="font-bold text-3xl mt-3 pirataOne">Sobre Mí</h1>
                <p>Wed FullStak JR Developer</p>
            </article>

            <article className="flex justify-center items-center max-w-730 text-center pl-[10] pr-[10]">
                <p className="max-w-7xl pl-2 pr-2">
                    It&apos;s been over a year since I discovered my passion for web development. Since then, every day represents a new opportunity to learn, grow professionally, and advance my personal and financial development. I invite you to explore my portfolio; I hope you enjoy it as much as I enjoy building it.
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