"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageHover from "@/assets/def_def.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const menuItems = ["Home", "Projects", "Skills", "Languages", "Contact"];

  const handleLinkClick = () => {
    setMenuOpen(false);
    setShowNavbar(false);
  };

  return (
    <>
      <nav className="bg-[#0f0f0f] shadow-md w-full z-10 top-0 left-0 block lg:hidden">
        <div className=" w-screen mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center pl-6 pr-6 p-4">
            <Link href="/" className="text-2xl font-semibold text-white">
              Menu
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-white border border-red-700 p-2 rounded-md hover:text-indigo-400"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="bg-[#0f0f0f] text-white shadow-md">
            {menuItems.map((item) => (
              <Link
                key={item}
                href={`/dashboard/${item.toLowerCase()}`}
                className="block px-4 py-2 hover:bg-gray-800"
                onClick={handleLinkClick} // Cierra menú al hacer click
              >
                {item}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {showNavbar && (
        <nav className="hidden lg:block shadow-md relative">
          <h1 className="text-[40px] mt-7 ml-7 pirataOne">Portfolio</h1>
          <div className="flex flex-col text-[25px] justify-center items-center mt-10 gap-6">
            {menuItems.map((item) => (
              <div key={item} className="flex items-center gap-2 group">
                <Image
                  src={ImageHover}
                  alt={`${item} hover`}
                  width={35}
                  height={35}
                  className="rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-50"
                />

                <Link
                  href={`/dashboard/${item.toLowerCase()}`}
                  className="text-white hover:text-gray-300 duration-50 font-sarpanch"
                  onClick={handleLinkClick}
                >
                  {item}
                </Link>
              </div>
            ))}
          </div>
        </nav>
      )}
    </>
  );
};

export default Navbar;
