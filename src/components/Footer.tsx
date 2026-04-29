"use client";
import { Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const socialLinks = [
  {
    href: "https://github.com/axelio-dev",
    icon: "/icons/github.svg",
    alt: "GitHub",
  },
  {
    href: "https://wakatime.com/@axelio_dev",
    icon: "/icons/wakatime.svg",
    alt: "Wakatime",
  },
  {
    href: "https://discord.com/users/1246396053935095819",
    icon: "/icons/discord.svg",
    alt: "Discord",
  },
];

const iconStyle =
  "w-10 h-10 flex items-center justify-center rounded-xl border border-slate-700 hover:border-blue-500/60 hover:bg-blue-500/10 transition-colors duration-300";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      variants={stagger}
      className="relative w-full border-t border-slate-800"
    >
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <motion.p
          variants={fadeUp}
          className="text-sm text-slate-400 text-center md:text-left"
        >
          Copyright © 2025 - {new Date().getFullYear()} Axel
        </motion.p>

        <motion.div variants={stagger} className="flex items-center gap-3">
          {socialLinks.map(({ href, icon, alt }) => (
            <motion.div key={alt} variants={fadeUp}>
              <Link href={href} target="_blank">
                <motion.div
                  whileHover={{
                    y: -3,
                    boxShadow: "0 0 14px rgba(37,99,235,0.25)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className={iconStyle}
                >
                  <Image
                    src={icon}
                    alt={alt}
                    width={18}
                    height={18}
                    style={{ width: 18, height: 18 }}
                    className="opacity-80"
                  />
                </motion.div>
              </Link>
            </motion.div>
          ))}

          <motion.div variants={fadeUp}>
            <Link href="mailto:axelio.dev@gmail.com">
              <motion.div
                whileHover={{
                  y: -3,
                  boxShadow: "0 0 14px rgba(37,99,235,0.25)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className={iconStyle}
              >
                <Mail className="w-4 h-4 opacity-80 text-white" />
              </motion.div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
