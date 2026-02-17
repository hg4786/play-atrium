import { motion } from "framer-motion"

export function BalloonGarlandCard({
  size,
  price,
  image,
}: {
  size: string
  price: string
  image: string
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-[402px] mx-auto bg-golden p-6"
    >
      <div className="flex flex-col items-center gap-6">
        <img src={image || "/placeholder.svg"} alt={size} className="w-[190px] h-auto" />
        <div className="flex flex-col items-center space-y-4">
          <p className="text-black text-xl">{size}</p>
          <p className="font-poppins text-[36px] text-beige font-bold" style={{ WebkitTextStroke: "3px #5E2E1C" }}>
            {price}
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-brown text-beige px-6 py-2 rounded-full font-inter font-semibold text-base tracking-[0.9px] hover:bg-brown/80 transition-colors shadow-md"
          >
            BOOK NOW
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}
