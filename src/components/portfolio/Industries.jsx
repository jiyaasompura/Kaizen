import React from "react";
import { motion } from "framer-motion";
import { INDUSTRIES } from "../../config/services";

export const Industries = () => {
  return (
    <section
      id="industries"
      className="relative py-20 md:py-24"
      data-testid="industries-section"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
              Industries We Serve
            </div>
            <h2 className="mt-3 font-[Outfit] text-4xl md:text-5xl font-light tracking-tight text-white max-w-xl">
              Built for{" "}
              <span className="italic font-serif text-white/80">
                businesses of every shape.
              </span>
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-white/60">
            From a single-doctor clinic to a multi-city interior studio — we
            adapt the build to fit the brand.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {INDUSTRIES.map((ind, i) => (
            <motion.span
              key={ind}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.03 }}
              className="rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-2 text-sm text-white/80 hover:border-[#06B6D4]/50 hover:text-white hover:bg-white/10 transition-all cursor-default"
              data-testid={`industry-pill-${ind.toLowerCase().replace(/\s+/g, "-")}`}
            >
              {ind}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
};
