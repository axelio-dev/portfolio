import Image from "next/image";
import { Inter } from "next/font/google";
import Button from "./Button";

export const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["700"],
});

export default function Card({
  title,
  image,
  description,
  button,
  link,
  icon, // ✅ nouvelle prop pour l’icône
}: {
  title: string;
  image?: string;
  description?: string;
  button?: string;
  link?: string;
  icon?: React.ReactNode; // ✅ permet de passer une icône JSX (ex : <Discord />)
}) {
  return (
    <div className="h-full w-full mt-4 border border-white/20 rounded-2xl bg-white/10 backdrop-blur-md p-6 flex flex-col items-center justify-center text-center shadow-md transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-blue-500/40 hover:border-blue-500">
      <div className="mx-auto flex flex-col gap-3 items-center">
        {/* ✅ Affichage de l’icône s’il y en a une */}
        {icon && <div className="text-blue-400 mb-1">{icon}</div>}

        {image && (
          <Image
            src={image}
            alt={title}
            width={96}
            height={96}
            className="object-contain"
          />
        )}
        <h3 className="text-white text-xl text-center mt-[10px]">{title}</h3>
        {description && (
          <p className="text-gray-400 italic text-md text-center mt-[2px]">
            {description}
          </p>
        )}
        {button && <Button text={button} link={link} />}
      </div>
    </div>
  );
}
