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
  return (
    <a
      href={href}
      className={cn("cursor-pointer", isSidebar ? "" : "max-md:hidden")}
    >
      {text}
    </a>
  );
}
