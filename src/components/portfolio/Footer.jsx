import React from "react";
import { Sparkles } from "lucide-react";
import { SITE } from "../../config/site";

export const Footer = () => {
  return (
    <footer
      className="relative border-t border-white/10 py-10"
      data-testid="site-footer"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-[#8B5CF6] via-[#06B6D4] to-[#EC4899]">
            <Sparkles className="h-3.5 w-3.5 text-white" />
          </span>
          <span className="font-[Outfit] text-sm text-white">
            {SITE.brandName}
          </span>
          <span className="text-xs text-white/30 ml-2">
            · {SITE.tagline}
          </span>
        </div>
        <div className="text-xs font-mono text-white/40">
          Built by Jiyaa Sompura & Jatin Agarwal · © {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
};
