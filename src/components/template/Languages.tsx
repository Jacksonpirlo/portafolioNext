"use client"
import { languages } from "@/helpers/utils";
import Image, { StaticImageData } from "next/image";
import { Card } from "../molecules/Card";
import { JSX } from "react";

import { usePathname, useRouter } from "next/navigation";
import { Button } from "../atoms/Button";

const Languages = () => {
    const router = useRouter();
    const pathname = usePathname();
    return(
        <>
        <section>
            <article className="flex flex-col justify-center items-center lg:mt-30 m-7 gap-6">
                <Card image={<Image src={languages.english} alt="English" width={400} />} title="English" description="Level: B1" className="text-center" />
                <Card image={<Image src={languages.chinese} alt="Chinese" width={400} />} title="Mandarin Chinese" description="Level: HSK2" className="text-center" />
            </article>
        </section>

        {pathname == "/dashboard/home" || pathname == "/dashboard/projects" || pathname == "/dashboard/skills" || pathname == "/dashboard/languages" || pathname == "/dashboard/contact" ? (
        <Button onClick={() => {router.back()}} className="cursor-pointer font-sarpanch text-[24px] mb-7" text="Back" />
        ) : ""}
        </>
    )
}

export default Languages;