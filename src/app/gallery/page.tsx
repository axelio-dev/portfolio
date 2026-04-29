"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
  X,
  ZoomIn,
  Clock,
  MapPin,
  Telescope,
  Camera,
  Filter,
  Star,
  Cpu,
  Focus,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PHOTOS, MY_GEAR, MY_SETUP_IMG, GalleryPhoto } from "./data";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};
const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 },
  },
};
const cardVariant: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const CATEGORIES = [
  "All",
  "Nebula",
  "Galaxy",
  "Cluster",
  "Planet",
  "Other",
] as const;

const GEAR_ICONS = [Telescope, Star, Camera, Filter, Focus, Camera, Cpu];

function PhotoModal({
  photo,
  onClose,
}: {
  photo: GalleryPhoto;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
      className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto bg-[#030712] border border-slate-800 rounded-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="relative w-full aspect-video bg-black">
          <Image
            src={photo.imgUrl}
            alt={photo.title}
            fill
            sizes="(max-width: 1024px) 100vw, 80vw"
            className="object-contain"
            priority
          />
        </div>

        <div className="p-6 grid md:grid-cols-2 gap-6">
          <div>
            <h2 className="text-xl font-extrabold text-white">{photo.title}</h2>
            <p className="text-slate-400 text-sm mt-1">{photo.date}</p>

            {photo.astrometry && (
              <div className="mt-4">
                <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">
                  Astrometry
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {(
                    [
                      ["R.A.", photo.astrometry.ra],
                      ["Dec.", photo.astrometry.dec],
                      ["FoV", photo.astrometry.fov],
                      ["Constellation", photo.astrometry.constellation],
                    ] as [string, string][]
                  ).map(([label, val]) => (
                    <div
                      key={label}
                      className="bg-white/5 rounded-lg p-3 border border-white/5"
                    >
                      <p className="text-slate-500 text-xs">{label}</p>
                      <p className="text-white font-medium text-sm mt-0.5">
                        {val}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="space-y-5">
            <div>
              <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">
                Equipment
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-slate-300">
                  <Telescope className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  {photo.gear.telescope}
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <Star className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  {photo.gear.mount}
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <Camera className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  {photo.gear.camera}
                </li>
                {photo.gear.filters.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-slate-300">
                    <Filter className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    {f}
                  </li>
                ))}
                {photo.gear.guidingScope && (
                  <li className="flex items-start gap-2 text-slate-300">
                    <Focus className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    {photo.gear.guidingScope}
                  </li>
                )}
                {photo.gear.guidingCamera && (
                  <li className="flex items-start gap-2 text-slate-300">
                    <Camera className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                    {photo.gear.guidingCamera}
                  </li>
                )}
              </ul>
            </div>

            <div>
              <h3 className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-3">
                Conditions
              </h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2 text-slate-300">
                  <Clock className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  {photo.conditions.totalExposure} — {photo.conditions.frames}
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <MapPin className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  {photo.conditions.location} · Bortle {photo.conditions.bortle}
                </li>
                <li className="flex items-start gap-2 text-slate-300">
                  <Cpu className="w-4 h-4 text-blue-400 mt-0.5 shrink-0" />
                  {photo.conditions.software.join(" · ")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function GalleryPage() {
  const [active, setActive] = useState<GalleryPhoto | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const filtered = (
    filter === "All"
      ? PHOTOS
      : PHOTOS.filter((p) => p.category === filter.toLowerCase())
  ).sort((a, b) => a.order - b.order);

  return (
    <main className="relative min-h-screen w-full bg-[#020617] flex flex-col items-center overflow-x-hidden">
      <Navbar />

      <section className="relative w-full pt-32 pb-12 flex flex-col items-center text-center px-6">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_30%,#2563eb15,transparent_70%)]" />
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="relative z-10"
        >
          <motion.h1
            variants={fadeUp}
            className="text-4xl md:text-5xl font-extrabold bg-linear-to-r from-white via-blue-100 to-blue-400 bg-clip-text text-transparent"
          >
            Astrophotography
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-slate-400 text-base max-w-xl mx-auto leading-relaxed"
          >
            Deep sky objects captured from my backyard. All images are
            copyrighted — no reuse without permission.
          </motion.p>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
        className="relative w-full max-w-6xl mx-auto px-6 py-12"
      >
        <motion.h2
          variants={fadeUp}
          className="text-2xl font-extrabold text-white mb-8"
        >
          My <span className="text-blue-400">setup</span>
        </motion.h2>
        <motion.div
          variants={fadeUp}
          className="grid md:grid-cols-2 gap-6 items-center bg-white/[0.02] border border-white/5 rounded-2xl p-6"
        >
          <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-[#0a0f1d]">
            <Image
              src={MY_SETUP_IMG}
              alt="My astrophotography setup"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <ul className="space-y-3">
            {MY_GEAR.map(({ label, value }, i) => {
              const Icon = GEAR_ICONS[i] ?? Cpu;
              return (
                <li key={label} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-blue-400" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{label}</p>
                    <p className="text-sm text-slate-200 font-medium">
                      {value}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </motion.div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
        className="relative w-full max-w-6xl mx-auto px-6 pb-24"
      >
        <motion.h2
          variants={fadeUp}
          className="text-2xl font-extrabold text-white mb-6"
        >
          Recent <span className="text-blue-400">captures</span>
        </motion.h2>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-2 mb-8">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
                filter === cat
                  ? "border-blue-500 bg-blue-500/15 text-blue-300"
                  : "border-slate-700 text-slate-400 hover:border-blue-500/50 hover:text-slate-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {filtered.map((photo) => (
            <motion.div
              key={photo.id}
              variants={cardVariant}
              onClick={() => setActive(photo)}
              className="group relative break-inside-avoid rounded-xl overflow-hidden border border-white/5 cursor-pointer"
            >
              <div className="relative w-full aspect-[4/3] bg-[#0a0f1d]">
                <Image
                  src={photo.thumbUrl}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-black/50 backdrop-blur-sm border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ZoomIn className="w-4 h-4 text-white" />
                </motion.div>
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <p className="text-white font-bold text-sm leading-tight">
                    {photo.title}
                  </p>
                  <p className="text-slate-300 text-xs mt-0.5">{photo.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      <AnimatePresence>
        {active && (
          <PhotoModal photo={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>

      <Footer />
    </main>
  );
}
