import { motion } from "framer-motion"
import { useState, useEffect } from "react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { ScrollAnimation } from "@/lib/animationUtils"
import { DecorativeStarsTestimonials } from "./DecorativeStarsTestimonials"
import { TestimonialCard } from "./TestimonialCard"

export function TestimonialsSection() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const scrollTo = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <section className="bg-white py-12 md:pb-20 relative overflow-hidden min-h-auto">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/249b83ed8229461c56151591ea0a95bafc732864?width=3856"
        alt="Background"
        className="absolute inset-x-0 top-0 w-full h-[100%] object-cover"
        style={{ opacity: 0.85 }}
      />

      <DecorativeStarsTestimonials />

      <div className="max-w-[1920px] mx-auto relative h-[400px]">
        {/* Mobile View */}
        <div className="lg:hidden flex flex-col items-center space-y-6 px-4 relative z-10">
          <ScrollAnimation variant="fadeUp">
            <div className="text-center space-y-1">
              <h2
                className="font-fredoka font-semibold text-2xl text-golden text-center leading-tight tracking-[1.44px]"
                style={{ WebkitTextStroke: "1px #F4E9CD" }}
              >
                What Parents Are Saying
              </h2>
              <p className="text-white text-sm leading-7">
                Real Experiences From Families Who Love The Play Atrium
              </p>
            </div>
          </ScrollAnimation>

          <Carousel
            opts={{ align: "center", loop: true }}
            className="w-full max-w-[362px] pb-16"
            setApi={setApi}
          >
            <CarouselContent className="-ml-0">
              <CarouselItem className="pl-0">
                <TestimonialCard
                  quote="The staff handled everything smoothly, and the kids had an amazing time exploring all the play zones. The private rental made the whole event stress-free. We will definitely be back!"
                  author="Jessica M."
                />
              </CarouselItem>
              <CarouselItem className="pl-0">
                <TestimonialCard
                  quote="Absolutely loved this place! The kids had so much fun and I appreciated how clean and safe everything was. Highly recommend for birthday parties!"
                  author="Sarah K."
                />
              </CarouselItem>
              <CarouselItem className="pl-0">
                <TestimonialCard
                  quote="Best place for kids in the area! My children never want to leave. The membership is worth every penny!"
                  author="Michael R."
                />
              </CarouselItem>
            </CarouselContent>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 items-center justify-center">
              {[0, 1, 2].map((index) => (
                <motion.button
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                  onClick={() => scrollTo(index)}
                  className={`w-[15px] h-[14px] rounded-full transition-colors duration-300 cursor-pointer ${
                    current === index ? "bg-[#56623C]" : "bg-[#D9D9D9]"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:flex lg:justify-between lg:items-center lg:px-8 xl:px-12 relative pt-4">
          {/* Left Image */}
          <ScrollAnimation variant="fadeLeft">
            <div className="flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.05, rotate: 5 }}
                transition={{ duration: 0.3 }}
                className="w-[380px] h-[380px] xl:w-[250px] xl:h-[250px] rounded-full bg-white p-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.15)]"
              >
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f3f725645dd8f97dc7c73020a6adca7024c2ca90?width=960"
                    alt="Happy family"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </ScrollAnimation>

          {/* Center Content */}
          <ScrollAnimation variant="slideUp">
            <div className="flex flex-col items-center space-y-6 lg:space-y-10 px-6 relative z-10 max-w-[1017px]">
              <div className="text-center space-y-2">
                <h2
                  className="font-fredoka text-[65px] xl:text-[50px] text-[#FCBE5A] text-center leading-none tracking-[4.854px]"
                  style={{
                    WebkitTextStroke: "2px #F4E9CD",
                  }}
                >
                  What Parents Are Saying
                </h2>
                <p className="text-white text-lg leading-[35px] font-inter">
                  Real Experiences From Families Who Love The Play Atrium
                </p>
              </div>

              <div className="flex flex-col items-center max-w-[787px] space-y-4 xl:space-y-6">
                <motion.svg
                  initial={{ opacity: 0, rotate: -15 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, type: "spring" }}
                  className="w-[60px] h-[60px] text-[#F4E9CD]"
                  viewBox="0 0 83 83"
                  fill="currentColor"
                >
                  <path d="M35.6641 33.5566C35.6641 23.9922 27.8828 16.2109 18.4805 16.2109C8.91602 16.2109 1.29688 23.9922 1.29688 33.5566C1.29688 42.959 8.91602 50.7402 18.4805 50.7402C22.0469 50.7402 25.2891 49.6055 28.0449 47.8223C22.0469 64.6816 8.5918 66.627 7.94336 66.7891L8.5918 71.6523C8.75391 71.6523 33.5566 68.248 35.6641 33.8809C35.6641 33.7188 35.6641 33.7188 35.6641 33.5566ZM18.4805 45.877C11.6719 45.877 6.16016 40.3652 6.16016 33.5566C6.16016 26.748 11.6719 21.2363 18.4805 21.2363C25.2891 21.2363 30.8008 26.748 30.8008 33.5566C30.8008 40.3652 25.2891 45.877 18.4805 45.877ZM81.7031 33.8809C81.7031 33.7188 81.7031 33.5566 81.7031 33.5566C81.7031 23.9922 74.084 16.2109 64.5195 16.2109C54.9551 16.2109 47.3359 23.9922 47.3359 33.5566C47.3359 42.959 54.9551 50.7402 64.5195 50.7402C68.0859 50.7402 71.4902 49.6055 74.2461 47.8223C68.248 64.6816 54.6309 66.627 53.9824 66.7891L54.6309 71.6523C54.793 71.6523 79.5957 68.248 81.7031 33.8809ZM64.5195 45.877C57.7109 45.877 52.1992 40.3652 52.1992 33.5566C52.1992 26.748 57.7109 21.2363 64.5195 21.2363C71.3281 21.2363 76.8398 26.748 76.8398 33.5566C76.8398 40.3652 71.3281 45.877 64.5195 45.877Z" />
                </motion.svg>

                <p className="text-white text-center text-lg font-light leading-[25px] font-inter mt-0">
                  The staff handled everything smoothly, and the kids had an
                  amazing time exploring all the play zones. The private rental
                  made the whole event stress-free. We will definitely be back!
                </p>

                <p className="text-white text-center text-[19px] leading-[30px] font-inter mt-0">
                  Jessica M.
                </p>

                {/* <div className="flex gap-4 items-center pt-2">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className="w-[15px] h-[14px] rounded-full bg-[#56623C]"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className="w-[15px] h-[14px] rounded-full bg-[#D9D9D9]"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className="w-[15px] h-[14px] rounded-full bg-[#D9D9D9]"
                  ></motion.div>
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="w-[15px] h-[14px] rounded-full bg-[#D9D9D9]"
                  ></motion.div>
                </div> */}
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Image */}
          <div className="mb-auto">
            <ScrollAnimation variant="fadeRight">
              <div className="flex-shrink-0 mb-auto">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: -5 }}
                  transition={{ duration: 0.3 }}
                  className="w-[270px] h-[270px] xl:w-[200px] xl:h-[200px] rounded-full bg-white p-[10px] shadow-[0_4px_4px_rgba(0,0,0,0.15)]"
                >
                  <div className="w-full h-full rounded-full overflow-hidden">
                    <img
                      src="https://api.builder.io/api/v1/image/assets/TEMP/a445e37ad81bed2c2077f66f1ddd42e83df7548b?width=1112"
                      alt="Kids playing"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}
