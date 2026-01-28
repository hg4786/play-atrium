import { ScrollAnimation } from "@/lib/animationUtils"
import { DecorativeStars } from "./DecorativeStars"
import { ServiceCard } from "./ServiceCard"

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-beige relative py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <DecorativeStars />

      <div className="max-w-[1618px] mx-auto relative z-10">
        {/* Section Header */}
        <ScrollAnimation variant="bounce">
          <div className="text-center mb-6 md:mb-12">
            <h2
              className="font-fredoka text-2xl md:text-5xl lg:text-[64px] text-[#FFBC56] text-center leading-tight tracking-[1.44px] lg:tracking-[3.84px] mb-3 md:mb-6"
              style={{
                WebkitTextStroke: "3px #56623C",
                WebkitTextStrokeWidth: window.innerWidth >= 768 ? "3px" : "3px",
              }}
            >
              Our Awesome Services For
            </h2>
            <p className="text-[#040404] text-sm md:text-lg lg:text-xl font-light max-w-[370px] md:max-w-[937px] mx-auto leading-5 md:leading-[35px]">
              Host your celebration in a completely private, spacious, and
              family-friendly environment designed to make every moment
              unforgettable
            </p>
          </div>
        </ScrollAnimation>

        {/* Service Cards - Mobile uses 2 column grid, Desktop uses 4 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[383px] md:max-w-[1618px] mx-auto">
          <ScrollAnimation variant="zoomIn" delay={0.1}>
            <ServiceCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/8e66bd8e264ec6b373ba841ad16e452b43b17f86?width=1714"
              title="Birthdays"
            />
          </ScrollAnimation>
          <ScrollAnimation variant="zoomIn" delay={0.2}>
            <ServiceCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/aa3666101754da17e6c8c5e37585b3beaa0cb0f1?width=766"
              title="Graduations"
            />
          </ScrollAnimation>
          <ScrollAnimation variant="zoomIn" delay={0.3}>
            <ServiceCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/c88f8962b7738364a00c545ff1689696a551f7c2?width=1518"
              title="Baby showers"
            />
          </ScrollAnimation>
          <ScrollAnimation variant="zoomIn" delay={0.4}>
            <ServiceCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/482d310d42f2df5dc25db119accb61c16868ec8d?width=1424"
              title="Holiday parties"
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
