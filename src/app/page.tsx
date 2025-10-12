import Navbar from "../components/Navbar";
import Image from "next/image";
import { inter } from "./layout";
import Card from "@/components/Card";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";

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
        <div className="mb-[5px] flex justify-center">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-[920px] mx-auto">
            <Card
              description="This is a portfolio that presents me (skills, projects, etc.). You are currently on it 😊"
              title="𝙋𝙤𝙧𝙩𝙤𝙛𝙤𝙡𝙞𝙤"
              button="Visit"
              link="https://axelio-dev.vercel.app"
            />
            <Card
              description="Other projects coming soon 👀..."
              title="𝘾𝙤𝙢𝙢𝙞𝙣𝙜 𝙨𝙤𝙤𝙣..."
            />
            <Card
              description="Other projects coming soon 👀..."
              title="𝘾𝙤𝙢𝙢𝙞𝙣𝙜 𝙨𝙤𝙤𝙣..."
            />
          </div>
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

      {/* Contact */}
      <div className="m-auto">
        <h1
          className={`${inter.className} text-white text-center text-2xl font-bold mt-[150px] mb-[20px]`}
        >
          Contact me
        </h1>
        <div className="mb-[5px] flex justify-center">
          <div className="grid md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1 gap-8 w-[750px] mx-auto">
            <Card
              title="axelio-dev@gmail.com"
              description="Contact me by email"
              icon={<Mail className="w-6 h-6 text-blue-400" />}
            />

            <Card
              title="axelio.dev (1246396053935095819)"
              description="Contact me on Discord"
              icon={
                <Image
                  src="/discord.png"
                  alt="Discord"
                  width={24}
                  height={24}
                />
              }
            />
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
