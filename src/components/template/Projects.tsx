"use client"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { projects } from "@/helpers/utils";
import { Card } from "../molecules/Card";
import { Button } from "../atoms/Button";
import Section from "../atoms/Section";
const Projects = () => {
    const router = useRouter();
    const pathname = usePathname();
    console.log(pathname)
    return(
        <>
        <Section className="flex flex-col justify-center items-center lg:mt-30 m-7">
            <>
                <h1 className="mb-16 font-bold text-5xl pirataOne">Projects</h1>
                <article className="flex flex-wrap gap-4 justify-center items-center">
                  {projects.map(project => (
                    <Card
                      key={project.id}
                      image={project.image}
                      title={project.name}
                      description={project.description}
                      className="flex flex-col rounded-2xl bg-white flex-wrap text-black text-center justify-center border border-gray-200 shadow-md hover:shadow-2xl hover:-translate-y-3 hover:scale-105 transition-all duration-300 ease-out cursor-pointer"
                      onClick={() => router.push(`/dashboard/projects/${project.id}`)}
                    />
                  ))}
                </article>
            </>
        </Section>

        {pathname == "/dashboard/home" || pathname == "/dashboard/projects" || pathname == "/dashboard/skills" || pathname == "/dashboard/languages" || pathname == "/dashboard/contact" ? (
            <Button onClick={() => {router.push("/")}} className="cursor-pointer font-sarpanch text-[24px] mb-4" text="Back" />
        ) : ""}
        </>
    )
}

export default Projects;