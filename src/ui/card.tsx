import Image from "next/image";
import { Inter } from "next/font/google";

export const inter = Inter({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  weight: ["700"],
});

export default function Card({
  title,
  image,
}: {
  title: string;
  image?: string;
}) {
  return (
    <div className="h-full w-full mt-4 border border-white/20 rounded-2xl bg-white/10 backdrop-blur-md p-6 flex flex-col items-center justify-center text-center shadow-md transition-transform duration-500 ease-in-out hover:scale-105 hover:shadow-blue-500/40 hover:border-blue-500">
      <div className="mx-auto flex flex-col gap-3">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={96}
            height={96}
            className="object-contain"
          />
        ) : (
          ""
        )}
        <h3 className="text-white text-xl text-center mt-[10px]">{title}</h3>
      </div>
    </div>
  );
}
