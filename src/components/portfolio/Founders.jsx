import React from "react";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { SITE } from "../../config/site";

export const Founders = () => {
  return (
    <section
      id="founders"
      className="relative py-20 md:py-28"
      data-testid="founders-section"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
              The Duo
            </div>
            <h2 className="mt-3 font-[Outfit] text-4xl md:text-5xl font-light tracking-tight text-white">
              Two developers.
              <br />
              <span className="text-white/50">One obsession with quality.</span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-white/60 leading-relaxed">
            We work shoulder-to-shoulder on every project — design, code, and
            automation under one roof.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {SITE.founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-8 md:p-10 hover:border-white/20 transition-colors"
              data-testid={`founder-card-${f.initials.toLowerCase()}`}
            >
              {/* glow */}
              <div
                className={`absolute -top-24 -right-24 h-64 w-64 rounded-full bg-gradient-to-br ${f.gradient} opacity-25 blur-3xl group-hover:opacity-40 transition-opacity`}
              />

              <div className="relative flex items-start gap-5">
                <div
                  className={`shrink-0 h-20 w-20 md:h-24 md:w-24 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center font-[Outfit] text-3xl md:text-4xl font-medium text-white shadow-[0_8px_32px_rgba(139,92,246,0.35)]`}
                  data-testid={`founder-avatar-${f.initials.toLowerCase()}`}
                >
                  {f.initials}
                </div>
                <div className="min-w-0">
                  <h3 className="font-[Outfit] text-2xl md:text-3xl text-white tracking-tight">
                    {f.name}
                  </h3>
                  <p className="mt-1 text-sm text-white/60">{f.role}</p>
                </div>
              </div>

              <div className="relative mt-6 flex flex-wrap gap-2">
                {f.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/70 px-3 py-1.5 rounded-full border border-white/10 bg-white/5"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="relative mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={f.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#050816] px-5 py-2.5 text-sm font-medium hover:bg-white/90 transition-colors"
                  data-testid={`founder-resume-btn-${f.initials.toLowerCase()}`}
                >
                  <Download className="h-4 w-4" />
                  Download Resume
                </a>
                <a
                  href={`mailto:${f.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 text-white px-5 py-2.5 text-sm font-medium hover:bg-white/10 transition-colors"
                  data-testid={`founder-email-btn-${f.initials.toLowerCase()}`}
                >
                  <Mail className="h-4 w-4" />
                  {f.email}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
