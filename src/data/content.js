import { icons } from "../assets/icons.jsx";

export const SERVICES = [
  {
    key: "towing",
    icon: icons.truck,
    title: "Towing & Recovery",
    blurb: "Flatbed and wheel lift towing for cars, SUVs and light commercial vehicles, anywhere in Lagos.",
    points: ["Flatbed & wheel lift trucks", "Accident & breakdown recovery", "Long distance interstate towing"],
  },
  {
    key: "battery",
    icon: icons.battery,
    title: "Jump Start",
    blurb: "Flat battery on a Monday morning? A technician reaches you and gets your engine running again.",
    points: ["On the spot battery boost", "Battery health check", "Replacement battery sourcing"],
  },
  {
    key: "fuel",
    icon: icons.fuel,
    title: "Emergency Fuel Delivery",
    blurb: "Ran out of fuel on the expressway? We deliver petrol or diesel directly to your vehicle.",
    points: ["Metered, accurate delivery", "Petrol & diesel available", "No jerrycan risk"],
  },
  {
    key: "tire",
    icon: icons.tire,
    title: "Flat Tire Change",
    blurb: "Safe, fast tire changes on the roadside, including spare tire fitting and basic tire repair.",
    points: ["Spare tire fitting", "Puncture assessment", "Tire pressure check"],
  },
  {
    key: "lock",
    icon: icons.lock,
    title: "Lockout Assistance",
    blurb: "Locked your keys inside? Our technicians safely unlock your vehicle without causing damage.",
    points: ["Non destructive entry", "Car & SUV coverage", "Available day or night"],
  },
  {
    key: "wrench",
    icon: icons.wrench,
    title: "Mobile Mechanic",
    blurb: "Minor mechanical faults diagnosed and fixed on the spot, so you're not always towed unnecessarily.",
    points: ["On site diagnostics", "Minor repairs", "Honest tow or fix advice"],
  },
];

export const STATS = [
  { value: 12000, suffix: "+", label: "Rescues completed", mono: true },
  { value: 18, suffix: " min", label: "Avg. dispatch time", mono: true },
  { value: 24, suffix: "/7", label: "Always on duty", mono: true },
  { value: 98, suffix: "%", label: "Customer satisfaction", mono: true },
];

export const STEPS = [
  { title: "Send your location", desc: "Tap to share your GPS location on WhatsApp or call our dispatch line directly.", icon: icons.pin },
  { title: "We dispatch the nearest unit", desc: "Our control room assigns the closest available truck or technician to you.", icon: icons.mapTrack },
  { title: "Track your rescue", desc: "Get live ETA updates while your driver makes their way to you.", icon: icons.clock },
  { title: "Back on the road", desc: "Vehicle towed, fixed, or refuelled and you're safely on your way again.", icon: icons.check },
];

export const PRICING = [
  {
    name: "Pay As You Go",
    price: "From ₦15,000",
    desc: "For one off rescues, no commitment required.",
    features: ["Single rescue request", "Towing up to 10km included", "All service types available", "Pay after service"],
    featured: false,
  },
  {
    name: "LSM Roadside Plan",
    price: "₦8,500/mo",
    desc: "Unlimited peace of mind for individual drivers.",
    features: ["Unlimited rescue requests", "Priority dispatch (under 15 min)", "Free annual battery check", "Towing up to 25km included", "24/7 priority phone line"],
    featured: true,
  },
  {
    name: "Fleet & Business",
    price: "Custom",
    desc: "For dealerships, fleets and corporate clients.",
    features: ["Dedicated account manager", "Fleet dashboard & reporting", "Volume based pricing", "SLA backed response times", "Multi vehicle coverage"],
    featured: false,
  },
];

export const TESTIMONIALS = [
  { name: "Tobi Adelaja", role: "Lekki Phase 1", text: "Engine died on Third Mainland Bridge at 11pm. LSM had a truck with me in under twenty minutes. Calm, professional, no drama.", rating: 5 },
  { name: "Funmi Okorie", role: "Victoria Island", text: "I locked my keys in the car outside the office. The technician got me back in within ten minutes, no scratches, no fuss.", rating: 5 },
  { name: "Coscharis Fleet Ops", role: "Fleet Client", text: "We moved our entire dealership's roadside cover to LSM. Their dispatch reporting alone has saved us hours every week.", rating: 5 },
  { name: "Ibrahim Musa", role: "Ikeja GRA", text: "Ran out of fuel on the Lagos-Ibadan expressway. They delivered diesel straight to where I was parked. Genuinely relieved.", rating: 5 },
];

export const FAQS = [
  { q: "How fast can LSM reach me?", a: "Our average dispatch time across Lagos is 18 minutes, depending on traffic and your exact location. Roadside Plan members receive priority dispatch, typically under 15 minutes." },
  { q: "What areas do you cover?", a: "We currently cover all of Lagos mainland and island, including the Lagos–Ibadan and Lekki–Epe expressways. Interstate towing is available on request." },
  { q: "How do I pay for a rescue?", a: "You can pay by card, bank transfer, or USSD once the service is complete. Roadside Plan and Fleet members are billed on their existing plan." },
  { q: "Can you tow any type of vehicle?", a: "We tow sedans, SUVs, vans and light commercial vehicles. For heavy trucks or buses, contact our dispatch line to confirm equipment availability." },
  { q: "Is there a call-out fee?", a: "Pay As You Go rescues include a flat call out fee covering up to 10km of towing. Roadside Plan members have call out fees waived entirely." },
];

export const COVERAGE_AREAS = [
  "Lekki",
  "Victoria Island",
  "Ikoyi",
  "Ikeja",
  "Surulere",
  "Ajah",
  "Yaba",
  "Apapa",
  "Festac",
  "Lagos–Ibadan Expressway",
];

export const FLEET_METRICS = [
  { icon: icons.building, label: "Dealership partners", value: "40+" },
  { icon: icons.truck, label: "Fleet vehicles covered", value: "1,200+" },
  { icon: icons.clock, label: "SLA response", value: "< 20 min" },
  { icon: icons.doc, label: "Monthly reporting", value: "Included" },
];

export const FOOTER_COLUMNS = [
  { title: "Services", links: ["Towing & Recovery", "Jump Start", "Fuel Delivery", "Tyre Change", "Lockout Assistance", "Mobile Mechanic"] },
  { title: "Company", links: ["About LSM", "Careers", "Fleet & Business", "Safety Standards", "Blog"] },
  { title: "Support", links: ["FAQ", "Contact Dispatch", "Track My Rescue", "Terms of Service", "Privacy Policy"] },
];

export const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

export const WHATSAPP_LINK = "https://wa.me/2348000000000?text=Hi%20LSM.%20I%20need%20emergency%20rescue%20assistance";
export const PHONE_NUMBER = "+234 800 000 0000";
