import { Link } from "react-router-dom";
import { FaBookOpen, FaMicrophone } from "react-icons/fa";
import swamiImage from "../../assets/swami.png";

export default function HeroSection() {
  return (
    <section className="relative bg-[#FFFCDD] pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left animate-slide-up">

          {/* Badge */}
          <div className="inline-flex items-center px-[14px] py-[6px] md:px-[16.8px] md:py-[8.8px] rounded-full border border-[#FF5900] bg-[#FFFFFFCC] mb-6 hover:scale-105 transition-transform duration-300">
            <span className="text-sm md:text-[16px] text-[#FF5900]">
              ✨ Storytelling That Awakens the Soul
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[60px] lg:leading-[65px] font-semibold text-gray-800 max-w-[684px] mx-auto lg:mx-0 mb-6 group">

            Meet Swami —
            <span className="text-[#FF5900] block lg:inline group-hover:text-[#EA580C] transition-colors duration-300">
              Author, Healer, Storyteller
            </span>

          </h1>

          {/* Description */}
          <p className="text-sm md:text-[16px] leading-[22px] md:leading-[25px] text-gray-600 max-w-[588px] mx-auto lg:mx-0 mb-8 opacity-90 hover:opacity-100 transition-opacity duration-300">

            For over 50 years, Swamiji has guided people to experience joy, healing,
            and spiritual reconnection through the magic of storytelling. Step into a
            world where stories uplift, open hearts, and help us rediscover our purpose.

          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">

            <Link
              to="/contact"
              className="h-[44px] md:h-[51px] px-6 flex items-center justify-center rounded-[24px] text-white bg-[#FF6916] w-full sm:w-auto hover:bg-[#EA580C] hover:scale-105 hover:shadow-card-hover transition-all duration-300 active:scale-95"
            >
              Connect
            </Link>

            <Link
              to="/academy"
              className="h-[44px] md:h-[51px] px-6 md:px-8 flex items-center justify-center rounded-full bg-white border border-[#FF8237] w-full sm:w-auto hover:bg-orange-50 hover:scale-105 hover:border-[#FF5900] hover:text-[#FF5900] transition-all duration-300 active:scale-95"
            >
              Explore Courses
            </Link>

          </div>
          {/* Info Boxes */}
          <div className="flex flex-col sm:flex-row mt-12 ap-6">

            <div className="flex items-center gap-3
                              bg-white px-4 py-3 rounded-xl shadow-sm">
              <FaBookOpen className="text-[#FF6916]" />
              <div>
                <p className="text-sm font-semibold">
                  #1 Amazon Bestsellers
                </p>
                <p className="text-xs text-[#FF6916]">Books</p>
              </div>
            </div>

            <div className="flex items-center gap-3
                              bg-white px-4 py-3 rounded-xl shadow-sm">
              <FaMicrophone className="text-[#FF6916]" />
              <div>
                <p className="text-sm font-semibold">
                  Guided Practice
                </p>
                <p className="text-xs text-[#FF6916]">Open Mic</p>
              </div>
            </div>

          </div>

        </div>

        {/* IMAGE */}
        <div className="relative flex justify-center lg:justify-end mt-10 md:mt-8 lg:mt-0 animate-fade-in group overflow-visible">

          <img
            src={swamiImage}
            alt="Swami"
            className="w-[1000px] sm:w-[1200px] md:w-[1400px] lg:w-[1600px] xl:w-[1800px] h-auto object-contain scale-x-[-1]"
          />

        </div>

      </div>

    </section>
  );
}
