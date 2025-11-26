"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import dummy from "../public/realtimedummy.png";

const tabs = ["Summarize", "Chat", "Translate", "Search", "Images"];

// Add images for each tab
const images = {
  Chat: "/realtimedummy.png",
  Summarize: "/realtimedummy.png",
  Search: "/realtimedummy.png",
  Translate: "/realtimedummy.png",
  Images: "/realtimedummy.png",
};

export default function AiTranslatePreview() {
  const [activeTab, setActiveTab] = useState("Summarize");

  return (
    <div className="w-full bg-[linear-gradient(52deg,#d4c8ff_0%,#c4f2ff_100%)] text-white py-16 px-6 flex justify-center">
      <div className="max-w-6xl w-full bg-[#0D1224] border border-[#1a2442] rounded-3xl px-6 py-10 shadow-2xl">
        {/* -------------------- Tabs Header -------------------- */}
        <div className="flex justify-between max-w-3xl mx-auto text-gray-300 text-lg font-medium mb-12 relative overflow-scroll">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className="relative px-2 pb-1"
            >
              <motion.span
                whileHover={{ scale: 1.08 }}
                className={`${
                  tab === activeTab ? "text-white" : "text-gray-300"
                }`}
              >
                {tab}
              </motion.span>

              {tab === activeTab && (
                <motion.div
                  layoutId="active-underline"
                  className="absolute left-0 right-0 mx-auto h-[3px] bg-violet-400 rounded-full"
                  style={{ bottom: -4 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* -------------------- Content Transition -------------------- */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            {/* Title */}
            {/* <h2 className="text-center text-2xl md:text-3xl font-semibold mb-10">
              {activeTab === "AI translate"
                ? "Translate any web page for an immersive bilingual reading experience."
                : `${activeTab} preview section`}
            </h2> */}

            {/* -------- SHOW IMAGE FOR EVERY TAB -------- */}
            <div className="relative flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl border border-[#1d2b47] overflow-hidden shadow-xl w-full lg:w-[80%]"
              >
                <img
                  src={images[activeTab]} // ← each tab loads its own image
                  alt={activeTab}
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
