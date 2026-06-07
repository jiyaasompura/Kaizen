import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, MapPin } from "lucide-react";
import { PROJECTS } from "../../config/projects";

const BrowserMock = ({ image, url }) => (
  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0A0D1E] shadow-[0_30px_80px_-20px_rgba(139,92,246,0.35)]">
    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/30">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
      </div>
      <div className="mx-auto text-[11px] font-mono text-white/50 truncate max-w-[60%]">
        {url.replace(/^https?:\/\//, "")}
      </div>
    </div>
    <div className="aspect-[16/10] w-full overflow-hidden">
      <img
        src={image}
        alt=""
        className="h-full w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
      />
    </div>
  </div>
);

export const Projects = () => {
  return (
    <section
      id="work"
      className="relative py-20 md:py-28"
      data-testid="projects-section"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
              Featured Work
            </div>
            <h2 className="mt-3 font-[Outfit] text-4xl md:text-5xl font-light tracking-tight text-white max-w-xl">
              Live projects.
              <br />
              <span className="text-white/50">Real businesses.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-white/60">
            A small, hand-picked roster — every site is built from scratch, no
            templates, no shortcuts.
          </p>
        </div>

        <div className="mt-12 space-y-8">
          {PROJECTS.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05 }}
              className="grid md:grid-cols-12 gap-8 items-center rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-6 md:p-10"
              data-testid={`project-card-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div
                className={`md:col-span-5 ${i % 2 === 1 ? "md:order-2" : ""}`}
              >
                <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.2em] text-white/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Project
                </div>
                <h3 className="mt-3 font-[Outfit] text-3xl md:text-4xl text-white tracking-tight">
                  {p.title}
                </h3>
                <div className="mt-2 flex items-center gap-2 text-sm text-white/50">
                  <span>{p.category}</span>
                  <span className="text-white/20">•</span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {p.location}
                  </span>
                </div>
                <p className="mt-4 text-sm md:text-base text-white/60 leading-relaxed">
                  {p.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-7 inline-flex items-center gap-2 rounded-full bg-white text-[#050816] px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors"
                  data-testid={`project-visit-btn-${p.title.toLowerCase().replace(/\s+/g, "-")}`}
                >
                  Visit Site
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div
                className={`md:col-span-7 ${i % 2 === 1 ? "md:order-1" : ""}`}
              >
                <BrowserMock image={p.image} url={p.link} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
