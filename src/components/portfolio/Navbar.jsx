import React, { useState, useEffect } from "react";
import { SITE } from "../../config/site";
import { Sparkles, Menu, X } from "lucide-react";

const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#050816]/70 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
      data-testid="site-navbar"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 h-16 md:h-20 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 group"
          data-testid="nav-brand"
        >
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-[#8B5CF6] via-[#06B6D4] to-[#EC4899] shadow-[0_0_20px_rgba(139,92,246,0.5)]">
            <Sparkles className="h-4 w-4 text-white" />
          </span>
          <span className="font-[Outfit] text-base md:text-lg font-medium tracking-tight text-white">
            {SITE.brandName}
          </span>
        </button>

        <nav className="hidden md:flex items-center gap-1">
          {SITE.navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => scrollTo(link.target)}
              className="px-4 py-2 text-sm text-white/70 hover:text-white transition-colors rounded-full hover:bg-white/5"
              data-testid={`nav-link-${link.target}`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <span
            className="hidden lg:inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-white/60 px-3 py-1.5 rounded-full border border-white/10 bg-white/5"
            data-testid="nav-ai-badge"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#EC4899] animate-pulse" />
            AI Receptionist · Soon
          </span>
          <button
            onClick={() => scrollTo("contact")}
            className="inline-flex items-center rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white px-5 py-2.5 text-sm font-medium hover:shadow-[0_0_24px_rgba(139,92,246,0.55)] transition-all"
            data-testid="nav-cta-contact"
          >
            Let&apos;s Talk
          </button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white"
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden border-t border-white/10 bg-[#050816]/90 backdrop-blur-xl"
          data-testid="nav-mobile-menu"
        >
          <div className="px-6 py-4 flex flex-col gap-1">
            {SITE.navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => {
                  setOpen(false);
                  scrollTo(link.target);
                }}
                className="text-left px-3 py-3 text-white/80 hover:text-white text-sm rounded-lg hover:bg-white/5"
                data-testid={`nav-mobile-link-${link.target}`}
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => {
                setOpen(false);
                scrollTo("contact");
              }}
              className="mt-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white px-5 py-3 text-sm font-medium"
              data-testid="nav-mobile-cta"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
