"use client"

import { HeroSection } from "@/components/sections/HeroSection"
import { ServicesSection } from "@/components/sections/ServicesSection"
import { AboutSection } from "@/components/sections/AboutSection"
import { PlayDayPassesSection } from "@/components/sections/PlayDayPassesSection"
import { BalloonGarlandsSection } from "@/components/sections/BalloonGarlandsSection"
import { MembershipSection } from "@/components/sections/MembershipSection"

export default function Index() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Services Section */}
      <ServicesSection />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* About Section */}
      <AboutSection />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Play Day Passes Section */}
      <PlayDayPassesSection />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Balloon Garlands Section */}
      <BalloonGarlandsSection />

      {/* White Gap */}
      <div className="bg-white h-3 lg:h-4"></div>

      {/* Monthly Membership Section */}
      <MembershipSection />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>
    </div>
  )
}
