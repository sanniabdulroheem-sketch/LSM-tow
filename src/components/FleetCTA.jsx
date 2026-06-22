import React from "react";
import { Icon } from "../assets/icons.jsx";
import { Badge } from "./ui/Badge.jsx";
import { PrimaryButton, SecondaryButton } from "./ui/Buttons.jsx";
import { FLEET_METRICS, WHATSAPP_LINK } from "../data/content.js";

export function FleetCTA() {
  return (
    <section className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="relative rounded-3xl bg-navy-900 overflow-hidden">
          <div className="absolute inset-0 ticket-grid-bg opacity-25" />
          <div className="absolute -right-20 -top-20 w-72 h-72 bg-highway-500/30 rounded-full blur-3xl" />
          <div className="relative grid lg:grid-cols-5 gap-10 items-center p-10 sm:p-14">
            <div className="lg:col-span-3">
              <Badge>For dealerships &amp; fleets</Badge>
              <h2 className="mt-5 font-display font-bold text-3xl sm:text-4xl tracking-tight text-ice-50">
                Roadside cover for your entire fleet, on one dashboard.
              </h2>
              <p className="mt-4 text-ice-50/65 text-lg leading-relaxed max-w-xl">
                Give your dealership, logistics fleet, or corporate vehicles guaranteed rescue
                coverage with SLA backed response times and live reporting.
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-3.5">
                <PrimaryButton href={WHATSAPP_LINK}>Talk to our team</PrimaryButton>
                <SecondaryButton href="#pricing" className="!border-ice-50/20 !text-ice-50 hover:!bg-ice-50/10">
                  View fleet pricing
                </SecondaryButton>
              </div>
            </div>
            <div className="lg:col-span-2 grid grid-cols-2 gap-4">
              {FLEET_METRICS.map((m, i) => (
                <div key={i} className="bg-ice-50/5 border border-ice-50/10 rounded-xl p-4">
                  <Icon path={m.icon} className="w-5 h-5 text-highway-300" />
                  <p className="mt-3 font-display font-bold text-xl text-ice-50">{m.value}</p>
                  <p className="text-xs text-ice-50/55 mt-0.5">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
