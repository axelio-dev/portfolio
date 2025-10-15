"use client";
import { cn } from "@/lib/utils";

export default function NavbarItem({
  text,
  href,
  isSidebar = false,
  closeSidebar, // fonction optionnelle pour fermer la sidebar
}: {
  text: string;
  href: string;
  isSidebar?: boolean;
  closeSidebar?: () => void;
}) {
  const handleClick = () => {
    const element = document.getElementById(href);
    const paddingTop = 100; // ton "padding" en pixels
    if (element) {
      window.scrollTo({
        top: element.offsetTop - paddingTop,
        behavior: "smooth",
      });
    }

    if (isSidebar && closeSidebar) {
      closeSidebar(); // ferme la sidebar sur mobile
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "cursor-pointer",
        isSidebar ? "block w-full text-left p-4" : "max-md:hidden",
      )}
    >
      {text}
    </button>
  );
}
