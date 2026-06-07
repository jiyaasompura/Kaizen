import React from "react";

export const AuroraBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base */}
      <div className="absolute inset-0 bg-[#050816]" />

      {/* Aurora image, very subtle */}
      <div
        className="absolute inset-0 opacity-25 mix-blend-screen"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1557264322-b44d383a2906?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODF8MHwxfHNlYXJjaHwxfHxkYXJrJTIwYWJzdHJhY3QlMjBhdXJvcmElMjBuZW9ufGVufDB8fHx8MTc4MDgxOTQzM3ww&ixlib=rb-4.1.0&q=85)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "blur(60px) saturate(140%)",
        }}
      />

      {/* Glow orbs */}
      <div className="absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-[#8B5CF6] opacity-30 blur-[140px]" />
      <div className="absolute top-1/3 right-[-10%] h-[520px] w-[520px] rounded-full bg-[#06B6D4] opacity-25 blur-[140px]" />
      <div className="absolute bottom-[-10%] left-1/3 h-[420px] w-[420px] rounded-full bg-[#EC4899] opacity-20 blur-[140px]" />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.08] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' /%3E%3C/svg%3E\")",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#050816]" />
    </div>
  );
};
