import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import photo from "../assets/photo.jpg";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] },
});

const services = [
  {
    icon: "🎨",
    title: "Web Design & Build",
    desc: "Custom storefronts, business sites and webapps built from scratch — fast, beautiful and designed to convert.",
  },
  {
    icon: "🔒",
    title: "Security & Monitoring",
    desc: "Your platform hardened, watched and protected around the clock — SSL, firewall, malware scanning and alerts.",
  },
  {
    icon: "⚙️",
    title: "Platform Management",
    desc: "Ongoing updates, content changes and growth support. You run your business — I run your tech.",
  },
  {
    icon: "🤖",
    title: "AI-Powered Features",
    desc: "Smart chatbots, booking systems and AI integrations that make your platform work harder for you.",
  },
];

const steps = [
  {
    n: "01",
    title: "Free Consultation",
    desc: "We talk about your business and goals. No jargon, no pressure — just an honest conversation.",
  },
  {
    n: "02",
    title: "Design & Build",
    desc: "I build your platform — clean, fast, mobile-first and secured. You have full input at every stage.",
  },
  {
    n: "03",
    title: "Launch & Hand Over",
    desc: "Your platform goes live. I walk you through everything and hand over full control to you.",
  },
  {
    n: "04",
    title: "Ongoing Support",
    desc: "I stay available — updates, fixes, new features. You are never left alone with your platform.",
  },
];

export default function Home() {
  return (
    <div className="bg-[#0A0F1A] text-[#E8E2D9] overflow-x-hidden">
      {/* ─── HERO ─── */}
      <section className="min-h-[100svh] flex items-center pt-[68px] pb-16 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-[#D97D54]/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-[#3E5C4A]/10 rounded-full blur-[60px] md:blur-[100px] pointer-events-none" />

        <div className="w-full max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            {/* Text */}
            <div className="flex-1 w-full text-center md:text-left">
              <motion.div
                {...fadeUp(0)}
                className="inline-flex items-center gap-2 bg-[#D97D54]/10 border border-[#D97D54]/25 rounded-full px-4 py-2 mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-[#D97D54] animate-pulse flex-shrink-0" />
                <span className="text-[12px] font-semibold text-[#D97D54] tracking-wide">
                  Available for new projects
                </span>
              </motion.div>

              <motion.h1
                {...fadeUp(0.1)}
                className="font-display font-black text-hero text-white mb-5"
              >
                Your Business,
                <br />
                <em className="text-[#D97D54] not-italic">Online &</em>
                <br />
                Secured.
              </motion.h1>

              <motion.p
                {...fadeUp(0.2)}
                className="text-[15px] md:text-[17px] text-[#E8E2D9]/55 leading-[1.75] max-w-[480px] mb-8 mx-auto md:mx-0"
              >
                I design, build and manage premium, well-secured webapps and
                digital platforms for small and growing businesses — from local
                shops and salons to clinics, agencies and startups.
              </motion.p>

              <motion.div
                {...fadeUp(0.3)}
                className="flex flex-col xs:flex-row gap-3 justify-center md:justify-start"
              >
                <Link
                  to="/contact"
                  className="px-7 py-3.5 rounded-full bg-[#D97D54] text-white font-semibold text-[14px] hover:bg-[#c96b42] active:scale-95 transition-all text-center justify-center"
                >
                  Start Free Consultation
                </Link>
                <Link
                  to="/portfolio"
                  className="px-7 py-3.5 rounded-full border border-white/10 text-white font-semibold text-[14px] hover:bg-white/5 active:scale-95 transition-all text-center justify-center"
                >
                  View My Work →
                </Link>
              </motion.div>
            </div>

            {/* Photo */}
            <motion.div
              {...fadeUp(0.15)}
              className="relative flex-shrink-0 w-full max-w-[280px] xs:max-w-[300px] md:w-[300px] lg:w-[320px] mx-auto md:mx-0 group"
            >
              <div className="absolute inset-0 rounded-3xl bg-[#D97D54]/15 blur-2xl scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 pointer-events-none" />

              <div className="relative rounded-3xl border border-white/[0.07] transition-all duration-500 group-hover:border-[#D97D54]/40 group-hover:scale-[1.02] group-hover:-rotate-1">
                <div className="overflow-hidden rounded-3xl">
                  <img
                    src={photo}
                    alt="Engr. P.J. Dolo"
                    className="w-full h-[320px] md:h-[380px] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1A]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                </div>

                {/* Name tag top */}
                <div className="absolute top-3 left-3 right-3 -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-10">
                  <div className="bg-[#0A0F1A]/80 backdrop-blur-md border border-white/10 rounded-xl px-4 py-3">
                    <div className="text-white font-bold text-[13px]">
                      Engr. Philip J. Dolo
                    </div>
                    <div className="text-[#D97D54] text-[11px] font-medium mt-0.5">
                      Web & App Developer
                    </div>
                  </div>
                </div>
              </div>

              {/* Stat card */}
              <div className="absolute -bottom-4 -right-4 md:-right-6 bg-[#161E2E] border border-white/[0.07] rounded-2xl px-4 py-3 md:px-5 md:py-4 shadow-xl group-hover:border-[#D97D54]/30 group-hover:-translate-y-1 transition-all duration-500 z-20">
                <div className="font-display font-black text-2xl md:text-3xl text-white">
                  100%
                </div>
                <div className="text-[11px] md:text-[12px] text-[#E8E2D9]/50 mt-1">
                  Client satisfaction
                  <br />
                  guaranteed
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── TRUST BAR ─── */}
      <div className="bg-[#161E2E] border-y border-white/[0.07] py-5">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {[
              { icon: "🔒", label: "SSL secured" },
              { icon: "⚡", label: "Delivered fast" },
              { icon: "📱", label: "Mobile-first" },
              { icon: "🤖", label: "AI-ready" },
              { icon: "🛠", label: "Always supported" },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 text-[12px] md:text-[13px] font-medium text-[#E8E2D9]/50"
              >
                <span className="w-8 h-8 rounded-lg bg-[#D97D54]/10 border border-[#D97D54]/20 flex items-center justify-center text-[13px] flex-shrink-0">
                  {icon}
                </span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── SERVICES ─── */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto section-x">
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#D97D54] block mb-4">
            What I Do
          </span>
          <h2 className="font-display font-black text-h2 text-white mb-10 md:mb-14">
            Everything your business
            <br className="hidden md:block" />
            needs to thrive{" "}
            <em className="text-[#D97D54] not-italic">online</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {services.map(({ icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group bg-[#161E2E] border border-white/[0.07] rounded-2xl p-6 md:p-9 hover:border-[#D97D54]/30 active:scale-[0.99] transition-all duration-300 relative overflow-hidden cursor-default"
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#D97D54] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                <div className="w-11 h-11 md:w-12 md:h-12 rounded-xl bg-[#D97D54]/10 border border-[#D97D54]/20 flex items-center justify-center text-lg md:text-xl mb-4 md:mb-5">
                  {icon}
                </div>
                <h3 className="font-sans font-bold text-[16px] md:text-[17px] text-white mb-2 md:mb-3">
                  {title}
                </h3>
                <p className="text-[13px] md:text-[14px] text-[#E8E2D9]/50 leading-[1.65]">
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10 md:mt-12">
            <Link
              to="/services"
              className="px-7 py-3.5 rounded-full border border-white/10 text-white font-semibold text-[14px] hover:bg-white/5 active:scale-95 transition-all inline-flex justify-center"
            >
              See All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <div className="border-t border-white/[0.07]" />
      <section className="section-pad">
        <div className="max-w-6xl mx-auto section-x">
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#D97D54] block mb-4">
            How It Works
          </span>
          <h2 className="font-display font-black text-h2 text-white mb-10 md:mb-14">
            Simple process,
            <br />
            <em className="text-[#D97D54] not-italic">powerful results</em>
          </h2>
          <div className="flex flex-col divide-y divide-white/[0.07]">
            {steps.map(({ n, title, desc }, i) => (
              <motion.div
                key={n}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-5 md:gap-8 py-6 md:py-8 items-start group hover:bg-white/[0.015] transition-colors rounded-xl px-2"
              >
                <span className="font-display font-black text-[32px] md:text-[42px] text-[#D97D54]/20 group-hover:text-[#D97D54]/40 transition-colors leading-none w-12 md:w-16 flex-shrink-0 pt-0.5">
                  {n}
                </span>
                <div>
                  <h3 className="font-sans font-bold text-[16px] md:text-[18px] text-white mb-2">
                    {title}
                  </h3>
                  <p className="text-[13px] md:text-[14px] text-[#E8E2D9]/50 leading-[1.7]">
                    {desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <div className="border-t border-white/[0.07]" />
      <section className="section-pad">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#161E2E] border border-white/[0.07] rounded-2xl md:rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[#D97D54]/4 pointer-events-none" />
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#D97D54] block mb-4 relative">
              Ready to start?
            </span>
            <h2 className="font-display font-black text-h2 text-white mb-4 relative">
              Let's build your
              <br />
              <em className="text-[#D97D54] not-italic">
                digital presence
              </em>{" "}
              today
            </h2>
            <p className="text-[14px] md:text-[16px] text-[#E8E2D9]/50 max-w-sm md:max-w-md mx-auto mb-8 md:mb-10 leading-[1.7] relative">
              First consultation is completely free. No commitment, no jargon —
              just a real conversation about getting your business online the
              right way.
            </p>
            <div className="flex flex-col xs:flex-row gap-3 justify-center relative">
              <Link
                to="/contact"
                className="px-7 py-3.5 rounded-full bg-[#D97D54] text-white font-semibold text-[14px] md:text-[15px] hover:bg-[#c96b42] active:scale-95 transition-all text-center justify-center"
              >
                Book Free Consultation
              </Link>
              <a
                href="https://wa.me/919266833394"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 rounded-full border border-white/10 text-white font-semibold text-[14px] md:text-[15px] hover:bg-white/5 active:scale-95 transition-all text-center justify-center"
              >
                💬 WhatsApp Me
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
