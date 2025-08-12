import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

export default function HeroSection() {
  const slides = [
    {
      type: "image",
      src: "/assets/hero-01.jpg",
      heading: "Eat clean & green.",
      subheading: "Eat organic",
      text: "Enhanced with plant proteins, healthy fats and antioxidant rich superfoods.",
      offer: "50%",
    },
    {
      type: "image",
      src: "/assets/hero-02.jpg",
      heading: "Fresh from the farm.",
      subheading: "Straight to you",
      text: "Harvested today, delivered tomorrow. Freshness you can taste.",
      offer: "30%",
    },
    {
      type: "video",
      src: "/assets/hero-video-01.mp4",
      heading: "Experience freshness.",
      subheading: "In every bite",
      text: "Watch how we bring nature’s best straight to your table.",
      offer: "NEW",
    },
  ];

  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="h-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="relative w-full h-full">
              {/* BACKGROUND MEDIA */}
              {slide.type === "image" ? (
                <img
                  src={slide.src}
                  alt={slide.heading}
                  className="absolute inset-0 w-full h-full object-cover z-0 blur-sm scale-105"
                  loading="eager"
                />
              ) : (
                <video
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover z-0 blur-sm scale-105"
                />
              )}

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/30 z-10" />

              {/* CONTENT */}
              <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 max-w-2xl z-20">
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-green-200 italic font-medium text-lg md:text-xl"
                >
                  Taste of nature
                </motion.span>

                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="text-white text-2xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight"
                >
                  {slide.heading} <br /> {slide.subheading}
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="text-gray-200 mt-2 text-base md:text-lg leading-relaxed max-w-lg"
                >
                  {slide.text}
                </motion.p>

                <motion.button
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.4 }}
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-2 md:px-6 md:py-3 rounded-full font-medium shadow-md transition text-sm md:text-base"
                >
                  Shop Now →
                </motion.button>
              </div>

              {/* OFFER BADGE */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="absolute top-28 right-16 w-24 h-24 bg-red-500 text-white flex flex-col items-center justify-center rounded-full font-bold text-lg shadow-lg z-20 border-[4px] border-white"
                style={{
                  backgroundImage: "url('/assets/doodle-circle.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <span>{slide.offer}</span>
                {slide.offer !== "NEW" && (
                  <span className="text-xs font-normal">OFF</span>
                )}
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
