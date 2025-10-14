"use client";

import NavbarItem from "./NavbarItem";

interface SidenavProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidenav({ isOpen, setIsOpen }: SidenavProps) {
  return (
    <>
      {/* Sidebar mobile */}
      <aside
        className={`fixed top-0 left-0 h-full bg-black/60 backdrop-blur-[10px] text-white z-50 transform transition-transform duration-300 ease-in-out w-screen ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6 mt-[150px] items-center ">
          <NavbarItem href="#home" text="Home" isSidebar />
          <NavbarItem href="#skills" text="Skills" isSidebar />
          <NavbarItem href="#projects" text="Projects" isSidebar />
          <NavbarItem href="#statistics" text="Statistics" isSidebar />
          <NavbarItem href="#contact" text="Contact me" isSidebar />
        </div>
      </aside>
    </>
  );
}
