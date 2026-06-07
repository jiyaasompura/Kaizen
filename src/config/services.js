import { Globe, MessageCircle, Building2, PhoneCall } from "lucide-react";

export const SERVICES = [
  {
    title: "Custom Websites",
    icon: Globe,
    description:
      "Business websites, landing pages, and e-commerce — engineered for speed, SEO, and conversion.",
    bullets: ["Small Business", "Portfolio", "E-commerce", "Landing Pages"],
    span: "md:col-span-7",
  },
  {
    title: "AI Receptionist",
    icon: PhoneCall,
    description:
      "A human-like AI voice agent that answers calls, books appointments, and handles FAQs 24/7.",
    bullets: ["Inbound Calls", "Booking", "FAQs", "24/7"],
    comingSoon: true,
    span: "md:col-span-5",
  },
  {
    title: "WhatsApp Chatbots",
    icon: MessageCircle,
    description:
      "Lead capture, support automation, and appointment booking — directly inside WhatsApp.",
    bullets: ["Lead Gen", "Support", "Booking", "Broadcast"],
    span: "md:col-span-5",
  },
  {
    title: "Enterprise Solutions",
    icon: Building2,
    description:
      "Scalable web platforms, internal dashboards, and custom business systems built to last.",
    bullets: ["Dashboards", "APIs", "Integrations", "Internal Tools"],
    span: "md:col-span-7",
  },
];

export const INDUSTRIES = [
  "Healthcare",
  "Clinics",
  "Restaurants",
  "Hotels",
  "Real Estate",
  "Education",
  "Retail",
  "Startups",
  "Interior Designers",
  "Law Firms",
  "Gyms",
  "Salons",
  "E-commerce",
  "Corporate",
];
