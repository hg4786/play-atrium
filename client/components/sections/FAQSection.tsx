"use client"

import type React from "react"
import { motion } from "framer-motion"
import { ScrollAnimation } from "@/lib/animationUtils"
import { useState } from "react"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Do I need to book in advance?",
      answer: "Walk-ins are welcome, but advance booking is recommended during weekends, holidays, and peak hours to avoid waiting.",
    },
    {
      question: "What is the entry fee?",
      answer: "Our entry fees vary based on the type of visit and age group. Please check our pricing section or contact us for detailed information.",
    },
    {
      question: "Are socks required?",
      answer: "Yes, socks are required for all visitors for safety and hygiene purposes. You can bring your own or purchase them at our facility.",
    },
    {
      question: "Is outside food allowed?",
      answer: "Outside food is allowed for private events and birthday parties. For regular open play, we have a cafe with snacks and beverages available.",
    },
    {
      question: "What is your refund or cancellation policy?",
      answer: "Cancellations made 48 hours in advance are eligible for a full refund. Cancellations within 48 hours may receive a partial refund or credit for future visits.",
    },
  ]

  const partyImages = [
    "https://api.builder.io/api/v1/image/assets/TEMP/d50513322e5e3aa6b13a76780069c467431861bd?width=1115",
    "https://api.builder.io/api/v1/image/assets/TEMP/7b109bfdea4e1b025a71fb2876d39f988f36e0c9?width=1418",
    "https://api.builder.io/api/v1/image/assets/TEMP/02e0e4555c42184828e9e8bcd70e0a7a937ffc42?width=1132",
    "https://api.builder.io/api/v1/image/assets/TEMP/1529d8fb17966cab9864a9633c2463d8afbea09f?width=1454",
  ]

  return (
    <section className="bg-[#f4e9cd] py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Header */}
          <div className="text-center mb-8">
            <h2
              className="font-fredoka text-[#FFBC56] text-4xl md:text-5xl mb-4"
              style={{
                WebkitTextStroke: "2px #56623c",
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4 max-w-2xl mx-auto">
            {faqs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              />
            ))}
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="font-fredoka text-[#FFBC56] text-5xl xl:text-6xl"
              style={{
                WebkitTextStroke: "2px #56623c",
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-[400px_1fr] gap-12 items-start">
            {/* Left Side - Party Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {partyImages.map((src, index) => (
                <ScrollAnimation key={index} variant="zoomIn" delay={(index + 1) * 0.1}>
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={src}
                      alt={`Party Image ${index + 1}`}
                      className="w-full h-full object-cover aspect-square border-2 border-[#FCBE5A]"
                    />
                  </div>
                </ScrollAnimation>
              ))}
            </div>

            {/* Right Side - FAQ Accordion */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// FAQ Item Component
function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="transition-all duration-300">
      {/* Question Button */}
      <button
        onClick={onClick}
        className={`w-full px-6 py-4 flex items-center justify-between text-left transition-all duration-300 border border-olive ${
          isOpen ? "bg-[#56623c] text-white rounded-full" : "text-[#56623c] rounded-full"
        }`}
      >
        <span className="font-poppins font-medium text-sm md:text-base pr-4">{question}</span>
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Answer */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="py-4 bg-[#f4e9cd] text-[#56623c] text-sm md:text-base leading-relaxed rounded-b-3xl">
          {answer}
        </div>
      </motion.div>
    </div>
  )
}
