import Image from "next/image";
import { useRef, useState } from "react";
import dummy from "../public/realtimedummy.png";

export default function RealtimeAnswers() {
  return (
    <section className="w-full py-24   bg-[linear-gradient(70deg,#d4c8ff_0%,#c4f2ff_100%)]">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-14">
        {/* LEFT — STICKY */}
        <div className="lg:sticky lg:top-[40%] self-start h-fit">
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
        </div>

        {/* RIGHT — SCROLLABLE CARDS */}
        <div className="flex flex-col gap-12 custom-scroll overflow-y-auto pr-3">
          <FeatureCard
            image={dummy}
            video="/videos/dummy-video.mov"
            title="Throw in anything—watch the magic happen"
            text="Creating a contract or building a quiz? Upload your PDFs, notes, or guides eGenie absorbs them and answers with full context."
          />

          <FeatureCard
            image={dummy}
            video="/videos/dummy-video.mov"
            title="Why jump tabs? Just ask right here"
            text="Get summaries, insights, rewrites, and new content from any webpage—without leaving where you are."
          />

          <FeatureCard
            image={dummy}
            video="/videos/dummy-video.mov"
            title="Skip the scrolling—get the good stuff fast"
            text="Skip digging through endless Google results. Get a clean summary instantly and request the exact details you need"
          />

          <FeatureCard
            image={dummy}
            video="/videos/dummy-video.mov"
            title="Learn the fun way, not the fast-forward way"
            text="Learn actively with smart video summaries and interactive chat—no more speeding through videos on 2×."
          />
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

    // Ensure the video loads before playing (fixes first-hover issue)
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
      className="rounded-[35px] overflow-hidden w-full cursor-pointer 
       transition-all"
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
        <h3 className="text-3xl font-semibold text-heading mb-2">{title}</h3>
        <p className="text-heading/70 text-xl leading-relaxed">{text}</p>
      </div>
    </div>
  );
}
