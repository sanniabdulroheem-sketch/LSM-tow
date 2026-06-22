import React, { useState } from "react";
import { Icon, icons } from "../assets/icons.jsx";
import servicesImage from "../assets/services-image.jpeg";
import { SectionEyebrow } from "./ui/SectionEyebrow.jsx";
import { SERVICES, WHATSAPP_LINK } from "../data/content.js";

function ServiceCard({ service }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="group relative bg-white dark:bg-navy-900 rounded-2xl border border-navy-900/10 dark:border-ice-50/10 p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-highway-500/10 hover:border-highway-500/30"
    >
      <div className="w-12 h-12 rounded-xl bg-highway-500/10 dark:bg-highway-400/15 flex items-center justify-center text-highway-500 dark:text-highway-300 group-hover:bg-highway-500 group-hover:text-white transition-colors duration-300">
        <Icon path={service.icon} className="w-6 h-6" />
      </div>
      <h3 className="mt-5 font-display font-semibold text-lg">{service.title}</h3>
      <p className="mt-2 text-sm text-navy-900/65 dark:text-ice-50/60 leading-relaxed">{service.blurb}</p>
      <ul className="mt-4 space-y-2">
        {service.points.map((p, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-navy-900/70 dark:text-ice-50/60">
            <Icon path={icons.check} className="w-3.5 h-3.5 text-highway-500 dark:text-highway-300 shrink-0" strokeWidth={2.5} />
            {p}
          </li>
        ))}
      </ul>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-highway-500 dark:text-highway-300"
      >
        Request this service
        <Icon path={icons.arrowRight} className={`w-3.5 h-3.5 transition-transform ${hovered ? "translate-x-1" : ""}`} />
      </a>
    </div>
  );
}

export function Services() {
  return (
    <section id="services" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl">
          <SectionEyebrow>What we offer</SectionEyebrow>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
            Every roadside emergency, covered.
          </h2>
          <p className="mt-4 text-navy-900/65 dark:text-ice-50/60 text-lg leading-relaxed">
            From a flat tire on the school run to a full breakdown on the expressway,
            our dispatched units can handle it, fast, professional, and transparent.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-navy-900/10 dark:border-ice-50/10 bg-navy-50 dark:bg-navy-900">
          <img
            src={servicesImage}
            alt="Illustration showing roadside assistance services"
            className="w-full h-auto block"
          />
        </div>
        
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((s) => (
            <ServiceCard key={s.key} service={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
