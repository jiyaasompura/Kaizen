import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { PhoneCall, Mic, Volume2, Sparkles } from "lucide-react";

const CONVERSATION = [
  { who: "ai", text: "Hello, thank you for calling Pink & White Clinic. How may I help you today?" },
  { who: "caller", text: "Hi, I'd like to book an appointment for tomorrow." },
  { who: "ai", text: "Of course. Would you prefer a morning or evening slot?" },
  { who: "caller", text: "Evening, around 6 PM." },
  { who: "ai", text: "Done — you're booked for 6 PM tomorrow. We'll text the confirmation now." },
];

export const AIReceptionist = () => {
  const [visible, setVisible] = useState(1);

  useEffect(() => {
    if (visible >= CONVERSATION.length) return;
    const t = setTimeout(() => setVisible((v) => v + 1), 1600);
    return () => clearTimeout(t);
  }, [visible]);

  // Loop subtly
  useEffect(() => {
    if (visible !== CONVERSATION.length) return;
    const t = setTimeout(() => setVisible(1), 4500);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <section
      id="ai"
      className="relative py-20 md:py-28"
      data-testid="ai-receptionist-section"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.2em] text-white/70">
              <Sparkles className="h-3 w-3 text-[#EC4899]" />
              Launching 2026
            </span>
            <h2 className="mt-5 font-[Outfit] text-4xl md:text-5xl font-light tracking-tight text-white leading-[1.05]">
              Your business&apos;s
              <br />
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#EC4899] bg-clip-text text-transparent italic font-serif">
                first employee
              </span>
              <br />
              — available 24/7.
            </h2>
            <p className="mt-5 text-sm md:text-base text-white/60 leading-relaxed max-w-md">
              A human-like AI voice agent that answers your phone, books
              appointments, handles FAQs and transfers urgent calls — even
              after hours.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Answers incoming calls within 1 ring",
                "Books appointments & sends confirmations",
                "Handles FAQs in natural voice",
                "Transfers urgent calls to you",
              ].map((b) => (
                <li
                  key={b}
                  className="flex items-start gap-3 text-sm md:text-base text-white/70"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gradient-to-r from-[#06B6D4] to-[#EC4899]" />
                  {b}
                </li>
              ))}
            </ul>
          </div>

          {/* Phone mock */}
          <div className="md:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative mx-auto max-w-md md:max-w-lg"
            >
              {/* glow */}
              <div className="absolute -inset-10 bg-gradient-to-br from-[#8B5CF6]/30 via-[#06B6D4]/20 to-[#EC4899]/30 blur-3xl rounded-full pointer-events-none" />

              <div className="relative rounded-[2.5rem] border border-white/10 bg-[#0A0D1E]/80 backdrop-blur-2xl p-6 shadow-[0_40px_100px_-20px_rgba(139,92,246,0.5)]">
                {/* call header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#06B6D4] flex items-center justify-center">
                      <PhoneCall className="h-5 w-5 text-white" />
                      <span className="absolute inset-0 rounded-full ring-2 ring-[#06B6D4]/50 animate-ping" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/50">
                        Incoming Call · Live
                      </div>
                      <div className="font-[Outfit] text-white text-lg">
                        Pink & White Clinic
                      </div>
                    </div>
                  </div>
                  <div className="text-xs font-mono text-white/40 tabular-nums">
                    00:{(visible * 7).toString().padStart(2, "0")}
                  </div>
                </div>

                {/* waveform */}
                <div className="mt-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <Mic className="h-4 w-4 text-white/60" />
                  <div className="flex-1 flex items-center gap-[3px] h-8">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <span
                        key={i}
                        className="flex-1 rounded-full bg-gradient-to-t from-[#8B5CF6] to-[#06B6D4]"
                        style={{
                          height: `${20 + Math.abs(Math.sin(i + visible) * 70)}%`,
                          opacity: 0.5 + (i % 3) * 0.15,
                        }}
                      />
                    ))}
                  </div>
                  <Volume2 className="h-4 w-4 text-white/60" />
                </div>

                {/* conversation */}
                <div
                  className="mt-5 space-y-3 min-h-[280px]"
                  data-testid="ai-conversation"
                >
                  {CONVERSATION.slice(0, visible).map((msg, idx) => (
                    <motion.div
                      key={idx + "-" + visible}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.45 }}
                      className={`flex ${msg.who === "ai" ? "justify-start" : "justify-end"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-snug ${
                          msg.who === "ai"
                            ? "bg-gradient-to-br from-[#8B5CF6]/25 to-[#06B6D4]/15 text-white border border-[#8B5CF6]/30"
                            : "bg-white/10 text-white/90 border border-white/10"
                        }`}
                      >
                        <div className="text-[9px] font-mono uppercase tracking-[0.2em] mb-1 opacity-60">
                          {msg.who === "ai" ? "AI Receptionist" : "Caller"}
                        </div>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
