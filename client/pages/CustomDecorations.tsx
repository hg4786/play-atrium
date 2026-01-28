"use client"

import { BalloonGarlandsSection } from "@/components/sections/BalloonGarlandsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ScrollAnimation } from "@/lib/animationUtils"


export default function CustomDecorations() {
  return (
    <>

      {/* Custom Decorations Hero Section */}
      <section className="relative">
        {/* Mobile Layout - Grid with overlapping content */}
        <div className="lg:hidden grid grid-cols-1 grid-rows-1 bg-[#56623c]">
          {/* Background Image - Behind */}
          <div className="col-start-1 row-start-1 z-0">
            <img
              src="/img/customDecorationsImage.png"
              alt="Custom Decorations Background"
              className="w-full h-full object-cover min-h-[400px] opacity-10"
            />
          </div>

          {/* Text Content - On Top */}
          <div className="col-start-1 row-start-1 z-10 flex items-center justify-center px-6 py-12">
            <div className="text-center text-white max-w-2xl">
              <h1
                className="font-fredoka text-transparent text-4xl md:text-5xl mb-6"
                style={{
                  WebkitTextStroke: "2px #F4E9CD",
                }}
              >
                Custom Decorations
              </h1>
              <p className="text-base md:text-lg leading-relaxed">
                Make your celebration extra special with custom decorations designed to match your theme, colors, and vision. Whether it's a birthday party or a private event, our décor adds the perfect finishing touch to your celebration.
              </p>
            </div>
          </div>
        </div>

        {/* Desktop Layout - Split Grid */}
        <div className="hidden lg:grid lg:grid-cols-2">
          {/* Left Side - Text Content with Olive Background */}
          <div className="bg-[#56623c] flex items-center justify-center px-12 py-20">
            <div className="text-white max-w-lg">
              <h1
                className="font-fredoka text-transparent text-5xl xl:text-6xl mb-6"
                style={{
                  WebkitTextStroke: "2px #F4E9CD",
                }}
              >
                Custom Decorations
              </h1>
              <p className="text-base xl:text-lg leading-relaxed">
                Make your celebration extra special with custom decorations designed to match your theme, colors, and vision. Whether it's a birthday party or a private event, our décor adds the perfect finishing touch to your celebration.
              </p>
            </div>
          </div>

          {/* Right Side - Playground Image with Beige Background */}
          <div className="bg-[#f4e9cd] flex items-center justify-center p-8">
            <img
              src="/img/customDecorationsImage.png"
              alt="Playground with Custom Decorations"
              className="w-full max-w-2xl"
            />
          </div>
        </div>
      </section>

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>


      {/* How it Works Section */}
      <section className="bg-[#f4e9cd] py-12 md:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <h2
            className="font-fredoka text-[#FFBC56] text-4xl md:text-5xl lg:text-6xl mb-12 text-center"
            style={{
              WebkitTextStroke: "2px #56623c",
            }}
          >
            How it Works
          </h2>

          {/* Steps Grid - 2x2 on mobile, 1x4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {/* Step 01 */}
            <ScrollAnimation variant="zoomIn" delay={0.1}>
              <div className="h-full bg-white rounded-3xl p-6 md:p-8 shadow-lg border-b-[6px] border-[#56623c] flex flex-col items-center text-center">
                <div className="font-fredoka text-[#56623c] text-2xl md:text-3xl mb-4">01</div>
                <p className="font-poppins text-[#56623c] text-xs md:text-sm font-medium uppercase tracking-wide leading-relaxed">
                  CHOOSE YOUR EVENT DATE
                </p>
              </div>
            </ScrollAnimation>

            {/* Step 02 */}
            <ScrollAnimation variant="zoomIn" delay={0.2}>
              <div className="h-full bg-white rounded-3xl p-6 md:p-8 shadow-lg border-b-[6px] border-[#56623c] flex flex-col items-center text-center">
                <div className="font-fredoka text-[#56623c] text-2xl md:text-3xl mb-4">02</div>
                <p className="font-poppins text-[#56623c] text-xs md:text-sm font-medium uppercase tracking-wide leading-relaxed">
                  SHARE YOUR THEME OR COLOR IDEAS
                </p>
              </div>
            </ScrollAnimation>

            {/* Step 03 */}
            <ScrollAnimation variant="zoomIn" delay={0.3}>
              <div className="h-full bg-white rounded-3xl p-6 md:p-8 shadow-lg border-b-[6px] border-[#56623c] flex flex-col items-center text-center">
                <div className="font-fredoka text-[#56623c] text-2xl md:text-3xl mb-4">03</div>
                <p className="font-poppins text-[#56623c] text-xs md:text-sm font-medium uppercase tracking-wide leading-relaxed">
                  SUBMIT THE INQUIRY FORM
                </p>
              </div>
            </ScrollAnimation>

            {/* Step 04 */}
            <ScrollAnimation variant="zoomIn" delay={0.4}>
              <div className="h-full bg-white rounded-3xl p-6 md:p-8 shadow-lg border-b-[6px] border-[#56623c] flex flex-col items-center text-center">
                <div className="font-fredoka text-[#56623c] text-2xl md:text-3xl mb-4">04</div>
                <p className="font-poppins text-[#56623c] text-xs md:text-sm font-medium uppercase tracking-wide leading-relaxed">
                  WE TAKE CARE OF THE SETUP — YOU ENJOY THE CELEBRATION
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>


      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Get the Party Starts - Contact Form Section */}
      <section className="bg-[#56623c]">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side - Event Image (Hidden on Mobile) */}
          <div className="hidden lg:block">
            <img
              src="/img/getPartyStartsBg.jpg"
              alt="Event Setup"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side - Contact Form (Full Width on Mobile) */}
          <div className="px-6 py-12 lg:px-12 lg:py-16">
            <div className="max-w-xl mx-auto">
              <h2
                className="font-fredoka text-transparent text-3xl md:text-4xl lg:text-5xl mb-8 text-center"
                style={{
                  WebkitTextStroke: "2px #F4E9CD",
                }}
              >
                Get the Party Starts
              </h2>

              <form className="space-y-6">
                {/* Name Input */}
                <div>
                  <input
                    type="text"
                    placeholder="Your Name (required)"
                    required
                    className="w-full bg-transparent border-b-2 border-white/50 px-0 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Email Input */}
                <div>
                  <input
                    type="email"
                    placeholder="Your Email (required)"
                    required
                    className="w-full bg-transparent border-b-2 border-white/50 px-0 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors"
                  />
                </div>

                {/* Contact Reason Dropdown */}
                <div className="relative">
                  <select
                    className="w-full bg-transparent border-b-2 border-white/50 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right center',
                    }}
                  >
                    <option value="" className="bg-[#56623c]">What are you contacting us about?</option>
                    <option value="birthday" className="bg-[#56623c]">Birthday Party</option>
                    <option value="private-event" className="bg-[#56623c]">Private Event</option>
                    <option value="decorations" className="bg-[#56623c]">Custom Decorations</option>
                    <option value="other" className="bg-[#56623c]">Other</option>
                  </select>
                </div>

                {/* Event Date Dropdown */}
                <div className="relative">
                  <select
                    className="w-full bg-transparent border-b-2 border-white/50 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right center',
                    }}
                  >
                    <option value="" className="bg-[#56623c]">Event Date</option>
                    <option value="this-week" className="bg-[#56623c]">This Week</option>
                    <option value="next-week" className="bg-[#56623c]">Next Week</option>
                    <option value="this-month" className="bg-[#56623c]">This Month</option>
                    <option value="next-month" className="bg-[#56623c]">Next Month</option>
                    <option value="custom" className="bg-[#56623c]">Custom Date</option>
                  </select>
                </div>

                {/* Theme Dropdown */}
                <div className="relative">
                  <select
                    className="w-full bg-transparent border-b-2 border-white/50 px-0 py-3 text-white focus:outline-none focus:border-white transition-colors appearance-none cursor-pointer"
                    style={{
                      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23ffffff' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                      backgroundRepeat: 'no-repeat',
                      backgroundPosition: 'right center',
                    }}
                  >
                    <option value="" className="bg-[#56623c]">Theme</option>
                    <option value="princess" className="bg-[#56623c]">Princess</option>
                    <option value="superhero" className="bg-[#56623c]">Superhero</option>
                    <option value="jungle" className="bg-[#56623c]">Jungle</option>
                    <option value="unicorn" className="bg-[#56623c]">Unicorn</option>
                    <option value="custom" className="bg-[#56623c]">Custom Theme</option>
                  </select>
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea
                    placeholder="Your Message"
                    rows={4}
                    className="w-full bg-transparent border-b-2 border-white/50 px-0 py-3 text-white placeholder-white/70 focus:outline-none focus:border-white transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-[#f4e9cd] text-[#56623c] py-3 rounded-full font-poppins font-semibold text-base hover:bg-[#e8dbb8] transition-colors shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Balloon Garlands Section */}
      <BalloonGarlandsSection />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* what our client says 2 Section */}

      <FAQSection />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

    </>
  )
}
