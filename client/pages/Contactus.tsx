"use client"

import { HeaderImage } from "@/components/HeaderImage"
import { CustomTheme } from "@/components/sections/CustomTheme"
import { FAQSection } from "@/components/sections/FAQSection"
import { siteConfig } from "@/lib/site-config"

export default function ContactUs() {
  return (
    <>
    {/* Custom Decorations Hero Section */}
      <section className="bg-olive py-10 md:py-32 px-6">
        <div className="mx-auto text-center">
          <h1
            className="font-fredoka text-golden text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-6"
            style={{
              WebkitTextStroke: "3px #5E2E1C",
            }}
          >
            Contact Us
          </h1>
        </div>
      </section>

      {/* Get in Touch Section */}
      <div className="bg-[#f4e9cd] py-12 md:py-16 lg:py-20">
        <div className="container px-0 mx-auto sm:px-4">
          {/* Desktop Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-8 xl:gap-12">
            {/* Left Side - Contact Info */}
            <div className="bg-[#f4e9cd]">
              <h2 className="font-fredoka text-golden text-5xl xl:text-6xl mb-6"
                style={{
                  WebkitTextStroke: "2px #5E2E1C",
                }}
              >
                Get in Touch
              </h2>
              <p className="text-[#56623c] text-base mb-8 max-w-md">
                We'd love to hear from you! Whether you have questions about open play, memberships, birthday parties, or private events, our team is here to help.
              </p>

              {/* Contact Details */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-poppins font-semibold text-brown mb-2">Address</h3>
                  <p className="text-[#56623c] text-sm">
                    {siteConfig.contact.addressLine1},<br />
                    {siteConfig.contact.addressLine2}
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-brown mb-2">Email & Phone</h3>
                  <p className="text-[#56623c] text-sm">
                    {siteConfig.contact.emails.map((email, index) => (
                      <span key={index}>
                        Email: <a href={`mailto:${email}`} className="hover:underline">{email}</a>
                        {index < siteConfig.contact.emails.length - 1 && <br />}
                      </span>
                    ))}
                    {siteConfig.contact.emails.length > 0 && siteConfig.contact.phone && <br />}
                    {siteConfig.contact.phone && <>Phone: <a href={`tel:${siteConfig.contact.phone}`} className="hover:underline">{siteConfig.contact.phone}</a></>}
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-poppins font-semibold text-brown mb-2">Hours Of Operations</h3>
                <p className="text-[#56623c] text-sm">
                  {siteConfig.hours.map((hour, index) => (
                    <span key={index}>
                      {hour.label} : {hour.time}
                      {index < siteConfig.hours.length - 1 && <br />}
                    </span>
                  ))}
                </p>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={siteConfig.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-brown border-2 border-golden rounded-3xl p-8 xl:p-10">
              <h3 className="font-fredoka text-transparent text-3xl xl:text-4xl mb-4 text-center"
                style={{
                  WebkitTextStroke: "2px #F4E9CD",
                }}
              >
                Send Us a Message
              </h3>
              <p className="text-white text-center text-sm mb-8">
                Have a question or want more details? Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-transparent border-2 border-[#f4e9cd] rounded-full px-6 py-3 text-white placeholder-white/70 focus:outline-none focus:border-[#D4A574]"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-transparent border-2 border-[#f4e9cd] rounded-full px-6 py-3 text-white placeholder-white/70 focus:outline-none focus:border-[#D4A574]"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Add email"
                    className="bg-transparent border-2 border-[#f4e9cd] rounded-full px-6 py-3 text-white placeholder-white/70 focus:outline-none focus:border-[#D4A574]"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="bg-transparent border-2 border-[#f4e9cd] rounded-full px-6 py-3 text-white placeholder-white/70 focus:outline-none focus:border-[#D4A574]"
                  />
                </div>
                <select className="w-full bg-transparent border-2 border-[#f4e9cd] rounded-full px-6 py-3 text-white focus:outline-none focus:border-[#D4A574] appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23f4e9cd' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1.5rem center',
                  }}
                >
                  <option value="" className="bg-brown text-white">Select Reason</option>
                  <option value="open-play" className="bg-brown text-white">Open Play</option>
                  <option value="membership" className="bg-brown text-white">Membership</option>
                  <option value="birthday-party" className="bg-brown text-white">Birthday Party</option>
                  <option value="private-event" className="bg-brown text-white">Private Event</option>
                  <option value="other" className="bg-brown text-white">Other</option>
                </select>
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full bg-transparent border-2 border-[#f4e9cd] rounded-3xl px-6 py-4 text-white placeholder-white/70 focus:outline-none focus:border-[#D4A574] resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#f4e9cd] text-brown py-3 rounded-full font-poppins font-semibold hover:bg-[#e8dbb8] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Header */}
            <div className="text-center mb-8">
              <h2 className="font-fredoka text-golden text-4xl md:text-5xl mb-4"
                style={{
                  WebkitTextStroke: "2px #5E2E1C",
                }}
              >
                Get in Touch
              </h2>
              <p className="text-[#56623c] text-sm md:text-base max-w-md mx-auto">
                We'd love to hear from you! Whether you have questions about open play, memberships, birthday parties, or private events, our team is here to help.
              </p>
            </div>

            {/* Contact Form */}
            <div className="bg-brown p-6 md:p-8 mb-8">
              <h3 className="font-fredoka text-transparent text-2xl md:text-3xl mb-3 text-center"
                style={{
                  WebkitTextStroke: "2px #F4E9CD",
                }}
              >
                Send Us a Message
              </h3>
              <p className="text-white text-center text-sm mb-6">
                Have a question or want more details? Fill out the form below and we'll get back to you as soon as possible.
              </p>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-full bg-transparent border-2 border-[#f4e9cd] rounded-full px-6 py-3 text-white placeholder-white/70 focus:outline-none focus:border-[#D4A574]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-full bg-transparent border-2 border-[#f4e9cd] rounded-full px-6 py-3 text-white placeholder-white/70 focus:outline-none focus:border-[#D4A574]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full bg-transparent border-2 border-[#f4e9cd] rounded-full px-6 py-3 text-white placeholder-white/70 focus:outline-none focus:border-[#D4A574]"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-transparent border-2 border-[#f4e9cd] rounded-full px-6 py-3 text-white placeholder-white/70 focus:outline-none focus:border-[#D4A574]"
                />
                <select className="w-full bg-transparent border-2 border-[#f4e9cd] rounded-full px-6 py-3 text-white focus:outline-none focus:border-[#D4A574] appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23f4e9cd' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 1.5rem center',
                  }}
                >
                  <option value="" className="bg-brown text-white">Select Reason</option>
                  <option value="open-play" className="bg-brown text-white">Open Play</option>
                  <option value="membership" className="bg-brown text-white">Membership</option>
                  <option value="birthday-party" className="bg-brown text-white">Birthday Party</option>
                  <option value="private-event" className="bg-brown text-white">Private Event</option>
                  <option value="other" className="bg-brown text-white">Other</option>
                </select>
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full bg-transparent border-2 border-[#f4e9cd] rounded-3xl px-6 py-4 text-white placeholder-white/70 focus:outline-none focus:border-[#D4A574] resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-[#f4e9cd] text-brown py-3 rounded-full font-poppins font-semibold hover:bg-[#e8dbb8] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Details & Map */}
            <div className="space-y-6">
              {/* Contact Details */}
              <div className="space-y-4 text-center">
                <div>
                  <h3 className="font-poppins font-semibold text-brown mb-2">Address</h3>
                  <p className="text-sm">
                    {siteConfig.contact.addressLine1},<br />
                    {siteConfig.contact.addressLine2}
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-brown mb-2">Email & Phone</h3>
                  <p className="text-sm">
                    {siteConfig.contact.emails.map((email, index) => (
                      <span key={index}>
                        Email: <a href={`mailto:${email}`} className="hover:underline">{email}</a>
                        {index < siteConfig.contact.emails.length - 1 && <br />}
                      </span>
                    ))}
                    {siteConfig.contact.emails.length > 0 && siteConfig.contact.phone && <br />}
                    {siteConfig.contact.phone && <>Phone: <a href={`tel:${siteConfig.contact.phone}`} className="hover:underline">{siteConfig.contact.phone}</a></>}
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-brown mb-2">Hours Of Operations</h3>
                  <p className="text-sm">
                    {siteConfig.hours.map((hour, index) => (
                      <span key={index}>
                        {hour.label} : {hour.time}
                        {index < siteConfig.hours.length - 1 && <br />}
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src={siteConfig.contact.googleMapsEmbedUrl}
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Themes Section */}
      <CustomTheme />

      {/* FAQ Section */}
      <FAQSection />

    </>
  )
}
