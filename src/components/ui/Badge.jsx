import React from "react";

export function Badge({ children, tone = "blue" }) {
  const tones = {
    blue: "bg-highway-500/10 text-highway-500 dark:bg-highway-300/10 dark:text-highway-300 ring-highway-500/20",
    amber: "bg-hazard-500/10 text-hazard-600 dark:text-hazard-500 ring-hazard-500/30",
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide ring-1 ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
