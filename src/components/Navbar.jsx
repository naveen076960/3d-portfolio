import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-4 sm:py-5 fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#050816]/80 backdrop-blur-md border-b border-[#00f7ff]/20 shadow-[0_5px_20px_rgba(0,247,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* === LOGO & SYSTEM ID === */}
        <Link
          to="/"
          className="flex items-center gap-3 min-w-fit group"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-8 h-8 sm:w-9 sm:h-9 object-contain group-hover:animate-pulse"
          />

          <div className="text-white text-[20px] sm:text-[18px] font-bold cursor-pointer flex items-center font-mono">
            <span className="text-[#00f7ff] mr-2 opacity-70">&gt;</span>
            NAVEEN
            <span className="hidden sm:block text-[#915eff] ml-2 text-sm text-[18px]">
              // FULLSTACK
            </span>
            {/* Blinking Terminal Cursor */}
            <span className="w-2 h-4 bg-[#00f7ff] ml-2 animate-pulse"></span>
          </div>
        </Link>

        {/* === DESKTOP NAV LINKS === */}
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`font-mono text-[14px] uppercase tracking-widest transition-colors duration-200 ${
                active === nav.title
                  ? "text-[#00f7ff] drop-shadow-[0_0_8px_rgba(0,247,255,0.8)]"
                  : "text-gray-400 hover:text-white"
              } cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`} className="flex items-center">
                {active === nav.title && (
                  <span className="text-[#915eff] mr-1">[</span>
                )}
                {nav.title}
                {active === nav.title && (
                  <span className="text-[#915eff] ml-1">]</span>
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* === MOBILE MENU TOGGLE === */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          {/* === MOBILE MENU DROPDOWN === */}
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#050816]/95 border border-[#00f7ff]/30 backdrop-blur-xl absolute top-16 right-4 sm:right-0 mx-0 sm:mx-4 my-2 min-w-[140px] z-10 rounded-md shadow-[0_0_25px_rgba(0,247,255,0.15)]`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-mono uppercase tracking-wider cursor-pointer text-[14px] ${
                    active === nav.title ? "text-[#00f7ff]" : "text-gray-400"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>&gt; {nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
