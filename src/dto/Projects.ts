import { StaticImageData } from "next/image";

export interface Project {
    id: string;
    name: string;
    description: string;
    image: StaticImageData;
    url: string;
}

export type Projects = Project[];