import { SectionProps } from "@/dto/Section";

const Section = ({className, children}: SectionProps) => {
    return(
        <section className={className}>{children}</section>
    )
}

export default Section;