import { Youtube } from "lucide-react";

import yt1 from "../../assets/images/yt-1.png";
import yt2 from "../../assets/images/yt-2.jpg";
import yt3 from "../../assets/images/yt-3.png";

const videos = [
  {
    image: yt1,
    title: "Instant Meditation",
    desc: "1-min method for anxiety relief.",
  },
  {
    image: yt2,
    title: "Beginner's Guide",
    desc: "How to start meditation in 20 mins.",
  },
  {
    image: yt3,
    title: "The Journey Within",
    desc: "A cinematic introduction to the path.",
  },
];

export default function WatchSwamiSection() {
  return (
    <section className="bg-cream py-12 md:py-16 lg:py-20">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6">

        {/* ===== Header Row ===== */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10 md:mb-12">
          <div>
            {/* Title */}
            <h2 className="text-2xl sm:text-3xl font-bold text-[#1F2A2E] leading-tight">
              Watch{" "}
              <span className="italic font-bold text-[#FF6916]">
                Swami
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-[#6B6B6B] mt-2">
              Previews of the teaching style and free wisdom.
            </p>
          </div>

          {/* Visit Channel Link */}
          <a
            href="https://youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#F08B2D] font-semibold text-sm sm:text-base flex items-center gap-1 hover:underline"
          >
            Visit YouTube Channel →
          </a>
        </div>

        {/* ===== Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {videos.map((video, i) => (
            <div
              key={i}
              className="bg-white rounded-[14px] sm:rounded-[16px] shadow-[0_1px_2px_rgba(0,0,0,0.08)] p-3"
            >
              {/* Thumbnail */}
              <div className="relative rounded-[10px] sm:rounded-[12px] overflow-hidden">
                <img
                  src={video.image}
                  alt={video.title}
                  className="w-full h-[170px] sm:h-[185px] md:h-[192px] object-cover opacity-90"
                />

                {/* Center Play Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-white rounded-full p-2.5 sm:p-3 shadow">
                    <Youtube size={26} className="text-red-600" />
                  </div>
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-4 text-sm sm:text-base font-bold text-[#1F2A2E]">
                {video.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#6B6B6B] mt-1 mb-4">
                {video.desc}
              </p>

              {/* Watch Button */}
              <a
                href="https://youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-center gap-2
                  border border-[#FFD9B3]
                  rounded-full py-2.5 sm:py-3
                  text-base sm:text-lg font-semibold text-[#1F2A2E]
                  hover:bg-orange-50 transition
                "
              >
                <Youtube size={20} className="text-red-600" />
                Watch On Youtube
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}