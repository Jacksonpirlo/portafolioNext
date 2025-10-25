"use client"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { skills } from "@/helpers/utils";
import Image from "next/image";
import { Button } from "../atoms/Button";
const Skills = () => {
    const router = useRouter();
    const pathname = usePathname()
    console.log(pathname)
    return(
        <>
        <section className="flex flex-col justify-center items-center lg:mt-30">
            <div className="m-6">
                <h1 className="text-4xl font-bold pirataOne">Skills</h1>
            </div>
            <article>
                <ul className="flex flex-wrap justify-center gap-4">
                    <li><Image src={skills.html} alt="HTML" width={100} height={100}/></li>
                    <li><Image src={skills.css} alt="HTML" /></li>
                    <li><Image src={skills.js} alt="HTML" /></li>
                    <li><Image src={skills.nodejs} alt="HTML" width={100} height={100} /></li>
                    <li><Image src={skills.express} alt="HTML" width={100} height={100} /></li>
                    <li><Image src={skills.npm} alt="HTML" width={100} height={100} /></li>
                    <li><Image src={skills.python} alt="HTML" width={100} height={100} /></li>
                </ul>
            </article>
        </section>
            {pathname == "/dashboard/home" || pathname == "/dashboard/projects" || pathname == "/dashboard/skills" || pathname == "/dashboard/languages" || pathname == "/dashboard/contact" ? (
                <Button onClick={() => {router.back()}} className="cursor-pointer font-sarpanch text-[24px] mb-4" text="Back" />
            ) : ""}

        </>
    )
}

export default Skills;