"use client"
import { skills } from "@/helpers/utils";
import Image from "next/image";
import { Button } from "../atoms/Button";
import Section from "../atoms/Section";
import useHandleSound from "@/hooks/useHandleSound";

const Skills = () => {
    const {pathname, handleBackClick} = useHandleSound();
    return(
        <>
        <Section className="flex flex-col justify-center items-center lg:mt-50">
            <>
            <div className="m-6">
                <h1 className="text-4xl font-bold pirataOne text-[#f0d18a]">Skills</h1>
            </div>
            <article>
                <ul className="flex flex-wrap justify-center gap-8 max-w-[900px]">
                    <li><Image src={skills.ts} alt="Typescript" width={80} height={80} className="mt-2" /></li>
                    <li><Image src={skills.nodejs} alt="NODEJS" width={100} height={100} /></li>
                    <li><Image src={skills.express} alt="EXPRESS" width={100} height={100} /></li>
                    <li><Image src={skills.cypress} alt="cypres" width={100} height={100} /></li>
                    <li><Image src={skills.react!} alt="React" width={100} height={100} /></li>
                    <li className="bg-white rounded-full flex items-center justify-center w-[100px] h-[100px] p-4 overflow-hidden"><Image src={skills.nextjs} alt="Next.js" width={65} height={65} className="object-contain" /></li>
                    <li><Image src={skills.sql!} alt="SQL" width={100} height={100} /></li>
                    <li><Image src={skills.mongodb!} alt="MongoDB" width={100} height={100} /></li>
                    <li><Image src={skills.tailwind!} alt="Tailwind" width={100} height={100} /></li>
                    <li><Image src={skills.git!} alt="Git" width={100} height={100} /></li>
                    <li><Image src={skills.docker} alt="Docker" width={100} height={100} /></li>
                    <li><Image src={skills.kubernetes} alt="Kubernetes" width={100} height={100} /></li>
                </ul>
            </article>
            </>
        </Section>
            {pathname == "/dashboard/home" || pathname == "/dashboard/projects" || pathname == "/dashboard/skills" || pathname == "/dashboard/languages" || pathname == "/dashboard/contact" ? (
                <Button onClick={handleBackClick} className="cursor-pointer font-sarpanch text-[24px] mb-4" text="Back" />
            ) : ""}

        </>
    )
}

export default Skills;