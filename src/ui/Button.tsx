import Link from "next/link";
import { Inter } from "next/font/google";
import { ExternalLink } from "lucide-react";

export const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["700"],
});

export default function Button({
  text,
  link,
}: {
  text: string;
  link?: string;
}) {
  return (
    <div className="mt-4 items-center justify-center text-center">
      {link ? (
        <Link
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-700"
        >
          {text}
          <ExternalLink size={16} />
        </Link>
      ) : (
        <button
          type="button"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-blue-700"
        >
          {text}
        </button>
      )}
    </div>
  );
}
