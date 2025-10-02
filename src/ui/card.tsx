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
    <div className="size-full mt-[50px] border-2 border-white/30 transition hover:border-blue-700 backdrop-blur-[15px] rounded-lg flex items-center p-4 bg-white/10">
      <div className="mx-auto flex flex-col gap-3">
        {image ? <Image src={image} alt={title} width={96} height={96} /> : ""}
        <h3 className="text-white text-xl text-center">{title}</h3>
      </div>
    </div>
  );
}
