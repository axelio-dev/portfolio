"use client";
import { cn } from "@/lib/utils";

export default function NavbarItem({
  text,
  href,
  isSidebar = false,
}: {
  text: string;
  href: string;
  isSidebar?: boolean;
}) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      onClick={() => scrollToSection(href)}
      className={cn("cursor-pointer", isSidebar ? "" : "max-md:hidden")}
    >
      {text}
    </button>
  );
}
