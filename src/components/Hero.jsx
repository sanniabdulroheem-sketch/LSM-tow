import React, { useState, useEffect } from "react";
import { Icon, icons } from "../assets/icons.jsx";
import { Badge } from "./ui/Badge.jsx";
import { PrimaryButton, SecondaryButton } from "./ui/Buttons.jsx";
import { WHATSAPP_LINK } from "../data/content.js";

export function Hero() {
  const [now, setNow] = useState(new Date());
  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(t);
  }, []);
  const timeStr = now.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  return (
    <section id="top" className="relative pt-36 pb-24 sm:pt-44 sm:pb-32 overflow-hidden ticket-grid-bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ice-50 dark:to-navy-950 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <Badge tone="amber">
              <span className="w-1.5 h-1.5 rounded-full bg-hazard-500 blink-dot" />
              Live dispatch across Lagos
            </Badge>

            <h1 className="mt-6 font-display font-bold text-[2.6rem] leading-[1.05] sm:text-6xl sm:leading-[1.04] tracking-tight">
              Stranded on the road?
              <span className="block text-highway-500 dark:text-highway-300 mt-1">Help is already on the way.</span>
            </h1>

            <p className="mt-6 text-lg text-navy-900/70 dark:text-ice-50/65 max-w-xl leading-relaxed">
              Lanre Shittu Motors runs Lagos' most dependable rescue and towing network,
              real drivers, real trucks, dispatched in minutes. Towing, fuel delivery,
              jump starts and more, day or night.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3.5">
              <PrimaryButton href={WHATSAPP_LINK}>
                <Icon path={icons.whatsapp} className="w-4 h-4" strokeWidth={2} />
                Request Rescue Now
              </PrimaryButton>
              <SecondaryButton href="#how-it-works">See how it works</SecondaryButton>
            </div>

            <div className="mt-10 flex items-center gap-6 text-sm text-navy-900/55 dark:text-ice-50/50">
              <div className="flex items-center gap-2">
                <Icon path={icons.shield} className="w-4 h-4 text-highway-500 dark:text-highway-300" />
                Verified, insured drivers
              </div>
              <div className="flex items-center gap-2">
                <Icon path={icons.clock} className="w-4 h-4 text-highway-500 dark:text-highway-300" />
                18 min avg. response
              </div>
            </div>
          </div>

          {/* Dispatch ticket visual */}
          <div className="relative">
            <div className="absolute -inset-6 bg-highway-500/10 dark:bg-highway-400/5 rounded-[2rem] blur-2xl -z-10" />
            <div className="float-y bg-white dark:bg-navy-900 rounded-2xl border border-navy-900/10 dark:border-ice-50/10 shadow-2xl shadow-navy-900/10 dark:shadow-black/40 overflow-hidden">
              <div className="bg-navy-900 dark:bg-navy-800 px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-hazard-500 pulse-ring" />
                  <span className="w-2.5 h-2.5 rounded-full bg-hazard-500 -ml-3.5" />
                  <span className="text-ice-50 font-mono text-xs font-semibold tracking-wider uppercase ml-1">
                    Active rescue ticket
                  </span>
                </div>
                <span className="text-ice-50/60 font-mono text-xs">{timeStr}</span>
              </div>

              <div className="p-5 sm:p-6 space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-mono text-navy-900/45 dark:text-ice-50/40 uppercase tracking-wider">
                      Ticket
                    </p>
                    <p className="font-display font-bold text-lg">#LSM-7741</p>
                  </div>
                  <Badge>In progress</Badge>
                </div>

                <div className="h-px bg-navy-900/10 dark:bg-ice-50/10" />

                <div className="space-y-3.5">
                  <div className="flex items-start gap-3">
                    <Icon path={icons.pin} className="w-4 h-4 mt-0.5 text-highway-500 dark:text-highway-300 shrink-0" />
                    <div>
                      <p className="text-xs text-navy-900/45 dark:text-ice-50/40">Pickup location</p>
                      <p className="text-sm font-medium">Lekki-Epe Expressway, near Chevron Toll</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon path={icons.truck} className="w-4 h-4 mt-0.5 text-highway-500 dark:text-highway-300 shrink-0" />
                    <div>
                      <p className="text-xs text-navy-900/45 dark:text-ice-50/40">Service</p>
                      <p className="text-sm font-medium">Flatbed towing — Toyota Camry</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon path={icons.users} className="w-4 h-4 mt-0.5 text-highway-500 dark:text-highway-300 shrink-0" />
                    <div>
                      <p className="text-xs text-navy-900/45 dark:text-ice-50/40">Assigned driver</p>
                      <p className="text-sm font-medium">Dayo F. &middot; Unit LSM-12</p>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-navy-900/10 dark:bg-ice-50/10" />

                <div className="flex items-center justify-between">
                  <span className="text-xs text-navy-900/45 dark:text-ice-50/40">Estimated arrival</span>
                  <span className="font-mono font-semibold text-highway-500 dark:text-highway-300">8 min</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-navy-900/10 dark:bg-ice-50/10 overflow-hidden">
                  <div className="h-full w-2/3 rounded-full bg-highway-500" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
