"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

export default function PricingSection() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Mini Genie",
      monthly: "Free",
      yearly: "Free",
      desc: "Perfect for new users exploring what eGenie can do. Get daily insights and responses for free.",
      gradient: "from-[#1f2937] to-[#111827]",
      features: [
        "3 days free trial, upto 30 queries",
        "No advance credits",
        "0 extra credits",
        "Access to limited models",
        "No custom integrations",
      ],
      cta: "Start Free",
    },
    {
      name: "Smart Genie",
      monthly: 14.99,
      yearly: 14.99 * 12,
      desc: "Ideal for professionals who need consistent help managing content, research, and automation.",
      gradient: "from-[#3730a3] to-[#6d28d9]",

      features: [
        "Up to 2,000 queries/month",
        "200 advance credits",
        "0 extra credits",
        "Access to all models",
        "Email support",
        "Smart writing",
        "Translation",
        "Summary",
        "ChatPDF",
        "Change tone",
        "Simplify language",
        "Fix spelling & grammar",
        "Make shorter or longer",
        {
          title: "Accesses to basic models",
          items: ["GPT-4o mini", "Claude 3.5 Haiku", "DeepSeek V3 & R1"],
        },
        {
          title: "Accesses to advanced models",
          items: ["GPT-5.1", "Claude 4.5", "Gemini 3 Pro", "DeepSeek-V3"],
        },
        {
          title: "Image and video generation",
          items: ["FLUX.1-Dev", "FLUX.1-Pro", "Stable Diffusion", "DALL·E 3"],
        },
        {
          title: "Custom Integration",
          items: [
            "Gmail",
            "Outlook",
            "LinkedIn",
            "Twitter",
            "Facebook",
            "Instagram",
            "YouTube",
          ],
        },
      ],

      cta: "Upgrade Now",
    },
    {
      name: "Super Genie",
      monthly: 24.99,
      yearly: 22.99 * 12,
      desc: "For teams and power users. Get unlimited queries, advanced AI models, and full integration power.",
      gradient: "from-[#6d28d9] to-[#db2777]",

      features: [
        "Up to 10,000 queries/month",
        "400 advance credits",
        "200 extra credits",
        "Access to all models",
        "Email support",
        "Smart writing",
        "Translation",
        "Summary",
        "ChatPDF",
        "Change tone",
        "Simplify language",
        "Fix spelling & grammar",
        "Make shorter or longer",
        {
          title: "Accesses to basic models",
          items: ["GPT-4o mini", "Claude 3.5 Haiku", "DeepSeek V3 & R1"],
        },
        {
          title: "Accesses to advanced models",
          items: ["GPT-5.1", "Claude 4.5", "Gemini 3 Pro", "DeepSeek-V3"],
        },
        {
          title: "Image and video generation",
          items: ["FLUX.1-Dev", "FLUX.1-Pro", "Stable Diffusion", "DALL·E 3"],
        },
        {
          title: "Custom Integration",
          items: [
            "Gmail",
            "Outlook",
            "LinkedIn",
            "Twitter",
            "Facebook",
            "Instagram",
            "YouTube",
          ],
        },
      ],
      highlight: true,
      cta: "Go Super",
    },

    {
      name: "Infinity Genie",
      monthly: 74.99,
      yearly: 74.99 * 12,
      desc: "For teams and power users. Get unlimited queries, advanced AI models, and full integration power.",
      gradient: "from-[#6d28d9] to-[#db2777]",
      features: [
        "Unlimited queries",
        "Unlimited dvance credits",
        "Access to all models",
        "Email support ",
        "Custom integrations",
      ],

      features: [
        "Unlimited queries",
        "Unlimited advance credits",
        "Unlimited extra credits",
        "Access to all models",
        "Email support",
        "Smart writing",
        "Translation",
        "Summary",
        "ChatPDF",
        "Change tone",
        "Simplify language",
        "Fix spelling & grammar",
        "Make shorter or longer",
        {
          title: "Accesses to basic models",
          items: ["GPT-4o mini", "Claude 3.5 Haiku", "DeepSeek V3 & R1"],
        },
        {
          title: "Accesses to advanced models",
          items: ["GPT-5.1", "Claude 4.5", "Gemini 3 Pro", "DeepSeek-V3"],
        },
        {
          title: "Image and video generation",
          items: ["FLUX.1-Dev", "FLUX.1-Pro", "Stable Diffusion", "DALL·E 3"],
        },
        {
          title: "Custom Integration",
          items: [
            "Gmail",
            "Outlook",
            "LinkedIn",
            "Twitter",
            "Facebook",
            "Instagram",
            "YouTube",
          ],
        },
      ],
      cta: "Go Super",
    },
  ];

  return (
    <section
      id="pricing"
      className="py-12 lg:py-24 text-white overflow-hidden bg-[linear-gradient(74deg,#d4c8ff_0%,#c4f2ff_100%)]"
    >
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#3B82F6] to-[#6D28D9] bg-clip-text text-transparent  "
        >
          Choose Your Genie Mode
          {/* <span className="bg-clip-text bg-gradient-to-r from-[#6D28D9] to-[#3B82F6] text-transparent">
            Genie Mode
          </span> */}
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-black mb-10 max-w-2xl mx-auto leading-relaxed text-xl"
        >
          Unlock the power of Plus whether you're exploring, creating, or
          automating your workflow. Find the plan that fits your journey.
        </motion.p>

        {/* Toggle Switch */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex justify-center items-center gap-4 mb-16 select-none"
        >
          <span
            className={` text-xl ${
              !isYearly ? "text-[#613ee0] font-semibold" : "text-black"
            }`}
          >
            Monthly
          </span>

          <div
            onClick={() => setIsYearly(!isYearly)}
            className="relative w-16 h-8 bg-gray-700 rounded-full cursor-pointer transition-colors duration-300 hover:bg-gray-600"
          >
            {/* Toggle animation remains */}
            <motion.div
              animate={{ x: isYearly ? 32 : 0, rotate: isYearly ? 360 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="absolute top-1 left-1 w-6 h-6 rounded-full bg-indigo-500 shadow-lg"
            />
          </div>

          <span
            className={`  text-xl ${
              isYearly ? "text-[#613ee0] font-semibold" : "text-black"
            }`}
          >
            Yearly <span className="text-sm text-black">(Save 20%)</span>
          </span>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-4 gap-10">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 + i * 0.2, duration: 0.7 }}
              className={`relative rounded-3xl overflow-hidden border border-gray-800 bg-gradient-to-br ${plan.gradient} p-8 flex flex-col justify-between`}
            >
              {plan.highlight && (
                <div className="absolute top-4 right-4 bg-yellow-400 text-black text-xs font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </div>
              )}

              <div>
                <h3 className="text-2xl font-bold mb-3">{plan.name}</h3>
                <p className="text-gray-300 mb-6">{plan.desc}</p>
                <p className="text-4xl font-bold mb-8">
                  {plan.monthly === "Free"
                    ? "Free"
                    : isYearly
                    ? `$${plan.yearly.toFixed(2)}`
                    : `$${plan.monthly}`}

                  <span className="text-sm text-gray-400">
                    {plan.monthly === "Free"
                      ? ""
                      : isYearly
                      ? " /year"
                      : " /month"}
                  </span>
                </p>

                {/* <ul className="text-left space-y-3 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-green-400" />
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul> */}
                <ul className="text-left space-y-4 mb-10">
                  {plan.features.map((feature, idx) => {
                    // If it's a normal string feature
                    if (typeof feature === "string") {
                      return (
                        <li key={idx} className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5 text-green-400" />
                          <span className="text-gray-200">{feature}</span>
                        </li>
                      );
                    }

                    // If it's a section (heading + items)
                    return (
                      <li key={idx} className="mt-4">
                        <h4 className="text-lg font-semibold text-white mb-2">
                          {feature.title}
                        </h4>
                        <ul className="space-y-2 ml-1">
                          {feature.items.map((item, i) => (
                            <li key={i} className="flex items-center gap-2">
                              <CheckCircle className="w-5 h-5 text-green-400" />
                              <span className="text-gray-200">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 25px #9A5CFF" }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className={`w-full py-3 mt-auto rounded-xl text-lg font-medium transition ${
                  plan.highlight
                    ? "bg-yellow-400 text-black hover:bg-yellow-300"
                    : "bg-white/10 hover:bg-white/20 text-white"
                }`}
              >
                {plan.cta}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
