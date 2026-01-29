"use client"

import type React from "react"
import { Star } from "lucide-react"
import { motion } from "framer-motion"
import { ScrollAnimation } from "@/lib/animationUtils"
import { MembershipSection } from "@/components/sections/MembershipSection"
import { BalloonGarlandsSection } from "@/components/sections/BalloonGarlandsSection"
import { PlayDayPassesSection } from "@/components/sections/PlayDayPassesSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { HeaderImage } from "@/components/HeaderImage"
import { CustomTheme } from "@/components/sections/CustomTheme"


export default function PartiesAndEvents() {
  return (
    <>

      <HeaderImage src="/img/partiesEventsBg.png" />

      {/* Full Facility Private Rental Section */}
      <section className="bg-beige relative py-10 md:py-16 lg:py-20 sm:px-6 lg:px-8 overflow-hidden">
        {/* Decorative Stars */}
        <DecorativeStars />

        <div className="max-w-[1618px] mx-auto relative z-10">
          {/* Section Header */}
          <ScrollAnimation variant="bounce">
            <div className="text-center mb-6 md:mb-12">
              <p className="text-[#55613B] text-sm md:text-base font-medium mb-2">
                Private Events & Facility Rentals
              </p>
              <h2
                className="font-fredoka text-2xl md:text-5xl lg:text-[64px] text-[#FFBC56] text-center leading-tight tracking-[1.44px] lg:tracking-[3.84px] mb-3 md:mb-6"
                style={{
                  WebkitTextStroke: "3px #56623C",
                }}
              >
                Full Facility Private Rental
              </h2>
              <p className="text-[#040404] text-sm md:text-lg lg:text-xl font-light max-w-[370px] md:max-w-[937px] mx-auto leading-5 md:leading-[35px]">
                Host your next celebration in a fully private venue designed for unforgettable moments.
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
                  className="text-center font-fredoka text-xl text-transparent px-4 py-2"
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
                  className="mt-6 bg-beige text-olive mx-4 px-8 py-3 rounded-full font-inter font-semibold text-sm tracking-[0.9px] hover:bg-[#F5DFC3] transition-colors shadow-md"
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
                <h3 className="bg-[#54643D] font-fredoka text-xl lg:text-2xl text-beige py-3 px-3">
                  What's Included
                </h3>
                <div className="space-y-4">
                  <IncludedItem varient="full" text="Exclusive use of the entire facility" />
                  <IncludedItem varient="full" text="Flexible setup options for your event" />
                  <IncludedItem varient="full" text="Tables & chairs included" />
                  <IncludedItem varient="full" text="On-site support during your rental" />
                  <IncludedItem varient="full" text="Freedom to bring your own food & drinks" />
                </div>
                <div className="">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="mt-6 text-beige bg-olive px-6 py-2.5 rounded-full font-inter font-semibold text-sm tracking-[0.9px] hover:bg-[#F5DFC3] transition-colors shadow-md"
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
                    className="max-w-[250px] bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center border-b-8 border-[#54643D]"
                  >
                    <div className="space-y-3">
                      <h3
                        className="font-fredoka font-bold text-base lg:text-lg text-[#FFBC56] tracking-wider"
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
                        className="mt-2 w-full max-w-[140px] bg-[#54643D] text-beige py-2 rounded-full font-inter font-semibold text-xs tracking-[0.9px] hover:bg-olive transition-colors shadow-md"
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
                    className="max-w-[250px] bg-white rounded-2xl shadow-lg p-5 flex flex-col items-center text-center border-b-8 border-[#54643D]"
                  >
                    <div className="space-y-3">
                      <h3
                        className="font-fredoka font-bold text-base lg:text-lg text-[#FFBC56] tracking-wider"
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
                        className="mt-2 w-full max-w-[140px] bg-[#54643D] text-beige py-2 rounded-full font-inter font-semibold text-xs tracking-[0.9px] hover:bg-olive transition-colors shadow-md"
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
      <PlayDayPassesSection />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Custom Themes Section */}
      <CustomTheme />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* FAQ Section */}
      <FAQSection />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>
    </>
  )
}

// Mobile Card Component - Circular Image Inside Card
function RentalOptionCardMobile({
  image,
  title,
  description,
}: {
  image: string
  title: string
  description: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl shadow-lg px-2 py-4 flex flex-col items-center text-center border-b-8 border-[#54643D]"
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
      <div className="space-y-3">
        <h3
          className="font-fredoka text-sm font-medium md:text-xl text-[#56623C] tracking-wider"
          style={{
            WebkitTextStroke: "0.5px #FFBC56",
          }}
        >
          {title}
        </h3>
        <p className="text-[#333333] text-xs font-inter leading-6">{description}</p>
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
  )
}

function IncludedItem({ text, varient }: { text: string, varient?: "full" | "empty" }) {
  return (
    <div className="flex items-start gap-4">
      <Star className="w-5 h-5 text-beige fill-[#54643D] flex-shrink-0 mt-0.5" />
      <p className={"text-sm md:text-base font-inter leading-relaxed" + (varient == "full" ? " text-gray-700" : " text-white")}>{text}</p>
    </div>
  )
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
        className="absolute right-0 top-0 w-[120px] sm:w-[160px] md:w-[200px] lg:w-[150px] h-auto opacity-90 pointer-events-none hidden md:block"
      />
    </>
  )
}