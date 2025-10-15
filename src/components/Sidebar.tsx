"use client";

import NavbarItem from "./NavbarItem";

interface SidenavProps {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}

export default function Sidenav({ isOpen, setIsOpen }: SidenavProps) {
  return (
    <aside
      className={`fixed top-0 left-0 h-full bg-black/60 backdrop-blur-[10px] text-white z-50 transform transition-transform duration-300 ease-in-out w-screen ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex flex-col justify-center items-center h-full p-6 gap-2">
        <div className="flex flex-col justify-center items-center h-screen p-6 gap-2">
          <NavbarItem
            href="home"
            text="Home"
            isSidebar
            closeSidebar={() => setIsOpen(false)}
          />
          <NavbarItem
            href="skills"
            text="Skills"
            isSidebar
            closeSidebar={() => setIsOpen(false)}
          />
          <NavbarItem
            href="projects"
            text="Projects"
            isSidebar
            closeSidebar={() => setIsOpen(false)}
          />
          <NavbarItem
            href="statistics"
            text="Statistics"
            isSidebar
            closeSidebar={() => setIsOpen(false)}
          />
          <NavbarItem
            href="contact"
            text="Contact me"
            isSidebar
            closeSidebar={() => setIsOpen(false)}
          />
        </div>
      </div>
    </aside>
  );
}
