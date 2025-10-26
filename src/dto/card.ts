import { StaticImageData } from "next/image";
import { JSX } from "react";

export interface CardProps {
    image: StaticImageData | JSX.Element | string;
    href?: string;
    title: string;
    description: string;
    className: string;
    onClick: () => void;
}