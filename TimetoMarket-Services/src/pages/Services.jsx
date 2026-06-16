import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  {
    icon: "🎨",
    title: "Web Design & Build",
    desc: "Custom storefronts, business sites and webapps built from scratch — fast, beautiful and designed to convert visitors into customers.",
    features: [
      "Custom UI/UX design",
      "Mobile-first responsive",
      "SEO optimized",
      "Fast loading speed",
      "CMS integration",
      "E-commerce ready",
    ],
    color: "#D97D54",
  },
  {
    icon: "🔒",
    title: "Security & Monitoring",
    desc: "Your platform hardened, watched and protected around the clock — SSL, firewall, malware scanning and real-time alerts.",
    features: [
      "SSL certificate setup",
      "Firewall configuration",
      "Malware scanning",
      "24/7 uptime monitoring",
      "DDoS protection",
      "Security audit reports",
    ],
    color: "#3E5C4A",
  },
  {
    icon: "⚙️",
    title: "Platform Management",
    desc: "Ongoing updates, content changes, performance tuning and growth support. You run your business — I run your tech.",
    features: [
      "Regular updates & patches",
      "Content management",
      "Performance optimization",
      "Backup management",
      "Technical support",
      "Growth consulting",
    ],
    color: "#D97D54",
  },
  {
    icon: "🤖",
    title: "AI-Powered Features",
    desc: "Smart chatbots, automated booking systems and AI integrations that make your platform work harder for you.",
    features: [
      "AI chatbot integration",
      "Smart booking systems",
      "Demand forecasting",
      "Auto-response systems",
      "WhatsApp bot setup",
      "USSD integration",
    ],
    color: "#3E5C4A",
  },
];

const plans = [
  {
    label: "Starter",
    desc: "Perfect for businesses just getting online",
    items: [
      "Single-page website",
      "Mobile responsive",
      "Basic SEO",
      "Contact form",
      "1 month support",
    ],
  },
  {
    label: "Growth",
    desc: "For businesses ready to scale digitally",
    items: [
      "Multi-page webapp",
      "CMS integration",
      "Security setup",
      "WhatsApp bot",
      "3 months support",
    ],
    featured: true,
  },
  {
    label: "Premium",
    desc: "Full-stack platform with AI features",
    items: [
      "Custom webapp",
      "AI integrations",
      "Full security suite",
      "Ongoing management",
      "Priority support",
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-[#0A0F1A] text-[#E8E2D9] overflow-x-hidden pt-[68px]">
      {/* Header */}
      <section className="section-pad border-b border-white/[0.07] relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#3E5C4A]/8 rounded-full blur-[80px] pointer-events-none" />
        <div className="max-w-6xl mx-auto section-x relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#D97D54] block mb-4">
              Services
            </span>
            <h1 className="font-display font-black text-hero text-white leading-tight mb-5">
              What I build
              <br />
              <em className="text-[#D97D54] not-italic">& how I do it</em>
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#E8E2D9]/50 max-w-[480px] leading-[1.75]">
              Every service is designed around one goal — getting your business
              online, keeping it secure and helping it grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="section-pad">
        <div className="max-w-6xl mx-auto section-x flex flex-col gap-4 md:gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#161E2E] border border-white/[0.07] rounded-2xl p-6 md:p-10 hover:border-[#D97D54]/20 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-10">
                <div className="flex-1">
                  <div
                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center text-xl md:text-2xl mb-5"
                    style={{
                      background: `${s.color}18`,
                      border: `1px solid ${s.color}30`,
                    }}
                  >
                    {s.icon}
                  </div>
                  <h2 className="font-display font-black text-h3 text-white mb-3">
                    {s.title}
                  </h2>
                  <p className="text-[14px] md:text-[15px] text-[#E8E2D9]/55 leading-[1.75]">
                    {s.desc}
                  </p>
                </div>
                <div className="flex-1">
                  <h4 className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8E2D9]/30 mb-4">
                    What's included
                  </h4>
                  <div className="grid grid-cols-1 xs:grid-cols-2 gap-2.5 md:gap-3">
                    {s.features.map((f) => (
                      <div
                        key={f}
                        className="flex items-center gap-2.5 text-[13px] md:text-[14px] text-[#E8E2D9]/60"
                      >
                        <span
                          className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] flex-shrink-0"
                          style={{ background: `${s.color}20`, color: s.color }}
                        >
                          ✓
                        </span>
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <div className="border-t border-white/[0.07]" />
      <section className="section-pad">
        <div className="max-w-6xl mx-auto section-x">
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#D97D54] block mb-4">
            Pricing
          </span>
          <h2 className="font-display font-black text-h2 text-white mb-3">
            Flexible & transparent
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#E8E2D9]/50 max-w-lg mb-10 md:mb-12 leading-[1.7]">
            No fixed pricing because every business is different. I work with
            your budget and structure payments to fit where you are right now.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {plans.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className={`rounded-2xl p-6 md:p-8 border transition-all ${
                  p.featured
                    ? "bg-[#D97D54]/8 border-[#D97D54]/30"
                    : "bg-[#161E2E] border-white/[0.07]"
                }`}
              >
                {p.featured && (
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-[#D97D54] block mb-3">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display font-black text-2xl text-white mb-2">
                  {p.label}
                </h3>
                <p className="text-[12px] md:text-[13px] text-[#E8E2D9]/45 mb-5 leading-[1.6]">
                  {p.desc}
                </p>
                <div className="flex flex-col gap-2.5 mb-7">
                  {p.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2.5 text-[13px] text-[#E8E2D9]/60"
                    >
                      <span className="text-[#D97D54] flex-shrink-0">✓</span>{" "}
                      {item}
                    </div>
                  ))}
                </div>
                <Link
                  to="/contact"
                  className={`w-full flex items-center justify-center py-3 rounded-full text-[13px] font-semibold transition-all min-h-[44px] active:scale-[0.98] ${
                    p.featured
                      ? "bg-[#D97D54] text-white hover:bg-[#c96b42]"
                      : "border border-white/10 text-white hover:bg-white/5"
                  }`}
                >
                  Get a Quote
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="border-t border-white/[0.07]" />
      <section className="section-pad">
        <div className="max-w-6xl mx-auto section-x text-center">
          <h2 className="font-display font-black text-h2 text-white mb-4">
            Not sure what you need?
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#E8E2D9]/50 mb-8 max-w-md mx-auto leading-[1.7]">
            Book a free consultation and I'll recommend exactly what will work
            for your business and budget.
          </p>
          <Link
            to="/contact"
            className="px-8 py-4 rounded-full bg-[#D97D54] text-white font-semibold text-[14px] md:text-[15px] hover:bg-[#c96b42] active:scale-95 transition-all inline-flex justify-center"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </div>
  );
}
