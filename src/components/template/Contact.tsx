"use client"
import Image from "next/image"
import Section from "../atoms/Section"
import CharacterImg from "@/assets/bigsmoke-removebg-preview.png"
import CharacterImgbot from "@/assets/bot-removebg-preview.png"
import styles from "@/app/Contact.module.css"
import { Button } from "../atoms/Button"
import { useRouter } from "next/navigation"
import { usePathname } from "next/navigation"

const Contact = () => {
  const router = useRouter();
  const pathname = usePathname()
  return (
    <Section className="relative flex justify-center items-center min-h-screen bg-black overflow-hidden">
      <div className="relative flex flex-col justify-center items-center">
        {/* Imagen del personaje */}
        <div className={styles.image1}>
          <Image
          src={CharacterImgbot}
          alt="Big Smoke"
          className={styles.character}
        />
        </div>

        <div className={styles.image2}>
          <Image
          src={CharacterImg}
          alt="Big Smoke"
          className={styles.character}
        />
        </div>

        <form
          className="relative z-20 p-6 sm:p-8 rounded-xl bg-[#1a1a1a]/80 border border-[#555] shadow-2xl w-[90%] sm:w-full max-w-md text-white font-[Pirata_One]"
        >
          <h2 className="text-3xl sm:text-4xl mb-6 text-center text-[#f0d18a] drop-shadow-lg">
            Contact
          </h2>

          <label className="text-[#f0d18a] mb-1">Full Name</label>
          <input
            type="text"
            className="mb-4 p-2 rounded-md bg-[#333] text-white placeholder-gray-400 focus:outline-none w-full"
            placeholder="Enter your name"
          />

          <label className="text-[#f0d18a] mb-1">Email</label>
          <input
            type="email"
            className="mb-4 p-2 rounded-md bg-[#333] text-white placeholder-gray-400 focus:outline-none w-full"
            placeholder="Enter your email"
          />

          <label className="text-[#f0d18a] mb-1">Message</label>
          <textarea
            className="p-2 rounded-md bg-[#333] text-white placeholder-gray-400 focus:outline-none w-full"
            placeholder="Write your message"
            rows={4}
          ></textarea>

          <button
            type="submit"
            className="mt-6 bg-[#f0d18a] text-black font-bold py-2 rounded-md hover:bg-[#ffe6a0] transition"
          >
            Submit
          </button>
        </form>
        {pathname == "/dashboard/home" || pathname == "/dashboard/projects" || pathname == "/dashboard/skills" || pathname == "/dashboard/languages" || pathname == "/dashboard/contact" ? (
                                    <Button onClick={() => {router.push("/")}} className="cursor-pointer font-sarpanch text-[24px] mb-4 mt-8" text="Back" />
                                ) : ""}
      </div>
    </Section>
  )
}

export default Contact
