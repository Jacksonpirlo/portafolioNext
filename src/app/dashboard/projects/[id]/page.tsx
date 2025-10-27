"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "@/components/atoms/Button";
import { useParams } from "next/navigation";
import { projects } from "@/helpers/utils";

export default function ProjectDetail() {
  const router = useRouter();
  const { id } = useParams();
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <div className="text-white">Project not found</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white">
  <h1 className="text-3xl mb-4">{project.name}</h1>
  <Image src={project.image} alt={project.name} width={256} height={160} className="mb-4 rounded-xl w-64 h-40 object-cover" />
      <p className="mb-6 max-w-xl text-center">{project.description}</p>
      <a href={project.url} target="_blank" rel="" className="mb-6 underline text-yellow-400">View project</a>
      <Button
        text="Back"
        className="bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-400"
        onClick={() => router.back()}
      />
    </div>
  );
}
