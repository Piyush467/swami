import { Sparkles } from "lucide-react";

import heroImg from "../../assets/images/book-cnt.png";
import book1 from "../../assets/images/book-2.png";
import book2 from "../../assets/images/book-1.png";
import scholarImg from "../../assets/images/pic-1.png";

export default function BooksHero() {
  return (
    <section className="bg-[#FFFCDD] pt-20 md:pt-24 pb-16 md:pb-20">

      {/* ===== Top Content ===== */}
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 text-center">

        {/* Pill */}
        <div className="inline-flex items-center gap-2 bg-white/80 border-t border-[#FF5900] px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-sm mb-5 md:mb-6">
          <Sparkles size={16} className="text-[#FF5900]" />
          <span className="text-[#FF5900] text-xs sm:text-sm">
            Amazon #1 Bestselling Author
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-serif italic font-medium text-3xl sm:text-4xl md:text-[48px] leading-tight md:leading-[65px] text-[#2E3D4C] max-w-[684px] mx-auto">
          Transformative Stories &{" "}
          <span className="text-[#FF5900] border-t border-dotted border-[#FF5900] pt-2 inline-block">
            Spiritual Wisdom
          </span>
        </h1>

        {/* Description */}
        <p className="mt-4 md:mt-6 text-[#36415399] text-sm sm:text-base leading-6 sm:leading-[25px] max-w-[615px] mx-auto">
          Discover profound insights, practical wisdom, and life-changing stories that have guided thousands on their path to spiritual awakening
        </p>
      </div>

      {/* ===== Books Banner Section ===== */}
      <div className="mt-12 md:mt-16">

        {/* Background container */}
        <div
          className="
            relative
            bg-cover bg-center
            rounded-t-[24px] md:rounded-t-[36px]
            overflow-hidden
          "
          style={{ backgroundImage: `url(${heroImg})` }}
        >
          {/* Dark overlay for readability (optional, matches Figma depth) */}
          <div className="bg-white/70 backdrop-blur-sm px-4 py-10 md:py-12">

            <div className="max-w-[1309px] mx-auto">

              {/* Heading */}
              <div className="border border-white rounded-full py-1 px-5 md:px-6 w-fit mx-auto mb-6">
                <h3 className="text-[#FF6916] font-bold text-lg sm:text-xl md:text-[24px]">
                  Amazon #1 Bestselling Books
                </h3>
              </div>

              {/* Cards */}
              <div className="flex flex-col lg:flex-row gap-6">

                {/* ===== Card 1 ===== */}
                <div className="bg-[#F7EED9] rounded-[20px] md:rounded-[24px] border-2 border-white p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row gap-4 w-full">

                  <img
                    src={book1}
                    alt="Book"
                    className="w-[120px] sm:w-[150px] md:w-[167px] h-[160px] sm:h-[200px] md:h-[218px] rounded-[16px] md:rounded-[18px] border border-white object-cover mx-auto sm:mx-0"
                  />

                  <div className="flex flex-col justify-between text-center sm:text-left">

                    <div>
                      <span className="inline-block bg-white/80 border-t border-[#FF5900] px-3 sm:px-4 py-1 rounded-full text-xs mb-3">
                        Volume 1
                      </span>

                      <h4 className="font-bold text-lg sm:text-xl md:text-[24px] text-[#1F2A2E] mb-2">
                        The Ayurveda Encyclopedic
                      </h4>

                      <p className="text-xs sm:text-sm md:text-[14px] text-[#6B6B6B] leading-[18px] sm:leading-[20px]">
                        Simple, fun, handy-dandy way to easily grasp the basics of Ayurveda, meditation, and more.
                      </p>
                    </div>

                    {/* Button */}
                    <a
                      href="https://www.amazon.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="
                                   mt-4
                                   bg-[#FF6916]
                                   text-white
                                   px-4 py-2
                                   rounded-full
                                   text-xs sm:text-sm font-semibold
                                   shadow-md
                                   hover:shadow-lg
                                   hover:-translate-y-0.5
                                   transition duration-300
                                   "
                      >
                        Buy on Amazon
                      </button>
                    </a>
                  </div>
                </div>

                {/* ===== Card 2 ===== */}
                <div className="bg-[#F7EED9] rounded-[20px] md:rounded-[24px] border-2 border-white p-4 sm:p-5 md:p-6 flex flex-col sm:flex-row gap-4 w-full">

                  <img
                    src={book2}
                    alt="Book"
                    className="w-[120px] sm:w-[150px] md:w-[167px] h-[160px] sm:h-[200px] md:h-[218px] rounded-[16px] md:rounded-[18px] border border-white object-cover mx-auto sm:mx-0"
                  />

                  <div className="flex flex-col justify-between text-center sm:text-left">

                    <div>
                      <h4 className="font-bold text-lg sm:text-xl md:text-[24px] text-[#1F2A2E] mb-2">
                        The Magic of the Blessed mother’s miracle
                      </h4>

                      <p className="text-xs sm:text-sm md:text-[14px] text-[#6B6B6B] leading-[18px] sm:leading-[20px]">
                        One specific memory stands out—the “Invisible Hand.” Plunging into depths far too deep for a boy his age.
                      </p>
                    </div>

                    {/* Button */}
                    <a
                      href="https://www.amazon.in/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <button
                        className="
      mt-4
      bg-[#FF6916]
                                 text-white
      px-4 py-2
      rounded-full
      text-xs sm:text-sm font-semibold
      shadow-md
      hover:shadow-lg
      hover:-translate-y-0.5
      transition duration-300
    "
                      >
                        Buy on Amazon
                      </button>
                    </a>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>

      </div>

      {/* ===== Recognition Section ===== */}
      <div className="max-w-[1216px] mx-auto px-4 sm:px-6 mt-14 md:mt-20">

        <div className="border-[7px] md:border-[9px] border-white rounded-[24px] md:rounded-[36px] bg-[#F2E8C9] p-5 sm:p-6 md:p-8 flex flex-col lg:flex-row items-center gap-6 md:gap-8">

          {/* Left Text */}
          <div className="max-w-[578px] text-center lg:text-left">

            <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-[40px] leading-tight md:leading-[50px] text-[#2E3D4C]">
              Honored Recognition from{" "}
              <span className="italic font-medium text-[#FF5900]">
                India’s Top Scholar
              </span>
            </h2>

            <p className="mt-3 md:mt-4 text-[#364153] text-sm sm:text-base leading-6 sm:leading-[25px]">
              In New Delhi, Swami had the honor of gifting his bestselling book,
              <span className="italic font-bold">
                {" "}“The Ayurveda Encyclopedia”
              </span>{" "}
              to Shankaracharya Ji, India’s highest spiritual scholar, in a sacred ceremony.
            </p>
          </div>

          {/* Right Image */}
          <img
            src={scholarImg}
            alt="Recognition"
            className="w-full max-w-[568px] h-[200px] sm:h-[230px] md:h-[248px] rounded-[14px] md:rounded-[18px] object-cover"
          />
        </div>

      </div>

    </section>
  );
}