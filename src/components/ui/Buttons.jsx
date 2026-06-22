import React from "react";
import { Icon, icons } from "../../assets/icons.jsx";

export function PrimaryButton({ children, href, onClick, className = "", icon = true }) {
  const Comp = href ? "a" : "button";
  return (
    <Comp
      href={href}
      onClick={onClick}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={`group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-highway-500 hover:bg-highway-400 text-white font-semibold text-sm shadow-glow transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 ${className}`}
    >
      {children}
      {icon && <Icon path={icons.arrowRight} className="w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </Comp>
  );
}

export function SecondaryButton({ children, href, onClick, className = "" }) {
  const Comp = href ? "a" : "button";
  return (
    <Comp
      href={href}
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-navy-900/15 dark:border-ice-50/20 text-navy-900 dark:text-ice-50 font-semibold text-sm hover:bg-navy-900/5 dark:hover:bg-ice-50/5 transition-colors duration-200 ${className}`}
    >
      {children}
    </Comp>
  );
}
