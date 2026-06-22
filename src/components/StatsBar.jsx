import React from "react";
import { useInView } from "../hooks/useInView.js";
import { useCountUp } from "../hooks/useCountUp.js";
import { STATS } from "../data/content.js";

function StatItem({ stat }) {
  const [ref, inView] = useInView(0.5);
  const count = useCountUp(stat.value, 1800, inView);
  return (
    <div ref={ref} className="text-center sm:text-left">
      <p className="font-mono font-bold text-3xl sm:text-4xl tracking-tight text-white">
        {count.toLocaleString()}
        {stat.suffix}
      </p>
      <p className="mt-1.5 text-sm text-ice-50/60">{stat.label}</p>
    </div>
  );
}

export function StatsBar() {
  return (
    <section className="bg-navy-900 dark:bg-navy-900/60 py-14 relative overflow-hidden">
      <div className="absolute inset-0 ticket-grid-bg opacity-20" />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative grid grid-cols-2 sm:grid-cols-4 gap-8">
        {STATS.map((s, i) => (
          <StatItem key={i} stat={s} />
        ))}
      </div>
    </section>
  );
}
