import { Link } from "react-router-dom";
import photo from "../assets/photo.jpg";
import useInView from "../hooks/useInView";

export default function About() {
  const [storyRef, storyInView] = useInView();
  const [valuesRef, valuesInView] = useInView();
  const [skillsRef, skillsInView] = useInView();
  const [ctaRef, ctaInView] = useInView();

  return (
    <div className="bg-[#0A0F1A] text-[#E8E2D9] pt-[68px]">
      {/* Header */}
      <section className="py-24 border-b border-white/[0.07] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#D97D54]/8 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 items-center relative">
          <div className="flex-1">
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#D97D54] block mb-4">
              About
            </span>
            <h1 className="font-display font-black text-5xl md:text-6xl text-white leading-tight mb-6">
              The person
              <br />
              <em className="text-[#D97D54] not-italic">behind the platform</em>
            </h1>
            <p className="text-[17px] text-[#E8E2D9]/50 leading-[1.75] max-w-[480px]">
              I'm Engr. Philip J. Dolo — a Liberian software engineer and web
              developer passionate about helping African businesses thrive in
              the digital economy.
            </p>
          </div>
          <div className="flex-shrink-0 w-full md:w-[280px]">
            <img
              src={photo}
              alt="Engr. P.J. Dolo"
              className="w-full h-[340px] object-cover object-top rounded-3xl border border-white/[0.07]"
            />
          </div>
        </div>
      </section>

      {/* Story */}
      <section
        ref={storyRef}
        className={`py-20 border-b border-white/[0.07] transition-all duration-700 ease-out ${storyInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="max-w-[680px]">
            <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#D97D54] block mb-6">
              My Story
            </span>
            <div className="flex flex-col gap-5 text-[16px] text-[#E8E2D9]/60 leading-[1.8]">
              <p>
                I grew up watching talented Liberian business owners struggle to
                reach customers beyond their immediate neighborhoods — not
                because their products weren't good enough, but because they had
                no digital presence.
              </p>
              <p>
                As a tech professional working across Liberia and India, I saw
                firsthand how a well-built platform could transform a small
                business — connecting them to customers they'd never have
                reached otherwise, building trust at scale, and creating real
                economic opportunity.
              </p>
              <p>
                TimetoMarket-Services was built on that belief. Every platform I
                build is a bridge — between a business owner's vision and the
                customers waiting to find them online.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section
        ref={valuesRef}
        className={`py-20 border-b border-white/[0.07] transition-all duration-700 ease-out ${valuesInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#D97D54] block mb-4">
            What I Stand For
          </span>
          <h2 className="font-display font-black text-4xl text-white mb-12">
            Values that guide
            <br />
            <em className="text-[#D97D54] not-italic">every project</em>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {[
              {
                icon: "🤝",
                title: "Honest partnership",
                desc: "I treat every client like a partner, not a transaction. You get real advice, transparent communication and no hidden surprises.",
              },
              {
                icon: "🔒",
                title: "Security first",
                desc: "Every platform I build starts with security as a foundation, not an afterthought. Your business and your customers' data are always protected.",
              },
              {
                icon: "🌍",
                title: "Built for Africa",
                desc: "I design for real African infrastructure — low bandwidth, mobile-first, WhatsApp-native and mobile money ready. Not just adapted, but purpose-built.",
              },
            ].map((v) => (
              <div
                key={v.title}
                className="bg-[#161E2E] border border-white/[0.07] rounded-2xl p-8 hover:border-[#D97D54]/20 transition-all"
              >
                <span className="text-3xl mb-5 block">{v.icon}</span>
                <h3 className="font-sans font-bold text-[17px] text-white mb-3">
                  {v.title}
                </h3>
                <p className="text-[14px] text-[#E8E2D9]/50 leading-[1.7]">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section
        ref={skillsRef}
        className={`py-20 border-b border-white/[0.07] transition-all duration-700 ease-out ${skillsInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <span className="text-[11px] font-bold tracking-[0.22em] uppercase text-[#D97D54] block mb-4">
            Skills & Stack
          </span>
          <h2 className="font-display font-black text-4xl text-white mb-12">
            What I build <em className="text-[#D97D54] not-italic">with</em>
          </h2>
          <div className="flex flex-wrap gap-3">
            {[
              "React",
              "Node.js",
              "Next.js",
              "Tailwind CSS",
              "JavaScript",
              "Python",
              "PostgreSQL",
              "MongoDB",
              "REST APIs",
              "WhatsApp Business API",
              "USSD",
              "Mobile Money APIs",
              "Claude AI",
              "GitHub",
              "Vite",
              "Figma",
            ].map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full bg-[#161E2E] border border-white/[0.07] text-[13px] text-[#E8E2D9]/60 hover:border-[#D97D54]/30 hover:text-white transition-all cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        ref={ctaRef}
        className={`py-20 transition-all duration-700 ease-out ${ctaInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-center">
          <h2 className="font-display font-black text-4xl text-white mb-4">
            Ready to work{" "}
            <em className="text-[#D97D54] not-italic">together?</em>
          </h2>
          <p className="text-[16px] text-[#E8E2D9]/50 mb-8 max-w-md mx-auto">
            Let's talk about your business and how I can help you build the
            platform it deserves.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-[#D97D54] text-white font-semibold text-[15px] hover:bg-[#c96b42] transition-all hover:-translate-y-0.5"
            >
              Get in Touch
            </Link>
            <Link
              to="/portfolio"
              className="px-8 py-4 rounded-full border border-white/10 text-white font-semibold text-[15px] hover:bg-white/5 transition-all"
            >
              View My Work →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
