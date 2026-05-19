import { useState, useEffect } from "react";
import { correctPath } from "../utils/pathUtils";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Sofien Meftahi
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name }) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-4">
          <a href="#contact" className="contact-btn group">
            <div className="inner">
              <span>Contact me</span>
            </div>
          </a>

          <a 
            href={correctPath("/images/SofienMeftahi_CV.pdf")} 
            target="_blank" 
            rel="noopener noreferrer"
            className="group"
          >
            <div className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-bold transition-all duration-300 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]">
              <span>My Resume</span>
              <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3v10m0 0l-3.5-3.5M10 13l3.5-3.5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="15" width="14" height="2" rx="1" fill="#ffffff"/></svg>
            </div>
          </a>
        </div>

      </div>
    </header>
  );
}

export default NavBar;