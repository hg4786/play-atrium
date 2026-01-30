import { motion } from "framer-motion"
import { ScrollAnimation } from "@/lib/animationUtils"

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-olive py-12 md:py-20 lg:py-24 px-6 lg:px-20"
    >
      <div className="max-w-[1704px] mx-auto">
        <div className="grid 2xl:grid-cols-[362px_1fr_366px] gap-6 lg:gap-8 xl:gap-12 items-center">
          {/* Left: Images - Desktop only */}
          <ScrollAnimation variant="fadeLeft">
            <div className="hidden 2xl:block relative">
              <div className="space-y-6">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8efc9a07316bfdd9172d803149215cf41c6794c6?width=1080"
                  alt="Kids in bounce house"
                  className="w-full h-[388px] object-cover rounded-lg"
                />
                <motion.img
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7f559b8b66065d793d0922d6cc9c91a5b0d86719?width=798"
                  alt="Rope climbing"
                  className="w-full h-[256px] object-cover rounded-lg"
                />
              </div>
            </div>
          </ScrollAnimation>

          {/* Center: Content */}
          <ScrollAnimation variant="slideUp">
            <div className="space-y-6 md:space-y-8 lg:space-y-12">
              <h2
                className="font-fredoka font-bold text-2xl md:text-4xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-olive text-center leading-tight lg:leading-tight tracking-wider lg:tracking-widest"
                style={{ WebkitTextStroke: "0.5px #F4E9CD" }}
              >
                Where Play, Imagination & Family Fun Come to Life.
              </h2>

              {/* Mobile Images */}
              <div className="2xl:hidden grid grid-cols-2 gap-0.5">
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  src="https://api.builder.io/api/v1/image/assets/TEMP/06dd8cb8378951b197086afd54163c1bd8701608?width=862"
                  alt="Kids playing"
                  className="w-full h-[123px] object-cover"
                />
                <motion.img
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1bbe471f791e2f738fd5cb19c0a3aa65ba491799?width=862"
                  alt="Family fun"
                  className="w-full h-[123px] object-cover"
                />
              </div>

              <div className="space-y-6 max-w-[838px] mx-auto">
                <p className="text-white text-center text-sm md:text-xl leading-7 md:leading-[35px]">
                  The Play Atrium was created with one goal in mind: to give families a safe, clean, and joyful place to play, connect, and celebrate together. Located inside a 4,000 sq ft family-friendly facility, featuring approximately 2,000 sq ft of dedicated play areas designed for exploration, creativity, and active fun. we’re dedicated to making every visit feel special.
                </p>

                <p className="text-white text-center text-sm md:text-xl font-light leading-7 md:leading-[35px]">
                  Whether you’re here for a playdate, a spontaneous afternoon of fun, or a once-in-a-lifetime celebration, our team works hard to make sure kids stay active, parents feel at ease, and every family leaves with big smiles and happy memories.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-11 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-white text-olive px-[92px] md:px-11 py-3.5 rounded-full font-inter font-semibold text-xs md:text-lg tracking-[0.9px] hover:bg-beige transition-colors shadow-md"
                >
                  Become a Member
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="border border-white text-white sm:px-[114px] md:px-11 py-3.5 rounded-full font-inter font-semibold text-xs md:text-lg tracking-[0.9px] hover:bg-white hover:text-olive transition-colors shadow-md"
                >
                  Get a Day Pass
                </motion.button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right: Images - Desktop only */}
          <ScrollAnimation variant="fadeRight">
            <div className="hidden 2xl:block relative">
              <div className="space-y-6">
                <motion.img
                  whileHover={{ scale: 1.05, rotate: -2 }}
                  transition={{ duration: 0.3 }}
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3fda0e2907509fe37368af825dbc66eadd55a4f6?width=1244"
                  alt="Air hockey"
                  className="w-full h-[303px] object-cover rounded-lg"
                />
                <motion.img
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  transition={{ duration: 0.3 }}
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e20473b81779e8e677428ec53d21cefb618b839e?width=1164"
                  alt="Slide"
                  className="w-full h-[332px] object-cover rounded-lg"
                />
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
