"use client";

import Logo from "@/components/Logo";
import NavbarItem from "./NavbarItem";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import { Menu } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <nav className="w-full top-0 left-0 right-0 backdrop-blur-[15px] z-50 text-white fixed border-b border-white py-2 px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
          </div>
          <div
            className={`flex items-center gap-13 text-xl 2xl:text-2xl 2xl:gap-15 font-light mr-[20px]`}
          >
            <NavbarItem href="home" text="Home" />
            <NavbarItem href="skills" text="Skills" />
            <NavbarItem href="projects" text="Projects" />
            <NavbarItem href="statistics" text="Statistics" />
            <NavbarItem href="contact" text="Contact me" />

            <Menu
              className="ml-4 cursor-pointer z-60 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
            />
          </div>
        </div>
      </nav>
    </>
  );
}
