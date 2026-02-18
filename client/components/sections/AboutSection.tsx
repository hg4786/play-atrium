import { motion } from "framer-motion"
import { ScrollAnimation } from "@/lib/animationUtils"

export function AboutSection() {
  return (
    <section
      id="about"
      className="bg-olive py-12 md:py-20 lg:py-24 px-6 lg:px-20"
    >
      <div className="max-w-[1800px] mx-auto overflow-visible">
        <div className="grid lg:grid-cols-[1fr_auto_1fr] xl:grid-cols-[300px_1fr_300px] gap-4 xl:gap-20 items-center">
          {/* Left: Images - Desktop only */}
          <ScrollAnimation variant="fadeLeft">
            <div className="hidden lg:block relative h-[550px] w-full">
              <motion.img
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                src="https://api.builder.io/api/v1/image/assets/TEMP/8efc9a07316bfdd9172d803149215cf41c6794c6?width=1080"
                alt="Kids in bounce house"
                className="absolute top-0 left-0 w-[220px] xl:w-[260px] h-[300px] object-cover rounded-lg shadow-2xl z-10"
              />
              <motion.img
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
                src="https://api.builder.io/api/v1/image/assets/TEMP/7f559b8b66065d793d0922d6cc9c91a5b0d86719?width=798"
                alt="Rope climbing"
                className="absolute bottom-10 right-4 lg:right-0 w-[190px] xl:w-[220px] h-[260px] object-cover rounded-lg shadow-2xl z-20"
              />
            </div>
          </ScrollAnimation>

          {/* Center: Content */}
          <ScrollAnimation variant="slideUp">
            <div className="space-y-8 md:space-y-10 lg:space-y-14 flex flex-col items-center max-w-[950px] mx-auto">
              <h2
                className="font-fredoka font-bold text-3xl md:text-5xl lg:text-4xl xl:text-5xl text-brown text-center leading-tight tracking-tight lg:tracking-normal"
                style={{ WebkitTextStroke: "1.5px #F4E9CD" }}
              >
                Where Play, Imagination & Family Fun Come to Life.
              </h2>

              {/* Mobile Images */}
              <div className="lg:hidden grid grid-cols-2 gap-2 w-full">
                <motion.img
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  src="https://api.builder.io/api/v1/image/assets/TEMP/06dd8cb8378951b197086afd54163c1bd8701608?width=862"
                  alt="Kids playing"
                  className="w-full h-[200px] object-cover rounded-lg"
                />
                <motion.img
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1bbe471f791e2f738fd5cb19c0a3aa65ba491799?width=862"
                  alt="Family fun"
                  className="w-full h-[200px] object-cover rounded-lg"
                />
              </div>

              <div className="space-y-8">
                <p className="text-white text-center text-base md:text-md font-light leading-relaxed opacity-90">
                  The Play Atrium was created with one goal in mind: to give families a safe, clean, and joyful place to play, connect, and celebrate together. Located inside a 4,000 sq ft family-friendly facility, featuring approximately 2,000 sq ft of dedicated play areas designed for exploration, creativity, and active fun. we’re dedicated to making every visit feel special.
                </p>

                <p className="text-white text-center text-base md:text-md font-light leading-relaxed opacity-90">
                  Whether you’re here for a playdate, a spontaneous afternoon of fun, or a once-in-a-lifetime celebration, our team works hard to make sure kids stay active, parents feel at ease, and every family leaves with big smiles and happy memories.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 lg:gap-8 justify-center w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="border-2 border-white/30 bg-olive text-white px-8 md:px-12 py-4 rounded-full font-inter font-semibold text-sm md:text-lg tracking-wide hover:bg-white hover:text-olive transition-all duration-300"
                >
                  Get a Day Pass
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="bg-[#F4E9CD] text-olive px-8 md:px-12 py-4 rounded-full font-inter font-semibold text-sm md:text-lg tracking-wide hover:bg-white transition-all duration-300 shadow-xl shadow-black/10"
                >
                  Become a Member
                </motion.button>
              </div>
            </div>
          </ScrollAnimation>

          {/* Right: Images - Desktop only */}
          <ScrollAnimation variant="fadeRight">
            <div className="hidden lg:block relative h-[650px] w-full">
              <motion.img
                whileHover={{ scale: 1.05, rotate: -2 }}
                transition={{ duration: 0.3 }}
                src="https://api.builder.io/api/v1/image/assets/TEMP/3fda0e2907509fe37368af825dbc66eadd55a4f6?width=1244"
                alt="Air hockey"
                className="absolute top-0 right-0 w-[240px] xl:w-[320px] h-[320px] object-cover rounded-lg shadow-2xl z-10"
              />
              <motion.img
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ duration: 0.3 }}
                src="https://api.builder.io/api/v1/image/assets/TEMP/e20473b81779e8e677428ec53d21cefb618b839e?width=1164"
                alt="Kids drinking"
                className="absolute bottom-0 left-4 lg:left-0 w-[280px] xl:w-[340px] h-[340px] object-cover rounded-lg shadow-2xl z-20"
              />
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
