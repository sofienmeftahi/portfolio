import { useState, useEffect } from "react";

import { navLinks } from "../constants";

const NavBar = () => {
  // track if the user has scrolled down the page
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // create an event listener for when the user scrolls
    const handleScroll = () => {
      // check if the user has scrolled down at least 10px
      // if so, set the state to true
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // add the event listener to the window
    window.addEventListener("scroll", handleScroll);

    // cleanup the event listener when the component is unmounted
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

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
        <a href="/images/SofienMeftahi_CV.pdf" className="resume-btn group" target="_blank" rel="noopener noreferrer" style={{ marginLeft: '10px', display: 'inline-block' }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 22px',
            borderRadius: '8px',
            background: 'linear-gradient(90deg, #ffb347 0%, #ffcc33 100%)',
            color: '#222',
            fontWeight: 700,
            fontSize: '1rem',
            boxShadow: '0 2px 12px 0 rgba(255, 204, 51, 0.15)',
            transition: 'all 0.3s',
            border: 'none',
            cursor: 'pointer',
          }}
          className="resume-btn-inner"
          >
            <span>My Resume</span>
            <svg width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 3v10m0 0l-3.5-3.5M10 13l3.5-3.5" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><rect x="3" y="15" width="14" height="2" rx="1" fill="#222"/></svg>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
