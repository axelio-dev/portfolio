"use client";

import { useState } from "react";
import { motion, Variants } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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

type Status = "idle" | "loading" | "success" | "error";

const inputClass =
  "w-full bg-white/[0.03] border border-slate-700 rounded-xl px-4 py-3 text-slate-200 placeholder-slate-500 text-sm outline-none focus:border-blue-500/60 focus:bg-blue-500/5 transition-all duration-200";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.subject || !form.message) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="relative min-h-screen w-full flex flex-col items-center overflow-x-hidden bg-[#020617]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,#2563eb25,transparent_70%)]" />

      <Navbar />

      <section className="relative w-full pt-32 pb-16 flex flex-col items-center text-center px-6">
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
            Contact
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-3 text-slate-400 text-base max-w-xl mx-auto leading-relaxed"
          >
            A project, an internship offer, or just a question? Drop me a
            message.
          </motion.p>
        </motion.div>
      </section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        variants={stagger}
        className="relative w-full max-w-2xl mx-auto px-6 pb-24 mt-5"
      >
        <motion.div variants={fadeUp}>
          {status === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center text-center py-8 gap-4"
            >
              <CheckCircle className="w-12 h-12 text-blue-400" />
              <h2 className="text-xl font-extrabold text-white">
                Message sent!
              </h2>
              <p className="text-slate-400 text-sm">
                I'll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 px-6 py-2.5 rounded-xl border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 hover:border-blue-500/60 transition-all duration-200 text-sm"
              >
                Send another message
              </button>
            </motion.div>
          ) : (
            <div className="flex flex-col gap-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <motion.div variants={fadeUp} className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-slate-400">
                    Name
                  </label>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className={inputClass}
                  />
                </motion.div>
                <motion.div variants={fadeUp} className="flex flex-col gap-2">
                  <label className="text-xs font-medium text-slate-400">
                    Email
                  </label>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className={inputClass}
                  />
                </motion.div>
              </div>

              <motion.div variants={fadeUp} className="flex flex-col gap-2">
                <label className="text-xs font-medium text-slate-400">
                  Subject
                </label>
                <input
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="Internship offer"
                  className={inputClass}
                />
              </motion.div>

              <motion.div variants={fadeUp} className="flex flex-col gap-2">
                <label className="text-xs font-medium text-slate-400">
                  Message
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me more..."
                  rows={6}
                  className={`${inputClass} resize-none`}
                />
              </motion.div>

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 text-sm bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  Something went wrong. Please try again.
                </motion.div>
              )}

              <motion.div variants={fadeUp}>
                <motion.button
                  onClick={handleSubmit}
                  disabled={status === "loading"}
                  whileHover={
                    status !== "loading"
                      ? {
                          scale: 1.02,
                          boxShadow: "0 0 22px rgba(37,99,235,0.28)",
                        }
                      : {}
                  }
                  whileTap={status !== "loading" ? { scale: 0.97 } : {}}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="w-full px-6 py-3 rounded-xl border border-blue-500/30 text-blue-300 hover:bg-blue-500/10 hover:border-blue-500/60 transition-colors duration-200 flex items-center justify-center gap-2 text-sm font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <span>Send message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </motion.button>
              </motion.div>
            </div>
          )}
        </motion.div>
      </motion.section>

      <Footer />
    </main>
  );
}