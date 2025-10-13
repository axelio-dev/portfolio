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
        className={`fixed top-0 left-0 h-full w-64 bg-black/90 text-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 gap-6">
          <NavbarItem href="#home" text="Home" />
          <NavbarItem href="#skills" text="Skills" />
          <NavbarItem href="#projects" text="Projects" />
          <NavbarItem href="#statistics" text="Statistics" />
          <NavbarItem href="#contact" text="Contact me" />
        </div>
      </aside>
    </>
  );
}
