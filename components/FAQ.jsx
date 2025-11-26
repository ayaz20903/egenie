"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqs = [
    {
      q: "What is eGenie?",
      a: "eGenie is an AI-powered productivity assistant designed to help with search, writing, summarization, image generation, PDF chat, and more — all in one place.",
    },
    {
      q: "Is it free to use?",
      a: "Yes! You can access all major AI models and features for free, with optional upgrades available for power users.",
    },
    {
      q: "How can I use eGenie?",
      a: "You can use eGenie as a Chrome extension by adding it from the Chrome Web Store or access it directly through the Dorin web app by signing in on the website.",
    },
    {
      q: "Do I need any technical skills?",
      a: "Not at all. eGenie is built for everyone — simply type your request, and the AI does the rest for you.",
    },
    {
      q: "Which AI models are supported?",
      a: "We support GPT, Claude, Gemini, DeepSeek, Meta models, and more — updated automatically as new models launch.",
    },
    {
      q: "Does it work on any website?",
      a: "Yes. The sidebar tools, summarizer, and AI assistant work across all webpages in your browser.",
    },
    {
      q: "Which languages does eGenie support?",
      a: "eGenie supports all languages. You can write or receive replies in any language, and Dorin will generate smart, context-aware responses accordingly.",
    },
    {
      q: "How can I contact support??",
      a: "You can reach out to Dorin's support team anytime via email. They are available to assist with any questions, technical issues, or feedback you may have.",
    },
  ];

  return (
    <section className="px-6 bg-[linear-gradient(126deg,#d4c8ff_0%,#c4f2ff_100%)]">
      <div className="max-w-7xl mx-auto py-10 lg:py-20">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="text-5xl font-bold bg-gradient-to-r from-[#3B82F6] to-[#6D28D9] bg-clip-text text-transparent mb-10 text-center"
        >
          Frequently Asked Questions
        </motion.h2>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <FAQItem {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ q, a }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="bg-white border border-[#606ef5] rounded-2xl p-5 cursor-pointer"
      onClick={() => setOpen(!open)}
    >
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-semibold text-black">{q}</h3>

        <ChevronDown
          className={`w-5 h-5 text-black transition-transform duration-300 ${
            open ? "rotate-180" : "rotate-0"
          }`}
        />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            <p className="text-lg text-black mt-3">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
