"use client"
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { projects } from "@/helpers/utils";
import { Card } from "../molecules/Card";
import { Button } from "../atoms/Button";
const Projects = () => {
    const router = useRouter();
    const pathname = usePathname();
    console.log(pathname)
    return(
        <>
        <section className="flex flex-col justify-center items-center lg:mt-30 m-7">
            <h1 className="mb-16 font-bold text-5xl pirataOne">Projects</h1>
            <article className="flex flex-wrap gap-4 justify-center items-center">
            <Card image={projects.project1} href="https://jacksonpirlo.github.io/GreenGables/" title="Green Gables" description="Website for my school" className="flex flex-col rounded-2xl bg-white flex-wrap text-black text-center justify-center border-[1] border-white hover:mb-12 transition-all ease-in-out" />
            <Card image={projects.project2} href="https://jacksonpirlo.github.io/Caja-fuerte/" title="Safe" description="Safe made for practicing Vue JS" className="flex flex-col rounded-2xl bg-white flex-wrap text-black text-center justify-center border-[1] border-white hover:mb-12 transition-all ease-in-out" />
            <Card image={projects.project3} href="https://github.com/Jacksonpirlo/Registro-php-sql" title="Register" description="Login made with PHP and SQL" className="flex flex-col rounded-2xl bg-white flex-wrap text-black text-center justify-center border-[1] border-white hover:mb-12 transition-all ease-in-out" />
            <Card image={projects.project4} href="https://jacksonpirlo.github.io/Random-Dogs/" title="Random dogs" description="Random Dog Website" className="flex flex-col rounded-2xl bg-white flex-wrap text-black text-center justify-center border-[1] border-white hover:mb-12 transition-all ease-in-out" />
            </article>
        </section>

            {pathname == "/dashboard/home" || pathname == "/dashboard/projects" || pathname == "/dashboard/skills" || pathname == "/dashboard/languages" || pathname == "/dashboard/contact" ? (
                            <Button onClick={() => {router.back()}} className="cursor-pointer font-sarpanch text-[24px] mb-4" text="Back" />
                        ) : ""}
        </>
    )
}

export default Projects;