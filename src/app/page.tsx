import Image from "next/image";
import Navbar from "../components/Navbar";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="">
      {/* Navbar */}
      <Navbar />

      {/* Introduction about myself */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 2xl:gap-8 items-center px-6 md:px-0"
        id="home"
      >
        <div className="text-white mt-[150px] md:ml-[75px] 2xl:mt-[0px] 2xl:ml-[110px]">
          <h1 className="text-5xl md:text-6xl font-bold xl:text-7xl">
            I'm AxelioDev
          </h1>
          <h2 className="text-2xl md:text-3xl 2xl:text-4xl mb-[15px] xl:mb-[20px]">
            A fullstack developer in training
          </h2>
          <h3 className="text-xl md:text-2xl 2xl:text-3xl">
            I create websites
          </h3>
        </div>

        <div className="mt-[50px] md:mt-[150px] 2xl:m-[300px] mx-auto md:ml-auto 2xl:md-auto md:mr-[150px] size-65 2xl:size-100">
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
          className={`text-white text-center text-2xl font-bold mt-[150px] mb-[20px] 2xl:text-3xl 2xl:mt[100px]`}
        >
          My skills
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-3 md:gap-6 max-w-[900px] mx-auto">
          <Skills image="/html.png" title="HTML" />
          <Skills image="/css.png" title="CSS" />
          <Skills image="/javascript.png" title="Javascript" />
          <Skills image="/typescript.png" title="Typescript" />
          <Skills image="/tailwind.png" title="TailwindCSS" />
          <Skills image="/mongodb.png" title="MongoDB" />
          <Skills image="/nextjs.png" title="Next.js" />
          <Skills image="/git.png" title="Git" />
        </div>
      </div>

      {/* My projects */}
      <div className="m-auto" id="projects">
        <h1
          className={`text-white text-center text-2xl font-bold mt-[150px] mb-[20px]`}
        >
          My projects
        </h1>
        <div className="mb-[5px] flex justify-center">
          <div className="grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-[920px] mx-auto">
            <Projects
              description="This is a portfolio that presents me (skills, projects, etc.). You are currently on it 😊"
              title="𝙋𝙤𝙧𝙩𝙤𝙛𝙤𝙡𝙞𝙤"
              button="Visit"
              link="https://axelio-dev.vercel.app"
            />
            <Projects
              description="Other projects coming soon 👀..."
              title="𝘾𝙤𝙢𝙢𝙞𝙣𝙜 𝙨𝙤𝙤𝙣..."
            />
            <Projects
              description="Other projects coming soon 👀..."
              title="𝘾𝙤𝙢𝙢𝙞𝙣𝙜 𝙨𝙤𝙤𝙣..."
            />
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="m-auto py-10 mt-[100px] mb-[20px]" id="statistics">
        <h1 className={`text-white text-center text-2xl font-bold mb-[75px]`}>
          Statistics
        </h1>
        <Stats />
      </div>

      {/* Contact */}
      <div className="m-auto" id="contact">
        <h1 className="text-white text-center text-2xl font-bold mt-[150px] mb-[20px]">
          Contact me
        </h1>

        <div className="flex flex-col items-center gap-5 mb-[20px]">
          <Contact
            title="axelio.dev@gmail.com"
            description="Contact me by email"
            icon={<Mail className="w-6 h-6 text-blue-400" />}
          />

          <Contact
            title="axelio.dev (1246396053935095819)"
            description="Contact me on Discord"
            icon={
              <Image src="/discord.png" alt="Discord" width={24} height={24} />
            }
          />
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
