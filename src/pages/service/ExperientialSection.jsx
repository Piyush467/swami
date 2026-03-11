import { Check, BookOpen } from "lucide-react";
import banner from "../../assets/images/service.png";
import img09 from "../../assets/images/img-09.png";
import img10 from "../../assets/images/img-10.png";
import img11 from "../../assets/images/img-11.png";

const cards = [
  {
    image: img09,
    title: "Awakening Your Radiance",
    subtitle: "Ayurveda Wellness Reset",
    button: "Enroll Now",
  },
  {
    image: img10,
    title: "Glow Up Your Radiance",
    subtitle: "Tell your story",
    button: "Enroll Now",
  },
  {
    image: img11,
    title: "Your Radiant Voice",
    subtitle: "Storytelling Lab",
    button: "Join the Circle",
  },
];

export default function ExperientialSection() {
  return (
    <section className="bg-white rounded-t-[24px] md:rounded-t-[36px] py-12 md:py-16">
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6">

        {/* ===== Heading ===== */}
        <div className="text-center mb-10 md:mb-14">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-[48px] leading-tight md:leading-[65px]">
            Experiential{" "}
            <span className="italic font-medium text-[#FF6916]">
              Service
            </span>
          </h2>

          <p className="mt-2 md:mt-3 italic font-semibold text-base sm:text-lg md:text-[20px]">
            Limited seats{" "}
            <span className="font-medium">
              available for more personal interaction.
            </span>
          </p>
        </div>

        {/* ===== Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
          {cards.map((card, i) => (
            <div
              key={i}
              className="group bg-[#FFFCDD] rounded-[28px] md:rounded-[36px] border-[9px] border-white overflow-hidden
                         shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                         hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)]
                         transition-all duration-300 md:hover:-translate-y-2"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-[180px] sm:h-[200px] md:h-[224px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6 md:p-7">
                <h3 className="text-lg sm:text-xl md:text-[24px] font-bold text-[#FF6916] mb-1">
                  {card.title}
                </h3>

                <p className="italic text-xs sm:text-sm text-[#F08B2D] mb-3 md:mb-4">
                  {card.subtitle}
                </p>

                <p className="text-xs sm:text-sm text-[#6B6B6B] mb-4">
                  A transformational journey designed to awaken inner calm and
                  energy, based on ancient spiritual science.
                </p>

                {/* Points */}
                <ul className="space-y-2 mb-4 md:mb-5">
                  <li className="flex items-center gap-2 text-xs sm:text-sm text-[#6B6B6B]">
                    <Check size={18} className="text-[#FF6916]" />
                    Free discovery session
                  </li>

                  <li className="flex items-center gap-2 text-xs sm:text-sm text-[#6B6B6B]">
                    <Check size={18} className="text-[#FF6916]" />
                    4 live sessions
                  </li>
                </ul>

                {/* Meditation Tool Button */}
                <button className="w-full bg-[#FFF9DB] border border-[#FF823733] rounded-tl-[24px] rounded-br-[24px] py-2 text-xs sm:text-sm mb-5 md:mb-6">
                  On-the-Go Meditation Tools
                </button>

                {/* Bottom Section */}
                <div className="border-t border-[#E5E7EB] pt-5 md:pt-6 flex justify-center">
                  <button className="bg-[#FF6916] text-white px-6 py-2 rounded-[24px] border border-white/40 shadow-[0_4px_12px_rgba(255,105,22,0.35)] transition-all duration-300 md:hover:-translate-y-[2px]">
                    {card.button}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ===== Advanced Pathways Banner ===== */}
       <div className="relative border-[9px] border-white rounded-[28px] md:rounded-[36px] overflow-hidden">
  
  <img
    src={banner}
    alt="Advanced Pathways"
    className="
      w-full
      h-[320px] sm:h-[300px] md:h-[279px]
      object-cover
    "
  />

  {/* Overlay */}
  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-5 sm:px-4">

    {/* Heading */}
    <h3 className="font-serif font-bold text-2xl sm:text-2xl md:text-[32px] text-[#1F2A2E] mb-6 md:mb-6">
      Advanced{" "}
      <span className="italic font-medium md:text-[40px]">
        Pathways
      </span>
    </h3>

    {/* Content Blocks */}
    <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 md:gap-16">

      {/* Left */}
      <div className="text-center max-w-[220px]">
        <div className="w-12 h-12 sm:w-12 sm:h-12 bg-white/90 rounded-full flex items-center justify-center shadow mb-3">
          <BookOpen size={20} />
        </div>

        <p className="font-bold text-[#2E3D4C] text-base sm:text-base">
          Advanced CEU Trainings
        </p>

        <p className="text-sm text-[#FF6916] mt-1">
          Coming soon
        </p>
      </div>

      {/* Divider */}
      <div className="hidden sm:block w-px h-14 md:h-16 bg-[#FF6916]" />

      {/* Right */}
      <div className="text-center max-w-[220px]">
        <div className="w-12 h-12 sm:w-12 sm:h-12 bg-white/90 rounded-full flex items-center justify-center shadow mb-3">
          <BookOpen size={20} />
        </div>

        <p className="font-bold text-[#2E3D4C] text-base sm:text-base">
          Certification Programs
        </p>

        <p className="text-sm text-[#FF6916] mt-1">
          Coming soon
        </p>
      </div>

    </div>
  </div>
</div>

      </div>
    </section>
  );
}