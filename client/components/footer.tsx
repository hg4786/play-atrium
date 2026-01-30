import { ScrollAnimation } from "@/lib/animationUtils";
import { motion } from "framer-motion"

export function Footer() {
    return (
        <footer id="contact" className="bg-beige py-12 md:py-16 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    <ScrollAnimation variant="scale" delay={0.1}>
                        <div className="flex flex-col items-center space-y-6">
                            <img
                                src="https://api.builder.io/api/v1/image/assets/TEMP/92d5111bab28480f5252733064a2b3156601ab5c?width=582"
                                alt="Play Atrium Logo"
                                className="h-32 w-auto"
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="bg-olive text-beige px-8 py-3 rounded-full font-inter font-medium tracking-wide hover:bg-olive-dark transition-colors"
                            >
                                Become A Member
                            </motion.button>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fadeUp" delay={0.2}>
                        <div className="text-center space-y-4">
                            <h4 className="font-poppins text-black text-lg md:text-3xl">
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
                    </ScrollAnimation>

                    <ScrollAnimation variant="fadeUp" delay={0.3}>
                        <div className="text-center space-y-4">
                            <h4 className="font-poppins text-black text-lg md:text-3xl">
                                Address & Contact Info
                            </h4>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-black text-sm md:text-md underline hover:text-olive transition-colors block"
                            >
                                10640 Northwest Fwy, Houston, TX 77092
                            </a>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation variant="fadeUp" delay={0.4}>
                        <div className="text-center space-y-4">
                            <h4 className="font-poppins text-black text-lg md:text-3xl">
                                Social links
                            </h4>
                            <div className="flex justify-center gap-4">
                                <motion.a
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity"
                                >
                                    <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none">
                                        <path
                                            d="M35.1825 19.362C35.1277 18.1642 34.938 17.3467 34.6598 16.6312C34.3725 15.8917 33.9878 15.264 33.3623 14.6385C32.7368 14.013 32.1098 13.6283 31.3695 13.341C30.654 13.0628 29.8358 12.873 28.6388 12.8182C27.4388 12.7627 27.0555 12.75 24 12.75C20.9445 12.75 20.5612 12.7628 19.362 12.8175C18.1642 12.8723 17.3467 13.062 16.6312 13.3403C15.8917 13.6275 15.264 14.0123 14.6385 14.6378C14.013 15.2633 13.6283 15.8902 13.341 16.6305C13.0628 17.346 12.873 18.1643 12.8182 19.3613C12.7627 20.5613 12.75 20.9445 12.75 24C12.75 27.0555 12.7628 27.4387 12.8175 28.638C12.8723 29.8357 13.062 30.6533 13.3403 31.3688C13.6275 32.1083 14.0123 32.736 14.6378 33.3615C15.2633 33.987 15.8902 34.3718 16.6305 34.659C17.346 34.9373 18.1643 35.127 19.3613 35.1818C20.5613 35.2373 20.9445 35.25 24 35.25C27.0555 35.25 27.4387 35.2372 28.638 35.1825C29.8357 35.1277 30.6533 34.938 31.3688 34.6598C32.1083 34.3725 32.736 33.9878 33.3615 33.3623C33.987 32.7368 34.3718 32.1098 34.659 31.3695C34.9373 30.654 35.127 29.8358 35.1818 28.6388C35.2373 27.4388 35.25 27.0555 35.25 24C35.25 20.9445 35.2372 20.5612 35.1825 19.362C35.1277 18.1642 34.938 17.3467 34.6598 16.6312C34.3725 15.8917 33.9878 15.264 33.3623 14.6385C32.7368 14.013 32.1098 13.6283 31.3695 13.341C30.654 13.0628 29.8358 12.873 28.6388 12.8182C27.4388 12.7627 27.0555 12.75 24 12.75ZM24 14.7787C27.0045 14.7787 27.3608 14.79 28.5465 14.844C29.643 14.8943 30.2385 15.0773 30.6345 15.231C31.1595 15.435 31.5345 15.6788 31.9282 16.0725C32.322 16.4663 32.5658 16.8413 32.7698 17.3663C32.9235 17.7623 33.1065 18.3577 33.1567 19.455C33.2107 20.6408 33.222 20.997 33.222 24C33.222 27.0045 33.2107 27.3608 33.1567 28.5465C33.1065 29.643 32.9235 30.2385 32.7698 30.6345C32.5658 31.1595 32.322 31.5345 31.9282 31.9282C31.5345 32.322 31.1595 32.5658 30.6345 32.7698C30.2385 32.9235 29.643 33.1072 28.5465 33.1567C27.3608 33.2107 27.0045 33.222 24 33.222C20.997 33.222 20.6408 33.2107 19.455 33.1567C18.3585 33.1065 17.7623 32.9235 17.3663 32.7698C16.8413 32.5658 16.4663 32.322 16.0725 31.9282C15.6788 31.5345 15.435 31.1595 15.231 30.6345C15.0773 30.2385 14.8935 29.643 14.844 28.5465C14.79 27.3608 14.7787 27.0045 14.7787 24C14.7787 20.997 14.79 20.6408 14.844 19.455C14.8943 18.3585 15.07... <truncated>"
                                            fill="black"
                                        />
                                        <path
                                            d="M24 18.2228C20.8095 18.2228 18.2228 20.8095 18.2228 24C18.2228 27.1905 20.8095 29.7772 24 29.7772C27.1905 29.7772 29.7772 27.1905 29.7772 24C29.7772 20.8095 27.1905 18.2228 24 18.2228ZM24 27.75C21.9293 27.75 20.25 26.0707 20.25 24C20.25 21.9293 21.9293 20.25 24 20.25C26.0707 20.25 27.75 21.9293 27.75 24C27.75 26.0707 26.0707 27.75 24 27.75ZM30.0052 16.6448C29.2597 16.6448 28.6553 17.2493 28.6553 17.9948C28.6553 18.7403 29.2597 19.3447 30.0052 19.3447C30.7507 19.3447 31.3552 18.7403 31.3552 17.9948C31.3552 17.2493 30.7507 16.6448 30.0052 16.6448Z"
                                            fill="black"
                                        />
                                    </svg>
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.2, rotate: -5 }}
                                    transition={{ duration: 0.2 }}
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity"
                                >
                                    <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none">
                                        <path
                                            d="M25.575 35.25V24.975H29.025L29.55 21H25.575V18.45C25.575 17.325 25.875 16.5 27.525 16.5H29.625V12.9C29.25 12.825 27.975 12.75 26.55 12.75C23.475 12.75 21.375 14.625 21.375 18V21H18V24.975H21.45V35.25H25.575Z"
                                            fill="black"
                                        />
                                    </svg>
                                </motion.a>
                                <motion.a
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    transition={{ duration: 0.2 }}
                                    href="#"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:opacity-70 transition-opacity"
                                >
                                    <svg className="w-8 h-8 md:w-12 md:h-12" viewBox="0 0 48 48" fill="none">
                                        <path
                                            d="M28.3643 10.8691C28.5519 10.8692 28.6845 10.9352 28.8047 11.0527C28.8616 11.1083 28.9105 11.1707 28.9443 11.2451C28.9783 11.3201 28.9931 11.4003 28.9932 11.4883C28.9932 11.9102 29.1316 12.3692 29.377 12.7422L29.4883 12.8965L29.4902 12.8984C30.1686 13.7828 31.3427 14.1377 32.4775 13.6494L32.4902 13.6436C32.666 13.5863 32.8593 13.5839 33.0498 13.708C33.2197 13.8188 33.3584 14.0007 33.3584 14.209V19.1807C33.3584 19.4837 33.1665 19.7355 32.8535 19.7969L32.8486 19.7979C31.7407 19.9784 30.6789 19.9009 29.665 19.6924V28.5615C29.665 28.5841 29.6656 28.6314 29.6572 28.6807C29.6516 28.7137 29.6386 28.7599 29.6113 28.8047C29.2475 32.9459 25.6416 36.1699 21.3613 36.1699C16.7734 36.1698 13.0577 32.5408 13.0576 28.0459C13.0576 23.6472 16.53 20.1128 21.0195 19.9219H21.1221C21.2989 19.922 21.4583 19.9804 21.5742 20.0938C21.6905 20.2075 21.751 20.3652 21.751 20.541V25.9824C21.7508 26.306 21.4896 26.5416 21.1982 26.5986L21.1855 26.6006C20.3926 26.6869 19.833 27.2841 19.833 28.0459C19.8331 28.851 20.5298 29.537 21.3613 29.5371C22.1463 29.5371 22.7526 28.9875 22.8418 28.2207V11.4883C22.8419 11.3126 22.9033 11.1547 23.0195 11.041C23.1355 10.9277 23.2949 10.8692 23.4717 10.8691H28.3643Z"
                                            fill="black"
                                            stroke="black"
                                            strokeWidth="0.3"
                                        />
                                    </svg>
                                </motion.a>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>
        </footer>
    )
}