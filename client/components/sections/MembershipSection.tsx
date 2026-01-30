import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { ScrollAnimation } from "@/lib/animationUtils"
import { MembershipCard } from "./MembershipCard"

export function MembershipSection() {
  return (
    <section className="bg-[#54643D] py-12 md:py-16 lg:py-20 px-6 relative overflow-hidden">
      <img
        src="https://api.builder.io/api/v1/image/assets/TEMP/d8b0fd32b26a12df1139fa624b39ffa85ac5fbfd?width=2606"
        alt="Background celebration"
        className="absolute inset-0 w-full h-full object-cover opacity-7 lg:opacity-20"
      />
      <div className="absolute inset-0 bg-beige/90"></div>

      <div className="max-w-[1492px] mx-auto relative z-10">
        <ScrollAnimation variant="bounce">
          <div className="text-center mb-6 md:mb-12 space-y-3">
            <h2
              className="font-fredoka text-2xl md:text-6xl lg:text-[81px] text-golden text-center leading-tight tracking-[1.44px] lg:tracking-[4.854px] mb-3"
              style={{ WebkitTextStroke: "2px #56623C" }}
            >
              Monthly Membership
            </h2>
            <p className="text-black text-sm md:text-xl font-light max-w-[342px] md:max-w-4xl mx-auto leading-7 md:leading-[35px]">
              Our Monthly Memberships make it easy to visit often, save more, and enjoy exclusive perks — all in a fun, welcoming space your family will love.
            </p>
          </div>
        </ScrollAnimation>

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
                  ]}
                  note="Perfect for families who visit during the week"
                />
              </CarouselItem>
              <CarouselItem className="pl-0 flex justify-center">
                <MembershipCard
                  title="PLUS"
                  price="$ 49.99"
                  features={[
                    "Unlimited play - weekdays and weekends",
                    "1 free guest pass per month",
                    "10% off party rooms & décor",
                    "Early access to events & specials",
                  ]}
                  note="Best Value for frequent players and weekend families"
                />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </div>

        {/* Desktop: Grid */}
        <div className="hidden lg:grid md:grid-cols-2 gap-8 lg:gap-12 max-w-[1492px] mx-auto">
          <ScrollAnimation variant="rotate" delay={0.1}>
            <MembershipCard
              title="CLASSIC"
              price="$ 34.99"
              features={[
                "Unlimited weekday play",
                "1 free weekend visit/month",
                "Early access to special events",
              ]}
              note="Perfect for families who visit during the week"
            />
          </ScrollAnimation>
          <ScrollAnimation variant="rotate" delay={0.2}>
            <MembershipCard
              title="PLUS"
              price="$ 49.99"
              features={[
                "Unlimited play - weekdays and weekends",
                "1 free guest pass per month",
                "10% off party rooms & décor",
                "Early access to events & specials",
              ]}
              note="Best Value for frequent players and weekend families"
            />
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}
