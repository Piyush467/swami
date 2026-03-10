import { ArrowUpRight } from "lucide-react";
import book1 from "../../assets/images/book-1.png";
import book2 from "../../assets/images/book-2.png";
import bookIcon from "../../assets/icons/lg-01.png";
import amazonBadge from "../../assets/icons/lg-02.png";
import card1 from "../../assets/images/img-01.png";
import card2 from "../../assets/images/img-02.png";
import card3 from "../../assets/images/img-03.jpg";

export default function ServiceSection() {
  return (
    <section className="relative py-16 md:py-[90px] px-4 sm:px-6 overflow-hidden">

      {/* radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(53.82%_53.82%_at_54.61%_46.18%,rgba(255,89,0,0.18)_0%,rgba(255,0,0,0)_100%)]"></div>

      <div className="relative max-w-[1300px] mx-auto flex flex-col items-center">

        {/* Badge */}
        <div className="bg-[#FF59001A] px-4 py-2 rounded-full text-[#FF5900] text-sm font-medium mb-6">
          Swami Services
        </div>

        {/* Heading */}
        <div className="max-w-[813px] text-center mb-12 md:mb-16">

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[60px] lg:leading-[65px] font-bold text-gray-900">

            Pathways to Inner{" "}
            <span className="italic text-[#FF5900]">Wisdom</span>

          </h2>

          <p className="text-base md:text-[20px] leading-[26px] md:leading-[29px] text-gray-600 mt-4">
            Choose the guidance that resonates with your current journey.
            Each offering is crafted with love to support your unique path.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[45px]">

          {/* CARD 1 */}
          <div className="relative w-full max-w-[387px] h-[460px] rounded-[36px] border-[9px] border-white bg-[#FF5900] overflow-hidden">

            <img
              src={card1}
              alt="Group Reading"
              className="w-full h-[260px] md:h-[280px] object-cover"
            />

            <div className="p-6 text-white">

              <h3 className="text-lg md:text-[20px] font-bold mb-2">
                1-on-1 & Group Readings
              </h3>

              <p className="text-sm md:text-[16px] leading-[22px] mb-4">
                Personal Readings for Clarity, Healing & Guidance
              </p>

              <button className="bg-[#FF8237DE] border border-[#FF5900] px-4 py-1 rounded-full text-sm">
                Book a Session
              </button>

            </div>

            <div className="absolute bottom-4 right-4 bg-white rounded-full p-3">
              <ArrowUpRight size={18} />
            </div>

          </div>

          {/* CARD 2 */}
          <div className="relative w-full max-w-[387px] h-[460px] rounded-[36px] border-[9px] border-white bg-[#FFF9DB] overflow-hidden">

            <img
              src={card2}
              alt="Courses Workshops"
              className="w-full h-[260px] md:h-[280px] object-cover"
            />

            <div className="p-6">

              <h3 className="text-lg md:text-[20px] font-bold mb-2">
                Courses & Workshops
              </h3>

              <p className="text-sm md:text-[16px] leading-[22px] mb-4 text-gray-600">
                A warm conversation to begin your journey
              </p>

              <button className="bg-white border border-[#FF5900] px-4 py-1 rounded-full text-sm">
                Free Call
              </button>

            </div>

            <div className="absolute bottom-4 right-4 bg-white rounded-full p-3">
              <ArrowUpRight size={18} />
            </div>

          </div>

          {/* CARD 3 */}
          <div className="relative w-full max-w-[387px] h-[460px] rounded-[36px] border-[9px] border-white bg-[#FFF9DB] overflow-hidden">

            <img
              src={card3}
              alt="Speaking Interviews"
              className="w-full h-[260px] md:h-[280px] object-cover"
            />

            <div className="p-6">

              <h3 className="text-lg md:text-[20px] font-bold mb-2">
                Speaking & Interviews
              </h3>

              <p className="text-sm md:text-[16px] leading-[22px] mb-4 text-gray-600">
                Inspiring Talks That Spark Transformation
              </p>

              <button className="bg-white border border-[#FF5900] px-4 py-1 rounded-full text-sm">
                Workshop
              </button>

            </div>

            <div className="absolute bottom-4 right-4 bg-white rounded-full p-3">
              <ArrowUpRight size={18} />
            </div>

          </div>

        </div>

        {/* CTA */}
        <button className="mt-10 md:mt-12 bg-[#FF5900] text-white px-6 md:px-8 py-3 rounded-full">
          Book a Session →
        </button>

      </div>

      {/* BOOK SECTION */}
      <div className="mt-20 md:mt-32 max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4 sm:px-6">

        {/* LEFT CONTENT */}
        <div className="max-w-[520px] text-center lg:text-left">

          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">

            <img src={bookIcon} className="w-[40px] md:w-[49px]" />

            <h3 className="text-lg md:text-[24px] font-bold font-serif">
              Books By <span className="italic text-[#FF5900]">Swami</span>
            </h3>

          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[60px] lg:leading-[65px] font-bold font-serif mb-6">

            Bestselling Books Loved{" "}
            <span className="italic text-[#FF5900]">Worldwide</span>

          </h2>

          <p className="text-base md:text-[20px] leading-[26px] md:leading-[29px] mb-6">

            <span className="font-bold">Transform your life</span> with wisdom
            from decades of healing, spirituality, and divine storytelling.

          </p>

          <img src={amazonBadge} className="w-[120px] md:w-[155px] mb-8 mx-auto lg:mx-0" />

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <button className="h-[48px] md:h-[51px] px-6 rounded-[24px] bg-[#FF6916] text-white border border-white/30 shadow">
              Buy on Amazon
            </button>

            <button className="h-[48px] md:h-[51px] px-6 md:px-8 rounded-full border border-[#FF8237]">
              Explore More Books
            </button>

          </div>

        </div>

        {/* RIGHT BOOK IMAGES */}
        <div className="relative flex items-end justify-center -space-x-6 md:-space-x-12">

          <img
            src={book1}
            className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-[335px] h-auto object-contain"
          />

          <img
            src={book2}
            className="w-[200px] sm:w-[260px] md:w-[320px] lg:w-[351px] h-auto object-contain"
          />

        </div>

      </div>

    </section>
  );
}
