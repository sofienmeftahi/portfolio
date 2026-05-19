import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Button from "../components/Button";
import { words } from "../constants";
import React, { Suspense } from 'react';
const HeroExperience = React.lazy(() => import('../components/models/hero_models/HeroExperience'));
import { useInView } from 'react-intersection-observer';
// 1. استيراد دالة تصحيح المسار
import { correctPath } from "../utils/pathUtils";

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
        {/* 2. تطبيق correctPath على مسار صورة الخلفية */}
        <img src={correctPath("/images/bg.png")} alt="" />
      </div>
      <div className="hero-layout">
        {/* LEFT: Hero Content */}

        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="hero-text">
            <h1>
              Hi, I’m <span className="font-bold">Sofien Meftahi</span>
            </h1>
            <h2 className="md:text-3xl text-xl mt-2">
              Junior Data Analyst & BI Developer | AI/LLM Integration Specialist
            </h2>
          </div>
          <p className="text-white-50 md:text-xl text-base relative z-10 pointer-events-none mt-5 max-w-2xl leading-relaxed">
            <span className="block mb-3">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 via-blue-500/10 to-purple-500/10 border border-cyan-400/30 text-cyan-200 text-sm md:text-base font-semibold mb-3 backdrop-blur-sm shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                AI & Data Professional | DP-600 Certified
              </span>
            </span>
            <span className="block mb-3">
              I specialize in <b className="text-cyan-300">turning complex data into actionable insights</b> and building <b className="text-blue-300">AI-powered analytics solutions</b> that drive data-informed decisions.
            </span>
            <span className="block mb-3">
              Expert in <b className="text-purple-300">LLM integration</b>, <b className="text-cyan-300">data analysis</b>, <b className="text-blue-300">machine learning</b>, and <b className="text-purple-300">dashboard development</b> using <b className="text-yellow-300">Python</b>, <b className="text-orange-300">Power BI</b>, <b className="text-cyan-300">Microsoft Fabric</b>, and <b className="text-blue-300">SQL</b>.
            </span>
            <span className="block mb-3">
              Passionate about building <b className="text-cyan-300">intelligent tools</b> that let users query data in natural language. Let’s transform data into strategic decisions together!
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
    </section>
  );
};

export default Hero;