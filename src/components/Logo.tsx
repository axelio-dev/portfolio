import Image from "next/image";
import { inter } from "../app/layout";

export default function Logo() {
  return (
    <div className="flex flex-row items-center">
      <Image
        className="border-2 border-white rounded-full h-15 w-15 ml-5"
        src="/profile.webp"
        alt="My profile picture"
        width={1000}
        height={1000}
      />
      <h2
        className={`text-white ml-5 text-2xl font-semibold ${inter.className}`}
      >
        AxelioDev
      </h2>
    </div>
  );
}
