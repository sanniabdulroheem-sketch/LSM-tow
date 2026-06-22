import React from "react";
import { Icon } from "../assets/icons.jsx";
import { SectionEyebrow } from "./ui/SectionEyebrow.jsx";
import { STEPS } from "../data/content.js";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 bg-white dark:bg-navy-900/40 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <SectionEyebrow>How it works</SectionEyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
            From distress call to towed away, in four steps.
          </h2>
        </div>

        <div className="mt-16 relative">
          <div className="hidden lg:block absolute top-7 left-0 right-0 h-px">
            <svg width="100%" height="2" className="overflow-visible">
              <line x1="0" y1="1" x2="100%" y2="1" stroke="currentColor" strokeWidth="2" className="text-highway-400/30 route-line" />
            </svg>
          </div>
          <div className="grid lg:grid-cols-4 gap-10 lg:gap-8 relative">
            {STEPS.map((step, i) => (
              <div key={i} className="relative">
                <div className="w-14 h-14 rounded-full bg-navy-900 dark:bg-highway-500 text-white flex items-center justify-center font-mono font-bold text-sm relative z-10">
                  <Icon path={step.icon} className="w-6 h-6" strokeWidth={1.8} />
                </div>
                <p className="mt-5 font-mono text-xs font-bold tracking-widest text-highway-500 dark:text-highway-300">
                  STEP {i + 1}
                </p>
                <h3 className="mt-1.5 font-display font-semibold text-lg">{step.title}</h3>
                <p className="mt-2 text-sm text-navy-900/65 dark:text-ice-50/60 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
