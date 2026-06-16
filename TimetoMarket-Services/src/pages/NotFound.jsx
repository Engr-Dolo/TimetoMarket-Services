import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0A0F1A] flex items-center justify-center px-6 pt-[68px]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <div className="font-display font-black text-[120px] md:text-[160px] text-white/[0.04] leading-none select-none mb-4">
          404
        </div>
        <div className="text-5xl mb-6">🔍</div>
        <h1 className="font-display font-black text-3xl md:text-4xl text-white mb-4">
          Page not found
        </h1>
        <p className="text-[#E8E2D9]/50 text-[14px] md:text-[16px] mb-8 leading-[1.7]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col xs:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="px-7 py-3.5 rounded-full bg-[#D97D54] text-white font-semibold text-[14px] hover:bg-[#c96b42] active:scale-95 transition-all inline-flex justify-center min-h-[48px] items-center"
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="px-7 py-3.5 rounded-full border border-white/10 text-white font-semibold text-[14px] hover:bg-white/5 active:scale-95 transition-all inline-flex justify-center min-h-[48px] items-center"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
