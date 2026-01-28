"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

// Reusable scroll animation component
export function ScrollAnimation({
    children,
    variant = "fadeUp",
    delay = 0,
}: {
    children: React.ReactNode
    variant?: "fadeUp" | "fadeLeft" | "fadeRight" | "scale" | "slideUp" | "bounce" | "rotate" | "zoomIn"
    delay?: number
}) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" })

    const variants = {
        fadeUp: {
            hidden: { opacity: 0, y: 40 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.8,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                },
            },
        },
        fadeLeft: {
            hidden: { opacity: 0, x: -60 },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.8,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                },
            },
        },
        fadeRight: {
            hidden: { opacity: 0, x: 60 },
            visible: {
                opacity: 1,
                x: 0,
                transition: {
                    duration: 0.8,
                    delay,
                    ease: [0.25, 0.46, 0.45, 0.94],
                },
            },
        },
        scale: {
            hidden: { opacity: 0, scale: 0.8 },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.7,
                    delay,
                    ease: [0.34, 1.56, 0.64, 1],
                },
            },
        },
        slideUp: {
            hidden: { opacity: 0, y: 80 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.9,
                    ease: [0.22, 1, 0.36, 1],
                    delay,
                },
            },
        },
        bounce: {
            hidden: { opacity: 0, y: -50 },
            visible: {
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.8,
                    delay,
                    type: "spring",
                    bounce: 0.5,
                },
            },
        },
        rotate: {
            hidden: { opacity: 0, rotate: -15, scale: 0.8 },
            visible: {
                opacity: 1,
                rotate: 0,
                scale: 1,
                transition: {
                    duration: 0.8,
                    delay,
                    ease: [0.34, 1.56, 0.64, 1],
                },
            },
        },
        zoomIn: {
            hidden: { opacity: 0, scale: 0.5 },
            visible: {
                opacity: 1,
                scale: 1,
                transition: {
                    duration: 0.7,
                    delay,
                    type: "spring",
                    stiffness: 100,
                },
            },
        },
    }

    return (
        <motion.div ref={ref} initial="hidden" animate={isInView ? "visible" : "hidden"} variants={variants[variant]}>
            {children}
        </motion.div>
    )
}