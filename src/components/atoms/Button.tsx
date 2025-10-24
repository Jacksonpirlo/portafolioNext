import { ButtonProps } from "@/dto/button"
export const Button = ({text, onClick, className}: ButtonProps) => {
    return(
        <>
        <button className={className} onClick={onClick}>{text}</button>
        </>
    )
}