export default function NavbarItem({
  text,
  href,
}: {
  text: string;
  href: string;
}) {
  return (
    <a href={href} className="cursor-pointer">
      {text}
    </a>
  );
}
