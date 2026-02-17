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
        <div className="w-full max-w-[400px] mx-auto bg-brown rounded-[11px] overflow-hidden border-2 h-full flex flex-col border-b-8 border-b-golden">
            {/* Title */}
            <div className="bg-brown py-3 text-center">
                <h3 className="font-fredoka font-bold text-xl tracking-tighter md:text-2xl text-transparent" style={{ WebkitTextStroke: "1px #F7D54F" }}>
                    {title}
                </h3>
            </div>

            {/* Price Box */}
            <div className="bg-golden py-6 px-6 text-center border-x-4 border-beige">
                <p className="font-fredoka font-extrabold text-5xl md:text-6xl text-brown mb-4" style={{ WebkitTextStroke: "0.5px white" }}>
                    {price}
                </p>
                <div className="space-y-2 bg-olive text-white text-sm md:text-base font-medium border-2 border-[#D4A574]/50 rounded-md py-2 px-3">
                    <p>
                        {duration}
                    </p>
                    <p>
                        {ageLimit}
                    </p>
                </div>
            </div>

            {/* Features */}
            <div className="flex-1 p-6 space-y-3 bg-brown">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                        <Star className="w-5 h-5 flex-shrink-0 fill-beige text-beige mt-0.5" />
                        <p className="text-beige text-sm md:text-base font-light leading-relaxed">
                            {feature}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    )
}