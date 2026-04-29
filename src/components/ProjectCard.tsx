"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imgUrl: string;
  link: string;
  techIcons: string[];
}

const ProjectCard = ({
  title,
  description,
  imgUrl,
  link,
  techIcons,
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(37,99,235,0.15)" }}
      transition={{ type: "spring", stiffness: 260, damping: 22 }}
      className="group flex flex-col bg-[#0a0f1d]/50 border border-white/5 rounded-xl overflow-hidden hover:border-blue-500/50 transition-colors duration-300"
    >
      <div className="relative w-full h-40 bg-[#020617] flex items-center justify-center overflow-hidden">
        <Image
          src={imgUrl}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 flex flex-col gap-2">
        <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 text-xs leading-snug line-clamp-4">
          {description}
        </p>
        <div className="flex items-center justify-between mt-2">
          <div className="flex -space-x-2">
            {techIcons.map((icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, zIndex: 50 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
                className="w-7 h-7 rounded-full border border-white/10 bg-[#111827] flex items-center justify-center"
                style={{ zIndex: techIcons.length - i }}
              >
                <img
                  src={icon}
                  alt="tech"
                  className="w-3.5 h-3.5 object-contain"
                />
              </motion.div>
            ))}
          </div>
          <Link
            href={link}
            target="_blank"
            className="flex items-center gap-1 text-blue-400 font-medium hover:underline text-xs"
          >
            View
            <ArrowUpRight className="w-3 h-3" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
