import React from "react";

export function RouteDivider({ flip = false }) {
  return (
    <div className="relative w-full h-16 overflow-hidden" aria-hidden="true">
      <svg viewBox="0 0 1200 60" preserveAspectRatio="none" className="w-full h-full">
        <path
          d={flip ? "M0 50 Q300 10 600 30 T1200 20" : "M0 20 Q300 50 600 30 T1200 40"}
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-highway-400/40 dark:text-highway-300/30 route-line"
        />
      </svg>
    </div>
  );
}
