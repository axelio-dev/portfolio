"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import { motion, Variants } from "framer-motion";
import { Send } from "lucide-react";
import Image from "next/image";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};

function GhostButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: "0 0 22px rgba(37,99,235,0.28)" }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="px-6 py-2.5 rounded-xl border border-blue-500/30 text-blue-300
                 hover:bg-blue-500/10 hover:border-blue-500/60
                 transition-colors duration-200 cursor-pointer flex items-center gap-2"
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[#020617] flex flex-col items-center overflow-x-hidden">
      <Navbar />

      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-20 pb-12 w-full">
        <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_2px,transparent_2px),linear-gradient(to_bottom,#ffffff05_2px,transparent_2px)] bg-size-[60px_60px] mask-[radial-gradient(ellipse_at_center,black,transparent_90%)]" />
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,#2563eb20,transparent_75%)]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10 flex flex-col items-center text-center px-4"
        >
          <motion.div variants={fadeUp} className="mb-6">
            <div className="w-32 h-32 rounded-full p-1 bg-linear-to-r from-blue-500 to-blue-700 shadow-[0_0_40px_rgba(37,99,235,0.4)] overflow-hidden animate-float">
              <Image
                src="/profile.webp"
                alt="Photo de profil"
                width={128}
                height={128}
                className="rounded-full object-cover w-full h-full"
                priority
              />
            </div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-6xl font-extrabold bg-linear-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent leading-tight"
          >
            Axel
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-2 text-sm md:text-base text-blue-400 font-medium tracking-wide"
          >
            Student • Next.js • TypeScript
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-4 text-base text-slate-400 max-w-xl leading-relaxed"
          >
            Code that Speaks, Experiences that Matter
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8">
            <GhostButton>
              <span>View my work</span>
              <Send className="w-4 h-4" />
            </GhostButton>
          </motion.div>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={stagger}
        className="relative w-full py-24 px-6 md:px-16"
        id="about"
      >
        <div className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
          <div className="flex flex-col">
            <motion.h2
              variants={fadeUp}
              className="text-3xl md:text-4xl font-extrabold text-white"
            >
              About <span className="text-blue-400">me</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-6 text-base text-slate-400 leading-relaxed"
            >
              Passionate about computer science, I am building my expertise in
              full-stack development, networking, and modern web technologies.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-base text-slate-400 leading-relaxed"
            >
              Currently seeking an internship, I aim to contribute to real-world
              projects while continuing to grow.
            </motion.p>
          </div>

          <motion.div variants={fadeUp}>
            <Stats />
          </motion.div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        variants={fadeUp}
        className="relative w-full py-16 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">
              Recent <span className="text-blue-400">projects</span>
            </h2>
          </div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div variants={fadeUp}>
              <ProjectCard
                title="Astrologs"
                description="Dashboard for astrophotographers allowing you to track sessions and generate statistics."
                imgUrl="/projects/astrologs.png"
                link="https://astrologs.orionhost.app"
                techIcons={[
                  "/icons/nextjs.svg",
                  "/icons/tailwindcss.svg",
                  "/icons/typescript.svg",
                  "/icons/postgresql.svg",
                  "/icons/prisma.svg",
                ]}
              />
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Testimonials />

      <div className="w-full h-px opacity-10" />

      <div className="w-full h-px opacity-10" />

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        variants={stagger}
        className="relative w-full pt-16 pb-24 px-6 md:px-16"
      >
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_50%,#2563eb10,transparent_80%)]" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.h2
            variants={fadeUp}
            className="text-3xl md:text-4xl font-extrabold text-white leading-tight"
          >
            Looking for a <span className="text-blue-400">web developer</span>?{" "}
            <br /> Let's connect.
          </motion.h2>

          <motion.div variants={fadeUp} className="mt-6 space-y-3">
            <p className="text-sm md:text-[15px] text-slate-400 leading-relaxed">
              I'm currently seeking an internship in web development.
            </p>
            <p className="text-sm md:text-[15px] text-slate-400 leading-relaxed">
              Motivated and curious, I enjoy contributing to real projects.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 flex justify-center">
            <GhostButton>
              <span>Contact me</span>
              <Send className="w-4 h-4" />
            </GhostButton>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </main>
  );
}
