import React from "react";

export function SectionEyebrow({ children }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      <span className="w-6 h-px bg-highway-500" />
      <span className="text-xs font-bold tracking-[0.2em] uppercase text-highway-500 dark:text-highway-300 font-mono">
        {children}
      </span>
    </div>
  );
}
