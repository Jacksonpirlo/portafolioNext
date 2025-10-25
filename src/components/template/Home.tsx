"use client"
import Image from "next/image"
import MyImage from "@/assets/My-img8bit-com-Effect.gif"
import Navbar from "../organism/Nav";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Button } from "../atoms/Button";

const HomePage = () => {
    const router = useRouter();
    const pathname = usePathname()
    console.log(pathname)
    return(
        <>
        <section className="p-6 text-white">
        <h1 className="font-bold text-4xl pirataOne">Portafolio</h1>
            <article className="flex flex-col justify-center items-center m-3 mb-8">
                <Image src={MyImage} alt="Photo" width={200} height={266} />
                <h1 className="font-bold text-3xl mt-3 pirataOne">Sobre Mí</h1>
                <p>Desarrollador Wed FullStak JR</p>
            </article>

            <article className="flex justify-center items-center max-w-730 text-center pl-[10] pr-[10]">
                <p className="max-w-7xl pl-2 pr-2">
                    Ya ha pasado más de un año desde que descubrí mi pasión por el desarrollo web. Desde entonces, cada día representa una nueva oportunidad para aprender, crecer profesionalmente y avanzar en mi desarrollo personal y económico. 
                    Te invito a explorar mi portafolio; espero que lo disfrutes tanto como yo disfruto construirlo.
                </p>
            </article>
        </section>
            {pathname == "/dashboard/home" || pathname == "/dashboard/projects" || pathname == "/dashboard/skills" || pathname == "/dashboard/languages" || pathname == "/dashboard/contact" ? (
                            <Button onClick={() => {router.back()}} className="cursor-pointer font-sarpanch text-[24px] mb-4" text="Back" />
                        ) : ""}

        </>
    )
}

export default HomePage;