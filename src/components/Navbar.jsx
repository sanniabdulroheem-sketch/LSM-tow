import React, { useState, useEffect } from "react";
import { Icon, icons } from "../assets/icons.jsx";
import { PrimaryButton } from "./ui/Buttons.jsx";
import { NAV_LINKS, WHATSAPP_LINK, PHONE_NUMBER } from "../data/content.js";

export function Navbar({ dark, setDark }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ice-50/90 dark:bg-navy-950/90 backdrop-blur-md shadow-[0_1px_0_0_rgba(11,42,74,0.08)]"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 h-[72px] flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-navy-900 dark:bg-highway-500">
            <Icon path={icons.truck} className="w-5 h-5 text-ice-50" strokeWidth={2} />
          </span>
          <span className="font-display font-bold text-lg tracking-tight leading-none">
            LSM<span className="text-highway-500 dark:text-highway-300">.</span>
            <span className="block text-[10px] font-mono font-medium tracking-[0.18em] text-navy-900/50 dark:text-ice-50/50 uppercase mt-0.5">
              Lanre Shittu Motors
            </span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-navy-900/70 dark:text-ice-50/70 hover:text-highway-500 dark:hover:text-highway-300 transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-navy-900/10 dark:border-ice-50/15 text-navy-900 dark:text-hazard-500 hover:bg-navy-900/5 dark:hover:bg-ice-50/5 transition-colors"
          >
            <Icon path={dark ? icons.sun : icons.moon} className="w-[18px] h-[18px]" />
          </button>
          <a
            href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`}
            className="text-sm font-semibold flex items-center gap-2 px-4 py-2.5 rounded-xl text-navy-900 dark:text-ice-50 hover:text-highway-500 dark:hover:text-highway-300 transition-colors"
          >
            <Icon path={icons.phone} className="w-4 h-4" />
            {PHONE_NUMBER}
          </a>
          <PrimaryButton href={WHATSAPP_LINK} icon={false} className="!py-2.5">
            <Icon path={icons.whatsapp} className="w-4 h-4" strokeWidth={2} />
            Rescue Me
          </PrimaryButton>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            aria-label="Toggle dark mode"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-navy-900/10 dark:border-ice-50/15 text-navy-900 dark:text-hazard-500"
          >
            <Icon path={dark ? icons.sun : icons.moon} className="w-[18px] h-[18px]" />
          </button>
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            className="w-10 h-10 rounded-full flex items-center justify-center border border-navy-900/10 dark:border-ice-50/15"
          >
            <Icon path={open ? icons.close : icons.menu} className="w-5 h-5" />
          </button>
        </div>
      </nav>

      {open && (
        <div className="lg:hidden bg-ice-50 dark:bg-navy-950 border-t border-navy-900/10 dark:border-ice-50/10 px-5 py-6 flex flex-col gap-5">
          {NAV_LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-base font-medium">
              {l.label}
            </a>
          ))}
          <a href={`tel:${PHONE_NUMBER.replace(/\s/g, "")}`} className="text-base font-semibold flex items-center gap-2">
            <Icon path={icons.phone} className="w-4 h-4" /> {PHONE_NUMBER}
          </a>
          <PrimaryButton href={WHATSAPP_LINK} icon={false} className="w-full">
            <Icon path={icons.whatsapp} className="w-4 h-4" strokeWidth={2} /> Rescue Me Now
          </PrimaryButton>
        </div>
      )}
    </header>
  );
}
