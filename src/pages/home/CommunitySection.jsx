import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Adria Firestone",
    role: "Speaker, Author, Coach",
    text: "Swamiji is a joy-generating machine! His speaking is humorous, authentic and deeply transformative…",
  },
  {
    name: "Guru Amit",
    role: "Kundalini Yoga Teacher",
    text: "Swamiji is a rare combination of healer, intuitive, teacher, and scholar…",
  },
  {
    name: "Sarah Williams",
    role: "Wellness Coach",
    text: "Every storytelling session connects people with their deeper purpose.",
  },
];

export default function CommunitySection() {
  const [index, setIndex] = useState(0);

  const prevSlide = () =>
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));

  const nextSlide = () =>
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-[radial-gradient(53.82%_53.82%_at_54.61%_46.18%,rgba(255,89,0,0.09)_0%,rgba(255,0,0,0)_100%)] overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 lg:gap-8 mb-12 lg:mb-20">

          <div className="flex items-center gap-4 sm:gap-6">

            <span className="text-[#FF6916] text-4xl sm:text-5xl lg:text-[70px] leading-none">
              “
            </span>

            <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[74px] leading-tight lg:leading-[65px] text-[#2E3D4C]">

              Community{" "}
              <span className="italic text-[#FF6916] text-2xl sm:text-3xl md:text-4xl lg:text-[56px]">
                Word's
              </span>

            </h2>

          </div>

          {/* SLIDER BUTTONS */}
          <div className="flex gap-3 sm:gap-4">

            <button
              onClick={prevSlide}
              className="w-12 h-12 sm:w-[54px] sm:h-[54px] rounded-full border border-[#FF6916] flex items-center justify-center hover:bg-[#FF6916] hover:text-white transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={nextSlide}
              className="w-12 h-12 sm:w-[54px] sm:h-[54px] rounded-full bg-[#FF6916] text-white flex items-center justify-center"
            >
              <ChevronRight />
            </button>

          </div>

        </div>

        {/* CAROUSEL */}
        <div className="overflow-hidden">

          <div
            className="flex gap-6 lg:gap-10 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >

            {testimonials.map((t, i) => (

              <div
                key={i}
                className="w-full sm:w-[400px] md:w-[480px] lg:w-[557px] flex-shrink-0"
              >

                {/* spark decoration */}
                <div className="text-center text-[#FF6916] text-xl sm:text-2xl lg:text-3xl mb-3">
                  ✦
                </div>

                {/* CARD */}
                <div className="border-[2px] sm:border-[3px] lg:border-[4px] border-[#FF6916] rounded-[16px] sm:rounded-[20px] lg:rounded-[24px] bg-white p-6 sm:p-8 lg:p-10 text-center flex flex-col justify-between h-[340px] sm:h-[360px] md:h-[380px] lg:h-[370px]">

                  <div>

                    <h3 className="font-serif italic text-lg sm:text-xl lg:text-[24px] text-[#2E3D4C]">
                      {t.name}
                    </h3>

                    <p className="text-[#FF5900] text-xs sm:text-sm mb-4 sm:mb-6">
                      {t.role}
                    </p>

                    <p className="italic text-sm sm:text-base lg:text-[24px] leading-relaxed sm:leading-[31px] text-[#2C3844]">
                      "{t.text}"
                    </p>

                  </div>

                  {/* divider */}
                  <div className="border-t border-[#FF6916] mt-3 pt-4 lg:pt-6">

                    <div className="flex justify-center gap-1 sm:gap-2 text-[#FF9D00]">

                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          fill="#FF9D00"
                          stroke="none"
                          className="w-3 h-3 sm:w-4 sm:h-4"
                        />
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
