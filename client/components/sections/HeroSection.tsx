import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="bg-[#639438] relative w-full overflow-hidden">
      <div className="w-full relative h-[351px] md:h-[500px] lg:h-[700px]">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          src={"/img/kidsHanging.svg"}
          alt="Kids playing"
          className="absolute inset-0 w-full h-4/5 object-contain object-top lg:object-center opacity-90"
        />
        <div className="relative z-10 flex items-end justify-center h-full px-6 pb-8 md:pb-12 lg:pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.3,
              type: "spring",
              bounce: 0.4,
            }}
            className="font-fredoka font-bold text-[32px] md:text-5xl lg:text-7xl xl:text-[80px] text-brown text-center leading-tight tracking-tighter max-w-[400px] md:max-w-3xl lg:max-w-5xl"
            style={{
              WebkitTextStroke: "2px #F4E9CD",
              filter: "drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.25))",
            }}
          >
            Play. Laugh. Celebrate. Repeat.
          </motion.h1>
        </div>
      </div>
    </section>
  );
}
