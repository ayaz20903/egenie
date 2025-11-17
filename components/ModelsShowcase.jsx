"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ModelsShowcase() {
  const icons = [
    "/integration-logo12.png",
    "/integration-logo11.png",
    "/integration-logo10.png",
    "/integration-logo9.png",
  ];

  return (
    <section className="w-full py-10 lg:py-24 bg-[linear-gradient(47deg,#d4c8ff_0%,#c4f2ff_100%)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.2 }} // plays every time in view
        className="max-w-7xl mx-auto rounded-[40px] overflow-hidden
          bg-[#000000] grid lg:grid-cols-[3fr_2fr]"
      >
        {/* LEFT SECTION — 60% */}
        <div className="py-12 px-[50px] lg:px-[100px] text-white flex flex-col justify-center bg-white ">
          <motion.h2
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ amount: 0.2 }}
            className="text-4xl md:text-5xl font-bold leading-tight mb-6 
            bg-gradient-to-r from-[#3B82F6] to-[#6D28D9] bg-clip-text text-transparent 
            text-center lg:text-left"
          >
            All top AI Models in one
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ amount: 0.2 }}
            className="text-2xl mb-8 bg-gradient-to-r from-[#3B82F6] to-[#6D28D9] 
            bg-clip-text text-transparent text-center lg:text-left"
          >
            Instant access to latest models
          </motion.p>

          <div className="space-y-4 text-lg">
            {[
              { text: "GPT 4O, GPT 4O mini, GPT 5" },
              { text: "Gemini 2.5" },
              { text: "DeepSeek R1" },
              { text: "Claude 3 Haiku" },
              { text: "Claude Sonnet 4.5 " },
              { text: "Deepseek reasoning" },
              { text: "Deepseek-chat" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: 0.15 * i,
                }}
                viewport={{ amount: 0.2 }}
              >
                <ModelItem text={item.text} />
              </motion.div>
            ))}
          </div>

          <motion.button
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ amount: 0.2 }}
            className="mt-10 inline-flex w-full lg:w-fit items-center justify-center px-6 py-4 
            rounded-xl font-semibold
            bg-[linear-gradient(135deg,#4C8CFF_0%,#7A44E8_100%)]
            text-white shadow-[0_4px_20px_rgba(80,80,255,0.25)]
            hover:scale-[1.05] transition-all"
          >
            Let's try
            <span className="ml-2">→</span>
          </motion.button>
        </div>

        {/* RIGHT SECTION — 40% */}
        <div className="bg-[linear-gradient(135deg,#4C8CFF_0%,#7A44E8_100%)] p-10 grid place-items-center relative">
          <div className="flex flex-col gap-14">
            {icons.map((src, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.15 }}
                viewport={{ amount: 0.2 }}
                animate={{ y: [0, -8, 0] }}
                className="bg-white rounded-lg w-full h-full px-5 py-2 shadow-md flex items-center justify-center"
              >
                <Image src={src} width={120} height={60} alt="icon" />
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

/* MODEL LIST REUSABLE ITEM */
function ModelItem({ text }) {
  return (
    <div className="flex justify-center lg:justify-start items-center gap-3">
      <span className="bg-gradient-to-r from-[#3B82F6] to-[#6D28D9] bg-clip-text text-transparent">
        {text}
      </span>
    </div>
  );
}
