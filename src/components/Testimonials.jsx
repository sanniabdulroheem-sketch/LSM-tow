import React, { useRef } from "react";
import { Icon, icons } from "../assets/icons.jsx";
import { SectionEyebrow } from "./ui/SectionEyebrow.jsx";
import { TESTIMONIALS } from "../data/content.js";

function TestimonialCard({ t }) {
  return (
    <div className="shrink-0 w-[330px] sm:w-[380px] bg-white dark:bg-navy-900 rounded-2xl border border-navy-900/10 dark:border-ice-50/10 p-7">
      <div className="flex gap-1 text-hazard-500">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Icon key={i} path={icons.star} className="w-4 h-4" strokeWidth={1.2} />
        ))}
      </div>
      <p className="mt-4 text-[15px] leading-relaxed text-navy-900/80 dark:text-ice-50/75">"{t.text}"</p>
      <div className="mt-6 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-highway-500/15 dark:bg-highway-400/20 flex items-center justify-center font-display font-semibold text-sm text-highway-600 dark:text-highway-300">
          {t.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .slice(0, 2)}
        </div>
        <div>
          <p className="font-semibold text-sm">{t.name}</p>
          <p className="text-xs text-navy-900/50 dark:text-ice-50/45">{t.role}</p>
        </div>
      </div>
    </div>
  );
}

export function Testimonials() {
  const scrollRef = useRef(null);
  const scrollBy = (dir) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dir * 360, behavior: "smooth" });
  };
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-white dark:bg-navy-900/40">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <SectionEyebrow>Reviews</SectionEyebrow>
            <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
              Drivers/Car owners trust LSM when it matters most.
            </h2>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => scrollBy(-1)}
              aria-label="Previous"
              className="w-10 h-10 rounded-full border border-navy-900/15 dark:border-ice-50/15 flex items-center justify-center hover:bg-navy-900/5 dark:hover:bg-ice-50/5"
            >
              <Icon path={icons.arrowRight} className="w-4 h-4 rotate-180" />
            </button>
            <button
              onClick={() => scrollBy(1)}
              aria-label="Next"
              className="w-10 h-10 rounded-full border border-navy-900/15 dark:border-ice-50/15 flex items-center justify-center hover:bg-navy-900/5 dark:hover:bg-ice-50/5"
            >
              <Icon path={icons.arrowRight} className="w-4 h-4" />
            </button>
          </div>
        </div>
        <div
          ref={scrollRef}
          className="mt-12 flex gap-6 overflow-x-auto scrollbar-thin pb-4 -mx-5 px-5 sm:mx-0 sm:px-0 snap-x"
        >
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="snap-start">
              <TestimonialCard t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
