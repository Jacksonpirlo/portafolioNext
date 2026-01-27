"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import { useParams } from "next/navigation";
import { projects } from "@/helpers/utils";
import { useSound } from "@/hooks/useSound";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);
  const playClickSound = useSound("/sounds/click.wav", 0.5);

  const handleBackClick = () => {
    playClickSound();
    router.back();
  };

  if (!project) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-black">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-[#f0d18a] pirataOne mb-4">Project not found</h1>
          <Button
            text="Go Back"
            className="bg-gradient-to-r from-[#f0d18a] to-[#ffe6a0] text-black px-6 py-3 rounded-lg font-sarpanch hover:scale-105 transition-transform cursor-pointer"
            onClick={handleBackClick}
          />
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-4 py-8">
      <div className="max-w-xl w-full bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] rounded-lg border-2 border-[#f0d18a]/30 shadow-2xl p-5 md:p-6">
        
        <h1 className="text-2xl md:text-3xl font-bold text-[#f0d18a] pirataOne mb-4 text-center">
          {project.name}
        </h1>
        
        <div className="relative w-full h-[160px] md:h-[220px] mb-4 rounded-lg overflow-hidden border-2 border-[#f0d18a]/20">
          <Image 
            src={project.image} 
            alt={project.name} 
            fill
            className="object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent"></div>
        </div>

        {project.detailedDescription && (
          <div className="mb-4">
            <h2 className="text-lg font-bold text-[#f0d18a] pirataOne mb-2">About This Project</h2>
            <p className="text-gray-300 leading-relaxed text-xs md:text-sm">
              {project.detailedDescription}
            </p>
          </div>
        )}

        {project.purpose && (
          <div className="mb-4 p-2.5 bg-[#0f0f0f] rounded-lg border border-[#f0d18a]/20">
            <h3 className="text-base font-bold text-[#ffe6a0] pirataOne mb-1.5">Purpose</h3>
            <p className="text-gray-300 leading-relaxed text-xs italic">
              {project.purpose}
            </p>
          </div>
        )}

        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-5">
            <h3 className="text-base font-bold text-[#f0d18a] pirataOne mb-2">Technologies Used</h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2.5 py-1 bg-gradient-to-r from-[#f0d18a]/20 to-[#ffe6a0]/20 border border-[#f0d18a]/40 rounded-full text-[#f0d18a] text-[10px] font-sarpanch uppercase tracking-wide hover:scale-105 transition-transform"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-2.5 justify-center items-center pt-4 border-t-2 border-[#f0d18a]/20">
          <a 
            href={project.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-full sm:w-auto text-center bg-gradient-to-r from-[#f0d18a] to-[#ffe6a0] text-black px-5 py-2 rounded-lg font-sarpanch font-bold hover:scale-105 hover:shadow-[0_0_20px_rgba(240,209,138,0.6)] transition-all duration-300 uppercase tracking-wide text-xs"
          >
              View Project
          </a>
          
          <Button
            text="← Back"
            className="w-full sm:w-auto border-2 border-[#f0d18a] text-[#f0d18a] px-5 py-2 rounded-lg font-sarpanch font-bold hover:bg-[#f0d18a] hover:text-black hover:scale-105 transition-all duration-300 cursor-pointer uppercase tracking-wide text-xs"
            onClick={handleBackClick}
          />
        </div>
      </div>
    </div>
  );
}
