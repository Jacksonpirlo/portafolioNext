import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return(
        <>
        <footer className="flex bg-[#000000] flex-col justify-center pirataOne mb-4">
            <div className="flex justify-between items-center mb-4">
                <Link href={"https://www.instagram.com/jf_cube/"} className=""><FaInstagram className="text-2xl" /></Link>
                <Link href={"https://wa.me/+573052984481"} className=""><FaWhatsapp className="text-2xl" /></Link>
                <Link href={"https://www.linkedin.com/in/jackson-florez-b19a29286/"} className=""><FaLinkedin className="text-2xl" /></Link>
                <Link href={"https://github.com/Jacksonpirlo"} className=""><FaGithub className="text-2xl"/></Link>
            </div>
            <div><p>Inspirado en GTA SAN ANDREAS</p></div>
        </footer>
        </>
    )
}

export default Footer;