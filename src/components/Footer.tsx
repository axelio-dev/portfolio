import Link from "next/link";

export default function Footer() {
  return (
    <footer className="text-center text-sm text-gray-400 py-6 border-t border-white/20 mt-20">
      <div className="flex flex-wrap justify-center gap-6 text-gray-300 mb-2">
        <Link
          href="https://discord.com/users/1246396053935095819"
          className="hover:text-blue-400 transition-colors"
        >
          Discord
        </Link>
        <Link
          href="https://github.com/axelio-dev"
          className="hover:text-blue-400 transition-colors"
        >
          GitHub
        </Link>
        <Link
          href="mailto:axelio-dev@gmail.com"
          className="hover:text-blue-400 transition-colors"
        >
          Contact
        </Link>
      </div>
      <p className="text-gray-500">
        © {new Date().getFullYear()} AxelioDev. <br />
        ❤️ Made with love and passion. <br />
        v.1.0.2
      </p>
    </footer>
  );
}
