import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ScrollAnimation } from "@/lib/animationUtils"
import PackageCard from "../PackageCard"


export function PartyPackageComparisonSection() {
  const packages = [
    {
      title: "BRONZE BASH",
      price: "$425",
      duration: "2 hrs (30 min setup, 90 min Party)",
      ageLimit: "Upto 10 kids (2 Adults per kids)",
      features: [
        "Dedicated party host for setup, cleanup & cake ceremony",
        "BYO food, drinks & cake (no alcohol)",
        "Basic white tableware (plates, napkins, utensils)",
        "Digital invitations for your guests"
      ],
    },
    {
      title: "SILVER CELEBRATION",
      price: "$575",
      duration: "2 hrs (30 min setup, 90 min Party)",
      ageLimit: "Upto 15 kids (2 Adults per kids)",
      features: [
        "All Bronze Bash perks plus",
        "Colored tableware to match your party",
        "Personalized \"Happy Birthday [Name]\" sign"
      ],
    },
    {
      title: "VIP EXPERIENCE",
      price: "$795",
      duration: "2 hrs (30 min setup, 90 min Party)",
      ageLimit: "Upto 20 kids (2 Adults per kids)",
      features: [
        "All Silver Celebration perks plus",
        "Custom themed tableware & décor accents",
        "6 ft balloon garland included",
        "Exclusive Private VIP Lounge"
      ],
    }
  ]

  const additionalInfo = [
    "$100 OFF Monday-Friday parties",
    "Free all-day play pass for the birthday child (future visit)",
    "Extra guest: $19.99 per child, $4.99 per adult",
    "Extra time: $50 per 30 minutes (if available)",
    "Alcohol permitted only with full facility rental",
    "• Décor, balloon garlands & custom add-ons available separately"
  ]

  return (
    <section className="bg-beige py-12 md:py-16 lg:py-20 px-4 md:px-6">
      <div className="max-w-[1400px] mx-auto">
        {/* Section Title */}
        <ScrollAnimation variant="fadeUp">
          <h2 className="font-fredoka font-bold text-3xl md:text-4xl lg:text-5xl text-transparent text-center mb-8 md:mb-12 text-stroke-md" style={{ WebkitTextStroke: "1px #F5E6D3" }}>
            Party Package Comparison
          </h2>
        </ScrollAnimation>

        {/* Mobile View - Carousel */}
        <div className="lg:hidden mb-12">
          <Carousel opts={{ align: "center", loop: true }} className="w-full">
            <CarouselContent className="-ml-0">
              {packages.map((pkg, index) => (
                <CarouselItem key={index} className="pl-0 h-full">
                  <ScrollAnimation variant="zoomIn" delay={0}>
                    <PackageCard {...pkg} />
                  </ScrollAnimation>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-6">
              <CarouselPrevious className="relative left-0" />
              <CarouselNext className="relative right-0" />
            </div>
          </Carousel>
        </div>

        {/* Desktop View - 3 Column Grid */}
        {/* <div className="hidden lg:grid lg:grid-cols-3 gap-6 xl:gap-8 mb-12"> */}
        <div className="hidden lg:flex justify-center gap-0 mb-12 bg-beige pt-5">
          {packages.map((pkg, index) => (
            <ScrollAnimation key={index} variant="zoomIn" delay={index * 0.1}>
              <PackageCard {...pkg} />
            </ScrollAnimation>
          ))}
        </div>

        {/* Additional Information Section */}
        <ScrollAnimation variant="fadeUp" delay={0.2}>
          <div className="bg-olive rounded-2xl p-6 md:p-8 lg:p-10 max-w-[900px] mx-auto border-2 border-brown shadow-lg">
            <h3 className="font-fredoka font-bold text-2xl md:text-3xl text-golden text-center mb-6 text-stroke-sm" style={{ WebkitTextStroke: "0.5px #56623C" }}>
              Additional Information
            </h3>
            <div className="space-y-3 md:space-y-4">
              {additionalInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-golden rounded-lg py-3 px-4 md:px-6 border border-olive/20"
                >
                  <p className="text-[#333333] text-sm md:text-base font-medium text-center leading-relaxed">
                    {info}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  )
}
