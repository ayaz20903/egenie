"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import dummy from "../public/realtimedummy.png";

export default function RealtimeAnswers() {
  return (
    <section className="w-full py:0 lg:py-24 bg-[linear-gradient(70deg,#d4c8ff_0%,#c4f2ff_100%)]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14">
        {/* LEFT — STICKY */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false, amount: 0.3 }}
          className="lg:sticky lg:top-[40%] self-center lg:self-start h-fit"
        >
          <h2
            className="text-4xl md:text-6xl font-bold leading-snug
            bg-gradient-to-r from-[#3B82F6] to-[#6D28D9] bg-clip-text text-transparent"
          >
            Realtime answers
            <br className="hidden md:block" /> in just a click
          </h2>

          <div className="mt-8">
            <p className="text-gray-600 text-lg mb-3">Try it yourself</p>

            <a
              href="#"
              className="inline-flex items-center px-6 py-3 font-semibold rounded-xl
              bg-[linear-gradient(135deg,#4C8CFF_0%,#7A44E8_100%)]
              text-white 
              hover:scale-[1.05] transition-all"
            >
              Get the extension →
            </a>
          </div>
        </motion.div>

        {/* RIGHT — SCROLLABLE CARDS */}
        <div className="flex flex-col gap-12 overflow-y-auto pr-0 lg:pr-3 overflow-y-auto no-scrollbar">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <FeatureCard
                image={dummy}
                video="/videos/dummy-video.mov"
                title={
                  i === 0
                    ? "Throw in anything—watch the magic happen"
                    : i === 1
                    ? "Why jump tabs? Just ask right here"
                    : i === 2
                    ? "Skip the scrolling—get the good stuff fast"
                    : "Learn the fun way, not the fast-forward way"
                }
                text={
                  i === 0
                    ? "Creating a contract or building a quiz? Upload your PDFs, notes, or guides eGenie absorbs them and answers with full context."
                    : i === 1
                    ? "Get summaries, insights, rewrites, and new content from any webpage—without leaving where you are."
                    : i === 2
                    ? "Skip digging through endless Google results. Get a clean summary instantly and request the exact details you need"
                    : "Learn actively with smart video summaries and interactive chat—no more speeding through videos on 2×."
                }
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------
   FEATURE CARD — CLEAN, SMOOTH & MAGICAL
------------------------------------------- */
function FeatureCard({ image, video, title, text }) {
  const videoRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  const handleEnter = () => {
    setHovered(true);

    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    }
  };

  const handleLeave = () => {
    setHovered(false);

    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      className="rounded-[35px] overflow-hidden w-full cursor-pointer transition-all"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* MEDIA WRAPPER */}
      <div className="relative h-[420px] w-full overflow-hidden rounded-[28px] bg-black/5">
        {/* Image */}
        <Image
          src={image}
          alt={title}
          fill
          className={`object-cover rounded-[28px] transition-opacity duration-500 ${
            hovered ? "opacity-0" : "opacity-100"
          }`}
        />

        {/* Video */}
        <video
          ref={videoRef}
          src={video}
          muted
          loop
          playsInline
          preload="auto"
          className={`absolute inset-0 w-full h-full object-cover rounded-[28px] transition-opacity duration-500 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      {/* TEXT */}
      <div className="py-8 px-1">
        <h3 className="text-2xl lg:text-3xl font-semibold text-heading mb-2">
          {title}
        </h3>
        <p className="text-heading/70 text-lg lg:text-xl leading-relaxed">
          {text}
        </p>
      </div>
    </div>
  );
}
