import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="bg-[#ffd5a8] pt-24 pb-16 md:pt-28 md:pb-20 lg:pb-24">
      <div className="section-container max-w-3xl mx-auto px-4 sm:px-6 text-center">
        
        {/* Services Pill */}
        <div className="inline-flex items-center gap-2 bg-white/80 border-t border-[#FF5900] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-5 md:mb-6 shadow-sm">
          <Sparkles size={16} className="text-[#FF5900]" />
          <span className="text-xs sm:text-sm font-medium text-text-primary">
            Services
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-serif font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight text-text-primary mb-5 md:mb-6">
          <span className="block text-sm sm:text-base md:text-lg italic text-text-muted mb-1 sm:mb-2">
            60 Days of
          </span>

          <span className="text-[#FF6916]">
            1-Minute Meditations
          </span>
        </h1>

        {/* Description */}
        <p className="text-sm sm:text-base leading-6 sm:leading-7 text-[#36415399] max-w-2xl mx-auto">
          Explore Swami's transformative offerings—from healing courses to
          storytelling events.{" "}
          <span className="font-bold italic">
            Choose what resonates with your journey.
          </span>
        </p>
      </div>
    </section>
  );
}