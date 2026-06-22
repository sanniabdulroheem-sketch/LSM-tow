import React, { useState } from "react";
import { Icon, icons } from "../assets/icons.jsx";
import { SectionEyebrow } from "./ui/SectionEyebrow.jsx";
import { FAQS } from "../data/content.js";

function FAQItem({ item, isOpen, onClick }) {
  return (
    <div className="border-b border-navy-900/10 dark:border-ice-50/10">
      <button onClick={onClick} className="w-full py-6 flex items-center justify-between gap-6 text-left">
        <span className="font-display font-semibold text-base sm:text-lg">{item.q}</span>
        <span
          className={`shrink-0 w-8 h-8 rounded-full border border-navy-900/15 dark:border-ice-50/15 flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-45 bg-highway-500 border-highway-500 text-white" : ""
          }`}
        >
          <Icon path={icons.close} className="w-4 h-4" strokeWidth={2} />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100 pb-6" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <p className="text-navy-900/65 dark:text-ice-50/60 leading-relaxed pr-10">{item.a}</p>
        </div>
      </div>
    </div>
  );
}

export function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-24 sm:py-32 bg-white dark:bg-navy-900/40">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">
        <div className="text-center">
          <div className="flex justify-center">
            <SectionEyebrow>FAQ</SectionEyebrow>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">Questions, answered.</h2>
        </div>
        <div className="mt-12">
          {FAQS.map((f, i) => (
            <FAQItem key={i} item={f} isOpen={open === i} onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}
