import { motion } from "framer-motion"

export function MembershipCard({
  title,
  price,
  features,
  note,
  isPopular = false
}: {
  title: string
  price: string
  features: string[]
  note: string
  isPopular?: boolean
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, rotate: 2 }}
      transition={{ duration: 0.4 }}
      className="relative w-full max-w-[344px] lg:max-w-[565px] mx-auto aspect-square rounded-full border-[4px] lg:border-[5px] border-golden bg-olive shadow-lg p-12 lg:p-16 flex flex-col items-center justify-center text-center h-[565px]"
    >
      {isPopular && <img className="absolute -top-3 right-1/2 translate-x-1/2 w-32" src="/img/popularBadge.png" alt="" />}
      <div className="flex flex-col items-center space-y-6 max-w-[320px]">
        <div className="border-b border-[#DEB8A5] w-full space-y-3 lg:space-y-4">
          <h3
            className="font-fredoka font-bold text-[35px] text-brown tracking-[2.16px]"
            style={{ WebkitTextStroke: "0.5px #F5EBD2" }}
          >
            {title}
          </h3>
          <p className="font-fredoka text-[50px] text-golden" style={{ WebkitTextStroke: "1px #5E2E1C" }}>
            {price}
          </p>
        </div>

        <div className="space-y-2 lg:space-y-3 text-[#F5EBD2] text-md leading-[22px]">
          {features.map((feature, idx) => (
            <p key={idx}>{feature}</p>
          ))}
        </div>

        <div className="border border-golden lg:p-4 rounded-lg w-full">
          <p className="text-golden text-base lg:text-md leading-[22px]">{note}</p>
        </div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="bg-golden text-olive px-7 py-2 rounded-full font-poppins font-semibold text-md border border-[#A5AA9C] hover:bg-[#F5EBD2] transition-colors"
        >
          Choose Plan
        </motion.button>
      </div>
    </motion.div>
  )
}
