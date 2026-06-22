import React from "react";
import { Icon, icons } from "../assets/icons.jsx";
import { PrimaryButton, SecondaryButton } from "./ui/Buttons.jsx";
import { WHATSAPP_LINK, PHONE_NUMBER } from "../data/content.js";

export function FinalCTA() {
  return (
    <section className="py-24 sm:py-28">
      <div className="max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <h2 className="font-display font-bold text-3xl sm:text-5xl tracking-tight leading-tight">
          Don't wait by the roadside.
          <span className="block text-highway-500 dark:text-highway-300">LSM is one tap away.</span>
        </h2>
        <p className="mt-5 text-lg text-navy-900/65 dark:text-ice-50/60 max-w-xl mx-auto">
          Save our number now, so when trouble finds you, help already knows the way.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3.5 justify-center">
          <PrimaryButton href={WHATSAPP_LINK}>
            <Icon path={icons.whatsapp} className="w-4 h-4" strokeWidth={2} /> Message us on WhatsApp
          </PrimaryButton>
          <SecondaryButton href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}>
            <Icon path={icons.phone} className="w-4 h-4" /> Call {PHONE_NUMBER}
          </SecondaryButton>
        </div>
      </div>
    </section>
  );
}
