import { icons } from "./icons";

export const siteConfig = {
  name: "Play Atrium",
  tagline: "Where families play, connect, and celebrate together.",
  logoWhite: "/logo-white.png",
  logoColor: "/logo.svg",
  becomeMemberLink: "#",
  contact: {
    address: "10640 Northwest\nFwy, Houston, TX\n77092",
    addressLine1: "10640 Northwest Fwy",
    addressLine2: "Houston, TX 77092",
    mapsLink: "https://maps.app.goo.gl/g8QxNj3HQzpDiowU6",
    phone: "", // Add if available
    emails: [
      "royden@lankylandtx.com",
      "jeffery@lankylandtx.com",
    ]
  },
  hours: [
    { label: "Monday - Friday", time: "10:00 am - 6:00 pm" },
    { label: "Saturday", time: "9:00 Am - 6:00 Pm" },
    { label: "Sunday", time: "11:00 AM - 5:00 PM" },
  ],
  hoursNote: "* Full Facility Rental Available",
  navLinks: [
    { label: "Parties & Events", href: "/parties-events" },
    { label: "About Us", href: "/aboutus" },
    { label: "Custom Decoration", href: "/custom-decorations" },
    { label: "Contact Us", href: "/contactus" },
    { label: "Gallery", href: "/gallery" },
  ],
  socials: [
    {
      name: "Instagram",
      href: "#",
      icon: icons.instagram,
    },
    {
      name: "Facebook",
      href: "#",
      icon: icons.facebook,
    },
    {
      name: "TikTok",
      href: "#",
      icon: icons.tiktok,
    },
  ],
} as const;
