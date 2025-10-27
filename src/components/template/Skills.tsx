"use client"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { skills } from "@/helpers/utils";
import Image from "next/image";
import { Button } from "../atoms/Button";
import Section from "../atoms/Section";
const Skills = () => {
    const router = useRouter();
    const pathname = usePathname()
    console.log(pathname)
    return(
        <>
        <Section className="flex flex-col justify-center items-center lg:mt-50">
            <>
            <div className="m-6">
                <h1 className="text-4xl font-bold pirataOne">Skills</h1>
            </div>
            <article>
                <ul className="flex flex-wrap justify-center gap-4">
                    <li><Image src={skills.html} alt="HTML" width={100} height={100}/></li>
                    <li><Image src={skills.css} alt="CSS" /></li>
                    <li><Image src={skills.js} alt="JavaScript" /></li>
                    <li><Image src={skills.nodejs} alt="NODEJS" width={100} height={100} /></li>
                    <li><Image src={skills.express} alt="EXPRESS" width={100} height={100} /></li>
                    <li><Image src={skills.npm} alt="NPM" width={100} height={100} /></li>
                    <li><Image src={skills.react!} alt="React" width={100} height={100} /></li>
                    <li><Image src={skills.sql!} alt="SQL" width={100} height={100} /></li>
                    <li><Image src={skills.tailwind!} alt="Tailwind" width={100} height={100} /></li>
                    <li><Image src={skills.bootstrap!} alt="Bootstrap" width={100} height={100} /></li>
                    <li><Image src={skills.git!} alt="Git" width={100} height={100} /></li>
                </ul>
            </article>
            </>
        </Section>
            {pathname == "/dashboard/home" || pathname == "/dashboard/projects" || pathname == "/dashboard/skills" || pathname == "/dashboard/languages" || pathname == "/dashboard/contact" ? (
                <Button onClick={() => {router.push("/")}} className="cursor-pointer font-sarpanch text-[24px] mb-4" text="Back" />
            ) : ""}

        </>
    )
}

export default Skills;