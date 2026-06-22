import React, { useState, useEffect } from "react";
import { Icon, icons } from "../assets/icons.jsx";
import { WHATSAPP_LINK } from "../data/content.js";

export function FloatingCTA() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Request rescue on WhatsApp"
      className={`fixed bottom-6 right-5 sm:right-8 z-40 flex items-center gap-2.5 pl-4 pr-5 py-3.5 rounded-full bg-highway-500 hover:bg-highway-400 text-white font-semibold text-sm shadow-glow transition-all duration-300 ${
        show ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <span className="relative flex">
        <Icon path={icons.whatsapp} className="w-5 h-5" strokeWidth={2} />
      </span>
      Rescue Me
    </a>
  );
}
