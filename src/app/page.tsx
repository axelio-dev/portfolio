import Navbar from "../components/Navbar";
import Image from "next/image";
import { inter } from "./layout";
import Card from "@/components/Card";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />

      {/* Introduction about myself */}
      <div className="grid grid-cols-2 gap-6 items-center" id="home">
        <div className="text-white ml-[75px] mt-[140px]">
          <h1 className={`${inter.className} text-6xl font-bold`}>
            I'm AxelioDev
          </h1>
          <h2 className="text-3xl mb-[15px]">
            A fullstack developer in training
          </h2>
          <h3 className="text-2xl">I create websites</h3>
        </div>
        <div className="size-75 mt-[150px] ml-auto mr-[150px]">
          <Image
            className="rounded-[25px] transition-transform duration-500 ease-in-out hover:scale-105"
            src="/profile.webp"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* My skills */}
      <div className="m-auto" id="skills">
        <h1
          className={`${inter.className} text-white text-center text-2xl font-bold mt-[150px] mb-[20px]`}
        >
          My skills
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-8 ml-[155px] mr-[155px]">
          <Card image="/html.png" title="HTML" />
          <Card image="/css.png" title="CSS" />
          <Card image="/javascript.png" title="Javascript" />
          <Card image="/typescript.png" title="Typescript" />
          <Card image="/tailwind.png" title="TailwindCSS" />
          <Card image="/mongodb.png" title="MongoDB" />
          <Card image="/nextjs.png" title="Next.js" />
          <Card image="/git.png" title="Git" />
        </div>
      </div>

      {/* My projects */}
      <div className="m-auto" id="projects">
        <h1
          className={`${inter.className} text-white text-center text-2xl font-bold mt-[150px] mb-[20px]`}
        >
          My projects
        </h1>
        <div className="mb-[5px] grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 items-center gap-8 ml-[155px] mr-[155px]">
          <Card
            description="This is a portfolio that presents me (skills, projects, etc.). You are currently on it 😊"
            title="𝗣𝗼𝗿𝘁𝗳𝗼𝗹𝗶𝗼"
            button="Visit"
            link="https://axelio-dev.vercel.app"
          />
          <Card description="Other projects coming soon 👀..." title="" />
          <Card description="Other projects coming soon 👀..." title="" />
        </div>
      </div>

      {/* Statistics */}
      <div className="m-auto py-10" id="statistics">
        <h1
          className={`${inter.className} text-white text-center text-2xl font-bold mt-[150px] mb-[20px]`}
        >
          Statistics
        </h1>
        <Stats />
      </div>
    </div>
  );
}
