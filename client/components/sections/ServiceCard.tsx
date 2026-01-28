import type React from "react"
import { motion } from "framer-motion"

export function ServiceCard({ image, title }: { image: string; title: string }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08, y: -5 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col items-center gap-3 max-w-[250px] mx-auto"
    >
      <div className="relative w-full">
        <div
          className="w-full aspect-square rounded-full bg-white p-1.5"
          style={{ boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.10)" }}
        >
          <div className="w-full h-full rounded-full overflow-hidden">
            <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
      <h3 className="text-[#101010] text-sm font-inter text-center font-normal">{title}</h3>
    </motion.div>
  )
}
