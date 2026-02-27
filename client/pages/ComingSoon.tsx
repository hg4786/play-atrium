import { siteConfig } from "@/lib/site-config";

export default function ComingSoon() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center p-6 sm:p-10">
      <div className="flex flex-col items-center max-w-5xl mx-auto space-y-8 animate-in fade-in zoom-in duration-700">
        {/* Logo */}
        <img
          src={siteConfig.logoColor}
          alt={`${siteConfig.name} Logo`}
          className="w-48 sm:w-64 md:w-80 lg:w-96 drop-shadow-sm"
        />

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl font-medium text-center text-[#5E2E1C] max-w-xl leading-relaxed">
          {siteConfig.tagline}
        </p>

        {/* Big Coming Soon Text */}
        <h1 
          className="font-fredoka font-bold text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-transparent text-center"
          style={{ WebkitTextStroke: "2px #5E2E1C" }}
        >
          Coming Soon
        </h1>
      </div>
    </div>
  );
}
