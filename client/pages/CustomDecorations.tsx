"use client"

import { BalloonGarlandsSection } from "@/components/sections/BalloonGarlandsSection"
import { FAQSection } from "@/components/sections/FAQSection"
import { ScrollAnimation } from "@/lib/animationUtils"


const HOW_IT_WORKS_STEPS = [
  {
    id: "01",
    text: "CHOOSE YOUR EVENT DATE",
  },
  {
    id: "02",
    text: "SHARE YOUR THEME OR COLOR IDEAS",
  },
  {
    id: "03",
    text: "SUBMIT THE INQUIRY FORM",
  },
  {
    id: "04",
    text: "WE TAKE CARE OF THE SETUP — YOU ENJOY THE CELEBRATION",
  },
]

export default function CustomDecorations() {
  return (
    <>
      {/* Custom Decorations Hero Section */}
      <section className="bg-olive py-20 md:py-32 px-6">
        <div className="mx-auto text-center">
          <h1
            className="font-fredoka text-golden text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-6"
            style={{
              WebkitTextStroke: "3px #5E2E1C",
            }}
          >
            Custom Decorations
          </h1>
          <p className="text-[#F4E9CD] text-sm md:text-lg leading-relaxed max-w-2xl mx-auto font-thin">
            Make your celebration extra special with custom decorations designed to match your theme, colors, and vision. Whether it's a birthday party or a private event, our décor adds the perfect finishing touch to your celebration.
          </p>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-[#f4e9cd] py-12 md:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <h2
            className="font-fredoka text-[#FFBC56] text-4xl md:text-5xl lg:text-6xl mb-12 text-center"
            style={{
              WebkitTextStroke: "3px #5E2E1C",
            }}
          >
            How it Works
          </h2>

          {/* Steps Grid - 2x2 on mobile, 1x4 on desktop */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {HOW_IT_WORKS_STEPS.map((step, index) => (
              <ScrollAnimation key={step.id} variant="zoomIn" delay={(index + 1) * 0.1}>
                <div className="h-full bg-white rounded-3xl p-6 md:p-8 shadow-lg border-b-[6px] border-brown flex flex-col items-center text-center">
                  <div className="font-fredoka text-brown text-2xl md:text-3xl mb-4">
                    {step.id}
                  </div>
                  <p className="font-poppins text-brown text-xs md:text-sm font-medium uppercase tracking-wide leading-relaxed">
                    {step.text}
                  </p>
                </div>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

      {/* Get the Party Starts - Contact Form Section */}
      <section className="bg-brown">
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
                Get the Party Started
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
                    <option value="" className="bg-brown">What are you contacting us about?</option>
                    <option value="birthday" className="bg-brown">Birthday Party</option>
                    <option value="private-event" className="bg-brown">Private Event</option>
                    <option value="decorations" className="bg-brown">Custom Decorations</option>
                    <option value="other" className="bg-brown">Other</option>
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
                    <option value="" className="bg-brown">Event Date</option>
                    <option value="this-week" className="bg-brown">This Week</option>
                    <option value="next-week" className="bg-brown">Next Week</option>
                    <option value="this-month" className="bg-brown">This Month</option>
                    <option value="next-month" className="bg-brown">Next Month</option>
                    <option value="custom" className="bg-brown">Custom Date</option>
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
                    <option value="" className="bg-brown">Theme</option>
                    <option value="princess" className="bg-brown">Princess</option>
                    <option value="superhero" className="bg-brown">Superhero</option>
                    <option value="jungle" className="bg-brown">Jungle</option>
                    <option value="unicorn" className="bg-brown">Unicorn</option>
                    <option value="custom" className="bg-brown">Custom Theme</option>
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
                  className="w-full bg-[#f4e9cd] text-brown py-3 rounded-full font-poppins font-semibold text-base hover:bg-[#e8dbb8] transition-colors shadow-md"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>



      {/* Balloon Garlands Section */}
      <BalloonGarlandsSection />



      {/* what our client says 2 Section */}

      <FAQSection />



    </>
  )
}
