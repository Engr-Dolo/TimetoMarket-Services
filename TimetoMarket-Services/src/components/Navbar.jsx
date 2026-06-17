import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import logo from "../assets/logo.svg";

function MagneticButton({ children, className, to, href, onClick }) {
  const ref = useRef(null);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const handleMouseLeave = () => {
    ref.current.style.transform = "translate(0px, 0px)";
    ref.current.style.transition =
      "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
  };

  const handleMouseEnter = () => {
    ref.current.style.transition = "transform 0.1s ease";
  };

  return (
    <NavLink
      to={to}
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
      onClick={onClick}
    >
      {children}
    </NavLink>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/portfolio", label: "Portfolio" },
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "bg-[#0A0F1A]/85 backdrop-blur-2xl border-b border-white/[0.06] shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-[68px] flex items-center justify-between">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
            <NavLink to="/" className="flex items-center leading-none">
              <img
                src={logo}
                alt="TimetoMarket-Services"
                className="h-8 w-auto block"
              />
            </NavLink>
          </motion.div>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-1 relative">
            {links.map(({ to, label }) => (
              <li key={to} className="relative">
                <NavLink
                  to={to}
                  end={to === "/"}
                  onMouseEnter={() => setHoveredLink(label)}
                  onMouseLeave={() => setHoveredLink(null)}
                  className={({ isActive }) =>
                    `relative text-[13px] font-medium px-4 py-2 rounded-full transition-colors duration-200 block ${
                      isActive
                        ? "text-white"
                        : "text-[#E8E2D9]/50 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {/* Hover background */}
                      <AnimatePresence>
                        {hoveredLink === label && (
                          <motion.span
                            layoutId="nav-hover"
                            className="absolute inset-0 bg-white/[0.06] rounded-full"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                          />
                        )}
                      </AnimatePresence>
                      {/* Active indicator */}
                      {isActive && (
                        <motion.span
                          layoutId="nav-active"
                          className="absolute inset-0 bg-white/[0.08] rounded-full"
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{label}</span>
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="hidden md:block">
            <MagneticButton
              to="/contact"
              className="relative overflow-hidden px-5 py-2.5 rounded-full bg-[#D97D54] text-white font-semibold text-[13px] group block"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get Started
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                >
                  →
                </motion.span>
              </span>
              <span className="absolute inset-0 bg-[#c96b42] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 rounded-full" />
            </MagneticButton>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 relative z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={
                menuOpen ? { opacity: 0, scaleX: 0 } : { opacity: 1, scaleX: 1 }
              }
              className="block w-6 h-0.5 bg-white"
              transition={{ duration: 0.3 }}
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
              className="block w-6 h-0.5 bg-white origin-center"
              transition={{ duration: 0.3 }}
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-[90] bg-[#0A0F1A]/97 backdrop-blur-2xl flex flex-col items-center justify-center gap-6"
          >
            {[...links, { to: "/contact", label: "Get Started" }].map(
              ({ to, label }, i) => (
                <motion.div
                  key={to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                >
                  <NavLink
                    to={to}
                    end={to === "/"}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-[32px] font-display font-black transition-colors duration-200 ${
                        isActive || label === "Get Started"
                          ? "text-[#D97D54]"
                          : "text-white hover:text-[#D97D54]"
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </motion.div>
              ),
            )}

            {/* Contact info in mobile menu */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-8 text-center"
            >
              <p className="text-[13px] text-[#E8E2D9]/30 mb-2">
                Reach out directly
              </p>
              <a
                href="https://wa.me/919266833394"
                className="text-[14px] text-[#D97D54] font-medium"
              >
                +91 92668 33394
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
