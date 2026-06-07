import React from "react";
import { motion } from "framer-motion";
import { SITE } from "../../config/site";
import { ArrowUpRight, Play } from "lucide-react";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative pt-32 md:pt-40 pb-20 md:pb-28"
      data-testid="hero-section"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        {/* Availability pill */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          custom={0}
          className="flex justify-center"
        >
          <span
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-1.5 text-xs font-mono uppercase tracking-[0.2em] text-white/70"
            data-testid="hero-availability-pill"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Open for new projects · 2026
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mt-8 text-center">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={fade}
            custom={1}
            className="font-[Outfit] text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tighter text-white leading-[1.02]"
          >
            <span className="block">{SITE.heroHeadline.line1}</span>
            <span className="block">{SITE.heroHeadline.line2}</span>
            <span className="block">
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#EC4899] bg-clip-text text-transparent italic font-serif">
                AI
              </span>{" "}
              That Never Sleeps.
            </span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="show"
            variants={fade}
            custom={2}
            className="mt-8 mx-auto max-w-2xl text-base md:text-lg text-white/60 leading-relaxed"
          >
            {SITE.heroSubheading}
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={fade}
            custom={3}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <button
              onClick={() => scrollTo("work")}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white px-7 py-3.5 text-sm font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.55)] transition-all"
              data-testid="hero-view-work-btn"
            >
              View Our Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-white px-7 py-3.5 text-sm font-medium hover:bg-white/10 hover:border-white/25 transition-all"
              data-testid="hero-contact-btn"
            >
              <Play className="h-3.5 w-3.5 fill-current" />
              Let&apos;s Talk
            </button>
          </motion.div>
        </div>

        {/* Marquee-ish meta strip */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={fade}
          custom={4}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl"
          data-testid="hero-meta-strip"
        >
          {[
            { k: "Founded", v: "By Jiyaa & Jatin" },
            { k: "Stack", v: "React · Node · AI" },
            { k: "Live Projects", v: "2 & Counting" },
            { k: "Focus", v: "Web · WhatsApp · Voice" },
          ].map((item) => (
            <div
              key={item.k}
              className="bg-[#050816]/40 p-5 md:p-6"
              data-testid={`hero-meta-${item.k.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
                {item.k}
              </div>
              <div className="mt-2 font-[Outfit] text-base md:text-lg text-white">
                {item.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
