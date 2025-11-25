"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import chrome from "../public/chrome-icon.svg";
import { useState } from "react";

export default function Hero() {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <section className="w-full relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#d4c8ff_0%,#c4f2ff_100%)]"></div>

      {/* Soft Glow Decor */}
      <div className="absolute -top-32 -left-20 w-96 h-96 bg-primarySoft rounded-full blur-[140px] opacity-50"></div>
      <div className="absolute -bottom-32 -right-20 w-96 h-96 bg-secondarySoft rounded-full blur-[140px] opacity-50"></div>

      {/* HERO CONTENT */}
      <div className="relative flex flex-col items-center justify-center min-h-[100vh] text-center px-6">
        {/* Video — plays once */}
        <motion.video
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          src="/videos/hero-genie.mp4"
          muted
          autoPlay
          playsInline
          preload="auto"
          onEnded={() => setVideoEnded(true)}
          onLoadedMetadata={(e) => (e.target.playbackRate = 2)} // <-- 2x speed
          className="h-[350px] md:h-[600px] object-contain mb-6 z-30"
        />

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="leading-tight text-4xl md:text-6xl font-bold 
            bg-gradient-to-r from-[#3B82F6] to-[#6D28D9]
            bg-clip-text text-transparent"
        >
          One Wish Away from Anything
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="mt-5 text-2xl md:text-3xl text-body max-w-2xl mx-auto"
        >
          Your AI Genie for Everyday Productivity
        </motion.p>

        {/* CTA BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="mt-10 flex justify-center gap-4"
        >
          <a
            className="flex items-center justify-center gap-2 rounded-lg bg-white px-3 py-2 text-black hover:bg-white dark:text-black
            bg-[linear-gradient(135deg,#dee5fe_0%,#e8e1fc_100%)] border border-[#6664f2]"
            rel="noopener noreferrer nofollow"
            target="_blank"
            href="https://chromewebstore.google.com/detail/merlin-1-click-access-to/camppjleccjaphfdbohjdohecfnoikec?utm_source=getmerlin&amp;utm_medium=website&amp;utm_campaign=extension_install"
          >
            <div className="flex items-center justify-center rounded-md">
              {/* <img alt="Chrome Web Store Logo" loading="lazy" width="30" height="26.19" decoding="async" data-nimg="1" src="https://cdn.getmerlin.in/cms/Chrome_Web_Store_icon_5e2d8a5a4f.svg" style="color: transparent;"> */}
              <Image
                src={chrome}
                alt="chrome logo"
                width={30}
                height={26}
                className=""
              />
            </div>
            <span className="flex flex-col gap-1">
              <span className="text-[11px] font-medium text-left leading-[11px]">
                Available in
              </span>
              <span className="text-[14px] font-medium leading-[14px]">
                Chrome Web Store
              </span>
            </span>
          </a>

          {/* Primary Button */}
          <a
            href="/pricing"
            className="
              group relative px-8 py-4 rounded-xl font-semibold text-white
              bg-[linear-gradient(135deg,#4C8CFF_0%,#7A44E8_100%)]
              shadow-[0_4px_20px_rgba(80,80,255,0.25)]
              backdrop-blur-xl transition-all duration-300
              hover:shadow-[0_6px_30px_rgba(80,80,255,0.45)]
              hover:scale-[1.03] overflow-hidden
            "
          >
            <span className="relative z-20">Explore Plans</span>

            {/* Shine Animation */}
            <span
              className="
                absolute inset-0 z-10 bg-gradient-to-r 
                from-white/30 via-white/10 to-transparent
                translate-x-[-120%] group-hover:translate-x-[120%]
                transition-all duration-700 ease-out
              "
            />
          </a>

          {/* Secondary Button */}
          <a
            href="#features"
            className="
              relative inline-block p-[2px] rounded-xl
              bg-[linear-gradient(135deg,#4C8CFF_0%,#7A44E8_100%)]
              transition-all duration-300 hover:scale-[1.02]
            "
          >
            <span
              className="
                block px-8 py-4 rounded-xl bg-white/80 backdrop-blur-xl
                text-heading font-semibold transition-all duration-300
                hover:bg-white/60
              "
            >
              See Features
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
