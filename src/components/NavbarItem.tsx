"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface NavbarItemProps {
  text: string;
  href: string;
}

export default function NavbarItem({ text, href }: NavbarItemProps) {
  return (
    <Link
      href={href}
      className="relative inline-block text-white font-medium group"
    >
      <motion.span
        whileHover={{ color: "rgba(255,255,255,0.75)" }}
        transition={{ duration: 0.2 }}
        className="relative z-10"
      >
        {text}
      </motion.span>
      <motion.span
        className="absolute left-0 -bottom-0.5 h-px bg-blue-400 origin-left"
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{ width: "100%" }}
      />
    </Link>
  );
}
