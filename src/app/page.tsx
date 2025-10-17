"use client";

import Image from "next/image";
import Navbar from "../components/Navbar";
import Contact from "@/components/Contact";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import { Mail } from "lucide-react";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import { motion } from "motion/react";

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
        <motion.div className="text-white mt-[150px] md:ml-[75px] 2xl:mt-[0px] 2xl:ml-[110px]">
          <motion.h1
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 1 }}
            className="text-5xl md:text-6xl font-bold xl:text-7xl"
            initial={{ opacity: 0 }}
          >
            I'm AxelioDev
          </motion.h1>
          <motion.h2
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-2xl md:text-3xl 2xl:text-4xl mb-[15px] xl:mb-[20px]"
            initial={{ opacity: 0 }}
          >
            A fullstack developer in training
          </motion.h2>
          <motion.h3
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.75, duration: 1 }}
            className="text-xl md:text-2xl 2xl:text-3xl"
            initial={{ opacity: 0 }}
          >
            I create websites
          </motion.h3>
        </motion.div>

        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1, duration: 1 }}
          initial={{ opacity: 0 }}
          className="mt-[50px] md:mt-[150px] 2xl:m-[300px] mx-auto md:ml-auto 2xl:md-auto md:mr-[150px] size-65 2xl:size-100"
        >
          <Image
            alt="My profile picture"
            className="rounded-[25px] transition-transform duration-500 ease-in-out hover:scale-105"
            src="/profile.webp"
            width={500}
            height={500}
          />
        </motion.div>
      </div>

      {/* My skills */}
      <div className="m-auto" id="skills">
        <motion.h1
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          initial={{ opacity: 0 }}
          className={`text-white text-center text-2xl font-bold mt-[150px] mb-[20px] 2xl:text-3xl 2xl:mt[100px]`}
        >
          My skills
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 1 }}
          initial={{ opacity: 0 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center gap-3 md:gap-6 max-w-[900px] mx-auto"
        >
          <Skills image="/html.png" title="HTML" />
          <Skills image="/css.png" title="CSS" />
          <Skills image="/javascript.png" title="Javascript" />
          <Skills image="/typescript.png" title="Typescript" />
          <Skills image="/tailwind.png" title="TailwindCSS" />
          <Skills image="/mongodb.png" title="MongoDB" />
          <Skills image="/nextjs.png" title="Next.js" />
          <Skills image="/git.png" title="Git" />
        </motion.div>
      </div>

      {/* My projects */}
      <div className="m-auto" id="projects">
        <motion.h1
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          initial={{ opacity: 0 }}
          className={`text-white text-center text-2xl font-bold mt-[150px] mb-[20px]`}
        >
          My projects
        </motion.h1>
        <div className="mb-[5px] flex justify-center">
          <motion.div
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 1 }}
            initial={{ opacity: 0 }}
            className="grid md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-8 max-w-[920px] mx-auto"
          >
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
          </motion.div>
        </div>
      </div>

      {/* Statistics */}
      <div className="m-auto py-10 mt-[100px] mb-[20px]" id="statistics">
        <motion.h1
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          initial={{ opacity: 0 }}
          className={`text-white text-center text-2xl font-bold mb-[75px]`}
        >
          Statistics
        </motion.h1>
        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 1 }}
          initial={{ opacity: 0 }}
        >
          <Stats />
        </motion.div>
      </div>

      {/* Contact */}
      <div className="m-auto" id="contact">
        <motion.h1
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 1 }}
          initial={{ opacity: 0 }}
          className="text-white text-center text-2xl font-bold mt-[150px] mb-[20px]"
        >
          Contact me
        </motion.h1>

        <motion.div
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 1 }}
          initial={{ opacity: 0 }}
          className="flex flex-col items-center gap-5 mb-[20px]"
        >
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
        </motion.div>
      </div>

      {/* Footer */}
      <motion.div
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 1 }}
        initial={{ opacity: 0 }}
      >
        <Footer />
      </motion.div>
    </div>
  );
}
