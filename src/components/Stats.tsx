"use client";
import { useEffect, useRef, useState } from "react";
import { Clock, Code, Cpu, Folder } from "lucide-react";
import { motion, useInView, Variants } from "framer-motion";

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function AnimatedNumber({
  value,
  loading,
  suffix,
}: {
  value: number | string;
  loading: boolean;
  suffix: string;
}) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    if (loading || typeof value !== "number" || !inView) return;

    const target = value;
    const duration = Math.min(1800, 600 + target * 6);
    const startTime = performance.now();

    function easeOutQuart(t: number) {
      return 1 - Math.pow(1 - t, 4);
    }

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      setDisplay(Math.round(eased * target));
      if (progress < 1) {
        rafRef.current = requestAnimationFrame(tick);
      }
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [loading, value, inView]);

  return (
    <span ref={ref} className="text-3xl font-bold text-white">
      {loading || typeof value !== "number" ? "..." : `${display}${suffix}`}
    </span>
  );
}

export default function Stats() {
  const [waka, setWaka] = useState<any>(null);
  const [github, setGithub] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [wakaRes, githubRes] = await Promise.all([
          fetch("/api/wakatime"),
          fetch("/api/github"),
        ]);
        const wakaData = await wakaRes.json();
        const githubData = await githubRes.json();
        setWaka(wakaData);
        setGithub(githubData);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const stats = [
    {
      icon: Code,
      value: waka?.totalHours ?? "...",
      suffix: "h",
      label: "Hours of Code",
    },
    {
      icon: Folder,
      value: github?.count ?? "...",
      suffix: "+",
      label: "Projects Completed",
    },
    { icon: Clock, value: 3, suffix: "+", label: "Years of Experience" },
    {
      icon: Cpu,
      value: github?.stars ?? "...",
      suffix: "",
      label: "GitHub Stars",
    },
  ];

  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      className="grid grid-cols-2 gap-6"
    >
      {stats.map(({ icon: Icon, value, suffix, label }) => (
        <motion.div
          key={label}
          variants={fadeUp}
          whileHover={{ y: -4, boxShadow: "0 8px 32px rgba(37,99,235,0.15)" }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-500/40 transition-colors duration-300"
        >
          <Icon className="w-6 h-6 text-blue-400 mb-3" />
          <h2 className="text-3xl font-bold text-white flex items-baseline gap-0.5">
            <AnimatedNumber value={value} loading={loading} suffix={suffix} />
          </h2>
          <p className="text-slate-400 mt-1 text-sm">{label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
