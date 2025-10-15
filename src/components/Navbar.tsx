"use client";

import Logo from "@/components/Logo";
import NavbarItem from "./NavbarItem";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Sidebar mobile */}
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* Navbar desktop */}
      <nav className="w-full top-0 left-0 right-0 backdrop-blur-[15px] z-50 text-white fixed border-b border-white py-2 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Items desktop */}
          <div className="hidden md:flex items-center gap-8 text-xl 2xl:text-2xl 2xl:gap-15 font-light">
            <NavbarItem href="home" text="Home" />
            <NavbarItem href="skills" text="Skills" />
            <NavbarItem href="projects" text="Projects" />
            <NavbarItem href="statistics" text="Statistics" />
            <NavbarItem href="contact" text="Contact me" />
          </div>

          {/* Menu burger mobile */}
          <button
            type="button"
            className="ml-4 cursor-pointer md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>
    </>
  );
}
