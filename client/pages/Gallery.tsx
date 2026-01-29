"use client"

import { FAQSection } from "@/components/sections/FAQSection"
import ImageGallery from "@/components/sections/ImageGallery"

export default function Gallery() {
  return (
    <>
      {/* Image gallery section */}
      <ImageGallery categoryImages={GALLERY_IMAGES} />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

      <FAQSection />

      {/* White Gap */}
      <div className="bg-white h-2.5"></div>

    </>
  )
}

const GALLERY_IMAGES = {
  "Birthdays": [
    "https://api.builder.io/api/v1/image/assets/TEMP/d50513322e5e3aa6b13a76780069c467431861bd?width=1115",
    "https://api.builder.io/api/v1/image/assets/TEMP/7b109bfdea4e1b025a71fb2876d39f988f36e0c9?width=1418",
    "https://api.builder.io/api/v1/image/assets/TEMP/02e0e4555c42184828e9e8bcd70e0a7a937ffc42?width=1132",
    "https://api.builder.io/api/v1/image/assets/TEMP/1529d8fb17966cab9864a9633c2463d8afbea09f?width=1454",
    "https://api.builder.io/api/v1/image/assets/TEMP/d50513322e5e3aa6b13a76780069c467431861bd?width=1115",
    "https://api.builder.io/api/v1/image/assets/TEMP/7b109bfdea4e1b025a71fb2876d39f988f36e0c9?width=1418",
    "https://api.builder.io/api/v1/image/assets/TEMP/02e0e4555c42184828e9e8bcd70e0a7a937ffc42?width=1132",
    "https://api.builder.io/api/v1/image/assets/TEMP/7b109bfdea4e1b025a71fb2876d39f988f36e0c9?width=1418",
  ],
  "Graduations": [
    "https://api.builder.io/api/v1/image/assets/TEMP/7b109bfdea4e1b025a71fb2876d39f988f36e0c9?width=1418",
    "https://api.builder.io/api/v1/image/assets/TEMP/d50513322e5e3aa6b13a76780069c467431861bd?width=1115",
    "https://api.builder.io/api/v1/image/assets/TEMP/1529d8fb17966cab9864a9633c2463d8afbea09f?width=1454",
    "https://api.builder.io/api/v1/image/assets/TEMP/d50513322e5e3aa6b13a76780069c467431861bd?width=1115",
    "https://api.builder.io/api/v1/image/assets/TEMP/02e0e4555c42184828e9e8bcd70e0a7a937ffc42?width=1132",
    "https://api.builder.io/api/v1/image/assets/TEMP/02e0e4555c42184828e9e8bcd70e0a7a937ffc42?width=1132",
    "https://api.builder.io/api/v1/image/assets/TEMP/7b109bfdea4e1b025a71fb2876d39f988f36e0c9?width=1418",
    "https://api.builder.io/api/v1/image/assets/TEMP/02e0e4555c42184828e9e8bcd70e0a7a937ffc42?width=1132",
  ],
  "Baby Showers": [
    "https://api.builder.io/api/v1/image/assets/TEMP/1529d8fb17966cab9864a9633c2463d8afbea09f?width=1454",
    "https://api.builder.io/api/v1/image/assets/TEMP/7b109bfdea4e1b025a71fb2876d39f988f36e0c9?width=1418",
    "https://api.builder.io/api/v1/image/assets/TEMP/d50513322e5e3aa6b13a76780069c467431861bd?width=1115",
    "https://api.builder.io/api/v1/image/assets/TEMP/d50513322e5e3aa6b13a76780069c467431861bd?width=1115",
    "https://api.builder.io/api/v1/image/assets/TEMP/02e0e4555c42184828e9e8bcd70e0a7a937ffc42?width=1132",
    "https://api.builder.io/api/v1/image/assets/TEMP/7b109bfdea4e1b025a71fb2876d39f988f36e0c9?width=1418",
    "https://api.builder.io/api/v1/image/assets/TEMP/7b109bfdea4e1b025a71fb2876d39f988f36e0c9?width=1418",
    "https://api.builder.io/api/v1/image/assets/TEMP/1529d8fb17966cab9864a9633c2463d8afbea09f?width=1454",
  ],
  "Holiday Parties": [
    "https://api.builder.io/api/v1/image/assets/TEMP/7b109bfdea4e1b025a71fb2876d39f988f36e0c9?width=1418",
    "https://api.builder.io/api/v1/image/assets/TEMP/1529d8fb17966cab9864a9633c2463d8afbea09f?width=1454",
    "https://api.builder.io/api/v1/image/assets/TEMP/1529d8fb17966cab9864a9633c2463d8afbea09f?width=1454",
    "https://api.builder.io/api/v1/image/assets/TEMP/02e0e4555c42184828e9e8bcd70e0a7a937ffc42?width=1132",
    "https://api.builder.io/api/v1/image/assets/TEMP/d50513322e5e3aa6b13a76780069c467431861bd?width=1115",
    "https://api.builder.io/api/v1/image/assets/TEMP/7b109bfdea4e1b025a71fb2876d39f988f36e0c9?width=1418",
    "https://api.builder.io/api/v1/image/assets/TEMP/7b109bfdea4e1b025a71fb2876d39f988f36e0c9?width=1418",
    "https://api.builder.io/api/v1/image/assets/TEMP/02e0e4555c42184828e9e8bcd70e0a7a937ffc42?width=1132",
  ],
}