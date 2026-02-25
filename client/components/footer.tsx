import { ScrollAnimation } from "@/lib/animationUtils";
import { siteConfig } from "@/lib/site-config";
import { motion } from "framer-motion"

export function Footer() {
    return (
        <footer id="contact" className="bg-olive py-12 md:py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-8">
                    <ScrollAnimation variant="scale" delay={0.1}>
                        <div className="flex flex-col items-center space-y-6">
                            <img
                                src={siteConfig.logoWhite}
                                alt={`${siteConfig.name} Logo`}
                                className="h-16 w-auto lg:h-20 object-contain"
                            />
                            <div className="text-beige text-base md:text-lg space-y-1 text-center">
                                {siteConfig.tagline}
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fadeUp" delay={0.2}>
                        <div className="text-center space-y-4">
                            <h4 className="font-poppins text-beige text-lg md:text-3xl">
                                Operating Hours
                            </h4>
                            <div className="text-beige text-base md:text-md space-y-1">
                                {siteConfig.hours.map((item, index) => (
                                    <p key={index}>{item.label} : {item.time}</p>
                                ))}
                                <p className="text-beige text-sm mt-2">
                                    {siteConfig.hoursNote}
                                </p>
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fadeUp" delay={0.3}>
                        <div className="text-center space-y-4">
                            <h4 className="font-poppins text-beige text-lg md:text-3xl">
                                Address
                            </h4>
                            <a
                                href={siteConfig.contact.mapsLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-beige text-sm md:text-md underline hover:text-beige/80 transition-colors block whitespace-pre-line"
                            >
                                {siteConfig.contact.address}
                            </a>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fadeUp" delay={0.3}>
                        <div className="text-center space-y-4">
                            <h4 className="font-poppins text-beige text-lg md:text-3xl">
                                Contact Us
                            </h4>
                            <div className="flex flex-col space-y-2">
                                {siteConfig.contact.emails.map((email) => (
                                    <a
                                        key={email}
                                        href={`mailto:${email}`}
                                        className="text-beige text-sm md:text-lg underline hover:text-beige/80 transition-colors block"
                                    >
                                        {email}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fadeUp" delay={0.4}>
                        <div className="text-center space-y-4">
                            <h4 className="font-poppins text-beige text-lg md:text-3xl">
                                Social links
                            </h4>
                            <div className="flex justify-center gap-4">
                                {siteConfig.socials.map((social, index) => (
                                    <motion.a
                                        key={social.name}
                                        whileHover={{ scale: 1.2, rotate: index % 2 === 0 ? 5 : -5 }}
                                        transition={{ duration: 0.2 }}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:opacity-70 transition-opacity"
                                        aria-label={social.name}
                                    >
                                        <img src={social.icon} alt={social.name} className="w-4 h-4 md:w-8 md:h-8" />
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </footer>
    )
}
