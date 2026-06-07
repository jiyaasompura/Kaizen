import React from "react";
import { motion } from "framer-motion";
import { SERVICES } from "../../config/services";
import { ArrowUpRight } from "lucide-react";

export const Services = () => {
  return (
    <section
      id="services"
      className="relative py-20 md:py-28"
      data-testid="services-section"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
              What We Build
            </div>
            <h2 className="mt-3 font-[Outfit] text-4xl md:text-5xl font-light tracking-tight text-white max-w-xl">
              A focused toolkit for{" "}
              <span className="italic font-serif text-white/80">
                modern businesses.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-white/60">
            Websites that look the part, automations that do the work, and AI
            that&apos;s always on duty.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-12 gap-5">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] backdrop-blur-2xl p-7 md:p-9 hover:border-white/20 transition-all ${s.span} col-span-12 min-h-[260px] flex flex-col justify-between`}
                data-testid={`service-card-${s.title.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {/* hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-br from-[#8B5CF6]/10 via-transparent to-[#06B6D4]/10 pointer-events-none" />

                <div className="relative">
                  <div className="flex items-start justify-between">
                    <div className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    {s.comingSoon && (
                      <span
                        className="text-[10px] font-mono uppercase tracking-[0.2em] bg-gradient-to-r from-[#EC4899] to-[#8B5CF6] text-white px-3 py-1 rounded-full"
                        data-testid="service-coming-soon-badge"
                      >
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 font-[Outfit] text-2xl md:text-3xl text-white tracking-tight">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm md:text-base text-white/60 leading-relaxed max-w-xl">
                    {s.description}
                  </p>
                </div>

                <div className="relative mt-6 flex items-center justify-between gap-4 flex-wrap">
                  <div className="flex flex-wrap gap-2">
                    {s.bullets.map((b) => (
                      <span
                        key={b}
                        className="text-[11px] font-mono uppercase tracking-[0.15em] text-white/60 px-2.5 py-1 rounded-full border border-white/10 bg-white/5"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-white/50 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
