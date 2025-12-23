import { Link } from "react-router-dom";
import { Star, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-beige relative z-50 w-full">
        <div className="flex items-center justify-between px-2.5 py-2.5 sm:px-6 sm:py-4 md:px-8 lg:px-14 lg:py-4">
          {/* Logo */}
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/a8b59e56906e085d44896e9e9791b123bbf3c599?width=228"
            alt="Play Atrium Logo"
            className="h-auto w-[114px] sm:w-24 md:w-28 lg:w-32 xl:w-40"
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center ml-auto">
            <div className="flex items-center gap-2">
              <NavLink href="#services">Parties & Events</NavLink>
              <NavLink href="#about">About Us</NavLink>
              <NavLink href="#decoration">Custom Decoration</NavLink>
              <NavLink href="#contact">Contact Us</NavLink>
              <NavLink href="#gallery">Gallery</NavLink>
            </div>
            <div className="w-px h-16 bg-olive/20 mx-3"></div>
            <button className="bg-[#54643D] text-beige px-6 py-2.5 rounded-full font-quicksand font-semibold text-sm tracking-[0.9px] hover:opacity-90 transition-opacity whitespace-nowrap">
              BOOK NOW
            </button>
          </nav>

          {/* Mobile Menu Button & Book Now */}
          <div className="flex lg:hidden items-center gap-2">
            <button className="bg-[#54643D] text-beige px-[19px] py-2.5 rounded-full font-quicksand font-semibold text-[10px] tracking-[0.9px] hover:opacity-90 transition-opacity whitespace-nowrap">
              BOOK NOW
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="bg-transparent text-black transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                width="34"
                height="21"
                viewBox="0 0 34 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 20H33M1 1H33M1 10.2564H33"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-beige border-t-2 border-olive/10 py-4 px-4">
            <nav className="flex flex-col gap-4">
              <a
                href="#services"
                onClick={() => setMobileMenuOpen(false)}
                className="font-fredoka text-xl text-beige text-center tracking-[1.44px] hover:opacity-80 transition-opacity py-2"
                style={{ WebkitTextStroke: "3px #56623C" }}
              >
                Parties & Events
              </a>
              <a
                href="#about"
                onClick={() => setMobileMenuOpen(false)}
                className="font-fredoka text-xl text-beige text-center tracking-[1.44px] hover:opacity-80 transition-opacity py-2"
                style={{ WebkitTextStroke: "3px #56623C" }}
              >
                About Us
              </a>
              <a
                href="#decoration"
                onClick={() => setMobileMenuOpen(false)}
                className="font-fredoka text-xl text-beige text-center tracking-[1.44px] hover:opacity-80 transition-opacity py-2"
                style={{ WebkitTextStroke: "3px #56623C" }}
              >
                Custom Decoration
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="font-fredoka text-xl text-beige text-center tracking-[1.44px] hover:opacity-80 transition-opacity py-2"
                style={{ WebkitTextStroke: "3px #56623C" }}
              >
                Contact Us
              </a>
              <a
                href="#gallery"
                onClick={() => setMobileMenuOpen(false)}
                className="font-fredoka text-xl text-beige text-center tracking-[1.44px] hover:opacity-80 transition-opacity py-2"
                style={{ WebkitTextStroke: "3px #56623C" }}
              >
                Gallery
              </a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="bg-[#56623C] relative overflow-hidden w-full">
        <div className="w-full">
          {/* Mobile: Full width hero image with text overlay */}
          <div className="lg:hidden relative min-h-[351px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/306fb2177b2839afbb90acdfee67731b005e4479?width=976"
              alt="Kids playing"
              className="absolute inset-0 w-full h-full object-cover opacity-90"
            />
            <div className="relative z-10 flex items-end justify-center h-[351px] px-6 pb-8">
              <h1
                className="font-fredoka text-[28px] text-[#56623C] text-center leading-[40px] tracking-[1.68px] max-w-[386px]"
                style={{ WebkitTextStroke: "3px #F4E9CD" }}
              >
                Play. Laugh. Celebrate. Repeat.
              </h1>
            </div>
          </div>

          {/* Desktop: Grid layout */}
          <div className="hidden lg:grid grid-cols-2">
            {/* Left: Image Grid */}
            <div className="grid grid-cols-2 gap-1.5 bg-white">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d50513322e5e3aa6b13a76780069c467431861bd?width=1115"
                alt="Kids playing"
                className="w-full h-[340px]"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/7b109bfdea4e1b025a71fb2876d39f988f36e0c9?width=1418"
                alt="Family fun"
                className="w-full h-[340px]"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/02e0e4555c42184828e9e8bcd70e0a7a937ffc42?width=1132"
                alt="Playing area"
                className="w-full h-[355px]"
              />
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/1529d8fb17966cab9864a9633c2463d8afbea09f?width=1454"
                alt="Soft blocks"
                className="w-full h-[355px]"
              />
            </div>

            {/* Right: Hero Text */}
            <div className="relative flex items-end justify-center py-24 px-6 min-h-[700px]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d4c06715003914c330f4a00ff3a136f36d603bd1?width=2034"
                alt="Kids climbing illustration"
                className="absolute inset-0 w-full object-contain opacity-90 pointer-events-none"
              />
              <h1
                className="font-fredoka text-6xl xl:text-[64px] text-[#56623C] text-center leading-tight tracking-[3.84px] relative z-10 max-w-[825px]"
                style={{ WebkitTextStroke: "7px #F4E9CD" }}
              >
                Play. Laugh. Celebrate. Repeat.
              </h1>
            </div>
          </div>
        </div>

        {/* Mobile: Image Grid */}
        <div className="lg:hidden grid grid-cols-2 gap-0.5 bg-white">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/ad5763e6c199b4cfaef195b56ef6c7032c2a7864?width=429"
            alt="Kids playing"
            className="w-full h-[124px] object-cover"
          />
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/b0818769e5a63dc26d87bc312a289961dbf75d79?width=429"
            alt="Family fun"
            className="w-full h-[124px] object-cover"
          />
        </div>
      </section>

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Services Section */}
      <section
        id="services"
        className="bg-beige relative py-10 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden"
      >
        <DecorativeStars />

        <div className="max-w-[1618px] mx-auto relative z-10">
          {/* Section Header */}
          <div className="text-center mb-6 md:mb-12">
            <h2
              className="font-fredoka text-2xl md:text-5xl lg:text-[64px] text-[#FFBC56] text-center leading-tight tracking-[1.44px] lg:tracking-[3.84px] mb-3 md:mb-6"
              style={{
                WebkitTextStroke: "3px #56623C",
                WebkitTextStrokeWidth: window.innerWidth >= 768 ? "3px" : "3px",
              }}
            >
              Our Awesome Services For
            </h2>
            <p className="text-[#040404] text-sm md:text-lg lg:text-xl font-light max-w-[370px] md:max-w-[937px] mx-auto leading-5 md:leading-[35px]">
              Host your celebration in a completely private, spacious, and
              family-friendly environment designed to make every moment
              unforgettable
            </p>
          </div>

          {/* Service Cards - Mobile uses 2 column grid, Desktop uses 4 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-[383px] md:max-w-[1618px] mx-auto">
            <ServiceCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/8e66bd8e264ec6b373ba841ad16e452b43b17f86?width=1714"
              title="Birthdays"
            />
            <ServiceCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/aa3666101754da17e6c8c5e37585b3beaa0cb0f1?width=766"
              title="Graduations"
            />
            <ServiceCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/c88f8962b7738364a00c545ff1689696a551f7c2?width=1518"
              title="Baby showers"
            />
            <ServiceCard
              image="https://api.builder.io/api/v1/image/assets/TEMP/482d310d42f2df5dc25db119accb61c16868ec8d?width=1424"
              title="Holiday parties"
            />
          </div>
        </div>
      </section>
      <div className="bg-white h-2.5"></div>
      {/* About Section */}
      <section
        id="about"
        className="bg-olive py-12 md:py-20 lg:py-24 px-6 lg:px-20"
      >
        <div className="max-w-[1704px] mx-auto">
          <div className="grid lg:grid-cols-[362px_1fr_366px] gap-6 lg:gap-8 xl:gap-12 items-center">
            {/* Left: Images - Desktop only */}
            <div className="hidden lg:block relative">
              <div className="space-y-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/8efc9a07316bfdd9172d803149215cf41c6794c6?width=1080"
                  alt="Kids in bounce house"
                  className="w-full h-[388px] object-cover rounded-lg"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/7f559b8b66065d793d0922d6cc9c91a5b0d86719?width=798"
                  alt="Rope climbing"
                  className="w-full h-[256px] object-cover rounded-lg"
                />
              </div>
            </div>
            
            {/* Center: Content */}
            <div className="space-y-6 md:space-y-8 lg:space-y-12">
              <h2
                className="font-fredoka text-2xl md:text-4xl lg:text-5xl text-olive text-center leading-tight lg:leading-tight tracking-wider lg:tracking-widest"
                style={{ WebkitTextStroke: "3px #F4E9CD" }}
              >
                Where Play, Imagination & Family Fun Come to Life.
              </h2>

              {/* Mobile Images */}
              <div className="lg:hidden grid grid-cols-2 gap-0.5">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/06dd8cb8378951b197086afd54163c1bd8701608?width=862"
                  alt="Kids playing"
                  className="w-full h-[123px] object-cover"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/1bbe471f791e2f738fd5cb19c0a3aa65ba491799?width=862"
                  alt="Family fun"
                  className="w-full h-[123px] object-cover"
                />
              </div>

              <div className="space-y-6 max-w-[838px] mx-auto">
                <p className="text-white text-center text-sm md:text-xl leading-7 md:leading-[35px]">
                  <span className="font-light">
                    The Play Atrium was created with one goal in mind: to give
                    families a safe, clean, and joyful place to play, connect,
                    and celebrate together. With{" "}
                  </span>
                  <span className="font-semibold">
                    4,000 sq ft of open play space, modern equipment, and a
                    warm, welcoming atmosphere
                  </span>
                  <span className="font-light">
                    , we're dedicated to making every visit feel special.
                  </span>
                </p>

                <p className="text-white text-center text-sm md:text-xl font-light leading-7 md:leading-[35px]">
                  Whether you're here for a playdate, a spontaneous afternoon of
                  fun, or a once-in-a-lifetime celebration, our team works hard
                  to make sure kids stay active, parents feel at ease, and every
                  family leaves with big smiles and happy memories.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 lg:gap-11 justify-center">
                <button className="bg-white text-olive px-[92px] md:px-11 py-3.5 rounded-full font-inter font-semibold text-xs md:text-lg tracking-[0.9px] hover:bg-beige transition-colors shadow-md">
                  Become a Member
                </button>
                <button className="border border-white text-white px-[114px] md:px-11 py-3.5 rounded-full font-inter font-semibold text-xs md:text-lg tracking-[0.9px] hover:bg-white hover:text-olive transition-colors shadow-md">
                  Get a Day Pass
                </button>
              </div>
            </div>

            {/* Right: Images - Desktop only */}
            <div className="hidden lg:block relative">
              <div className="space-y-6">
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/3fda0e2907509fe37368af825dbc66eadd55a4f6?width=1244"
                  alt="Air hockey"
                  className="w-full h-[303px] object-cover rounded-lg"
                />
                <img
                  src="https://api.builder.io/api/v1/image/assets/TEMP/e20473b81779e8e677428ec53d21cefb618b839e?width=1164"
                  alt="Slide"
                  className="w-full h-[332px] object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Play Day Passes Section - Mobile with Carousel */}
      <section className="bg-beige py-8 md:py-16 lg:py-20 px-0 md:px-6 relative overflow-hidden">
        <div className="max-w-[1825px] mx-auto">
          {/* Mobile View with Carousel */}
          <div className="lg:hidden">
            <div className="px-4 mb-6 space-y-3">
              <p className="text-[#55613B] text-sm font-medium text-center">
                OPEN PLAY
              </p>
              <h2
                className="font-fredoka text-2xl text-golden tracking-[1.44px] text-center"
                style={{ WebkitTextStroke: "3px #56623C" }}
              >
                Play Day Passes
              </h2>
              <p className="text-[#333333] text-sm font-light leading-7 text-center max-w-[372px] mx-auto">
                Bring your kids to explore 4,000 sq ft of safe, exciting play
                zones. Perfect for playdates, rainy days, or spontaneous
                adventures.
              </p>
            </div>

            <Carousel opts={{ align: "center", loop: true }} className="w-full">
              <CarouselContent className="-ml-0">
                <CarouselItem className="pl-0">
                  <DayPassCard />
                </CarouselItem>
                <CarouselItem className="pl-0">
                  <WeekendPassCard />
                </CarouselItem>
              </CarouselContent>
              <div className="flex items-center justify-center gap-4 mt-6">
                <CarouselPrevious className="relative left-0" />
                <CarouselNext className="relative right-0" />
              </div>
            </Carousel>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:grid grid-cols-[468px_1fr] gap-8 lg:gap-14 items-start">
            {/* Left: Dark Box */}
            <div className="bg-[#54643D] p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center text-center space-y-10 lg:space-y-12 h-full">
              <div className="space-y-3">
                <h3 className="font-poppins text-white text-4xl md:text-5xl font-medium">
                  We are
                </h3>
                <h2 className="font-playball text-beige text-6xl md:text-7xl lg:text-[93px] leading-tight">
                  Socks only
                </h2>
                <h3 className="font-poppins text-white text-4xl md:text-5xl font-medium">
                  Facility
                </h3>
              </div>

              <div className="w-full max-w-[369px]">
                <div className="aspect-square rounded-full overflow-hidden border-[9px] border-beige">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f3f725645dd8f97dc7c73020a6adca7024c2ca90?width=960"
                    alt="Socks required"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <p className="text-white text-lg md:text-xl font-quicksand max-w-[405px] leading-[35px]">
                All adults and children must wear socks. We sell socks in case
                you forget to bring them.
              </p>
            </div>

            {/* Right: Play Day Passes */}
            <div className="space-y-8 lg:space-y-10">
              <div className="space-y-4">
                <p className="text-[#55613B] text-lg md:text-xl font-medium">
                  OPEN PLAY
                </p>
                <h2 className="font-fredoka text-4xl sm:text-5xl md:text-6xl lg:text-[80.9px] text-golden tracking-[0.06em] text-stroke-md leading-tight">
                  Play Day Passes
                </h2>
                <p className="text-[#333333] text-lg md:text-xl font-light leading-[35px] max-w-[800px]">
                  Bring your kids to explore 4,000 sq ft of safe, exciting play
                  zones. Perfect for playdates, rainy days, or spontaneous
                  adventures.
                </p>
              </div>

              <div className="grid lg:grid-cols-[535px_1fr] gap-8 items-start">
                <div className="space-y-8 lg:space-y-12">
                  <div className="space-y-4">
                    <p className="text-golden text-2xl md:text-[28px] font-poppins font-normal">
                      Weekday Pass
                    </p>
                    <p className="font-poppins text-7xl md:text-8xl lg:text-[113px] text-olive font-medium leading-none">
                      $14.99
                    </p>
                  </div>

                  <div className="space-y-5 lg:space-y-6">
                    <FeatureItem text="Unlimited playtime" />
                    <FeatureItem text="Bring your own snacks & drinks" />
                    <FeatureItem text="Same-day re-entry" />
                    <FeatureItem text="Siblings 1 & under play free" />
                  </div>

                  <button className="w-full max-w-[258px] bg-[#54643D] text-beige py-3.5 rounded-full font-poppins font-semibold text-lg tracking-[0.9px] hover:bg-olive transition-colors shadow-md">
                    BOOK NOW
                  </button>
                </div>

                <div className="hidden lg:block">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/bd30a3757d11092698a6e0e041a5eeea4d400d70?width=3404"
                    alt="Play area"
                    className="w-full max-w-[598px] h-auto aspect-[598/707] object-cover rounded-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Balloon Garlands Section - Mobile with Carousel */}
      <section
        id="decoration"
        className="bg-white py-0 relative overflow-hidden"
      >
        <div className="max-w-[1920px] mx-auto">
          {/* Mobile View */}
          <div className="lg:hidden bg-[#54643D] py-12 px-6 relative min-h-[400px]">
            <p className="text-[#FFEBEB] text-sm text-center mb-3">
              Make Your Celebration Picture-Perfect
            </p>
            <h2
              className="font-fredoka text-2xl text-olive text-center leading-[43px] tracking-[1.44px] mb-4"
              style={{ WebkitTextStroke: "3px #F4E9CD" }}
            >
              BALLOON GARLANDS & PARTY DECOR
            </h2>
            <p className="text-white text-sm text-center tracking-[0.42px] leading-7 mb-8">
              Choose from simple, elegant designs to fully custom themes. We
              make decorating easy!
            </p>

            <Carousel opts={{ align: "start", loop: true }} className="w-full">
              <CarouselContent className="-ml-0">
                <CarouselItem className="pl-0">
                  <BalloonGarlandCard
                    size="6-Foot Garland"
                    price="$100"
                    image="https://cdn.builder.io/api/v1/image/assets%2Ff6464ae0a97c45b597577376c5ab2661%2F046f6462f03d4cabbe5d00d89de609dd?format=webp&width=800"
                  />
                </CarouselItem>
                <CarouselItem className="pl-0">
                  <BalloonGarlandCard
                    size="12-Foot Garland"
                    price="$180"
                    image="https://cdn.builder.io/api/v1/image/assets%2Ff6464ae0a97c45b597577376c5ab2661%2F426003cf3f2d443a805855692c625afd?format=webp&width=800"
                  />
                </CarouselItem>
              </CarouselContent>
              <div className="flex items-center justify-center gap-4 mt-6">
                <CarouselPrevious className="relative left-0" />
                <CarouselNext className="relative right-0" />
              </div>
            </Carousel>

            <div className="mt-8 bg-gradient-to-r from-beige/40 via-[rgba(255,197,2,0.39)] to-beige/40 p-3 rounded-lg text-center">
              <p className="text-black text-sm">
                Custom colors & themes available
              </p>
            </div>

            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/5181750c340986db0ddcf0deeeb7d2c048c00fa2?width=252"
              alt="Decoration"
              className="absolute bottom-4 right-4 w-[126px] h-auto opacity-90"
            />
          </div>

          {/* Desktop View - 3 Columns Side by Side */}
          <div className="hidden lg:flex lg:gap-[13px]">
            {/* Left Column: Dark Panel with Heading (583px) */}
            <div className="w-[583px] min-h-[700px] bg-[#54643D] flex flex-col items-center px-10 relative">
              <div className="flex flex-col items-center gap-5 max-w-[505px] mt-[80px]">
                <p className="text-[#FFEBEB] text-lg text-center font-inter">
                  Make Your Celebration Picture-Perfect
                </p>
                <h2
                  className="font-fredoka text-[48px] text-[#56623C] text-center leading-tight tracking-[3.84px] max-w-[499px]"
                  style={{ WebkitTextStroke: "5px #F4E9CD" }}
                >
                  BALLOON GARLANDS & PARTY DECOR
                </h2>
                <p className="text-white text-base text-center tracking-[1.2px] leading-6">
                  Choose from simple, elegant designs to fully custom themes. We
                  make decorating easy!
                </p>
              </div>
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/fd32ed87d5b4e413be0746ae8df3e000299989de?width=2078"
                alt="Decorative balloons"
                className="absolute bottom-0 left-0 w-full h-[250px] object-contain"
                style={{ transform: "rotate(2.982deg)" }}
              />
            </div>

            {/* Middle Column: BALOON GARLANDS (582px) */}
            <div className="w-[582px] min-h-[600px] bg-beige flex flex-col p-4">
              <div className="py-2 flex-shrink-0">
                <h3
                  className="font-fredoka text-[36px] text-[#FCBE5A] text-center tracking-[2.574px] leading-tight"
                  style={{ WebkitTextStroke: "5px #54643D" }}
                >
                  BALOON GARLANDS
                </h3>
              </div>

              <div className="flex flex-col gap-4">
                {/* 6-Foot Garland */}
                <div className="flex items-center gap-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff6464ae0a97c45b597577376c5ab2661%2F426003cf3f2d443a805855692c625afd?format=webp&width=800"
                    alt="6-Foot Garland"
                    className="w-[200px] h-auto flex-shrink-0"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-black text-sm font-inter leading-tight">
                      6-Foot Garland
                    </p>
                    <p
                      className="font-poppins text-[24px] text-[#FCBE5A] font-semibold"
                      style={{ WebkitTextStroke: "2px #5A6943" }}
                    >
                      $100
                    </p>
                    <button className="w-[90px] py-1 text-xs bg-[#54643D] text-beige rounded-full font-inter font-semibold tracking-[0.9px] hover:bg-olive transition-colors shadow-md">
                      BOOK NOW
                    </button>
                  </div>
                </div>

                {/* 12-Foot Garland */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-black text-sm font-inter leading-tight">
                      12-Foot Garland
                    </p>
                    <p
                      className="font-poppins text-[24px] text-[#FCBE5A] font-semibold"
                      style={{ WebkitTextStroke: "2px #5A6943" }}
                    >
                      $180
                    </p>
                    <button className="w-[90px] py-1 text-xs bg-[#54643D] text-beige rounded-full font-inter font-semibold tracking-[0.9px] hover:bg-olive transition-colors shadow-md">
                      BOOK NOW
                    </button>
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff6464ae0a97c45b597577376c5ab2661%2Faaefdb345315400a825fa6ccab9c2fb5?format=webp&width=800 "
                    alt="12-Foot Garland"
                    className="w-[200px] h-auto flex-shrink-0"
                  />
                </div>

                {/* Custom colors note */}
                <div className="bg-gradient-to-r from-beige/40 via-[rgba(255,197,2,0.39)] to-beige/40 p-2 text-center">
                  <p className="text-black text-xs font-inter">
                    Custom colors & themes available
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: COLOR BACKDROP (601px) */}
            <div className="w-[601px] min-h-[600px] bg-beige flex flex-col p-4">
              <div className="flex flex-col gap-4 flex-1">
                {/* Backdrop Option 1 */}
                <div className="flex items-center gap-4">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff6464ae0a97c45b597577376c5ab2661%2F046f6462f03d4cabbe5d00d89de609dd?format=webp&width=800"
                    alt="1 Color Backdrop + 6ft Balloons"
                    className="w-[200px] h-auto flex-shrink-0"
                  />
                  <div className="flex flex-col gap-2">
                    <p className="text-black text-xs font-inter leading-tight max-w-[120px]">
                      1 COLOR BACKDROP + 6FT BALLOONS
                    </p>
                    <p
                      className="font-poppins text-[24px] text-[#FCBE5A] font-semibold"
                      style={{ WebkitTextStroke: "2px #5A6943" }}
                    >
                      $200
                    </p>
                    <button className="w-[90px] py-1 text-xs bg-[#54643D] text-beige rounded-full font-inter font-semibold tracking-[0.9px] hover:bg-olive transition-colors shadow-md">
                      BOOK NOW
                    </button>
                  </div>
                </div>

                {/* Backdrop Option 2 */}
                <div className="flex items-center gap-4">
                  <div className="flex flex-col gap-2">
                    <p className="text-black text-xs font-inter leading-tight max-w-[120px]">
                      1 COLOR BACKDROP + 6FT BALLOONS
                    </p>
                    <p
                      className="font-poppins text-[24px] text-[#FCBE5A] font-semibold"
                      style={{ WebkitTextStroke: "2px #5A6943" }}
                    >
                      $280
                    </p>
                    <button className="w-[90px] py-1 text-xs bg-[#54643D] text-beige rounded-full font-inter font-semibold tracking-[0.9px] hover:bg-olive transition-colors shadow-md">
                      BOOK NOW
                    </button>
                  </div>
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2Ff6464ae0a97c45b597577376c5ab2661%2F94305455275840f6a07d944b375a3a9a?format=webp&width=800"
                    alt="1 Color Backdrop + 12ft Balloons"
                    className="w-[200px] h-auto flex-shrink-0"
                  />
                </div>
              </div>

              <div className="py-2 flex-shrink-0">
                <h3
                  className="font-fredoka text-[36px] text-[#FCBE5A] text-center tracking-[2.574px] leading-tight"
                  style={{ WebkitTextStroke: "5px #54643D" }}
                >
                  COLOR BACKDROP
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Gap */}
      <div className="bg-white h-3 lg:h-4"></div>

      {/* Monthly Membership Section - Mobile with Carousel */}
      <section className="bg-[#54643D] py-12 md:py-16 lg:py-20 px-6 relative overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/d8b0fd32b26a12df1139fa624b39ffa85ac5fbfd?width=2606"
          alt="Background celebration"
          className="absolute inset-0 w-full h-full object-cover opacity-7 lg:opacity-20"
        />
        <div className="absolute inset-0 bg-beige/90"></div>

        <div className="max-w-[1492px] mx-auto relative z-10">
          <div className="text-center mb-6 md:mb-12 space-y-3">
            <h2
              className="font-fredoka text-2xl md:text-6xl lg:text-[81px] text-golden text-center leading-tight tracking-[1.44px] lg:tracking-[4.854px] mb-3"
              style={{ WebkitTextStroke: "3px #56623C" }}
            >
              Monthly Membership
            </h2>
            <p className="text-black text-sm md:text-xl font-light max-w-[342px] md:max-w-4xl mx-auto leading-7 md:leading-[35px]">
              From intimate gatherings to grand luxury weddings, we bring
              together creativity, organization, and passion to design every
              detail with precision.
            </p>
          </div>

          {/* Mobile: Carousel */}
          <div className="lg:hidden">
            <Carousel opts={{ align: "center", loop: true }} className="w-full">
              <CarouselContent className="-ml-0">
                <CarouselItem className="pl-0 flex justify-center">
                  <MembershipCard
                    title="CLASSIC"
                    price="$ 34.99"
                    features={[
                      "Unlimited weekday play",
                      "1 free weekend visit/month",
                      "10% off party rooms & décor",
                      "Early access to special events",
                      "Babies 1 & under play free",
                    ]}
                    note="Perfect for families who visit during the week"
                  />
                </CarouselItem>
                <CarouselItem className="pl-0 flex justify-center">
                  <MembershipCard
                    title="PLUS"
                    price="$ 49.99"
                    features={[
                      "Unlimited weekday play",
                      "1 free weekend visit/month",
                      "10% off party rooms & décor",
                      "Early access to special events",
                      "Babies 1 & under play free",
                    ]}
                    note="Best Value for frequent players and weekend families"
                  />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>

          {/* Desktop: Grid */}
          <div className="hidden lg:grid md:grid-cols-2 gap-8 lg:gap-12 max-w-[1492px] mx-auto">
            <MembershipCard
              title="CLASSIC"
              price="$ 34.99"
              features={[
                "Unlimited weekday play",
                "1 free weekend visit/month",
                "10% off party rooms & décor",
                "Early access to special events",
                "Babies 1 & under play free",
              ]}
              note="Perfect for families who visit during the week"
            />
            <MembershipCard
              title="PLUS"
              price="$ 49.99"
              features={[
                "Unlimited weekday play",
                "1 free weekend visit/month",
                "10% off party rooms & décor",
                "Early access to special events",
                "Babies 1 & under play free",
              ]}
              note="Best Value for frequent players and weekend families"
            />
          </div>
        </div>
      </section>

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Testimonials Section - Mobile with Carousel */}
      <section className="bg-white md:py-20 px-6 relative overflow-hidden">
        <img
          src="https://api.builder.io/api/v1/image/assets/TEMP/d3e5f1b2285b3674cda193d48743046d5759208d?width=1490"
          alt="Background"
          className="absolute inset-0 w-full h-[65%] object-cover opacity-7 lg:opacity-08"
        />

        <DecorativeStarsTestimonials />

        <div className="max-w-[1920px] mx-auto relative">
          {/* Mobile View */}
          <div className="lg:hidden flex flex-col items-center space-y-6 px-4 relative z-10">
            <div className="text-center space-y-1">
              <h2
                className="font-fredoka text-2xl text-golden text-center leading-tight tracking-[1.44px]"
                style={{ WebkitTextStroke: "3px #F4E9CD" }}
              >
                What Parents Are Saying
              </h2>
              <p className="text-white text-sm leading-7">
                Real Experiences From Families Who Love The Play Atrium
              </p>
            </div>

            <Carousel
              opts={{ align: "center", loop: true }}
              className="w-full max-w-[362px]"
            >
              <CarouselContent className="-ml-0">
                <CarouselItem className="pl-0">
                  <TestimonialCard
                    quote="The staff handled everything smoothly, and the kids had an amazing time exploring all the play zones. The private rental made the whole event stress-free. We will definitely be back!"
                    author="Jessica M."
                  />
                </CarouselItem>
                <CarouselItem className="pl-0">
                  <TestimonialCard
                    quote="Absolutely loved this place! The kids had so much fun and I appreciated how clean and safe everything was. Highly recommend for birthday parties!"
                    author="Sarah K."
                  />
                </CarouselItem>
                <CarouselItem className="pl-0">
                  <TestimonialCard
                    quote="Best place for kids in the area! My children never want to leave. The membership is worth every penny!"
                    author="Michael R."
                  />
                </CarouselItem>
              </CarouselContent>
              <div className="flex gap-2 items-center justify-center mt-4">
                <div className="w-[15px] h-[14px] rounded-full bg-[#56623C]"></div>
                <div className="w-[15px] h-[14px] rounded-full bg-[#D9D9D9]"></div>
                <div className="w-[15px] h-[14px] rounded-full bg-[#D9D9D9]"></div>
                <div className="w-[15px] h-[14px] rounded-full bg-[#D9D9D9]"></div>
              </div>
            </Carousel>
          </div>

          {/* Desktop View */}
          <div className="hidden lg:grid lg:grid-cols-[300px_1fr_300px] gap-8 items-center relative">
            {/* Left Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-[300px] h-[300px] rounded-full bg-white p-4 shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/f3f725645dd8f97dc7c73020a6adca7024c2ca90?width=960"
                    alt="Happy family"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Center Content */}
            <div className="flex flex-col items-center space-y-8 lg:space-y-12 px-4 relative z-10">
              <div className="text-center space-y-4">
                <h2 className="font-fredoka text-2xl sm:text-6xl md:text-7xl lg:text-[65px] text-golden text-center leading-tight text-stroke">
                  What Parents Are Saying
                </h2>
                <p className="text-white text-lg md:text-l leading-[35px]">
                  Real Experiences From Families Who Love The Play Atrium
                </p>
              </div>

              <div className="flex flex-col items-center max-w-[787px]">
                <svg
                  className="w-20 h-20 lg:w-[83px] lg:h-[83px] text-beige"
                  viewBox="0 0 83 83"
                  fill="currentColor"
                >
                  <path d="M35.6641 33.5566C35.6641 23.9922 27.8828 16.2109 18.4805 16.2109C8.91602 16.2109 1.29688 23.9922 1.29688 33.5566C1.29688 42.959 8.91602 50.7402 18.4805 50.7402C22.0469 50.7402 25.2891 49.6055 28.0449 47.8223C22.0469 64.6816 8.5918 66.627 7.94336 66.7891L8.5918 71.6523C8.75391 71.6523 33.5566 68.248 35.6641 33.8809C35.6641 33.7188 35.6641 33.7188 35.6641 33.5566ZM18.4805 45.877C11.6719 45.877 6.16016 40.3652 6.16016 33.5566C6.16016 26.748 11.6719 21.2363 18.4805 21.2363C25.2891 21.2363 30.8008 26.748 30.8008 33.5566C30.8008 40.3652 25.2891 45.877 18.4805 45.877ZM81.7031 33.8809C81.7031 33.7188 81.7031 33.5566 81.7031 33.5566C81.7031 23.9922 74.084 16.2109 64.5195 16.2109C54.9551 16.2109 47.3359 23.9922 47.3359 33.5566C47.3359 42.959 54.9551 50.7402 64.5195 50.7402C68.0859 50.7402 71.4902 49.6055 74.2461 47.8223C68.248 64.6816 54.6309 66.627 53.9824 66.7891L54.6309 71.6523C54.793 71.6523 79.5957 68.248 81.7031 33.8809ZM64.5195 45.877C57.7109 45.877 52.1992 40.3652 52.1992 33.5566C52.1992 26.748 57.7109 21.2363 64.5195 21.2363C71.3281 21.2363 76.8398 26.748 76.8398 33.5566C76.8398 40.3652 71.3281 45.877 64.5195 45.877Z" />
                </svg>

                <p className="text-white text-center text-lg md:text-l font-light leading-[40px]">
                  The staff handled everything smoothly, and the kids had an
                  amazing time exploring all the play zones. The private rental
                  made the whole event stress-free. We will definitely be back!
                </p>

                <p className="text-white text-center text-l md:text-[19px] leading-[60px]">
                  Jessica M.
                </p>

                <div className="flex gap-4 items-center pt-2">
                  <div className="w-[15px] h-[14px] rounded-full bg-[#56623C]"></div>
                  <div className="w-[15px] h-[14px] rounded-full bg-[#D9D9D9]"></div>
                  <div className="w-[15px] h-[14px] rounded-full bg-[#D9D9D9]"></div>
                  <div className="w-[15px] h-[14px] rounded-full bg-[#D9D9D9]"></div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-[200px] h-[200px] rounded-full bg-white p-2 shadow-lg">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/a445e37ad81bed2c2077f66f1ddd42e83df7548b?width=1112"
                    alt="Kids playing"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      {/* Footer */}
      <footer id="contact" className="bg-beige py-12 md:py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            <div className="flex flex-col items-center space-y-6">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/92d5111bab28480f5252733064a2b3156601ab5c?width=582"
                alt="Play Atrium Logo"
                className="h-32 w-auto"
              />
              <button className="bg-olive text-beige px-8 py-3 rounded-full font-inter font-medium tracking-wide hover:bg-olive-dark transition-colors">
                Become A Member
              </button>
            </div>

            <div className="text-center space-y-4">
              <h4 className="font-poppins text-black text-2xl md:text-3xl">
                Hours
              </h4>
              <div className="text-black text-base md:text-lg space-y-1">
                <p>Monday - Saturday</p>
                <p>6:00 am - 8:00 pm</p>
                <p>Sunday - Closed *</p>
                <p className="text-gray-500 text-sm mt-2">
                  * Full Facility Rental Only Available
                </p>
              </div>
            </div>

            <div className="text-center space-y-4">
              <h4 className="font-poppins text-black text-2xl md:text-3xl">
                Address & Contact Info
              </h4>
              <a
                href="#"
                className="text-black text-base md:text-lg underline hover:text-olive transition-colors block"
              >
                10640 Northwest Fwy, Houston, TX 77092
              </a>
            </div>

            <div className="text-center space-y-4">
              <h4 className="font-poppins text-black text-2xl md:text-3xl">
                Social links
              </h4>
              <div className="flex justify-center gap-4">
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M35.1825 19.362C35.1277 18.1642 34.938 17.3467 34.6598 16.6312C34.3725 15.8917 33.9878 15.264 33.3623 14.6385C32.7368 14.013 32.1098 13.6283 31.3695 13.341C30.654 13.0628 29.8358 12.873 28.6388 12.8182C27.4388 12.7627 27.0555 12.75 24 12.75C20.9445 12.75 20.5612 12.7628 19.362 12.8175C18.1642 12.8723 17.3467 13.062 16.6312 13.3403C15.8917 13.6275 15.264 14.0123 14.6385 14.6378C14.013 15.2633 13.6283 15.8902 13.341 16.6305C13.0628 17.346 12.873 18.1643 12.8182 19.3613C12.7627 20.5613 12.75 20.9445 12.75 24C12.75 27.0555 12.7628 27.4387 12.8175 28.638C12.8723 29.8357 13.062 30.6533 13.3403 31.3688C13.6275 32.1083 14.0123 32.736 14.6378 33.3615C15.2633 33.987 15.8902 34.3718 16.6305 34.659C17.346 34.9373 18.1643 35.127 19.3613 35.1818C20.5613 35.2373 20.9445 35.25 24 35.25C27.0555 35.25 27.4387 35.2372 28.638 35.1825C29.8357 35.1277 30.6533 34.938 31.3688 34.6598C32.1083 34.3725 32.736 33.9878 33.3615 33.3623C33.987 32.7368 34.3718 32.1098 34.659 31.3695C34.9373 30.654 35.127 29.8358 35.1818 28.6388C35.2373 27.4388 35.25 27.0555 35.25 24C35.25 20.9445 35.2372 20.5612 35.1825 19.362ZM33.1575 28.5458C33.1072 29.6423 32.9243 30.2385 32.7705 30.6345C32.5665 31.1595 32.3227 31.5345 31.929 31.9282C31.5352 32.322 31.1603 32.5658 30.6353 32.7698C30.2385 32.9235 29.643 33.1072 28.5465 33.1567C27.3608 33.2107 27.0045 33.222 24.0007 33.222C20.997 33.222 20.6408 33.2107 19.455 33.1567C18.3585 33.1065 17.7623 32.9235 17.3663 32.7698C16.8413 32.5658 16.4663 32.322 16.0725 31.9282C15.6788 31.5345 15.435 31.1595 15.231 30.6345C15.0773 30.2385 14.8935 29.643 14.844 28.5465C14.79 27.3608 14.7787 27.0045 14.7787 24.0007C14.7787 20.997 14.79 20.6408 14.844 19.455C14.8943 18.3585 15.0773 17.7623 15.231 17.3663C15.435 16.8413 15.6788 16.4663 16.0725 16.0725C16.4663 15.6788 16.8413 15.435 17.3663 15.231C17.7623 15.0773 18.3577 14.8935 19.455 14.844C20.6408 14.79 20.997 14.7787 24.0007 14.7787C27.0045 14.7787 27.3608 14.79 28.5465 14.844C29.643 14.8943 30.2385 15.0773 30.6345 15.231C31.1595 15.435 31.5345 15.6788 31.9282 16.0725C32.322 16.4663 32.5658 16.8413 32.7698 17.3663C32.9235 17.7623 33.1072 18.3577 33.1567 19.455C33.2107 20.6408 33.222 20.997 33.222 24.0007C33.222 27.0045 33.2107 27.3608 33.1575 28.5458Z"
                      fill="black"
                    />
                    <path
                      d="M24 18.2228C20.8095 18.2228 18.2228 20.8095 18.2228 24C18.2228 27.1905 20.8095 29.7772 24 29.7772C27.1905 29.7772 29.7772 27.1905 29.7772 24C29.7772 20.8095 27.1905 18.2228 24 18.2228ZM24 27.75C21.9293 27.75 20.25 26.0707 20.25 24C20.25 21.9293 21.9293 20.25 24 20.25C26.0707 20.25 27.75 21.9293 27.75 24C27.75 26.0707 26.0707 27.75 24 27.75ZM30.0052 16.6448C29.2597 16.6448 28.6553 17.2493 28.6553 17.9948C28.6553 18.7403 29.2597 19.3447 30.0052 19.3447C30.7507 19.3447 31.3552 18.7403 31.3552 17.9948C31.3552 17.2493 30.7507 16.6448 30.0052 16.6448Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M25.575 35.25V24.975H29.025L29.55 21H25.575V18.45C25.575 17.325 25.875 16.5 27.525 16.5H29.625V12.9C29.25 12.825 27.975 12.75 26.55 12.75C23.475 12.75 21.375 14.625 21.375 18V21H18V24.975H21.45V35.25H25.575Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:opacity-70 transition-opacity">
                  <svg className="w-12 h-12" viewBox="0 0 48 48" fill="none">
                    <path
                      d="M28.3643 10.8691C28.5519 10.8692 28.6845 10.9352 28.8047 11.0527C28.8616 11.1083 28.9105 11.1707 28.9443 11.2451C28.9783 11.3201 28.9931 11.4003 28.9932 11.4883C28.9932 11.9102 29.1316 12.3692 29.377 12.7422L29.4883 12.8965L29.4902 12.8984C30.1686 13.7828 31.3427 14.1377 32.4775 13.6494L32.4902 13.6436C32.666 13.5863 32.8593 13.5839 33.0498 13.708C33.2197 13.8188 33.3584 14.0007 33.3584 14.209V19.1807C33.3584 19.4837 33.1665 19.7355 32.8535 19.7969L32.8486 19.7979C31.7407 19.9784 30.6789 19.9009 29.665 19.6924V28.5615C29.665 28.5841 29.6656 28.6314 29.6572 28.6807C29.6516 28.7137 29.6386 28.7599 29.6113 28.8047C29.2475 32.9459 25.6416 36.1699 21.3613 36.1699C16.7734 36.1698 13.0577 32.5408 13.0576 28.0459C13.0576 23.6472 16.53 20.1128 21.0195 19.9219H21.1221C21.2989 19.922 21.4583 19.9804 21.5742 20.0938C21.6905 20.2075 21.751 20.3652 21.751 20.541V25.9824C21.7508 26.306 21.4896 26.5416 21.1982 26.5986L21.1855 26.6006C20.3926 26.6869 19.833 27.2841 19.833 28.0459C19.8331 28.851 20.5298 29.537 21.3613 29.5371C22.1463 29.5371 22.7526 28.9875 22.8418 28.2207V11.4883C22.8419 11.3126 22.9033 11.1547 23.0195 11.041C23.1355 10.9277 23.2949 10.8692 23.4717 10.8691H28.3643Z"
                      fill="black"
                      stroke="black"
                      strokeWidth="0.3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="font-fredoka text-xl text-beige text-center px-3.5 hover:opacity-80 transition-opacity whitespace-nowrap"
      style={{
        WebkitTextStroke: "2px #56623C",
      }}
    >
      {children}
    </a>
  );
}

function ServiceCard({ image, title }: { image: string; title: string }) {
  return (
    <div className="flex flex-col items-center gap-3 max-w-[250px] mx-auto">
      <div className="relative w-full">
        <div
          className="w-full aspect-square rounded-full bg-white p-1.5"
          style={{ boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 0.10)" }}
        >
          <div className="w-full h-full rounded-full overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      <h3 className="text-[#101010] text-sm font-inter text-center font-normal">
        {title}
      </h3>
    </div>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-5 lg:gap-6">
      <Star className="w-5 h-5 lg:w-11 lg:h-11 text-olive fill-olive flex-shrink-0" />
      <p className="text-[#656565] text-sm md:text-2xl font-medium leading-[30px]">
        {text}
      </p>
    </div>
  );
}

function DayPassCard() {
  return (
    <div className="w-full max-w-[343px] mx-auto bg-gradient-to-b from-beige/90 to-beige/90 rounded-[11px] border-2 border-olive overflow-hidden">
      <div className="bg-beige border-b border-olive px-6 py-6 text-center">
        <p className="text-golden text-base font-poppins mb-2">Weekday Pass</p>
        <p className="font-poppins text-[64px] text-olive font-medium leading-none">
          $14.99
        </p>
      </div>
      <div className="px-6 py-6 space-y-4">
        <div className="flex items-start gap-5">
          <Star className="w-5 h-5 text-olive fill-olive flex-shrink-0 mt-1" />
          <p className="text-[#656565] text-sm font-medium leading-[30px]">
            Unlimited playtime
          </p>
        </div>
        <div className="flex items-start gap-5">
          <Star className="w-5 h-5 text-olive fill-olive flex-shrink-0 mt-1" />
          <p className="text-[#656565] text-sm font-medium leading-[30px]">
            Bring your own snacks & drinks
          </p>
        </div>
        <div className="flex items-start gap-5">
          <Star className="w-5 h-5 text-olive fill-olive flex-shrink-0 mt-1" />
          <p className="text-[#656565] text-sm font-medium leading-[30px]">
            Same-day re-entry
          </p>
        </div>
        <div className="flex items-start gap-5">
          <Star className="w-5 h-5 text-olive fill-olive flex-shrink-0 mt-1" />
          <p className="text-[#656565] text-sm font-medium leading-[30px]">
            Siblings 1 & under play free
          </p>
        </div>
        <button className="w-full max-w-[283px] mx-auto block bg-[#54643D] text-beige py-3 rounded-full font-poppins font-semibold text-xs tracking-[0.9px] hover:bg-olive transition-colors shadow-md mt-6">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

function WeekendPassCard() {
  return (
    <div className="w-full max-w-[343px] mx-auto bg-gradient-to-b from-beige/90 to-beige/90 rounded-[11px] border-2 border-olive overflow-hidden">
      <div className="bg-beige border-b border-olive px-6 py-6 text-center">
        <p className="text-golden text-base font-poppins mb-2">Weekend Pass</p>
        <p className="font-poppins text-[64px] text-olive font-medium leading-none">
          $19.99
        </p>
      </div>
      <div className="px-6 py-6 space-y-4">
        <div className="flex items-start gap-5">
          <Star className="w-5 h-5 text-olive fill-olive flex-shrink-0 mt-1" />
          <p className="text-[#656565] text-sm font-medium leading-[30px]">
            Unlimited playtime
          </p>
        </div>
        <div className="flex items-start gap-5">
          <Star className="w-5 h-5 text-olive fill-olive flex-shrink-0 mt-1" />
          <p className="text-[#656565] text-sm font-medium leading-[30px]">
            Bring your own snacks & drinks
          </p>
        </div>
        <div className="flex items-start gap-5">
          <Star className="w-5 h-5 text-olive fill-olive flex-shrink-0 mt-1" />
          <p className="text-[#656565] text-sm font-medium leading-[30px]">
            Same-day re-entry
          </p>
        </div>
        <div className="flex items-start gap-5">
          <Star className="w-5 h-5 text-olive fill-olive flex-shrink-0 mt-1" />
          <p className="text-[#656565] text-sm font-medium leading-[30px]">
            Siblings 1 & under play free
          </p>
        </div>
        <button className="w-full max-w-[283px] mx-auto block bg-[#54643D] text-beige py-3 rounded-full font-poppins font-semibold text-xs tracking-[0.9px] hover:bg-olive transition-colors shadow-md mt-6">
          BOOK NOW
        </button>
      </div>
    </div>
  );
}

function BalloonGarlandCard({
  size,
  price,
  image,
}: {
  size: string;
  price: string;
  image: string;
}) {
  return (
    <div className="w-full max-w-[402px] mx-auto bg-beige p-6">
      <div className="flex flex-col items-center gap-6">
        <img src={image} alt={size} className="w-[190px] h-auto" />
        <div className="flex flex-col items-center space-y-4">
          <p className="text-black text-xl">{size}</p>
          <p
            className="font-poppins text-[36px] text-golden font-semibold"
            style={{ WebkitTextStroke: "4px #5A6943" }}
          >
            {price}
          </p>
          <button className="bg-[#54643D] text-beige px-6 py-2 rounded-full font-inter font-semibold text-base tracking-[0.9px] hover:bg-olive transition-colors shadow-md">
            BOOK NOW
          </button>
        </div>
      </div>
    </div>
  );
}

function MembershipCard({
  title,
  price,
  features,
  note,
}: {
  title: string;
  price: string;
  features: string[];
  note: string;
}) {
  return (
    <div className="w-full max-w-[344px] lg:max-w-[565px] mx-auto aspect-square rounded-full border-[4px] lg:border-[5px] border-golden bg-[#54643D] shadow-lg p-12 lg:p-16 flex flex-col items-center justify-center text-center h-[565px]">
      <div className="flex flex-col items-center space-y-6 max-w-[320px]">
        <div className="border-b border-[#DEB8A5] w-full space-y-3 lg:space-y-4">
          <h3
            className="font-fredoka text-[30px] text-golden tracking-[2.16px]"
            style={{ WebkitTextStroke: "1px #F5E4C8" }}
          >
            {title}
          </h3>
          <p
            className="font-fredoka text-[50px] text-golden"
            style={{ WebkitTextStroke: "1px #F5DFC3" }}
          >
            {price}
          </p>
        </div>

        <div className="space-y-2 lg:space-y-3 text-[#F5EBD2] text-lg leading-[27px]">
          {features.map((feature, idx) => (
            <p key={idx}>{feature}</p>
          ))}
        </div>

        <div className="border border-golden lg:p-4 rounded-lg w-full">
          <p className="text-golden text-base lg:text-lg leading-[25px]">
            {note}
          </p>
        </div>

        <button className="bg-[#F5DFC3] text-[#657150] px-7 py-3 rounded-full font-poppins font-semibold text-lg border border-[#A5AA9C] hover:bg-[#F5EBD2] transition-colors">
          Choose Plan
        </button>
      </div>
    </div>
  );
}

function TestimonialCard({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="flex flex-col items-center space-y-6 max-w-[362px] mx-auto">
      <svg
        className="w-[45px] h-[45px] text-beige"
        viewBox="0 0 45 45"
        fill="currentColor"
      >
        <path d="M19.3359 18.1934C19.3359 13.0078 15.1172 8.78906 10.0195 8.78906C4.83398 8.78906 0.703125 13.0078 0.703125 18.1934C0.703125 23.291 4.83398 27.5098 10.0195 27.5098C11.9531 27.5098 13.7109 26.8945 15.2051 25.9277C11.9531 35.0684 4.6582 36.123 4.30664 36.2109L4.6582 38.8477C4.74609 38.8477 18.1934 37.002 19.3359 18.3691C19.3359 18.2812 19.3359 18.2812 19.3359 18.1934ZM10.0195 24.873C6.32812 24.873 3.33984 21.8848 3.33984 18.1934C3.33984 14.502 6.32812 11.5137 10.0195 11.5137C13.7109 11.5137 16.6992 14.502 16.6992 18.1934C16.6992 21.8848 13.7109 24.873 10.0195 24.873ZM44.2969 18.3691C44.2969 18.2812 44.2969 18.1934 44.2969 18.1934C44.2969 13.0078 40.166 8.78906 34.9805 8.78906C29.7949 8.78906 25.6641 13.0078 25.6641 18.1934C25.6641 23.291 29.7949 27.5098 34.9805 27.5098C36.9141 27.5098 38.7598 26.8945 40.2539 25.9277C37.002 35.0684 29.6191 36.123 29.2676 36.2109L29.6191 38.8477C29.707 38.8477 43.1543 37.002 44.2969 18.3691ZM34.9805 24.873C31.2891 24.873 28.3008 21.8848 28.3008 18.1934C28.3008 14.502 31.2891 11.5137 34.9805 11.5137C38.6719 11.5137 41.6602 14.502 41.6602 18.1934C41.6602 21.8848 38.6719 24.873 34.9805 24.873Z" />
      </svg>
      <p className="text-white text-center text-base font-light leading-7">
        {quote}
      </p>
      <p className="text-white text-center text-sm leading-[60px]">{author}</p>
    </div>
  );
}

function DecorativeStars() {
  return (
    <>
      <svg
        className="absolute left-0 top-0 w-full max-w-[1290px] h-auto opacity-30 pointer-events-none hidden md:block"
        viewBox="0 0 1265 634"
        fill="none"
        preserveAspectRatio="xMinYMin meet"
      >
        <path
          d="M31.33 390.282L37.6367 388.416L35.7733 394.732L37.6367 401.191L31.33 399.325L24.88 401.191L26.7433 394.732L24.88 388.416L31.33 390.282Z"
          fill="#D3CDAF"
        />
        <path
          d="M326.31 412.243L331.47 410.664L329.893 415.832L331.47 420.999L326.31 419.564L321.15 420.999L322.583 415.832L321.15 410.664L326.31 412.243Z"
          fill="#D3CDAF"
        />
        <path
          d="M523.68 374.78L527.837 373.631L526.547 377.65L527.837 381.813L523.68 380.521L519.667 381.813L520.813 377.65L519.667 373.631L523.68 374.78Z"
          fill="#D3CDAF"
        />
      </svg>
      <svg
        className="absolute right-0 top-0 w-full max-w-[1532px] h-auto opacity-[0.36] pointer-events-none hidden md:block"
        viewBox="0 0 1236 778"
        fill="none"
        preserveAspectRatio="xMaxYMin meet"
      >
        <path
          d="M9.19198 357.495L17.1924 355.277L14.8093 363.124L17.1924 370.97L9.19198 368.753L1.36176 370.97L3.74487 363.124L1.36176 355.277L9.19198 357.495Z"
          fill="#56623C"
          fillOpacity="0.58"
        />
        <path
          d="M66.8973 399.798L74.3871 397.58L72.1742 405.085L74.3871 412.761L66.8973 410.544L59.2373 412.761L61.4502 405.085L59.2373 397.58L66.8973 399.798Z"
          fill="#56623C"
          fillOpacity="0.58"
        />
      </svg>
      <img
        src="https://cdn.builder.io/api/v1/image/assets%2Ff6464ae0a97c45b597577376c5ab2661%2F332a5cd19d054b9ebf5e47b6b9751383"
        alt=""
        className="absolute right-0 top-0 w-[120px] sm:w-[160px] md:w-[200px] lg:w-[150px] h-auto opacity-90 pointer-events-none hidden md:block"
      />
    </>
  );
}

function DecorativeStarsTestimonials() {
  return (
    <>
      <svg
        className="absolute left-0 top-0 w-[706px] h-auto opacity-80 pointer-events-none hidden lg:block"
        viewBox="0 0 706 680"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.9008 438.628L28.6817 436.622L26.6783 443.41L28.6817 450.198L21.9008 448.193L15.1199 450.198L17.1234 443.41L15.1199 436.622L21.9008 438.628Z"
          fill="#F4E9CD"
        />
        <path
          d="M84.7781 84.7224L90.6343 83.0254L88.9391 88.8878L90.6343 94.596L84.7781 92.8989L78.9219 94.596L80.6171 88.8878L78.9219 83.0254L84.7781 84.7224Z"
          fill="#F4E9CD"
        />
      </svg>
    </>
  );
}
