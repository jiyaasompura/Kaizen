import React from "react";
import { motion } from "framer-motion";
import { Mail, MessageCircle, ArrowUpRight } from "lucide-react";
import { SITE } from "../../config/site";

export const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 md:py-32"
      data-testid="contact-section"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] backdrop-blur-2xl px-6 py-14 md:px-12 md:py-20"
        >
          <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-[80%] rounded-full bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#EC4899] opacity-30 blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/50">
              Let&apos;s Build Something
            </div>
            <h2 className="mt-4 font-[Outfit] text-4xl md:text-6xl font-light tracking-tighter text-white leading-[1.05]">
              Ready to build
              <br />
              <span className="bg-gradient-to-r from-[#8B5CF6] via-[#06B6D4] to-[#EC4899] bg-clip-text text-transparent italic font-serif">
                something amazing?
              </span>
            </h2>
            <p className="mt-5 mx-auto max-w-xl text-sm md:text-base text-white/60">
              Whether you&apos;re a local business, a fast-growing startup or a
              clinic — drop us a line. We typically reply within 24 hours.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={`mailto:${SITE.contact.emails[0]}`}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#8B5CF6] to-[#06B6D4] text-white px-7 py-3.5 text-sm font-medium hover:shadow-[0_0_30px_rgba(139,92,246,0.55)] transition-all"
                data-testid="contact-email-btn"
              >
                <Mail className="h-4 w-4" />
                Send Email
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href={SITE.contact.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-white px-7 py-3.5 text-sm font-medium hover:bg-white/10 hover:border-white/25 transition-all"
                data-testid="contact-whatsapp-btn"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </a>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 gap-3 max-w-2xl mx-auto">
              {SITE.contact.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-left text-sm hover:bg-white/10 transition-colors"
                  data-testid={`contact-email-${email.split("@")[0]}`}
                >
                  <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40">
                    Email
                  </div>
                  <div className="mt-1 text-white truncate">{email}</div>
                </a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
