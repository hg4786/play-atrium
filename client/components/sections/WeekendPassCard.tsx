import { Star } from "lucide-react"
import { motion } from "framer-motion"

export function WeekendPassCard() {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-[343px] mx-auto bg-gradient-to-b from-beige/90 to-beige/90 rounded-[11px] border-2 border-olive overflow-hidden"
    >
      <div className="bg-beige border-b border-olive px-6 py-6 text-center">
        <p className="text-golden text-base font-poppins mb-2">Weekend Pass</p>
        <p className="font-fredoka font-extrabold text-5xl text-golden tracking-normal"
          style={{ WebkitTextStroke: "1px #56623C" }}>$19.99</p>
      </div>
      <div className="px-6 py-6 space-y-4">
        <div className="flex items-start gap-5">
          <Star className="w-5 h-5 text-olive fill-olive flex-shrink-0 mt-1" />
          <p className="text-[#656565] text-sm font-medium leading-[30px]">Unlimited playtime</p>
        </div>
        <div className="flex items-start gap-5">
          <Star className="w-5 h-5 text-olive fill-olive flex-shrink-0 mt-1" />
          <p className="text-[#656565] text-sm font-medium leading-[30px]">Bring your own snacks & drinks</p>
        </div>
        <div className="flex items-start gap-5">
          <Star className="w-5 h-5 text-olive fill-olive flex-shrink-0 mt-1" />
          <p className="text-[#656565] text-sm font-medium leading-[30px]">Same-day re-entry</p>
        </div>
        <div className="flex items-start gap-5">
          <Star className="w-5 h-5 text-olive fill-olive flex-shrink-0 mt-1" />
          <p className="text-[#656565] text-sm font-medium leading-[30px]">Siblings 1 & under play free</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-[283px] mx-auto block bg-[#54643D] text-beige py-3 rounded-full font-poppins font-semibold text-xs tracking-[0.9px] hover:bg-olive transition-colors shadow-md mt-6"
        >
          BOOK NOW
        </motion.button>
      </div>
    </motion.div>
  )
}
