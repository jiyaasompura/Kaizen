import React from "react";

const ITEMS = [
  { num: "2+", label: "Live Projects" },
  { num: "100%", label: "Client Satisfaction" },
  { num: "24/7", label: "Support & Care" },
];

export const Stats = () => {
  return (
    <section
      className="relative py-16 md:py-20"
      data-testid="stats-section"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-3 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
          {ITEMS.map((it) => (
            <div
              key={it.label}
              className="bg-[#050816]/50 px-5 py-8 md:py-10 text-center"
              data-testid={`stat-${it.label.toLowerCase().replace(/\s+/g, "-")}`}
            >
              <div className="font-[Outfit] text-4xl md:text-6xl font-light tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                {it.num}
              </div>
              <div className="mt-2 text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-white/50">
                {it.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
