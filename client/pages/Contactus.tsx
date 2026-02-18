"use client"

import { HeaderImage } from "@/components/HeaderImage"
import { CustomTheme } from "@/components/sections/CustomTheme"
import { FAQSection } from "@/components/sections/FAQSection"

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
                    10640 Northwest Fwy,<br />
                    Houston, TX 77092
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-brown mb-2">Email & Phone</h3>
                  <p className="text-[#56623c] text-sm">
                    Email: ambient@example.com<br />
                    Phone: +88 (0) 101 0000 000
                  </p>
                </div>
              </div>

              <div className="mb-8">
                <h3 className="font-poppins font-semibold text-brown mb-2">Hours Of Operations</h3>
                <p className="text-[#56623c] text-sm">
                  Monday - Friday : 10:00 am - 6:00 pm<br />
                  Saturday : 9:00 Am - 6:00 Pm<br />
                  Sunday : 10:00 AM - 5:00 PM
                </p>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3461.7446648865675!2d-95.46094889999999!3d29.8139202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c68a15ae6745%3A0x2732b49113a3b5a!2s10640%20Northwest%20Fwy%2C%20Houston%2C%20TX%2077092%2C%20USA!5e0!3m2!1sen!2sin!4v1771412770511!5m2!1sen!2sin"
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
                  <option value="">Select Reason</option>
                  <option value="open-play">Open Play</option>
                  <option value="membership">Membership</option>
                  <option value="birthday-party">Birthday Party</option>
                  <option value="private-event">Private Event</option>
                  <option value="other">Other</option>
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
                  <option value="">Select Reason</option>
                  <option value="open-play">Open Play</option>
                  <option value="membership">Membership</option>
                  <option value="birthday-party">Birthday Party</option>
                  <option value="private-event">Private Event</option>
                  <option value="other">Other</option>
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
                    10640 Northwest Fwy,<br />
                    Houston, TX 77092
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-brown mb-2">Email & Phone</h3>
                  <p className="text-sm">
                    Email: ambient@example.com<br />
                    Phone: +88 (0) 101 0000 000
                  </p>
                </div>
                <div>
                  <h3 className="font-poppins font-semibold text-brown mb-2">Hours Of Operations</h3>
                  <p className="text-sm">
                    Monday - Friday : 10:00 am - 6:00 pm<br />
                    Saturday : 9:00 Am - 6:00 Pm<br />
                    Sunday : 10:00 AM - 5:00 PM
                  </p>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3458.123456789!2d-95.123456!3d29.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDA3JzI0LjQiTiA5NcKwMDcnMjQuNCJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
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
