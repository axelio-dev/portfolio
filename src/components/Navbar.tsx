"use client";
import { motion } from "framer-motion";
import NavbarItem from "./NavbarItem";

const Navbar = () => {
  const navLinks = [
    { text: "Home", href: "/" },
    { text: "Gallery", href: "/gallery" },
    { text: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full flex justify-center pt-4 z-50 pointer-events-none"
    >
      <div className="flex items-center gap-4 px-4 py-3 md:gap-8 md:px-8 md:py-4 bg-[#111827]/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-2xl pointer-events-auto max-w-[95%] sm:max-w-none">
        {navLinks.map((link) => (
          <NavbarItem key={link.text} text={link.text} href={link.href} />
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
