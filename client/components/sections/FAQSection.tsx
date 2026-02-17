"use client";

import type React from "react";
import { motion } from "framer-motion";
import { ScrollAnimation } from "@/lib/animationUtils";
import { useState } from "react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "When Is Open Play?",
      answer: (
        <div className="space-y-1">
          <p>Open Play Hours:</p>
          <p>Monday–Saturday: 9:00 AM – 6:00 PM</p>
          <p className="pb-2">Sunday: 11:00 AM – 5:00 PM</p>
          <p>• No reservations required for open play</p>
          <p>• Children under 12 months play free with a paid sibling</p>
          <p>• Adults are always free</p>
          <p>
            • Grip socks are required for all children. Parents entering the
            play area must wear socks.
          </p>
        </div>
      ),
    },
    {
      question: "What Play Areas Do You Have?",
      answer: (
        <div className="space-y-1">
          <p>• Dedicated baby area for children under 3 years old</p>
          <p>• Slides, ball pit, and interactive play structures</p>
          <p>• Parents and guardians may play alongside children</p>
          <p>• Grip socks required in play areas</p>
        </div>
      ),
    },
    {
      question: "What Are the Lanky Land Rules?",
      answer: (
        <div className="space-y-1">
          <p>• Play safely and respectfully at all times</p>
          <p>• Grip socks only in play areas</p>
          <p>• Signed waiver required prior to play</p>
          <p>
            • Active adult supervision required — Lanky Land is not a daycare
          </p>
          <p>• Snacks and beverages are allowed during weekday open play</p>
          <p>
            • Weekend open play: food and beverages are permitted only in
            reserved party rooms
          </p>
          <p>• No food or drinks inside play areas</p>
          <p>• Play areas are designed for children 10 years old and under</p>
          <p>
            • Guests over age 10 may enter play areas only when supervising a
            younger sibling
          </p>
          <p>
            • Lanky Land reserves the right to remove any guest for safety
            reasons
          </p>
        </div>
      ),
    },
    {
      question: "How Do I Book a Party?",
      answer: (
        <div className="space-y-1">
          <p>• Book online, by phone, or in person</p>
          <p>• A non-refundable deposit is required</p>
          <p>• Availability is subject to capacity</p>
        </div>
      ),
    },
    {
      question: "Do You Require Grip Socks?",
      answer:
        "Yes. Grip socks are required for all children. Parents entering the play area must wear socks.",
    },
  ];

  const partyImages = [
    "https://api.builder.io/api/v1/image/assets/TEMP/d50513322e5e3aa6b13a76780069c467431861bd?width=1115",
    "https://api.builder.io/api/v1/image/assets/TEMP/7b109bfdea4e1b025a71fb2876d39f988f36e0c9?width=1418",
    "https://api.builder.io/api/v1/image/assets/TEMP/02e0e4555c42184828e9e8bcd70e0a7a937ffc42?width=1132",
    "https://api.builder.io/api/v1/image/assets/TEMP/1529d8fb17966cab9864a9633c2463d8afbea09f?width=1454",
  ];

  return (
    <section className="bg-beige py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        {/* Mobile Layout */}
        <div className="lg:hidden">
          {/* Header */}
          <div className="text-center mb-8">
            <h2
              className="font-fredoka text-golden text-4xl md:text-5xl mb-4"
              style={{
                WebkitTextStroke: "2px #5E2E1C",
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
              className="font-fredoka text-golden text-5xl xl:text-6xl"
              style={{
                WebkitTextStroke: "4px #5E2E1C",
              }}
            >
              Frequently Asked Questions
            </h2>
          </div>

          <div className="grid grid-cols-[400px_1fr] gap-12 items-start">
            {/* Left Side - Party Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {partyImages.map((src, index) => (
                <ScrollAnimation
                  key={index}
                  variant="zoomIn"
                  delay={(index + 1) * 0.1}
                >
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={src}
                      alt={`Party Image ${index + 1}`}
                      className="w-full h-full object-cover aspect-square border-2 border-golden"
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
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// FAQ Item Component
function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string;
  answer: React.ReactNode;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="transition-all duration-300">
      {/* Question Button */}
      <button
        onClick={onClick}
        className={`w-full px-6 py-4 flex items-center justify-between text-left transition-all duration-300 border border-olive ${
          isOpen ? "bg-olive text-white rounded-[25px]" : "rounded-[25px]"
        }`}
      >
        <span className="font-poppins font-medium text-sm md:text-base pr-4">
          {question}
        </span>
        <svg
          className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
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
        <div className="py-6 px-4 text-sm md:text-base leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}
