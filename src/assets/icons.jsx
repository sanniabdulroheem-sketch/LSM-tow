import React from "react";

export const Icon = ({ path, className = "w-5 h-5", strokeWidth = 1.8 }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={strokeWidth}
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    {path}
  </svg>
);

export const icons = {
  truck: (
    <React.Fragment>
      <path d="M1 3h13v13H1z" />
      <path d="M14 8h4l3 3v5h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="17.5" cy="18.5" r="2.5" />
    </React.Fragment>
  ),
  battery: (
    <React.Fragment>
      <rect x="2" y="7" width="16" height="10" rx="1.5" />
      <path d="M22 10v4" />
      <path d="M8 10v4" />
      <path d="M6 12h4" />
    </React.Fragment>
  ),
  fuel: (
    <React.Fragment>
      <path d="M3 22V7l5-4h4l5 4v15" />
      <path d="M3 13h11" />
      <path d="M16 9l3.5 3.5a2 2 0 0 1 .5 1.4V19a1.5 1.5 0 0 1-3 0" />
      <circle cx="7.5" cy="17.5" r="1" />
    </React.Fragment>
  ),
  tyre: (
    <React.Fragment>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="3.4" />
      <path d="M12 3v5.6M12 15.4V21M3 12h5.6M15.4 12H21" />
    </React.Fragment>
  ),
  lock: (
    <React.Fragment>
      <rect x="4" y="11" width="16" height="9" rx="1.5" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </React.Fragment>
  ),
  wrench: <path d="M14.7 6.3a4 4 0 1 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.8 2.8-2-2 2.8-2.8z" />,
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.3 1.8.6 2.7a2 2 0 0 1-.5 2.1L8 9.8a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.8.5 2.7.6a2 2 0 0 1 1.9 2z" />
  ),
  whatsapp: (
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  ),
  pin: (
    <React.Fragment>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </React.Fragment>
  ),
  shield: <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11z" />,
  clock: (
    <React.Fragment>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 1.9" />
    </React.Fragment>
  ),
  check: <path d="M20 6 9 17l-5-5" />,
  sun: (
    <React.Fragment>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </React.Fragment>
  ),
  moon: <path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z" />,
  menu: <path d="M3 6h18M3 12h18M3 18h18" />,
  close: <path d="M18 6 6 18M6 6l12 12" />,
  arrowRight: <path d="M5 12h14M13 6l6 6-6 6" />,
  star: <path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.9L12 17.8 5.8 21l1.2-6.9-5-4.9 6.9-1L12 2z" />,
  building: (
    <React.Fragment>
      <rect x="4" y="2" width="16" height="20" />
      <path d="M9 22v-4h6v4M9 6h.01M15 6h.01M9 10h.01M15 10h.01M9 14h.01M15 14h.01" />
    </React.Fragment>
  ),
  mapTrack: (
    <React.Fragment>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="18" cy="18" r="2.5" />
      <path d="M8 7l8 10" />
    </React.Fragment>
  ),
  doc: (
    <React.Fragment>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M9 13h6M9 17h6" />
    </React.Fragment>
  ),
  users: (
    <React.Fragment>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9" />
      <path d="M16 3.1a4 4 0 0 1 0 7.8" />
    </React.Fragment>
  ),
  bolt: <path d="M13 2 3 14h7l-1 8 10-12h-7l1-8z" />,
  mail: (
    <React.Fragment>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </React.Fragment>
  ),
};
