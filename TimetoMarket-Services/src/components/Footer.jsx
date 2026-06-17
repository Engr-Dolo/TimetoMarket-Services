import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

export default function Footer() {
  return (
    <footer className="bg-[#060C13] border-t border-white/[0.07]">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 md:px-12 pt-12 md:pt-16 pb-8">
        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-12 mb-10 md:mb-14">
          {/* Brand */}
          <div className="max-w-full md:max-w-[260px]">
            <img
              src={logo}
              alt="TimetoMarket-Services"
              className="h-8 w-auto mb-5"
            />
            <p className="text-[13px] text-[#E8E2D9]/40 leading-[1.7] mb-6">
              Premium, secured webapps and digital platforms for small and
              growing businesses across Liberia and beyond.
            </p>
            <div className="flex gap-3">
              {[
                {
                  icon: "💬",
                  href: "https://wa.me/919266833394",
                  label: "WhatsApp",
                },
                {
                  icon: "✉️",
                  href: "mailto:dev.engrpjdolo24@gmail.com",
                  label: "Email",
                },
                {
                  icon: "🐙",
                  href: "https://github.com/Engr-Dolo",
                  label: "GitHub",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full bg-[#161E2E] border border-white/[0.07] flex items-center justify-center text-[15px] hover:border-[#D97D54]/40 active:scale-95 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 md:flex md:flex-row gap-8 md:gap-14">
            <div>
              <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8E2D9]/30 mb-4">
                Navigate
              </h4>
              <div className="flex flex-col gap-3">
                {[
                  { to: "/", label: "Home" },
                  { to: "/portfolio", label: "Portfolio" },
                  { to: "/services", label: "Services" },
                  { to: "/about", label: "About" },
                  { to: "/contact", label: "Contact" },
                ].map(({ to, label }) => (
                  <Link
                    key={to}
                    to={to}
                    className="text-[13px] md:text-[14px] text-[#E8E2D9]/50 hover:text-[#D97D54] transition-colors min-h-[44px] flex items-center"
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[#E8E2D9]/30 mb-4">
                Contact
              </h4>
              <div className="flex flex-col gap-3">
                {[
                  {
                    href: "https://wa.me/919266833394",
                    label: "+91 92668 33394",
                  },
                  { href: "tel:0881087696", label: "0881087696" },
                  { href: "tel:0772027313", label: "0772027313" },
                  {
                    href: "mailto:dev.engrpjdolo24@gmail.com",
                    label: "Email me",
                  },
                ].map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="text-[13px] md:text-[14px] text-[#E8E2D9]/50 hover:text-[#D97D54] transition-colors min-h-[44px] flex items-center"
                  >
                    {c.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/[0.07] pt-6 flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
          <span className="text-[11px] md:text-[12px] text-[#E8E2D9]/25">
            © 2026 TimetoMarket-Services. Engr. P.J. Dolo.
          </span>
          <span className="text-[11px] md:text-[12px] text-[#E8E2D9]/25">
            Built with LOVE ❤️ for small businesses everywhere
          </span>
        </div>
      </div>
    </footer>
  );
}
