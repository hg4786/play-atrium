"use client";

import type React from "react";
import { Star } from "lucide-react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/lib/animationUtils";
import { MembershipSection } from "@/components/sections/MembershipSection";
import { BalloonGarlandsSection } from "@/components/sections/BalloonGarlandsSection";
import { PlayDayPassesSection } from "@/components/sections/PlayDayPassesSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CustomTheme } from "@/components/sections/CustomTheme";
import { PartyPackageComparisonSection } from "@/components/sections/PartyPackageComparisonSection";

export default function PartiesAndEvents() {
  return (
    <>
      {/* Parties & Events Hero Section */}
      <section
        className="bg-[#ebd5a8] py-20 md:py-32 px-6"
        style={
          {
            // backgroundImage: "linear-gradient(90deg, #FAEB85 0%, #FEE05C 100%)",
          }
        }
      >
        <div className="mx-auto text-center">
          <h1
            className="font-fredoka text-golden text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-6"
            style={{
              WebkitTextStroke: "3px #55613B",
            }}
          >
            Parties & Events
          </h1>
        </div>
      </section>

      {/* Full Facility Private Rental Section */}
      <section className="bg-olive relative py-10 md:py-16 lg:py-20 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative Stars */}
        <DecorativeStars />

        <div className="max-w-[1618px] mx-auto relative z-10">
          {/* Section Header */}
          <ScrollAnimation variant="bounce">
            <div className="text-center mb-6 md:mb-12">
              <p className="text-beige text-sm md:text-base font-medium mb-2">
                Private Events & Facility Rentals
              </p>
              <h2
                className="font-fredoka font-bold text-2xl md:text-5xl lg:text-[64px] text-golden text-center leading-tight tracking-[1.44px] lg:tracking-[3.84px] mb-3 md:mb-6"
                style={{
                  WebkitTextStroke: "1px #5E2E1C",
                }}
              >
                Full Facility Private Rental
              </h2>
              <p className="text-beige text-sm md:text-lg lg:text-xl font-light max-w-[370px] md:max-w-[937px] mx-auto leading-5 md:leading-[35px]">
                Host your next celebration in a fully private venue designed for
                unforgettable moments.
              </p>
            </div>
          </ScrollAnimation>

          {/* Mobile Layout */}
          <div className="lg:hidden space-y-8">
            {/* Cards Section */}
            <div className="grid grid-cols-2 gap-4 max-w-[600px] mx-auto px-4">
              <ScrollAnimation variant="zoomIn" delay={0.1}>
                <RentalOptionCardMobile
                  image="/img/privateRentalImg.jpg"
                  title="PRIVATE RENTAL OPTION"
                  description="Perfect For Birthdays, Celebrations & Special Events"
                />
              </ScrollAnimation>
              <ScrollAnimation variant="zoomIn" delay={0.2}>
                <RentalOptionCardMobile
                  image="/img/extendedPrivateImg.png"
                  title="EXTENDED PRIVATE RENTAL"
                  description="Ideal For Larger Gatherings Or Longer Events"
                />
              </ScrollAnimation>
            </div>

            {/* What's Included Section */}
            <ScrollAnimation variant="slideUp">
              <div className="bg-[#54643D] py-6 max-w-[600px] mx-auto flex flex-col gap-5">
                <h3
                  className="text-center font-fredoka text-xl text-brown px-4 py-2"
                  style={{
                    WebkitTextStroke: "1px #F4E9CD",
                    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  What's Included
                </h3>
                <div className="border-t border-white" />
                <div className="space-y-4 px-4">
                  <IncludedItem text="Exclusive use of the entire facility" />
                  <IncludedItem text="Flexible setup options for your event" />
                  <IncludedItem text="Tables & chairs included" />
                  <IncludedItem text="On-site support during your rental" />
                  <IncludedItem text="Freedom to bring your own food & drinks" />
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="mt-6 bg-golden text-brown mx-4 px-8 py-3 rounded-full font-inter font-semibold text-sm tracking-[0.9px] hover:bg-[#F5DFC3] transition-colors shadow-md"
                >
                  Request a Quote
                </motion.button>
              </div>
            </ScrollAnimation>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-[500px_1fr] gap-8 items-start">
            {/* Left: What's Included */}
            <ScrollAnimation variant="fadeLeft">
              <div className="flex flex-col gap-5 p-6 lg:p-8">
                <h3
                  className="bg-golden font-fredoka text-xl lg:text-2xl text-brown py-3 px-3"
                  style={{
                    WebkitTextStroke: "1px #F4E9CD",
                    textShadow: "0 2px 4px rgba(0,0,0,0.1)",
                  }}
                >
                  What's Included
                </h3>
                <div className="space-y-4">
                  <IncludedItem text="Exclusive use of the entire facility" />
                  <IncludedItem text="Flexible setup options for your event" />
                  <IncludedItem text="Tables & chairs included" />
                  <IncludedItem text="On-site support during your rental" />
                  <IncludedItem text="Freedom to bring your own food & drinks" />
                </div>
                <div className="">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="mt-6 text-brown bg-golden px-6 py-2.5 rounded-full font-inter font-semibold text-sm tracking-[0.9px] hover:bg-[#F5DFC3] transition-colors shadow-md"
                  >
                    Request a Quote
                  </motion.button>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right: Rental Options - Alternating Layout */}
            <div className="space-y-6">
              {/* First Option: Image Left, Card Right */}
              <ScrollAnimation variant="zoomIn" delay={0.1}>
                <div className="flex gap-4 justify-center items-end">
                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-[250px] bg-golden rounded-2xl shadow-lg p-5 flex flex-col items-center text-center border-b-8 border-[#54643D]"
                  >
                    <div className="space-y-3">
                      <h3
                        className="font-fredoka font-bold text-base lg:text-lg text-olive tracking-wider"
                        style={{
                          WebkitTextStroke: "0.5px #56623C",
                        }}
                      >
                        PRIVATE RENTAL OPTION
                      </h3>
                      <p className="text-[#333333] text-xs md:text-sm font-inter leading-5">
                        Perfect For Birthdays, Celebrations & Special Events
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 w-full max-w-[140px] bg-olive text-beige py-2 rounded-full font-inter font-semibold text-xs tracking-[0.9px] hover:bg-olive transition-colors shadow-md"
                      >
                        Book Now
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="w-full aspect-square max-w-[240px] ml-auto rounded-[20px] overflow-hidden shadow-lg">
                      <img
                        src="/img/privateRentalImg.jpg"
                        alt="Private Rental Option"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>
                </div>
              </ScrollAnimation>

              {/* Second Option: Card Left, Image Right */}
              <ScrollAnimation variant="zoomIn" delay={0.2}>
                <div className="flex justify-center gap-4 items-start">
                  {/* Image */}
                  <motion.div
                    whileHover={{ scale: 1.05, rotate: -5 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                  >
                    <div className="w-full aspect-square max-w-[240px] mr-auto rounded-[20px] overflow-hidden shadow-lg">
                      <img
                        src="/img/extendedPrivateImg.png"
                        alt="Extended Private Rental"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </motion.div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ scale: 1.03, y: -5 }}
                    transition={{ duration: 0.3 }}
                    className="max-w-[250px] bg-golden rounded-2xl shadow-lg p-5 flex flex-col items-center text-center border-b-8 border-[#54643D]"
                  >
                    <div className="space-y-3">
                      <h3
                        className="font-fredoka font-bold text-base lg:text-lg text-olive tracking-wider"
                        style={{
                          WebkitTextStroke: "0.5px #56623C",
                        }}
                      >
                        EXTENDED PRIVATE RENTAL
                      </h3>
                      <p className="text-[#333333] text-xs md:text-sm font-inter leading-5">
                        Ideal For Larger Gatherings Or Longer Events
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="mt-2 w-full max-w-[140px] bg-olive text-beige py-2 rounded-full font-inter font-semibold text-xs tracking-[0.9px] hover:bg-olive transition-colors shadow-md"
                      >
                        Book Now
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Monthly Membership Section */}
      <MembershipSection />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Balloon Garlands Section */}
      <BalloonGarlandsSection />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Play Day Passes Section */}
      <PartyPackageComparisonSection />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Play Day Passes Section */}
      <PlayDayPassesSection />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Custom Themes Section */}
      <CustomTheme />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Punch Pass Section */}
      <section className="bg-brown py-12 md:py-24 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr_0.5fr] gap-8 lg:gap-12 items-center">
            {/* Left Side - Image (Column 1) */}
            <ScrollAnimation variant="fadeRight">
              <div className="overflow-hidden">
                <img
                  src="/img/kidBalloons.jpg"
                  alt="Child playing"
                  className="w-full h-full object-cover min-h-[350px] md:min-h-[550px]"
                />
              </div>
            </ScrollAnimation>

            {/* Middle - Content (Column 2) */}
            <div className="">
              <ScrollAnimation variant="fadeLeft">
                <div className="space-y-8">
                  <div>
                    <span className="font-poppins font-medium text-golden uppercase tracking-widest text-sm md:text-base">
                      Punch Pass
                    </span>
                    <h2
                      className="font-fredoka text-5xl md:text-7xl lg:text-[64px] text-transparent mt-3 mb-6 leading-[0.9] tracking-tighter"
                      style={{
                        WebkitTextStroke: "2px #F4E9CD",
                      }}
                    >
                      10 Play Pass – $120
                    </h2>
                    <p className="text-beige/90 text-sm md:text-xl leading-relaxed max-w-xl font-light">
                      Enjoy more play, more fun, and total flexibility with our
                      Punch Pass—perfect for families who love to visit again
                      and again.
                    </p>
                  </div>

                  <div className="space-y-5">
                    <h3 className="font-fredoka text-2xl md:text-3xl text-golden">
                      What you Get
                    </h3>
                    <div className="grid grid-cols-1 gap-x-8 gap-y-5">
                      <div className="flex items-center gap-4">
                        <Star className="w-6 h-6 text-beige fill-beige flex-shrink-0" />
                        <p className="text-beige text-sm md:text-lg">
                          Unlimited weekday play
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Star className="w-6 h-6 text-beige fill-beige flex-shrink-0" />
                        <p className="text-beige text-sm md:text-lg">
                          Bring your own snacks & drinks
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Star className="w-6 h-6 text-beige fill-beige flex-shrink-0" />
                        <p className="text-beige text-sm md:text-lg">
                          Re-entry allowed on the same day
                        </p>
                      </div>
                      <div className="flex items-center gap-4">
                        <Star className="w-6 h-6 text-beige fill-beige flex-shrink-0" />
                        <p className="text-beige text-sm md:text-lg">
                          Never expires
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>

            {/* Right Side - Yellow Circle (Column 3) */}
            <div className="flex justify-center items-center">
              {/* Desktop version - Now part of grid flow */}
              <div className="hidden lg:block">
                <ScrollAnimation variant="bounce" delay={0.3}>
                  <div className="w-56 h-56 xl:w-72 xl:h-72 bg-golden rounded-full flex items-center justify-center p-10 text-center shadow-2xl transition-all duration-500 border-4 border-white/30">
                    <p className="text-brown/80 text-sm md:text-xl leading-relaxed">
                      Pay once. Play anytime. No pressure, no expiry—just pure
                      fun!
                    </p>
                  </div>
                </ScrollAnimation>
              </div>

              {/* Mobile version - Stays below on smaller screens */}
              <div className="lg:hidden w-full bg-golden rounded-[30px] p-8 text-center shadow-lg border-2 border-white/20">
                <p className="text-brown/80 text-lg leading-relaxed">
                  Pay once. Play anytime. No pressure, no expiry—just pure fun!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* FAQ Section */}
      <FAQSection />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>
    </>
  );
}

// Mobile Card Component - Circular Image Inside Card
function RentalOptionCardMobile({
  image,
  title,
  description,
}: {
  image: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full bg-golden rounded-2xl shadow-lg px-2 py-4 flex flex-col items-center text-center border-b-8 border-brown"
    >
      {/* Circular Image */}
      <div className="relative mb-6">
        <div className="w-[70px] h-[70px] rounded-full overflow-hidden border-4 border-beige/20 shadow-md">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3 flex-1 flex flex-col h-full">
        <h3
          className="font-fredoka text-sm font-medium md:text-xl text-olive tracking-wider"
          style={{
            WebkitTextStroke: "0.5px #5E2E1C",
          }}
        >
          {title}
        </h3>
        <p className="text-[#333333] text-xs font-inter leading-6 h-full">
          {description}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-[100px] mx-auto block bg-[#54643D] text-beige py-2 rounded-full font-inter text-xs tracking-[0.9px] hover:bg-olive transition-colors shadow-md"
        >
          Book Now
        </motion.button>
      </div>
    </motion.div>
  );
}

function IncludedItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4">
      <Star className="w-5 h-5 text-golden fill-golden flex-shrink-0 mt-0.5" />
      <p
        className={
          "text-sm md:text-base font-inter leading-relaxed text-golden"
        }
      >
        {text}
      </p>
    </div>
  );
}

function DecorativeStars() {
  return (
    <>
      <svg
        className="absolute left-0 top-0 w-full max-w-[1290px] h-auto opacity-30 pointer-events-none hidden md:block"
        viewBox="0 0 1265 634"
        fill="none"
        preserveAspectRatio="xMinYMin meet"
      >
        <path
          d="M31.33 390.282L37.6367 388.416L35.7733 394.732L37.6367 401.191L31.33 399.325L24.88 401.191L26.7433 394.732L24.88 388.416L31.33 390.282Z"
          fill="#D3CDAF"
        />
        <path
          d="M326.31 412.243L331.47 410.664L329.893 415.832L331.47 420.999L326.31 419.564L321.15 420.999L322.583 415.832L321.15 410.664L326.31 412.243Z"
          fill="#D3CDAF"
        />
        <path
          d="M523.68 374.78L527.837 373.631L526.547 377.65L527.837 381.813L523.68 380.521L519.667 381.813L520.813 377.65L519.667 373.631L523.68 374.78Z"
          fill="#D3CDAF"
        />
      </svg>
      <svg
        className="absolute right-0 top-0 w-full max-w-[1532px] h-auto opacity-[0.36] pointer-events-none hidden md:block"
        viewBox="0 0 1236 778"
        fill="none"
        preserveAspectRatio="xMaxYMin meet"
      >
        <path
          d="M9.19198 357.495L17.1924 355.277L14.8093 363.124L17.1924 370.97L9.19198 368.753L1.36176 370.97L3.74487 363.124L1.36176 355.277L9.19198 357.495Z"
          fill="#56623C"
          fillOpacity="0.58"
        />
        <path
          d="M66.8973 399.798L74.3871 397.58L72.1742 405.085L74.3871 412.761L66.8973 410.544L59.2373 412.761L61.4502 405.085L59.2373 397.58L66.8973 399.798Z"
          fill="#56623C"
          fillOpacity="0.58"
        />
      </svg>
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Ff6464ae0a97c45b597577376c5ab2661%2F332a5cd19d054b9ebf5e47b6b9751383"
        alt=""
        className="absolute left-0 top-0 w-[120px] sm:w-[160px] md:w-[200px] lg:w-[150px] h-auto opacity-90 pointer-events-none hidden md:block -scale-x-100"
      />
    </>
  );
}
