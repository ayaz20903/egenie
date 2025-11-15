"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ModelsShowcase() {
  const icons = [
    "/chatgpt-icon.png",
    "/icons/openai.png",
    "/icons/meta.png",
    "/icons/figma.png",
    "/icons/drive.png",
    "/icons/youtube.png",
    "/icons/linkedin.png",
    "/icons/twitter.png",
    "/icons/google.png",
    "/icons/chrome.png",
    "/icons/gmail.png",
    "/icons/outlook.png",
    "/icons/github.png",
    "/icons/reddit.png",
    "/icons/x.png",
    "/icons/stripe.png",
    "/icons/playstore.png",
  ];

  return (
    <section className="w-full py-24 bg-[linear-gradient(47deg,#d4c8ff_0%,#c4f2ff_100%)]">
      <div
        className="max-w-7xl mx-auto rounded-[40px] overflow-hidden
          bg-[#000000]  grid lg:grid-cols-[3fr_2fr]"
      >
        {/* LEFT SECTION — 60% */}
        <div className="py-12 px-[100px] text-white flex flex-col justify-center bg-white ">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-r from-[#3B82F6] to-[#6D28D9] bg-clip-text text-transparent">
            All top AI Models in one
          </h2>

          <p className="text-2xl  mb-8 bg-gradient-to-r from-[#3B82F6] to-[#6D28D9] bg-clip-text text-transparent">
            Instant access to latest models
          </p>

          <div className="space-y-4 text-lg">
            <ModelItem
              icon="/chatgpt-icon.png"
              text="GPT 4O, GPT 4O mini, GPT 5"
            />
            <ModelItem icon="/models/anthropic.png" text="Gemini 2.5" />
            <ModelItem icon="/models/deepseek.png" text="DeepSeek R1" />
            <ModelItem icon="/models/gemini.png" text="Claude 3 Haiku" />
            <ModelItem icon="/models/mistral.png" text="Claude Sonnet 4.5 " />
            <ModelItem
              icon="/models/meta.png"
              text="Deepseek-chat and Deepseek reasoning"
            />
          </div>

          <button
            className="mt-10 inline-flex w-fit items-center px-6 py-4 rounded-xl font-semibold
              bg-[linear-gradient(135deg,#4C8CFF_0%,#7A44E8_100%)]
              text-white shadow-[0_4px_20px_rgba(80,80,255,0.25)]
              hover:scale-[1.05] transition-all"
          >
            Let's try
            <span className="ml-2">→</span>
          </button>
        </div>

        {/* RIGHT SECTION — 40% */}
        <div className="bg-[linear-gradient(135deg,#4C8CFF_0%,#7A44E8_100%)] p-10 grid place-items-center relative">
          <div className="grid grid-cols-4 gap-6">
            {icons.map((src, index) => (
              <motion.div
                key={index}
                initial={{ y: 0 }}
                animate={{ y: [0, -8, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                className="bg-white rounded-2xl shadow-md w-16 h-16 flex items-center justify-center"
              >
                <Image src={src} width={32} height={32} alt="icon" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* MODEL LIST REUSABLE ITEM */
function ModelItem({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      {/* <Image src={icon} width={28} height={28} alt="model icon" /> */}
      <span className="bg-gradient-to-r from-[#3B82F6] to-[#6D28D9] bg-clip-text text-transparent">
        {text}
      </span>
    </div>
  );
}
