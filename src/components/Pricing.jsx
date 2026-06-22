import React from "react";
import { Icon, icons } from "../assets/icons.jsx";
import { SectionEyebrow } from "./ui/SectionEyebrow.jsx";
import { PrimaryButton, SecondaryButton } from "./ui/Buttons.jsx";
import { PRICING, WHATSAPP_LINK } from "../data/content.js";

function PricingCard({ plan }) {
  return (
    <div
      className={`relative rounded-2xl p-8 flex flex-col ${
        plan.featured
          ? "bg-navy-900 text-ice-50 ring-2 ring-highway-400 shadow-2xl shadow-highway-500/20 lg:-translate-y-3"
          : "bg-white dark:bg-navy-900 border border-navy-900/10 dark:border-ice-50/10"
      }`}
    >
      {plan.featured && (
        <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-hazard-500 text-navy-950 text-xs font-bold px-3.5 py-1 rounded-full tracking-wide">
          MOST POPULAR
        </span>
      )}
      <h3 className={`font-display font-semibold text-lg ${plan.featured ? "text-ice-50" : ""}`}>{plan.name}</h3>
      <p className={`mt-2 text-sm ${plan.featured ? "text-ice-50/60" : "text-navy-900/60 dark:text-ice-50/55"}`}>
        {plan.desc}
      </p>
      <p className={`mt-6 font-display font-bold text-3xl tracking-tight ${plan.featured ? "text-ice-50" : ""}`}>
        {plan.price}
      </p>
      <ul className="mt-7 space-y-3 flex-1">
        {plan.features.map((f, i) => (
          <li key={i} className="flex items-start gap-2.5 text-sm">
            <Icon
              path={icons.check}
              className={`w-4 h-4 mt-0.5 shrink-0 ${plan.featured ? "text-hazard-500" : "text-highway-500 dark:text-highway-300"}`}
              strokeWidth={2.5}
            />
            <span className={plan.featured ? "text-ice-50/85" : "text-navy-900/75 dark:text-ice-50/70"}>{f}</span>
          </li>
        ))}
      </ul>
      {plan.featured ? (
        <PrimaryButton href={WHATSAPP_LINK} className="mt-8 w-full">
          Get this plan
        </PrimaryButton>
      ) : (
        <SecondaryButton href={WHATSAPP_LINK} className="mt-8 w-full !border-navy-900/15 dark:!border-ice-50/15">
          Get started
        </SecondaryButton>
      )}
    </div>
  );
}

export function Pricing() {
  return (
    <section id="pricing" className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="flex justify-center">
            <SectionEyebrow>Pricing</SectionEyebrow>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl tracking-tight">
            Simple, transparent rescue pricing.
          </h2>
          <p className="mt-4 text-navy-900/65 dark:text-ice-50/60 text-lg">
            No hidden charges. Know what you'll pay before help arrives.
          </p>
        </div>
        <div className="mt-16 grid lg:grid-cols-3 gap-7 lg:gap-6 items-stretch">
          {PRICING.map((p, i) => (
            <PricingCard key={i} plan={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
