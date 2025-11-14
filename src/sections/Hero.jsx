import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import AnimatedCounter from "../components/AnimatedCounter";
import Button from "../components/Button";
import { words } from "../constants";
import React, { Suspense } from 'react';
const HeroExperience = React.lazy(() => import('../components/models/hero_models/HeroExperience'));
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.2 });
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
    );
  });

  return (
    <section id="hero" className="relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>
      <div className="hero-layout">
        {/* LEFT: Hero Content */}

<header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
  <div className="hero-text">
    <h1>
      Hi, I’m <span className="font-bold">Sofien Meftahi</span>
    </h1>
        <h2 className="md:text-3xl text-xl mt-2">
      Master’s student (Bac+5) in Data Analytics & Business Intelligence
    </h2>
  </div>
  <p className="text-white-50 md:text-xl relative z-10 pointer-events-none mt-4 max-w-2xl leading-relaxed">
    <span className="block mb-2">
      I love <b>turning data into actionable insights</b> and building <b>smart tools</b> that help people make better decisions.
    </span>
    <span className="block mb-2">
      I’ve worked on <b>real-world projects</b> in <b>data analysis</b>, <b>machine learning</b>, and <b>dashboard development</b> using <b>Python</b>, <b>Power BI</b>, and <b>SQL</b>. Every project taught me how to <b>solve problems creatively</b> and deliver value.
    </span>
    <span className="block mb-2">
      I’m always looking for <b>exciting challenges</b> and opportunities to collaborate on tech projects that <b>make an impact</b>. Let’s turn data into decisions together!
    </span>
  </p>



          <Button
            text="See My Work"
            className="md:w-80 md:h-16 w-60 h-12"
            id="counter"
          />
        </header>
        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout">
            {inView && (
              <Suspense fallback={<div style={{height: '100%', width: '100%'}} />}> 
                <HeroExperience />
              </Suspense>
            )}
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
};

export default Hero;
