import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const BASE = "https://engr-dolo.github.io/TimetoMarket-Demos";

const demos = [
  {
    id: 1,
    title: "SOS Medical Centre",
    category: "Healthcare",
    desc: "Patient triage, appointment booking and AI symptom checker for a 24/7 clinic in Monrovia.",
    tags: ["React", "AI Chatbot", "Booking System"],
    icon: "🏥",
    color: "#3E5C4A",
    status: "Demo Ready",
    link: `${BASE}/sos-medical/`,
  },
  {
    id: 2,
    title: "Tides Restaurant & Bar",
    category: "Food & Dining",
    desc: "Interactive digital menu, WhatsApp ordering and AI dish recommendation engine.",
    tags: ["Menu System", "WhatsApp", "AI Recs"],
    icon: "🍽️",
    color: "#D97D54",
    status: "Demo Ready",
    link: `${BASE}/tides-restaurant/`,
  },
  {
    id: 3,
    title: "Gro-Green Farms",
    category: "Agriculture",
    desc: "Crop export documentation, buyer proposal generator and inventory dashboard.",
    tags: ["Dashboard", "AI Docs", "Export Tools"],
    icon: "🌱",
    color: "#3E5C4A",
    status: "Demo Ready",
    link: `${BASE}/gro-green/`,
  },
  {
    id: 4,
    title: "LibDelivery",
    category: "Logistics",
    desc: "AI-powered route optimization dashboard and WhatsApp order management system.",
    tags: ["Route AI", "Dashboard", "WhatsApp Bot"],
    icon: "🚚",
    color: "#D97D54",
    status: "Demo Ready",
    link: `${BASE}/libdelivery/`,
  },
  {
    id: 5,
    title: "Divine Glam Salon & Spa",
    category: "Beauty & Wellness",
    desc: "Online booking platform, service catalogue and client management system.",
    tags: ["Booking", "CRM", "Mobile-first"],
    icon: "💅",
    color: "#7B5EA7",
    status: "Demo Ready",
    link: `${BASE}/salon-spa/`,
  },
  {
    id: 6,
    title: "Liberian Startup Hub",
    category: "Tech & Startups",
    desc: "Community platform with member profiles, event listings and resource library.",
    tags: ["Community", "Events", "Directory"],
    icon: "🚀",
    color: "#1A6B8A",
    status: "Coming Soon",
    link: "#",
  },
];

const categories = [
  "All",
  "Healthcare",
  "Food & Dining",
  "Agriculture",
  "Logistics",
  "Beauty & Wellness",
  "Tech & Startups",
];

export default function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? demos : demos.filter((d) => d.category === active);

  return (
    <div className="bg-[#0A0F1A] text-[#E8E2D9] overflow-x-hidden pt-[68px]">
      {/* Header */}
      <section className="section-pad border-b border-white/[0.07] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#D97D54]/8 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-6xl mx-auto section-x relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#D97D54] block mb-4">
              Portfolio
            </span>
            <h1 className="font-display font-black text-hero text-white leading-tight mb-5">
              Real platforms,
              <br />
              <em className="text-[#D97D54] not-italic">
                built for real businesses
              </em>
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#E8E2D9]/50 max-w-[480px] leading-[1.75]">
              Every demo below represents a real business type in Liberia —
              built to show exactly what your platform could look like.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter tabs */}
      <div className="sticky top-[68px] z-40 bg-[#0A0F1A]/95 backdrop-blur-xl border-b border-white/[0.07] py-3">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div
            className="flex gap-2 overflow-x-auto pb-1 scrollbar-none"
            style={{ scrollbarWidth: "none" }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-[12px] font-semibold tracking-wide transition-all min-h-[44px] ${
                  active === cat
                    ? "bg-[#D97D54] text-white"
                    : "bg-[#161E2E] text-[#E8E2D9]/50 border border-white/[0.07] hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto section-x">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {filtered.map((demo, i) => (
                <motion.div
                  key={demo.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07 }}
                  className="group bg-[#161E2E] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-[#D97D54]/30 transition-all duration-300 flex flex-col"
                >
                  {/* Browser mockup */}
                  <div
                    className="relative h-[180px] md:h-[200px] flex items-center justify-center flex-shrink-0"
                    style={{ background: `${demo.color}15` }}
                  >
                    <div className="absolute top-0 left-0 right-0 h-8 bg-[#0A0F1A]/70 flex items-center px-3 gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-red-500/60 flex-shrink-0" />
                      <span className="w-2 h-2 rounded-full bg-yellow-500/60 flex-shrink-0" />
                      <span className="w-2 h-2 rounded-full bg-green-500/60 flex-shrink-0" />
                      <span className="flex-1 mx-2 h-4 bg-white/5 rounded text-[9px] md:text-[10px] text-white/25 flex items-center px-2 overflow-hidden">
                        engr-dolo.github.io/TimetoMarket-Demos/
                        {demo.title.toLowerCase().replace(/[\s&]+/g, "-").replace(/-+/g, "-")}
                      </span>
                    </div>
                    <span className="text-[52px] md:text-[64px] select-none">
                      {demo.icon}
                    </span>
                    <div
                      className={`absolute top-10 right-3 px-2 py-1 rounded-full text-[10px] font-bold flex-shrink-0 ${
                        demo.status === "Demo Ready"
                          ? "bg-green-500/10 text-green-400 border border-green-500/20"
                          : "bg-[#D97D54]/10 text-[#D97D54] border border-[#D97D54]/20"
                      }`}
                    >
                      {demo.status}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6 flex flex-col flex-1">
                    <span className="text-[10px] md:text-[11px] font-bold tracking-[0.15em] uppercase text-[#D97D54] mb-2 block">
                      {demo.category}
                    </span>
                    <h3 className="font-sans font-bold text-[15px] md:text-[17px] text-white mb-2">
                      {demo.title}
                    </h3>
                    <p className="text-[12px] md:text-[13px] text-[#E8E2D9]/45 leading-[1.65] mb-4 flex-1">
                      {demo.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {demo.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md bg-white/[0.04] border border-white/[0.06] text-[10px] md:text-[11px] text-[#E8E2D9]/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a
                      href={demo.link}
                      target={demo.status === "Demo Ready" ? "_blank" : undefined}
                      rel={demo.status === "Demo Ready" ? "noopener noreferrer" : undefined}
                      className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/[0.07] text-[12px] md:text-[13px] font-semibold text-white/60 hover:text-white hover:border-[#D97D54]/30 active:scale-[0.98] transition-all min-h-[44px]"
                    >
                      {demo.status === "Demo Ready"
                        ? "View Live Demo →"
                        : "Coming Soon"}
                    </a>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <div className="border-t border-white/[0.07]" />
      <section className="section-pad">
        <div className="max-w-6xl mx-auto section-x text-center">
          <h2 className="font-display font-black text-h2 text-white mb-4">
            Want a demo for{" "}
            <em className="text-[#D97D54] not-italic">your business?</em>
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#E8E2D9]/50 mb-8 max-w-md mx-auto leading-[1.7]">
            I'll build a free demo tailored to your business so you can see
            exactly what you're getting before committing.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full bg-[#D97D54] text-white font-semibold text-[14px] md:text-[15px] hover:bg-[#c96b42] active:scale-95 transition-all inline-flex justify-center"
          >
            Request a Free Demo
          </Link>
        </div>
      </section>
    </div>
  );
}
