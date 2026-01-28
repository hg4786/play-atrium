import { motion } from "framer-motion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { ScrollAnimation } from "@/lib/animationUtils"
import { BalloonGarlandCard } from "./BalloonGarlandCard"

export function BalloonGarlandsSection() {
  return (
    <section
      id="decoration"
      className="bg-white py-0 relative overflow-hidden"
    >
      <div className="max-w-[1920px] mx-auto">
        {/* Mobile View */}
        <div className="lg:hidden bg-[#54643D] py-12 px-6 relative min-h-[400px]">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#FFEBEB] text-sm text-center mb-3"
          >
            Make Your Celebration Picture-Perfect
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-fredoka text-2xl text-olive text-center leading-[43px] tracking-[1.44px] mb-4"
            style={{ WebkitTextStroke: "3px #F4E9CD" }}
          >
            BALLOON GARLANDS & PARTY DECOR
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white text-sm text-center tracking-[0.42px] leading-7 mb-8"
          >
            Choose from simple, elegant designs to fully custom themes. We
            make decorating easy!
          </motion.p>

          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-0">
              <CarouselItem className="pl-0">
                <BalloonGarlandCard
                  size="6-Foot Garland"
                  price="$100"
                  image="https://cdn.builder.io/api/v1/image/assets%2Ff6464ae0a97c45b597577376c5ab2661%2F046f6462f03d4cabbe5d00d89de609dd?format=webp&width=800"
                />
              </CarouselItem>
              <CarouselItem className="pl-0">
                <BalloonGarlandCard
                  size="12-Foot Garland"
                  price="$180"
                  image="https://cdn.builder.io/api/v1/image/assets%2Ff6464ae0a97c45b597577376c5ab2661%2F426003cf3f2d443a805855692c625afd?format=webp&width=800"
                />
              </CarouselItem>
            </CarouselContent>
            <div className="flex items-center justify-center gap-4 mt-6">
              <CarouselPrevious className="relative left-0" />
              <CarouselNext className="relative right-0" />
            </div>
          </Carousel>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 bg-gradient-to-r from-beige/40 via-[rgba(255,197,2,0.39)] to-beige/40 p-3 rounded-lg text-center"
          >
            <p className="text-black text-sm">
              Custom colors & themes available
            </p>
          </motion.div>

          <motion.img
            initial={{ opacity: 0, rotate: -10 }}
            whileInView={{ opacity: 0.9, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            src="https://api.builder.io/api/v1/image/assets/TEMP/5181750c340986db0ddcf0deeeb7d2c048c00fa2?width=252"
            alt="Decoration"
            className="absolute bottom-4 right-4 w-[126px] h-auto opacity-90"
          />
        </div>

        {/* Desktop View - 3 Columns Side by Side */}
        <div className="hidden lg:flex lg:gap-[13px]">
          {/* Left Column: Dark Panel with Heading (583px) */}
          <ScrollAnimation variant="fadeLeft">
            <div className="w-[500px] min-h-[650px] bg-[#54643D] flex flex-col items-center px-10 relative">
              <div className="flex flex-col items-center gap-5 max-w-[505px] mt-[80px]">
                <p className="text-[#FFEBEB] text-lg text-center font-inter">
                  Make Your Celebration Picture-Perfect
                </p>
                <h2
                  className="font-fredoka text-[48px] text-[#56623C] text-center leading-tight tracking-[3.84px] max-w-[499px]"
                  style={{ WebkitTextStroke: "5px #F4E9CD" }}
                >
                  BALLOON GARLANDS & PARTY DECOR
                </h2>
                <p className="text-white text-base text-center tracking-[1.2px] leading-6">
                  Choose from simple, elegant designs to fully custom themes. We
                  make decorating easy!
                </p>
              </div>
              <motion.img
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                animate={{ y: [0, -10, 0] }}
                viewport={{ once: true }}
                transition={{
                  opacity: { duration: 0.8 },
                  y: { duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
                }}
                src="https://api.builder.io/api/v1/image/assets/TEMP/fd32ed87d5b4e413be0746ae8df3e000299989de?width=2078"
                alt="Decorative balloons"
                className="absolute bottom-0 left-0 w-full h-[250px] object-contain"
                style={{ transform: "rotate(2.982deg)" }}
              />
            </div>
          </ScrollAnimation>

          {/* Middle Column: BALOON GARLANDS (582px) */}
          <ScrollAnimation variant="scale" delay={0.1}>
            <div className="w-[450px] min-h-[650px] bg-beige flex flex-col p-4">
              <div className="py-2 flex-shrink-0">
                <h3
                  className="font-fredoka text-[36px] text-[#FCBE5A] text-center tracking-[2.574px] leading-tight"
                  style={{ WebkitTextStroke: "5px #54643D" }}
                >
                  BALOON GARLANDS
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {/* 6-Foot Garland */}
                <div className="flex items-center gap-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff6464ae0a97c45b597577376c5ab2661%2F426003cf3f2d443a805855692c625afd?format=webp&width=800"
                    alt="6-Foot Garland"
                    className="w-[180px] h-auto flex-shrink-0"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-black text-sm font-inter leading-tight">
                      6-Foot Garland
                    </p>
                    <p
                      className="font-poppins text-[24px] text-[#FCBE5A] font-semibold"
                      style={{ WebkitTextStroke: "2px #5A6943" }}
                    >
                      $100
                    </p>
                    <button className="w-[90px] py-1 text-xs bg-[#54643D] text-beige rounded-full font-inter font-semibold tracking-[0.9px] hover:bg-olive transition-colors shadow-md">
                      BOOK NOW
                    </button>
                  </div>
                </div>

                {/* 12-Foot Garland */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-black text-sm font-inter leading-tight">
                      12-Foot Garland
                    </p>
                    <p
                      className="font-poppins text-[24px] text-[#FCBE5A] font-semibold"
                      style={{ WebkitTextStroke: "2px #5A6943" }}
                    >
                      $180
                    </p>
                    <button className="w-[90px] py-1 text-xs bg-[#54643D] text-beige rounded-full font-inter font-semibold tracking-[0.9px] hover:bg-olive transition-colors shadow-md">
                      BOOK NOW
                    </button>
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff6464ae0a97c45b597577376c5ab2661%2Faaefdb345315400a825fa6ccab9c2fb5?format=webp&width=800 "
                    alt="12-Foot Garland"
                    className="w-[180px] h-auto flex-shrink-0"
                  />
                </div>

                {/* Custom colors note */}
                <div className="bg-gradient-to-r from-beige/40 via-[rgba(255,197,2,0.39)] to-beige/40 p-2 text-center">
                  <p className="text-black text-xs font-inter">
                    Custom colors & themes available
                  </p>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right Column: COLOR BACKDROP (601px) */}
          <ScrollAnimation variant="fadeRight" delay={0.2}>
            <div className="w-[450px] min-h-[650px] bg-beige flex flex-col p-4">
              <div className="flex flex-col gap-4 flex-1">
                {/* Backdrop Option 1 */}
                <div className="flex items-center gap-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff6464ae0a97c45b597577376c5ab2661%2F046f6462f03d4cabbe5d00d89de609dd?format=webp&width=800"
                    alt="1 Color Backdrop + 6ft Balloons"
                    className="w-[180px] h-auto flex-shrink-0"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-black text-xs font-inter leading-tight max-w-[120px]">
                      1 COLOR BACKDROP + 6FT BALLOONS
                    </p>
                    <p
                      className="font-poppins text-[24px] text-[#FCBE5A] font-semibold"
                      style={{ WebkitTextStroke: "2px #5A6943" }}
                    >
                      $200
                    </p>
                    <button className="w-[90px] py-1 text-xs bg-[#54643D] text-beige rounded-full font-inter font-semibold tracking-[0.9px] hover:bg-olive transition-colors shadow-md">
                      BOOK NOW
                    </button>
                  </div>
                </div>

                {/* Backdrop Option 2 */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-black text-xs font-inter leading-tight max-w-[120px]">
                      1 COLOR BACKDROP + 6FT BALLOONS
                    </p>
                    <p
                      className="font-poppins text-[24px] text-[#FCBE5A] font-semibold"
                      style={{ WebkitTextStroke: "2px #5A6943" }}
                    >
                      $280
                    </p>
                    <button className="w-[90px] py-1 text-xs bg-[#54643D] text-beige rounded-full font-inter font-semibold tracking-[0.9px] hover:bg-olive transition-colors shadow-md">
                      BOOK NOW
                    </button>
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff6464ae0a97c45b597577376c5ab2661%2F94305455275840f6a07d944b375a3a9a?format=webp&width=800"
                    alt="1 Color Backdrop + 12ft Balloons"
                    className="w-[180px] h-auto flex-shrink-0"
                  />
                </div>
              </div>

              <div className="py-2 flex-shrink-0">
                <h3
                  className="font-fredoka text-[36px] text-[#FCBE5A] text-center tracking-[2.574px] leading-tight"
                  style={{ WebkitTextStroke: "5px #54643D" }}
                >
                  COLOR BACKDROP
                </h3>
              </div>
            </div>
          </ScrollAnimation>

          <ScrollAnimation variant="fadeRight" delay={0.2}>
            <div className="w-[450px] min-h-[650px] bg-beige flex flex-col p-4">
              <div className="flex flex-col gap-4 flex-1">
                {/* Backdrop Option 1 */}
                <div className="flex items-center gap-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff6464ae0a97c45b597577376c5ab2661%2F046f6462f03d4cabbe5d00d89de609dd?format=webp&width=800"
                    alt="1 Color Backdrop + 6ft Balloons"
                    className="w-[180px] h-auto flex-shrink-0"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-black text-xs font-inter leading-tight max-w-[120px]">
                      1 COLOR BACKDROP + 6FT BALLOONS
                    </p>
                    <p
                      className="font-poppins text-[24px] text-[#FCBE5A] font-semibold"
                      style={{ WebkitTextStroke: "2px #5A6943" }}
                    >
                      $200
                    </p>
                    <button className="w-[90px] py-1 text-xs bg-[#54643D] text-beige rounded-full font-inter font-semibold tracking-[0.9px] hover:bg-olive transition-colors shadow-md">
                      BOOK NOW
                    </button>
                  </div>
                </div>

                {/* Backdrop Option 2 */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-black text-xs font-inter leading-tight max-w-[120px]">
                      1 COLOR BACKDROP + 6FT BALLOONS
                    </p>
                    <p
                      className="font-poppins text-[24px] text-[#FCBE5A] font-semibold"
                      style={{ WebkitTextStroke: "2px #5A6943" }}
                    >
                      $280
                    </p>
                    <button className="w-[90px] py-1 text-xs bg-[#54643D] text-beige rounded-full font-inter font-semibold tracking-[0.9px] hover:bg-olive transition-colors shadow-md">
                      BOOK NOW
                    </button>
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff6464ae0a97c45b597577376c5ab2661%2F94305455275840f6a07d944b375a3a9a?format=webp&width=800"
                    alt="1 Color Backdrop + 12ft Balloons"
                    className="w-[180px] h-auto flex-shrink-0"
                  />
                </div>
              </div>

              <div className="py-2 flex-shrink-0">
                <h3
                  className="font-fredoka text-[36px] text-[#FCBE5A] text-center tracking-[2.574px] leading-tight"
                  style={{ WebkitTextStroke: "5px #54643D" }}
                >
                  COLOR BACKDROP
                </h3>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
