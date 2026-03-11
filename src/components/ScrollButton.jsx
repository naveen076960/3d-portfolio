import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check how far down the user has scrolled
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 z-[100] p-2 bg-black/80 border-2 border-[#00f7ff]/70 group backdrop-blur-md shadow-[0_0_15px_rgba(0,247,255,0.2)] hover:border-[#915eff] hover:shadow-[0_0_25px_rgba(145,94,255,0.5)] transition-all duration-300 flex flex-col items-center justify-center overflow-hidden cursor-pointer"
        >
          {/* Animated Scanline Background inside the button */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f7ff]/20 to-transparent opacity-0 group-hover:opacity-100 translate-y-[-100%] group-hover:translate-y-[100%] transition-transform duration-1000 ease-linear repeat-infinite"></div>

          {/* Sharp Cyberpunk Arrow */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#00f7ff] group-hover:text-[#915eff] transition-colors relative z-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            {/* Square linecaps make it look mechanical */}
            <path
              strokeLinecap="square"
              strokeLinejoin="miter"
              d="M5 15l7-7 7 7"
            />
          </svg>

          {/* Terminal Text */}
          <span className="text-[9px] font-mono text-[#00f7ff] group-hover:text-[#915eff] mt-1 tracking-widest relative z-10 font-bold">
            SYS_UP
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollButton;
