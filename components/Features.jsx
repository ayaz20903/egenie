import {
  Sparkles,
  Wand2,
  Zap,
  Layers,
  Mail,
  PanelRight,
  Search,
  FileText,
  Image,
  Languages,
  ListMinus,
  MessageSquare,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      title: "Email Automation",
      desc: "Write, reply, summarize, and organize emails in seconds with an AI assistant that streamlines your entire inbox",
      icon: <Mail className="w-6 h-6 text-white" />,
    },
    {
      title: "Sidebar Tools",
      desc: "Access powerful AI tools from a sleek sidebar—summaries, writing help, insights, translations, and more on any webpage",
      icon: <PanelRight className="w-6 h-6 text-white" />,
    },
    {
      title: "Smart Search",
      desc: "Get faster, clearer, context-aware search results powered by AI—no more sorting through endless tabs",
      icon: <Search className="w-6 h-6 text-white" />,
    },
    {
      title: "Chat with PDF",
      desc: "Talk to your PDFs like a pro. eGenie answers questions, extracts info, and simplifies everything",
      icon: <FileText className="w-6 h-6 text-white" />,
    },
    {
      title: "Image Generator",
      desc: "Create unique, high-quality images and illustrations from simple text prompts using advanced AI models",
      icon: <Image className="w-6 h-6 text-white" />,
    },
    {
      title: "Translation",
      desc: "Translate across 50+ languages with context-accurate, natural results that preserve meaning and tone",
      icon: <Languages className="w-6 h-6 text-white" />,
    },
    {
      title: "Summarizer",
      desc: "Convert long articles and webpages into concise, easy-to-read summaries in seconds",
      icon: <ListMinus className="w-6 h-6 text-white" />, // clean summary icon
    },
    {
      title: "Chat Assistant",
      desc: "Have smart, conversational AI support wherever you browse—ask, create, analyze, and get answers instantly",
      icon: <MessageSquare className="w-6 h-6 text-white" />,
    },
  ];

  return (
    <section
      id="features"
      className="
        w-full py-20
        bg-[linear-gradient(127deg,#d4c8ff_0%,#c4f2ff_100%)]
      "
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Heading */}
        <h2
          className="
            text-4xl md:text-5xl font-bold mb-5
            bg-gradient-to-r from-[#3B82F6] to-[#6D28D9]
            bg-clip-text text-transparent
          "
        >
          Everything You Need. In One Platform
        </h2>

        <p className="text-heading/70 text-2xl max-w-2xl mx-auto mb-14 leading-relaxed">
          eGenie gives you $130 of AI brilliance for only $19
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, i) => (
            <div
              key={i}
              className="
                group
                relative
                rounded-2xl p-10
                bg-[linear-gradient(135deg,rgba(255,255,255,0.75)_0%,rgba(255,255,255,0.55)_100%)]
                backdrop-blur-2xl
                border border-white/50
                shadow-[0_8px_30px_rgba(120,120,255,0.12)]
                transition-all duration-300
                hover:shadow-[0_12px_40px_rgba(120,120,255,0.25)]
                hover:scale-[1.05]
                overflow-hidden
              "
            >
              {/* Soft Glow Border */}
              <span
                className="
                  absolute inset-0 rounded-2xl
                  bg-[linear-gradient(135deg,#4C8CFF44_0%,#7A44E844_100%)]
                  opacity-0
                  transition-opacity duration-300
                  group-hover:opacity-100
                  pointer-events-none
                  z-0
                "
              />

              {/* Subtle Shine */}
              <span
                className="
                  absolute inset-0 rounded-2xl
                  bg-gradient-to-br from-white/25 via-transparent to-transparent
                  opacity-40
                  pointer-events-none
                "
              />

              {/* Content */}
              <div className="relative z-10">
                {/* Icon Circle */}
                <div
                  className="
                    w-14 h-14 mx-auto mb-6 flex items-center justify-center
                    rounded-2xl
                    bg-[linear-gradient(135deg,#4C8CFF_0%,#7A44E8_100%)]
                    shadow-[0_4px_20px_rgba(120,120,255,0.35)]
                    transform transition-transform duration-300
                    group-hover:scale-110
                  "
                >
                  {f.icon}
                </div>

                <h3 className="text-xl font-semibold text-heading mb-3">
                  {f.title}
                </h3>

                <p className="text-heading/70 text-md leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
