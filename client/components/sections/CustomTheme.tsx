export function CustomTheme() {
    return (
        <div className="bg-olive py-6 md:py-8 lg:py-12">
            <div className="container mx-auto px-4">
                {/* Mobile Layout - Vertical Centered */}
                <div className="flex flex-col items-center text-center lg:hidden">
                    <div className="mb-8">
                        <img
                            src="/img/customThemeBg.jpg"
                            alt="Kids playing on colorful playground"
                            className="w-full max-w-md mx-auto aspect-[4/3] object-cover border-2 border-golden rounded-lg"
                        />
                    </div>
                    <div className="text-white">
                        <h2 className="font-fredoka text-golden text-4xl md:text-5xl mb-4"
                            style={{
                                WebkitTextStroke: "2px #5E2E1C",
                            }}
                        >
                            Ask us about custom themes!
                        </h2>
                        <p className="text-base md:text-lg mb-6 max-w-md mx-auto">
                            Create a personalized celebration designed just for your child.
                        </p>
                        <button className="bg-[#f4e9cd] text-olive px-8 py-3 rounded-full font-poppins font-semibold hover:bg-[#e8dbb8] transition-colors">
                            Choose Plan
                        </button>
                    </div>
                </div>

                {/* Desktop Layout - Horizontal */}
                <div className="hidden lg:flex items-center justify-between gap-12">
                    <div className="text-white flex-1">
                        <h2 className="font-fredoka text-golden text-5xl xl:text-6xl mb-4"
                            style={{
                                WebkitTextStroke: "4px #5E2E1C",
                            }}
                        >
                            Ask us about custom themes!
                        </h2>
                        <p className="text-lg xl:text-xl mb-8 max-w-lg">
                            Create a personalized celebration designed just for your child.
                        </p>
                        <button className="bg-golden text-brown px-14 py-3 rounded-full font-poppins font-semibold hover:bg-[#e8dbb8] transition-colors shadow-lg">
                            Book Now
                        </button>
                    </div>
                    <div className="flex-1">
                        <img
                            src="/img/customThemeBg.jpg"
                            alt="Kids playing on colorful playground"
                            className="h-full max-h-[350px] aspect-[4/3] w-auto object-cover border-2 border-golden rounded-lg ml-auto"
                        />
                    </div>
                </div>
            </div>
        </div>)
}