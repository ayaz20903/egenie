"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const integrations = [
  [
    "/integration-logo1.png",
    "/integration-logo2-1.png",
    "/integration-logo3.png",
    "/integration-logo4.png",
    "/integration-logo5.png",
    "/integration-logo6.png",
  ],
  [
    "/integration-Logo9.png",
    "/integration-logo10.png",
    "/integration-logo11.png",
    "/integration-logo12.png",
    "/integration-logo2-1.png",
    "/integration-logo3.png",
  ],
  [
    "/integration-logo6.png",
    "/integration-logo5.png",
    "/integration-logo4.png",
    "/integration-logo3.png",
    "/integration-logo2-1.png",
    "/integration-logo1.png",
  ],
];

export default function IntegrationsSection() {
  return (
    <section className=" bg-[linear-gradient(47deg,#d4c8ff_0%,#c4f2ff_100%)]">
      <div className="container  m-auto w-full  flex flex-col justify-center px-6 md:px-12 lg:px-20  IntegrationsSection py-12 lg:py-20">
        <div className=" w-full bg-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between px-10 IntegrationsSection-wrapper ">
          {/* LEFT CONTENT */}
          <div className="flex-1  mb-0 lg:mb-10 md:mb-0  py-14 px-4 lg:py-4">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] bg-clip-text text-transparent leading-18 mb-4 text-center lg:text-left">
              Integrations
            </h2>
            <p className="bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] bg-clip-text text-transparent  text-3xl mb-8 text-center lg:text-left">
              Sync your tools to manage everything effortlessly from one place.
            </p>
          </div>

          {/* RIGHT SIDE - TEXT COLUMNS */}
          <div className="flex-1 grid grid-cols-3 gap-6 justify-items-center">
            {integrations.map((col, i) => (
              <div
                key={i}
                className="relative h-[360px] overflow-hidden flex flex-col items-center"
              >
                <motion.div
                  className="flex flex-col gap-14"
                  animate={{
                    y: i % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"],
                  }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  {[...col, ...col].map((logo, idx) => (
                    <Image
                      key={idx}
                      src={logo}
                      alt="integration logo"
                      width={120}
                      height={60}
                      className="opacity-80 hover:opacity-100 transition"
                    />
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
