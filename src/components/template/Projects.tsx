"use client"
import { useRouter } from "next/navigation";
import { projects } from "@/helpers/utils";
import { Card } from "../molecules/Card";
import { Button } from "../atoms/Button";
import Section from "../atoms/Section";
import useHandleSound from "@/hooks/useHandleSound";
import { useSound } from "@/hooks/useSound";

const Projects = () => {
    const router = useRouter();
    const {pathname, handleBackClick} = useHandleSound();
    const playHoverSound = useSound("/sounds/hover.mp3", 0.2);
    const playClickSound = useSound("/sounds/click.wav", 0.5);
    
    const handleProjectClick = (id: string) => {
        playClickSound();
        router.push(`/dashboard/projects/${id}`);
    };
    return(
        <>
        <Section className="flex flex-col justify-center items-center lg:mt-30 m-7">
            <>
                <h1 className="mb-16 font-bold text-5xl pirataOne text-[#f0d18a]">Projects</h1>
                <article className="flex flex-wrap gap-6 justify-center items-center max-w-7xl">
                  {projects.map(project => (
                    <div 
                      key={project.id}
                      onMouseEnter={playHoverSound}
                    >
                      <Card
                        image={project.image}
                        title={project.name}
                        description={project.description}
                        className="flex flex-col rounded-lg bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] flex-wrap text-white text-center justify-center border-2 border-[#f0d18a]/30 shadow-xl hover:shadow-[0_0_30px_rgba(240,209,138,0.5)] hover:border-[#f0d18a] hover:-translate-y-2 hover:scale-105 transition-all duration-300 ease-out cursor-pointer overflow-hidden group w-[280px]"
                        onClick={() => handleProjectClick(project.id)}
                      />
                    </div>
                  ))}
                </article>
            </>
        </Section>

        {pathname == "/dashboard/home" || pathname == "/dashboard/projects" || pathname == "/dashboard/skills" || pathname == "/dashboard/languages" || pathname == "/dashboard/contact" ? (
            <Button onClick={handleBackClick} className="cursor-pointer font-sarpanch text-[24px] mb-4" text="Back" />
        ) : ""}
        </>
    )
}

export default Projects;