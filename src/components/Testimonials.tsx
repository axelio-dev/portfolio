"use client";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

interface Testimonial {
  text: string;
  name: string;
  role: string;
  img: string;
}

const reviews: Testimonial[] = [
  {
    name: "David S.",
    role: "Director of ShadowHeberg",
    img: "/collaborators/shadowheberg.webp",
    text: "Collaborating with Axel was a very enriching experience. He quickly distinguished himself through his professionalism, versatility, reliability, and unwavering commitment. His fluid and proactive communication was also a real asset, particularly in identifying and attracting new clients. Axel played a key role in the smooth running of our operations. He is a trustworthy colleague whom I wholeheartedly recommend for any project requiring rigor, autonomy, and teamwork.",
  },
];

const stagger: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Testimonials() {
  const shouldScroll = reviews.length >= 3;
  const displayReviews = shouldScroll ? [...reviews, ...reviews] : reviews;

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={stagger}
      className="relative w-full py-20 overflow-hidden"
      id="testimonials"
    >
      <motion.div variants={fadeUp} className="mb-10 text-center px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
          What my <span className="text-blue-400">collaborators</span> say
        </h2>
      </motion.div>

      <motion.div
        variants={fadeUp}
        className={`relative flex w-full ${
          shouldScroll
            ? "overflow-hidden mask-[linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]"
            : "justify-center px-6"
        }`}
      >
        <div
          className={`flex gap-6 py-4 ${
            shouldScroll
              ? "w-max animate-scroll pause-on-hover"
              : "justify-center flex-wrap"
          }`}
        >
          {displayReviews.map((review, idx) => (
            <motion.div
              key={idx}
              whileHover={{
                y: -4,
                boxShadow: "0 8px 32px rgba(37,99,235,0.12)",
              }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="w-87.5 md:w-125 max-w-full relative rounded-2xl border border-slate-800 hover:border-blue-500/40 p-8 bg-[#030712]/50 backdrop-blur-sm shrink-0 transition-colors duration-300"
            >
              <blockquote>
                <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-8 line-clamp-9">
                  {review.text}
                </p>
                <div className="flex flex-row items-center gap-4">
                  <div className="relative h-12 w-12 rounded-full overflow-hidden border border-blue-500/30 shrink-0">
                    <Image
                      src={review.img}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-base md:text-lg">
                      {review.name}
                    </span>
                    <span className="text-slate-500 text-xs md:text-sm italic">
                      {review.role}
                    </span>
                  </div>
                </div>
              </blockquote>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
}
