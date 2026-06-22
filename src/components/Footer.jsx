import React from "react";
import { Icon, icons } from "../assets/icons.jsx";
import { FOOTER_COLUMNS, PHONE_NUMBER } from "../data/content.js";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-ice-50 pt-20 pb-10 relative overflow-hidden">
      <div className="absolute inset-0 ticket-grid-bg opacity-10" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2.5">
              <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-highway-500">
                <Icon path={icons.truck} className="w-5 h-5 text-white" strokeWidth={2} />
              </span>
              <span className="font-display font-bold text-lg">Lanre Shittu Motors</span>
            </div>
            <p className="mt-5 text-sm text-ice-50/55 leading-relaxed max-w-xs">
              Lagos' trusted 24/7 rescue, towing and roadside assistance partner.
              Safe, professional, and always nearby.
            </p>
            <div className="mt-6 flex items-center gap-2 text-sm text-ice-50/70">
              <Icon path={icons.mail} className="w-4 h-4 text-highway-300" />
              dispatch@lanreshittumotors.ng
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-ice-50/70">
              <Icon path={icons.phone} className="w-4 h-4 text-highway-300" />
              {PHONE_NUMBER}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_COLUMNS.map((col, i) => (
              <div key={i}>
                <p className="font-mono text-xs font-bold tracking-widest uppercase text-ice-50/40">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.links.map((l, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm text-ice-50/65 hover:text-highway-300 transition-colors">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-ice-50/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-ice-50/45">&copy; {year} Lanre Shittu Motors (LSM). All rights reserved.</p>
          <p className="text-xs text-ice-50/45 font-mono">Built for the road. Available 24/7.</p>
        </div>
      </div>
    </footer>
  );
}
