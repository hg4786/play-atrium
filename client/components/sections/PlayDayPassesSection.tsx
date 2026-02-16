import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ScrollAnimation } from "@/lib/animationUtils"
import { DayPassCard } from "./DayPassCard"
import { WeekendPassCard } from "./WeekendPassCard"
import { FeatureItem } from "./FeatureItem"

export function PlayDayPassesSection() {
  return (
    <section className="bg-beige py-8 md:py-16 lg:py-20 px-0 md:px-6 relative overflow-hidden">
      <div className="max-w-[1825px] mx-auto">
        {/* Mobile View with Carousel */}
        <div className="lg:hidden">
          <ScrollAnimation variant="fadeUp">
            <div className="px-4 mb-6 space-y-3">
              <p className="text-olive text-sm font-medium text-center">
                OPEN PLAY
              </p>
              <h2
                className="font-fredoka font-bold text-3xl text-golden tracking-normal text-center"
                style={{ WebkitTextStroke: "0.5px #5E2E1C" }}
              >
                Play Day Passes
              </h2>
              <p className="text-[#333333] text-sm font-light leading-normal text-center max-w-[372px] mx-auto">
                Bring your kids to explore 2,000 sq ft of safe, exciting play zones. Perfect for playdates, rainy days, or spontaneous adventures.
              </p>
            </div>
          </ScrollAnimation>

          <Carousel opts={{ align: "center", loop: true }} className="w-full">
            <CarouselContent className="-ml-0">
              <CarouselItem className="pl-0">
                <DayPassCard />
              </CarouselItem>
              <CarouselItem className="pl-0">
                <WeekendPassCard />
              </CarouselItem>
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-6">
              <CarouselPrevious className="relative left-0" />
              <CarouselNext className="relative right-0" />
            </div>
          </Carousel>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:grid grid-cols-[468px_1fr] gap-8 lg:gap-14 items-start">
          {/* Left: Dark Box */}
          <ScrollAnimation variant="fadeLeft">
            <div className="bg-brown p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center text-center space-y-10 lg:space-y-12 h-full">
              <div className="space-y-3">
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="font-poppins text-golden text-4xl md:text-5xl font-medium"
                >
                  We are
                </motion.h3>
                <motion.h2
                  initial={{ opacity: 0, rotate: -5, scale: 0.9 }}
                  whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="font-playball text-golden text-6xl md:text-7xl lg:text-[93px] leading-tight"
                >
                  Socks only
                </motion.h2>
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="font-poppins text-golden text-4xl md:text-5xl font-medium"
                >
                  Facility
                </motion.h3>
              </div>

              <div className="w-full max-w-[369px]">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="aspect-square rounded-full overflow-hidden border-[9px] border-beige"
                >
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f3f725645dd8f97dc7c73020a6adca7024c2ca90?width=960"
                    alt="Socks required"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-golden text-lg md:text-xl font-quicksand max-w-[405px] leading-[35px]"
              >
                All adults and children must wear socks. We sell socks in case
                you forget to bring them.
              </motion.p>
            </div>
          </ScrollAnimation>

          {/* Right: Play Day Passes */}
          <ScrollAnimation variant="slideUp">
            <div className="space-y-8 lg:space-y-10">
              <div className="space-y-4">
                <p className="text-olive text-lg md:text-xl font-medium">
                  OPEN PLAY
                </p>
                <h2 className="font-fredoka text-4xl sm:text-5xl md:text-6xl lg:text-[80.9px] text-golden tracking-[0.06em] text-stroke-md leading-tight"
                  style={{
                    WebkitTextStroke: "4px #5E2E1C",
                  }}
                >
                  Play Day Passes
                </h2>
                <p className="text-[#333333] text-lg md:text-xl font-light leading-[35px] max-w-[800px]">
                  Bring your kids to explore 2,000 sq ft of safe, exciting play zones. Perfect for playdates, rainy days, or spontaneous adventures.
                </p>
              </div>

              <div className="grid lg:grid-cols-[535px_1fr] gap-8 items-start">
                <div className="space-y-8 lg:space-y-12">
                  <div className="space-y-4">
                    <p className="text-brown text-2xl md:text-[28px] font-poppins font-normal">
                      Weekday Pass
                    </p>
                    <motion.p
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, type: "spring", bounce: 0.6 }}
                      className="font-fredoka font-extrabold text-5xl lg:text-[70px] text-golden tracking-normal"
                      style={{ WebkitTextStroke: "1px #5E2E1C" }}>$15.99
                    </motion.p>
                  </div>

                  <div className="space-y-5 lg:space-y-6">
                    <FeatureItem text="Unlimited playtime" />
                    <FeatureItem text="Bring your own snacks & drinks" />
                    <FeatureItem text="Same-day re-entry" />
                    <FeatureItem text="Siblings 1 & under play free" />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="w-full max-w-[258px] bg-brown text-beige py-3.5 rounded-full font-poppins font-semibold text-lg tracking-[0.9px] hover:bg-olive transition-colors shadow-md"
                  >
                    BOOK NOW
                  </motion.button>
                </div>

                <div className="hidden lg:block">
                  <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    src="https://api.builder.io/api/v1/image/assets/TEMP/bd30a3757d11092698a6e0e041a5eeea4d400d70?width=3404"
                    alt="Play area"
                    className="w-full max-w-[598px] h-auto aspect-[598/707] object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
