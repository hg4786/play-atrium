import { Star } from "lucide-react"

interface PackageCardProps {
    title: string
    price: string
    duration: string
    ageLimit: string
    features: string[]
}

export default function PackageCard({ title, price, duration, ageLimit, features }: PackageCardProps) {
    return (
        <div className="w-full max-w-[400px] mx-auto bg-beige rounded-[11px] overflow-hidden border-2 border-olive shadow-lg h-full flex flex-col border-b-8 border-b-golden">
            {/* Title */}
            <div className="bg-beige py-3 text-center">
                <h3 className="font-fredoka font-bold text-xl md:text-2xl text-golden" style={{ WebkitTextStroke: "1px #56623C" }}>
                    {title}
                </h3>
            </div>

            {/* Price Box */}
            <div className="bg-[#54643D] py-6 px-6 text-center border-x-4 border-golden">
                <p className="font-fredoka font-extrabold text-5xl md:text-6xl text-golden mb-4" style={{ textShadow: "1px 1px 0px 1px white, 1px -1px 0px 1px white" }}>
                    {price}
                </p>
                <div className="space-y-2 bg-beige/10 text-golden text-sm md:text-base font-medium border-2 border-[#D4A574]/50 rounded-md py-2 px-3">
                    <p>
                        {duration}
                    </p>
                    <p>
                        {ageLimit}
                    </p>
                </div>
            </div>

            {/* Features */}
            <div className="flex-1 p-6 space-y-3 bg-beige">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <Star className="w-5 h-5 flex-shrink-0 fill-olive text-olive mt-0.5" />
                        <p className="text-[#333333] text-sm md:text-base font-light leading-relaxed">
                            {feature}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}