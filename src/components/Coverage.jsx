import React from "react";
import { SectionEyebrow } from "./ui/SectionEyebrow.jsx";
import { COVERAGE_AREAS } from "../data/content.js";

export function Coverage() {
  return (
    <section className="py-20 border-y border-navy-900/10 dark:border-ice-50/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-5 gap-12 items-center">
        <div className="lg:col-span-2">
          <SectionEyebrow>Coverage</SectionEyebrow>
          <h2 className="font-display font-bold text-2xl sm:text-3xl tracking-tight">
            Wherever you are in Lagos, we're never far.
          </h2>
          <p className="mt-4 text-navy-900/65 dark:text-ice-50/60 leading-relaxed">
            Our fleet is positioned across the mainland and island for fast response times,
            with extended coverage on major expressways.
          </p>
        </div>
        <div className="lg:col-span-3 flex flex-wrap gap-3">
          {COVERAGE_AREAS.map((a) => (
            <span
              key={a}
              className="px-4 py-2 rounded-full text-sm font-medium bg-highway-500/8 dark:bg-highway-400/10 text-navy-900 dark:text-ice-50/85 border border-highway-500/15 dark:border-highway-300/15"
            >
              {a}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
