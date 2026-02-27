"use client"

import { ServicesSection } from "@/components/sections/ServicesSection"
import { CustomTheme } from "@/components/sections/CustomTheme"
import { HeaderImage } from "@/components/HeaderImage"
import { FAQSection } from "@/components/sections/FAQSection"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export default function AboutUs() {

  const cards = [
    {
      icon: "🚀",
      title: "OUR MISSION",
      description: "Our Mission Is Simple To Provide A Fun, Nurturing Space Where Children Can Learn Through Play And Families Can Make Meaningful Memories Together.",
    },
    {
      icon: "📍",
      title: "OUR SPACE",
      description: "Located Inside A 4,000 Sq Ft Family-Friendly Facility, We Offer Approximately 2,000 Sq Ft Of Dedicated Play Space Designed For Fun, Creativity, And Exploration.",
    },
  ]

  const circularImages = [
    "https://api.builder.io/api/v1/image/assets/TEMP/aa3666101754da17e6c8c5e37585b3beaa0cb0f1?width=766",
    "https://api.builder.io/api/v1/image/assets/TEMP/8e66bd8e264ec6b373ba841ad16e452b43b17f86?width=1714",
    "https://api.builder.io/api/v1/image/assets/TEMP/c88f8962b7738364a00c545ff1689696a551f7c2?width=1518",
  ]

  return (
    <>
      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* About Us Section */}
      <section className="bg-olive py-12 md:py-16 lg:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Section Header */}
          <h2
            className="font-fredoka text-golden text-4xl md:text-5xl lg:text-6xl mb-8 text-center lg:text-left"
            style={{
              WebkitTextStroke: "4px #5E2E1C",
            }}
          >
            About Us
          </h2>

          {/* Description Text */}
          <div className="text-beige text-center lg:text-left max-w-3xl mx-auto lg:mx-0 mb-12 space-y-4">
            <p className="text-sm md:text-base leading-relaxed">
              We created The Lanky Land as a place where kids can play freely, explore confidently, and just be kids — while parents feel comfortable, relaxed, and welcome.
            </p>
            <p className="text-sm md:text-base leading-relaxed">
              Our space was thoughtfully designed with families in mind, offering a clean, safe, and engaging environment that encourages imagination, movement, and connection.
            </p>
          </div>

          {/* Mobile Layout - Single Card with Navigation */}
          <div className="lg:hidden">
            <div className="max-w-md mx-auto">
              <Carousel opts={{ align: "center", loop: true }} className="w-full">
                <CarouselContent className="-ml-0">
                  {cards.map((card) => (
                    <CarouselItem key={card.title} className="pl-0 h-full">
                      {/* Card */}
                      <div className="h-full bg-golden rounded-3xl overflow-hidden shadow-lg flex flex-col">
                        {/* Card Header */}
                        <div className="bg-golden px-6 py-6 flex flex-col items-center text-center">
                          <div className="w-16 h-16 bg-brown rounded-full flex items-center justify-center text-3xl mb-3">
                            {card.icon}
                          </div>
                          <h3
                            className="font-fredoka text-beige text-2xl uppercase tracking-wide"
                            style={{
                              WebkitTextStroke: "1px #5E2E1C",
                            }}
                          >
                            {card.title}
                          </h3>
                        </div>

                        {/* Card Content */}
                        <div className="px-6 py-6 flex-1 flex items-center">
                          <p className="text-brown text-sm leading-relaxed text-center">
                            {card.description}
                          </p>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <div className="flex items-center justify-center gap-4 mt-6">
                  <CarouselPrevious className="relative left-0" />
                  <CarouselNext className="relative right-0" />
                </div>
              </Carousel>

            </div>
          </div>

          {/* Desktop Layout - Cards on Left, Images on Right */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Cards */}
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {cards.map((card, index) => (
                  <div
                    key={index}
                    className="bg-golden rounded-lg p-6 shadow-lg flex flex-col items-start"
                  >
                    <div className="w-12 h-12 bg-brown rounded-full flex items-center justify-center text-2xl mb-3">
                      {card.icon}
                    </div>
                    <h3
                      className="font-fredoka text-beige text-lg mb-3 uppercase tracking-wide"
                      style={{
                        WebkitTextStroke: "1px #56623c",
                      }}
                    >
                      {card.title}
                    </h3>
                    <p className="text-brown text-xs leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Circular Images */}
            <div className="relative h-[500px]">
              {/* Top Right Image */}
              <div className="absolute top-0 right-0 w-48 h-48 rounded-full overflow-hidden border-8 border-golden shadow-xl">
                <img
                  src={circularImages[0]}
                  alt="Event 1"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Middle Left Image */}
              <div className="absolute top-1/2 left-0 -translate-y-1/2 w-56 h-56 rounded-full overflow-hidden border-8 border-golden shadow-xl">
                <img
                  src={circularImages[1]}
                  alt="Event 2"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Bottom Right Image */}
              <div className="absolute bottom-0 right-12 w-52 h-52 rounded-full overflow-hidden border-8 border-golden shadow-xl">
                <img
                  src={circularImages[2]}
                  alt="Event 3"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Services Section */}
      <ServicesSection />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Custom Theme Section */}
      <CustomTheme />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      <FAQSection />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>
    </>
  )
}
