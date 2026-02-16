import { Star } from "lucide-react"

export function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-5 lg:gap-6">
      <Star className="w-5 h-5 lg:w-11 lg:h-11 text-brown fill-brown flex-shrink-0" />
      <p className="text-[#656565] text-sm md:text-2xl font-medium leading-[30px]">{text}</p>
    </div>
  )
}
