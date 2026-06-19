import { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  detectMaliciousInput,
  checkRateLimit,
  generateCSRFToken,
  isBot,
} from "../utils/security";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    business: "",
    message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState(null);
  const [error, setError] = useState("");
  const [csrfToken] = useState(() => generateCSRFToken());
  const submitCount = useRef(0);

  const handle = (e) => {
    const { name, value } = e.target;
    if (detectMaliciousInput(value)) {
      setError("Invalid characters detected in your input.");
      return;
    }
    setError("");
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const submit = (e) => {
    e.preventDefault();
    setError("");

    if (isBot(honeypot)) {
      console.warn("[Security] Bot detected via honeypot");
      setSent(true);
      return;
    }

    const rate = checkRateLimit("contact-form", 3, 60000);
    if (!rate.allowed) {
      setError(
        `Too many attempts. Please wait ${rate.resetIn} seconds before trying again.`,
      );
      return;
    }

    if (!form.name.trim() || !form.message.trim()) {
      setError("Please fill in your name and message.");
      return;
    }

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // Use raw trimmed values — encodeURIComponent handles encoding for the URL
    const msg = encodeURIComponent(
      `Hi Engr. Dolo! I'm reaching out from your website.\n\nName: ${form.name.trim()}\nBusiness: ${form.business.trim()}\nEmail: ${form.email.trim()}\nPhone: ${form.phone.trim()}\n\nMessage: ${form.message.trim()}\n\n[Ref: ${csrfToken.slice(0, 8)}]`,
    );

    window.open(
      `https://wa.me/919266833394?text=${msg}`,
      "_blank",
      "noopener,noreferrer",
    );
    setSent(true);
  };

  if (sent) {
    return (
      <div className="min-h-screen bg-[#0A0F1A] text-[#E8E2D9] flex items-center justify-center px-5 pt-[68px]">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <div className="text-6xl mb-6">✅</div>
          <h2 className="font-display font-black text-3xl text-white mb-4">
            Message sent!
          </h2>
          <p className="text-[#E8E2D9]/50 text-[15px] mb-8 leading-[1.7]">
            WhatsApp opened with your message pre-filled. I'll reply within 24 hours.
          </p>
          <button
            onClick={() => {
              setSent(false);
              setForm({ name: "", email: "", phone: "", business: "", message: "" });
            }}
            className="px-6 py-3 rounded-full bg-[#D97D54] text-white font-semibold text-[14px] hover:bg-[#c96b42] transition-all"
          >
            Send another message
          </button>
        </motion.div>
      </div>
    );
  }

  const inputClass = (field) =>
    `w-full bg-[#161E2E] border rounded-xl px-4 py-3.5 text-[14px] text-white placeholder:text-[#E8E2D9]/25 outline-none transition-all duration-200 min-h-[48px] ${
      focused === field
        ? "border-[#D97D54]/60 ring-1 ring-[#D97D54]/20"
        : "border-white/[0.07] hover:border-white/15"
    }`;

  return (
    <div className="min-h-screen bg-[#0A0F1A] text-[#E8E2D9] pt-[68px]">
      {/* Header */}
      <section className="py-20 border-b border-white/[0.07] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#D97D54]/8 rounded-full blur-[100px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#D97D54] block mb-4">
              Get in Touch
            </span>
            <h1 className="font-display font-black text-hero text-white leading-tight mb-5">
              Let's build
              <br />
              <em className="text-[#D97D54] not-italic">something great</em>
            </h1>
            <p className="text-[15px] md:text-[17px] text-[#E8E2D9]/50 max-w-[460px] leading-[1.75]">
              Tell me about your business and I'll respond within 24 hours with
              a free consultation plan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intake Form CTA */}
      <section className="py-10 border-b border-white/[0.07]">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <motion.a
            href={`${import.meta.env.BASE_URL}intake-form.html`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 bg-[#161E2E] border border-[#D97D54]/25 rounded-2xl px-6 py-5 hover:border-[#D97D54]/50 transition-all group no-underline"
            style={{ textDecoration: "none", display: "flex" }}
          >
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-[#D97D54]/10 border border-[#D97D54]/20 flex items-center justify-center text-[18px] flex-shrink-0 mt-0.5">
                📋
              </div>
              <div>
                <div className="text-[13px] font-bold tracking-[0.1em] uppercase text-[#D97D54] mb-1">
                  Starting a new project?
                </div>
                <p className="text-[14px] text-[#E8E2D9]/60 leading-[1.6] max-w-[460px]">
                  Fill in our <span className="text-white font-semibold">Project Intake Form</span> for a detailed brief — services, budget, timeline and more. I'll respond with a personalised consultation plan.
                </p>
              </div>
            </div>
            <span className="flex items-center gap-2 text-[13px] font-semibold text-[#D97D54] whitespace-nowrap group-hover:gap-3 transition-all flex-shrink-0">
              Open Intake Form
              <span className="text-[16px]">→</span>
            </span>
          </motion.a>
        </div>
      </section>

      {/* Form + Info */}
      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <form onSubmit={submit} className="flex flex-col gap-4" noValidate>
                {/* Honeypot — hidden from humans, triggers bot detection */}
                <input
                  type="text"
                  name="website"
                  value={honeypot}
                  onChange={(e) => setHoneypot(e.target.value)}
                  className="hidden"
                  tabIndex="-1"
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#E8E2D9]/35">
                      Name <span className="text-[#D97D54]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handle}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      placeholder="Your full name"
                      className={inputClass("name")}
                      maxLength={100}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#E8E2D9]/35">
                      Business
                    </label>
                    <input
                      type="text"
                      name="business"
                      value={form.business}
                      onChange={handle}
                      onFocus={() => setFocused("business")}
                      onBlur={() => setFocused(null)}
                      placeholder="Business name"
                      className={inputClass("business")}
                      maxLength={100}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#E8E2D9]/35">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handle}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      placeholder="you@example.com"
                      className={inputClass("email")}
                      maxLength={150}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#E8E2D9]/35">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handle}
                      onFocus={() => setFocused("phone")}
                      onBlur={() => setFocused(null)}
                      placeholder="+231 77 000 0000"
                      className={inputClass("phone")}
                      maxLength={30}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#E8E2D9]/35">
                    Message <span className="text-[#D97D54]">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handle}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    placeholder="Tell me about your business and what you need..."
                    rows={5}
                    className={`${inputClass("message")} resize-none min-h-[140px]`}
                    maxLength={1000}
                  />
                  <span className="text-[11px] text-[#E8E2D9]/25 text-right">
                    {form.message.length}/1000
                  </span>
                </div>

                {error && (
                  <div className="text-[13px] text-red-400 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-[#D97D54] text-white font-semibold text-[15px] hover:bg-[#c96b42] active:scale-[0.98] transition-all min-h-[52px] flex items-center justify-center gap-2"
                >
                  Send via WhatsApp
                  <span>→</span>
                </button>

                <p className="text-[11px] text-[#E8E2D9]/25 text-center">
                  Opens WhatsApp with your message pre-filled. No account needed.
                </p>
              </form>
            </motion.div>

            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <div>
                <h3 className="font-display font-black text-2xl text-white mb-2">
                  Prefer to reach out directly?
                </h3>
                <p className="text-[14px] text-[#E8E2D9]/50 leading-[1.7]">
                  I'm available on WhatsApp, email and phone. I respond within
                  24 hours — usually faster.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {[
                  {
                    icon: "💬",
                    label: "WhatsApp",
                    value: "+91 92668 33394",
                    href: "https://wa.me/919266833394",
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "dev.engrpjdolo24@gmail.com",
                    href: "mailto:dev.engrpjdolo24@gmail.com",
                  },
                  {
                    icon: "📞",
                    label: "Phone (Liberia)",
                    value: "0881 087 696",
                    href: "tel:0881087696",
                  },
                  {
                    icon: "📞",
                    label: "Phone (Alt)",
                    value: "0772 027 313",
                    href: "tel:0772027313",
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-4 bg-[#161E2E] border border-white/[0.07] rounded-2xl px-5 py-4 hover:border-[#D97D54]/30 transition-all group"
                  >
                    <span className="w-10 h-10 rounded-xl bg-[#D97D54]/10 border border-[#D97D54]/20 flex items-center justify-center text-[16px] flex-shrink-0">
                      {c.icon}
                    </span>
                    <div>
                      <div className="text-[11px] font-semibold tracking-[0.1em] uppercase text-[#E8E2D9]/30 mb-0.5">
                        {c.label}
                      </div>
                      <div className="text-[14px] text-white group-hover:text-[#D97D54] transition-colors">
                        {c.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="bg-[#161E2E] border border-[#D97D54]/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse flex-shrink-0" />
                  <span className="text-[12px] font-semibold text-green-400">
                    Available for new projects
                  </span>
                </div>
                <p className="text-[13px] text-[#E8E2D9]/50 leading-[1.7]">
                  First consultation is 100% free. No commitment, no jargon —
                  just an honest conversation about your business and how I can help.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
