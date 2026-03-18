import { Sparkles, Check } from "lucide-react";

const plans = [
  {
    tag: "VIP IMMERSIVE",
    title: "VIP Mentorship",
    description:
      "Complete transformation with 1:1 coaching and ongoing mentorship.",
    buttonColor: "#FEB566",
    upperBg: "#F2F2F2",
    features: [
      "Everything in Enhanced",
      "1:1 Coaching Sessions",
      "Personal Action Plan",
      "Community Leadership",
      "Advanced CEU Preparation",
    ],
  },
  {
    tag: "BASIC PLAN",
    title: "Group Workshop",
    description:
      "Learn and heal alongside others in a supportive community setting.",
    buttonColor: "#FEB566",
    upperBg: "#F2F2F2",
    features: [
      "6 Group Sessions",
      "Group Learning Environment",
      "Downloadable Resources",
      "Community Access",
    ],
  },
  {
    tag: "ENHANCED",
    title: "Personal Experience",
    description:
      "One-on-one guidance tailored to your unique spiritual journey.",
    buttonColor: "#FF6916",
    upperBg: "#FF6916",
    features: [
      "Everything in Basic",
      "Personalized Feedback",
      "Live Q&A Sessions",
      "Actionable daily practices",
      "Exclusive Materials",
    ],
  },
];

export default function ChoosePathSection() {
  return (
    <section className="bg-[#FFFCDD] py-12 md:py-16 lg:py-20">
      <div className="max-w-[1120px] mx-auto px-4 sm:px-6 text-center">

        {/* ===== Investment Pill ===== */}
        <div className="inline-flex items-center gap-2 bg-white/80 border-t border-[#FF5900] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-5 md:mb-6 shadow-sm">
          <Sparkles size={16} className="text-[#FF5900]" />
          <span className="text-[#FF5900] text-xs sm:text-sm">
            Investment in Your Growth
          </span>
        </div>

        {/* ===== Heading ===== */}
        <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-[48px] leading-tight mb-3 md:mb-4">
          Choose Your{" "}
          <span className="italic font-medium text-[#FF6916]">
            Path
          </span>
        </h2>

        {/* ===== Description ===== */}
        <p className="max-w-[529px] mx-auto text-sm sm:text-base leading-6 sm:leading-[25px] text-gray-700">
          Select the experience level that resonates with your spiritual journey.{" "}
          <span className="italic font-semibold">
            Programs range from $200 – $1,400
          </span>{" "}
          • Flexible options available
        </p>

        {/* ===== Cards ===== */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-[21px] mt-10 md:mt-16">
          {plans.map((plan, i) => (
            <div
              key={i}
              className={`
                group rounded-[24px] md:rounded-[28px] p-4 sm:p-5 text-left
                bg-white shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)]
                transition-all duration-300
                md:hover:shadow-2xl md:hover:-translate-y-2
                ${plan.highlight ? "ring-2 ring-[#FF6916]" : ""}
              `}
            >
              {/* ===== Upper Section ===== */}
              <div
                className={`
                  rounded-[18px] md:rounded-[21px] p-4 mb-4 transition
                  ${plan.highlight
                    ? "bg-[#FF6916] text-white group-hover:bg-[#FF6916]"
                    : "bg-[#F2F2F2] group-hover:bg-[#FF6916] group-hover:text-white"}
                `}
              >
                {/* Tag Pill */}
                <span className="inline-block mb-2 px-2.5 sm:px-3 py-1 text-[9px] sm:text-[10px] uppercase tracking-wide border rounded-full bg-white text-gray-800">
                  {plan.tag}
                </span>

                <h3 className="text-lg sm:text-xl font-semibold">
                  {plan.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm leading-[18px] sm:leading-[20px] text-gray-700 mb-4 sm:mb-5">
                {plan.description}
              </p>

              {/* Button */}
              <button
                className={`
                  w-full py-3 rounded-full text-white font-semibold mb-5 sm:mb-6 text-sm sm:text-base transition
                  ${plan.highlight
                    ? "bg-[#FF6916]"
                    : "bg-[#FEB566] group-hover:bg-[#FF6916]"}
                `}
              >
                Book a Session
              </button>

              {/* Features */}
              <ul className="space-y-2">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm">
                    <Check size={16} className="text-[#FF6916]" />
                    <span className="text-gray-900">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}