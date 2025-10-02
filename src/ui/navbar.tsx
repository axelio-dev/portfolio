import { inter } from "@/app/layout";
import Logo from "./logo";
import NavbarItem from "./NavbarItem";

export default function Navbar() {
  return (
    <nav className="w-full top-0 left-0 right-0 backdrop-blur-[15px] text-white fixed border-b border-white py-2 px-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <Logo />
        </div>
        <div
          className={`flex items-center gap-13 text-xl font-light${inter.className} mr-[20px]`}
        >
          <NavbarItem href="#home" text="Home" />
          <NavbarItem href="#skills" text="Skills" />
          <NavbarItem href="#projects" text="Projects" />
          <NavbarItem href="#contact" text="Contact me" />
        </div>
      </div>
    </nav>
  );
}
