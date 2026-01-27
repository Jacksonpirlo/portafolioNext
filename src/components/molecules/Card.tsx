import { CardProps } from "@/dto/card"
import Image, { StaticImageData } from "next/image"
import { JSX } from "react";

export const Card = ({image, title, description, className, onClick, showViewProject = true}: CardProps) => {
    const renderImage = () => {
        if (!image) return null;
        if (typeof image === "string" || (image as StaticImageData).src) {
            return (
                <div className="relative w-full h-[180px] overflow-hidden">
                    <Image 
                        src={image as string | StaticImageData} 
                        alt={title || ""} 
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-transparent to-transparent opacity-60"></div>
                </div>
            );
        }
        if (typeof image === "object" && (image as JSX.Element).type) {
            return image as JSX.Element;
        }
        return null;
    };
    return(
        <article className={className} onClick={onClick} style={{cursor: onClick ? "pointer" : "default"}}>
            {renderImage()}
            <div className="p-4">
                <h1 className="mt-1 mb-2 pirataOne font-bold text-xl text-[#f0d18a] group-hover:text-[#ffe6a0] transition-colors">{title}</h1>
                <p className="mb-2 text-gray-300 text-xs leading-relaxed">{description}</p>
                {showViewProject && (
                    <div className="mt-3 pt-2 border-t border-[#f0d18a]/20">
                        <span className="text-[#f0d18a] text-xs font-sarpanch uppercase tracking-wider group-hover:tracking-widest transition-all">View Project →</span>
                    </div>
                )}
            </div>
        </article>
    )
}