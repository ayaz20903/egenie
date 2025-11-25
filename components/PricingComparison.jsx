"use client";

export default function PricingComparison() {
  return (
    <div className="w-full bg-[linear-gradient(118deg,#d4c8ff_0%,#c4f2ff_100%)] text-white py-16 px-4 flex flex-col items-center justify-center relative">
      <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#3B82F6] to-[#6D28D9] bg-clip-text text-transparent   ">
        Unlock 6 Premium-Grade AI Models
      </h2>

      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 relative">
        {/* VS Badge */}
        <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
          <div className="bg-neutral-900 border border-neutral-700 text-white text-xl font-bold w-20 h-20 rounded-full flex items-center justify-center shadow-[0_0_25px_rgba(0,255,180,0.6)]">
            VS
          </div>
        </div>

        {/* Left Card */}
        <div className="bg-neutral-900/70 border border-neutral-800 rounded-2xl p-8 shadow-xl h-fit my-auto">
          <p className="mt-1 mb-3">Individual AI Subscriptions </p>
          <h2 className="text-5xl font-semibold text-red-500">$110</h2>
          <p className="mt-1 mb-6">What you're paying now</p>

          <ul className="space-y-4">
            {[
              { name: "ChatGPT 5", price: "$20/mo" },
              { name: "Google Gemini 2.5 Pro", price: "$20/mo" },
              { name: "Claude 4 Sonnet", price: "$20/mo" },
              { name: "DeepSeek", price: "$20/mo" },
              { name: "FLUX.1-Pro", price: "$30/mo" },
            ].map((item, i) => (
              <li key={i} className="flex items-center justify-between">
                <span className="text-lg">{item.name}</span>
                <span className="text-red-400">{item.price}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-3 text-red-500">
            <p>✖ Multiple subscriptions to manage – expensive</p>
            <p>✖ Constant tab switching</p>
            <p>✖ No comparison features</p>
          </div>
        </div>

        {/* Right Card */}
        <div className="relative bg-gradient-to-br from-[#3730a3] to-[#6d28d9]  border border-neutral-800 rounded-3xl p-10 shadow-2xl">
          <div className="absolute top-0 inset-x-0 h-24 rounded-t-3xl bg-gradient-to-r from-green-500/30 to-blue-500/30 blur-2xl opacity-40" />

          <h2 className="text-4xl font-bold">eGenie</h2>

          <div className="flex items-center gap-4 mt-6 flex-wrap">
            {/* Monthly */}
            <div className="p-3  border-neutral-700 rounded-xl text-center">
              <p className="text-3xl font-bold">$24.99</p>
              <p className="text-neutral-400">/Month</p>
            </div>

            {/* Yearly */}
            <div className="p-3 border border-green-500 rounded-xl bg-green-500/10 text-center">
              <p className="text-lg line-through text-neutral-400">$299.88</p>
              <p className="text-3xl font-bold text-green-400">$239.99</p>
              <p className="text-neutral-400">/Year</p>
              <p className="text-sm text-green-300">Save 20%</p>
            </div>
          </div>

          {/* <div className="mt-8 bg-neutral-800/60 p-3 rounded-xl inline-block">
            🎁 ULTIMATE PROMPTBOOK & COMMUNITY ACCESS
          </div> */}

          <ul className="mt-6 space-y-4 text-lg">
            {[
              "All premium AI models",
              "Side-by-side comparison",
              "Instant prompt enhancement",
              "Image generation & Audio transcription",
              "Custom integrations",
              "Email support",
            ].map((text, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-green-400 text-xl">✔</span>
                <span>{text}</span>
              </li>
            ))}
          </ul>

          <button className="w-full mt-10 bg-gradient-to-r from-green-400 to-blue-500 py-4 rounded-full text-lg font-semibold shadow-xl hover:opacity-90 transition">
            Get Started Now →
          </button>

          <p className="text-neutral-500 text-sm mt-4">
            Payments are processed by Stripe.
          </p>
        </div>
      </div>
    </div>
  );
}
