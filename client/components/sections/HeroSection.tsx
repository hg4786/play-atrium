import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="bg-[#56623C] relative overflow-hidden w-full">
      <div className="w-full">
        {/* Mobile: Full width hero image with text overlay */}
        <div className="lg:hidden relative min-h-[351px]">
          <motion.img
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 0.9, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            src="https://api.builder.io/api/v1/image/assets/TEMP/306fb2177b2839afbb90acdfee67731b005e4479?width=976"
            alt="Kids playing"
            className="absolute inset-0 w-full h-full object-cover opacity-90"
          />
          <div className="relative z-10 flex items-end justify-center h-[351px] px-6 pb-8">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, type: "spring", bounce: 0.4 }}
              className="font-fredoka text-[28px] text-[#56623C] text-center leading-[40px] tracking-[1.68px] max-w-[386px]"
              style={{ WebkitTextStroke: "3px #F4E9CD" }}
            >
              Play. Laugh. Celebrate. Repeat.
            </motion.h1>
          </div>
        </div>

        {/* Desktop: Grid layout */}
        <div className="hidden lg:grid grid-cols-2">
          {/* Left: Image Grid */}
          <div className="grid grid-cols-2 gap-1.5 bg-white">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              src="https://api.builder.io/api/v1/image/assets/TEMP/d50513322e5e3aa6b13a76780069c467431861bd?width=1115"
              alt="Kids playing"
              className="w-full h-[340px]"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              src="https://api.builder.io/api/v1/image/assets/TEMP/7b109bfdea4e1b025a71fb2876d39f988f36e0c9?width=1418"
              alt="Family fun"
              className="w-full h-[340px]"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              src="https://api.builder.io/api/v1/image/assets/TEMP/02e0e4555c42184828e9e8bcd70e0a7a937ffc42?width=1132"
              alt="Playing area"
              className="w-full h-[355px]"
            />
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              src="https://api.builder.io/api/v1/image/assets/TEMP/1529d8fb17966cab9864a9633c2463d8afbea09f?width=1454"
              alt="Soft blocks"
              className="w-full h-[355px]"
            />
          </div>

          {/* Right: Hero Text */}
          <div className="relative flex items-end justify-center py-24 px-6 min-h-[700px]">
            <motion.img
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9, y: [0, -10, 0] }}
              transition={{
                opacity: { duration: 1 },
                y: { duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }
              }}
              src="https://api.builder.io/api/v1/image/assets/TEMP/d4c06715003914c330f4a00ff3a136f36d603bd1?width=2034"
              alt="Kids climbing illustration"
              className="absolute inset-0 w-full object-contain opacity-90 pointer-events-none"
            />
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, delay: 0.5, type: "spring", bounce: 0.4 }}
              className="font-fredoka text-6xl xl:text-[64px] text-[#56623C] text-center leading-tight tracking-[3.84px] relative z-10 max-w-[825px]"
              style={{ WebkitTextStroke: "7px #F4E9CD" }}
            >
              Play. Laugh. Celebrate. Repeat.
            </motion.h1>
          </div>
        </div>
      </div>

      {/* Mobile: Image Grid */}
      <div className="lg:hidden grid grid-cols-2 gap-0.5 bg-white">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          src="https://api.builder.io/api/v1/image/assets/TEMP/ad5763e6c199b4cfaef195b56ef6c7032c2a7864?width=429"
          alt="Kids playing"
          className="w-full h-[124px] object-cover"
        />
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          src="https://api.builder.io/api/v1/image/assets/TEMP/b0818769e5a63dc26d87bc312a289961dbf75d79?width=429"
          alt="Family fun"
          className="w-full h-[124px] object-cover"
        />
      </div>
    </section>
  )
}
