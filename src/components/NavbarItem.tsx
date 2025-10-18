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
    const paddingTop = 100; // Padding to not hide the title under the navbar fixed with blur
    if (element) {
      window.scrollTo({
        top: element.offsetTop - paddingTop,
        behavior: "smooth",
      });
    }

    if (isSidebar && closeSidebar) {
      closeSidebar(); // Close the sidebar on mobile
    }
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "cursor-pointer relative after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full",
        isSidebar ? "block w-full text-left p-4" : "max-md:hidden",
      )}
    >
      {text}
    </button>
  );
}
