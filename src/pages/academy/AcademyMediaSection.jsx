import React from "react";
import { Play } from "lucide-react";

import featureImg from "../../assets/images/img-10.jpg";
import img1 from "../../assets/images/ac-11.png";
import img2 from "../../assets/images/ac-12.png";
import img3 from "../../assets/images/ac-13.png";

export default function AcademyMediaSection() {
  const cards = [
    {
      img: img1,
      title: "Discover the Secrets of ChakraVeda Healing",
      sub: "1-min method for anxiety relief.",
      link: "https://www.youtube.com",
    },
    {
      img: img2,
      title: "Herb & Supplement Education",
      sub: "How to sit comfortably for 20 mins.",
      link: "https://www.youtube.com",
    },
    {
      img: img3,
      title: "Ignite Your Life – with Radiance",
      sub: "How to sit comfortably for 20 mins.",
      link: "https://www.youtube.com",
    },
  ];

  return (
    <section
      className="w-full py-16 md:py-20"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,115,0,0.05) 0%, #FFF9F0 50%, rgba(255,244,224,0.3) 100%)",
      }}
    >
      <div className="max-w-[1216px] mx-auto px-4 space-y-16 md:space-y-20">

        {/* ================= TOP TWO PANELS ================= */}

        <div className="flex flex-col lg:flex-row gap-6 md:gap-8">

          {/* LEFT — Browse Playlist */}

          <div className="bg-white rounded-[24px] w-full lg:w-[416px] p-6 shadow-sm">

            <h2
              className="text-3xl md:text-[40px] leading-tight md:leading-[64px] font-bold"
              style={{ fontFamily: "Playfair Display" }}
            >
              Browse <span className="italic">Playlist</span>
            </h2>

            <div className="w-[115px] border-t border-[#FFB06B] my-3" />

            <div
              className="h-[50px] rounded-[8px] flex items-center px-4 text-white font-semibold"
              style={{
                background:
                  "linear-gradient(90deg, #FF7300 0%, #FFFFFF 100%)",
              }}
            >
              TV Shows
            </div>

            <ul className="mt-4 space-y-3 text-[#7E6F67] font-medium">
              <li>Podcasts</li>
              <li>Inner Peace</li>
              <li>Prophetic Dreams & Visions</li>
              <li>Mission Ignite</li>
              <li>Orange Cowboy Light Academy</li>
              <li>Swami Interview</li>
            </ul>
          </div>

          {/* RIGHT — Featured Video */}

          <div className="relative bg-white rounded-[24px] overflow-hidden flex-1 min-h-[340px] md:min-h-[420px]">

            <img
              src={featureImg}
              alt="Meditation"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-black/20" />

            {/* Title */}
            <div className="absolute top-4 md:top-6 left-4 md:left-6 text-black max-w-md">
              <h3 className="font-bold text-lg md:text-[24px]">
                Instant Meditation for Anxiety & Calm
              </h3>
              <p className="text-sm text-black/60">
                A simple 1-minute practice to reset your mind and body
              </p>
            </div>

            {/* Center Play */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[70px] h-[70px] md:w-[80px] md:h-[80px] rounded-full bg-white/90 flex items-center justify-center shadow-lg hover:scale-110 transition cursor-pointer">
                <Play size={32} className="text-red-600" fill="red" />
              </div>
            </div>

            {/* Buttons */}
            <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 flex flex-wrap gap-3 md:gap-0 md:justify-between items-center">

              <a
                href="https://www.youtube.com"
                target="_blank"
                className="flex items-center gap-2 px-5 md:px-6 h-[48px] md:h-[52px] rounded-full bg-[#FF6916] text-white shadow-[0_0_40px_#FF730033] font-semibold transition hover:brightness-110 active:scale-95"
              >
                <Play size={14} fill="white" />
                Watch Now
              </a>

              <a
                href="https://www.youtube.com"
                target="_blank"
                className="flex items-center gap-2 px-5 md:px-6 h-[48px] md:h-[52px] rounded-full bg-white/30 backdrop-blur border border-white/40 text-black font-medium transition hover:bg-white/60"
              >
                ▶ YouTube Channel
              </a>

            </div>
          </div>
        </div>

        {/* ================= MEDIA APPEARANCES ================= */}

        <div className="space-y-6 md:space-y-8">

          {/* Heading */}

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

            <h2 className="text-2xl md:text-[30px] font-bold text-[#1F2A2E]">
              Swami Interviews &{" "}
              <span className="text-[#FF6916]">
                Media Appearances
              </span>
            </h2>

            <a
              href="https://www.youtube.com"
              target="_blank"
              className="text-[#F08B2D] font-semibold flex items-center gap-2 hover:underline"
            >
              Explore more Videos →
            </a>
          </div>

          {/* Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

            {cards.map((card, i) => (
              <div
                key={i}
                className="bg-white rounded-[16px] shadow-sm p-3 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl group"
              >
                {/* Image */}
                <div className="relative rounded-[12px] overflow-hidden h-[192px]">

                  <img
                    src={card.img}
                    alt={card.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />

                  {/* CENTER PLAY BUTTON */}
                  <a
                    href={card.link}
                    target="_blank"
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-[56px] h-[56px] rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition">
                      <Play size={24} className="text-red-600" fill="red" />
                    </div>
                  </a>
                </div>

                {/* Text */}
                <div className="p-2 space-y-2">
                  <h3 className="font-bold text-[#1F2A2E]">
                    {card.title}
                  </h3>
                  <p className="text-sm text-[#6B6B6B]">
                    {card.sub}
                  </p>
                </div>

                {/* WATCH ON YOUTUBE BUTTON */}
                <a
                  href={card.link}
                  target="_blank"
                  className="block text-center mt-4 h-[56px] leading-[56px] rounded-full border border-[#FFD9B3] font-semibold transition-all duration-300 hover:bg-[#FF6916] hover:text-white hover:border-[#FF6916] active:scale-95"
                >
                  ▶ Watch On Youtube
                </a>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}