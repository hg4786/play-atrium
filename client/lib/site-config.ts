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
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.7446648865675!2d-95.46094889999999!3d29.8139202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c68a15ae6745%3A0x2732b49113a3b5a!2s10640%20Northwest%20Fwy%2C%20Houston%2C%20TX%2077092%2C%20USA!5e0!3m2!1sen!2sin!4v1771412770511!5m2!1sen!2sin",
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
