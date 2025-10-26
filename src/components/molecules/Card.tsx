import { CardProps } from "@/dto/card"
import Image, { StaticImageData } from "next/image"
import { JSX } from "react";

export const Card = ({image, title, description, className, onClick}: CardProps) => {
    const renderImage = () => {
        if (!image) return null;
        if (typeof image === "string" || (image as StaticImageData).src) {
            return <Image src={image as string | StaticImageData} alt="" width={300} height={300} />;
        }
        if (typeof image === "object" && (image as JSX.Element).type) {
            return image as JSX.Element;
        }
        return null;
    };
    return(
        <article className={className} onClick={onClick} style={{cursor: "pointer"}}>
            {renderImage()}
            <h1 className="mt-4 mb-4 pirataOne font-bold text-3xl">{title}</h1>
            <p className="mb-3">{description}</p>
        </article>
    )
}