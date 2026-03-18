import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import book1 from "../../assets/images/book-1.png";
import book2 from "../../assets/images/book-2.png";
import bookIcon from "../../assets/icons/lg-01.png";
import amazonBadge from "../../assets/icons/lg-02.png";
import card1 from "../../assets/images/img-01.png";
import card2 from "../../assets/images/img-02.png";
import card3 from "../../assets/images/img-03.jpg";

export default function ServiceSection() {
  const [activeCard, setActiveCard] = useState(0);

  return (
    <section className="relative py-16 md:py-[90px] px-4 sm:px-6 overflow-hidden animate-fade-in">

      {/* radial background */}
      <div className="absolute inset-0 bg-[radial-gradient(53.82%_53.82%_at_54.61%_46.18%,rgba(255,89,0,0.18)_0%,rgba(255,0,0,0)_100%)]"></div>

      <div className="relative max-w-[1300px] mx-auto flex flex-col items-center">

        {/* Badge */}
        <div className="bg-[#FF59001A] px-4 py-2 rounded-full text-[#FF5900] text-sm font-medium mb-6 animate-slide-up hover:scale-105 transition-transform duration-300">
          Swami Services
        </div>

        {/* Heading */}
        <div className="max-w-[813px] text-center mb-12 md:mb-16 animate-slide-up" style={{ animationDelay: '100ms', animationFillMode: 'both' }}>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[60px] lg:leading-[65px] font-bold text-gray-900 group">

            Pathways to Inner{" "}
            <span className="italic text-[#FF5900] group-hover:text-[#EA580C] transition-colors duration-300">Wisdom</span>

          </h2>

          <p className="text-base md:text-[20px] leading-[26px] md:leading-[29px] text-gray-600 mt-4 opacity-90 hover:opacity-100 transition-opacity duration-300">
            Choose the guidance that resonates with your current journey.
            Each offering is crafted with love to support your unique path.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-[45px] animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>

          {/* CARD 1 */}
          <div
            onMouseEnter={() => setActiveCard(0)}
            className={`relative w-full max-w-[387px] h-[460px] rounded-[36px] border-[9px] border-white overflow-hidden transition-all duration-300 cursor-pointer ${activeCard === 0 ? 'bg-[#FF5900] scale-[1.02] -translate-y-2 shadow-card-hover' : 'bg-[#FFF9DB]'}`}
          >

            <img
              src={card1}
              alt="Group Reading"
              className={`w-full h-[260px] md:h-[280px] object-cover transition-transform duration-700 ${activeCard === 0 ? 'scale-110' : ''}`}
            />

            <div className={`p-6 relative z-10 ${activeCard === 0 ? 'text-white' : ''}`}>

              <h3 className={`text-lg md:text-[20px] font-bold mb-2 transition-colors ${activeCard === 0 ? 'text-white' : 'text-gray-900 group-hover:text-[#FF5900]'}`}>
                1-on-1 & Group Readings
              </h3>

              <p className={`text-sm md:text-[16px] leading-[22px] mb-4 transition-colors ${activeCard === 0 ? 'opacity-90' : 'text-gray-600'}`}>
                Personal Readings for Clarity, Healing & Guidance
              </p>

              <button className={`px-4 py-1 rounded-full text-sm transition-colors duration-300 ${activeCard === 0 ? 'bg-[#FF8237DE] border border-[#FF5900] text-white hover:bg-white hover:text-[#FF5900]' : 'bg-white border border-[#FF5900] text-gray-900 hover:bg-[#FF5900] hover:text-white'}`}>
                Book a Session
              </button>

            </div>

            <div className={`absolute bottom-4 right-4 rounded-full p-3 transition-colors duration-300 z-10 shadow-sm ${activeCard === 0 ? 'bg-[#FF5900] text-white' : 'bg-white text-gray-900'}`}>
              <ArrowUpRight size={18} className={`transition-transform duration-300 ${activeCard === 0 ? 'translate-x-1 -translate-y-1' : ''}`} />
            </div>

            <div className={`absolute inset-0 transition-colors duration-300 pointer-events-none ${activeCard === 0 ? 'bg-black/10' : 'bg-black/0'}`} />

          </div>

          {/* CARD 2 */}
          <div
            onMouseEnter={() => setActiveCard(1)}
            className={`relative w-full max-w-[387px] h-[460px] rounded-[36px] border-[9px] border-white overflow-hidden transition-all duration-300 cursor-pointer ${activeCard === 1 ? 'bg-[#FF5900] scale-[1.02] -translate-y-2 shadow-card-hover' : 'bg-[#FFF9DB]'}`}
          >

            <img
              src={card2}
              alt="Courses Workshops"
              className={`w-full h-[260px] md:h-[280px] object-cover transition-transform duration-700 ${activeCard === 1 ? 'scale-110' : ''}`}
            />

            <div className={`p-6 relative z-10 ${activeCard === 1 ? 'text-white' : ''}`}>

              <h3 className={`text-lg md:text-[20px] font-bold mb-2 transition-colors ${activeCard === 1 ? 'text-white' : 'text-gray-900 group-hover:text-[#FF5900]'}`}>
                Courses & Workshops
              </h3>

              <p className={`text-sm md:text-[16px] leading-[22px] mb-4 transition-colors ${activeCard === 1 ? 'opacity-90' : 'text-gray-600'}`}>
                A warm conversation to begin your journey
              </p>

              <button className={`px-4 py-1 rounded-full text-sm transition-colors duration-300 ${activeCard === 1 ? 'bg-[#FF8237DE] border border-[#FF5900] text-white hover:bg-white hover:text-[#FF5900]' : 'bg-white border border-[#FF5900] text-gray-900 hover:bg-[#FF5900] hover:text-white'}`}>
                Free Call
              </button>

            </div>

            <div className={`absolute bottom-4 right-4 rounded-full p-3 shadow-sm transition-colors duration-300 z-10 ${activeCard === 1 ? 'bg-[#FF5900] text-white' : 'bg-white text-gray-900'}`}>
              <ArrowUpRight size={18} className={`transition-transform duration-300 ${activeCard === 1 ? 'translate-x-1 -translate-y-1' : ''}`} />
            </div>

            <div className={`absolute inset-0 transition-colors duration-300 pointer-events-none ${activeCard === 1 ? 'bg-black/10' : 'bg-black/0'}`} />

          </div>

          {/* CARD 3 */}
          <div
            onMouseEnter={() => setActiveCard(2)}
            className={`relative w-full max-w-[387px] h-[460px] rounded-[36px] border-[9px] border-white overflow-hidden transition-all duration-300 cursor-pointer ${activeCard === 2 ? 'bg-[#FF5900] scale-[1.02] -translate-y-2 shadow-card-hover' : 'bg-[#FFF9DB]'}`}
          >

            <img
              src={card3}
              alt="Speaking Interviews"
              className={`w-full h-[260px] md:h-[280px] object-cover transition-transform duration-700 ${activeCard === 2 ? 'scale-110' : ''}`}
            />

            <div className={`p-6 relative z-10 ${activeCard === 2 ? 'text-white' : ''}`}>

              <h3 className={`text-lg md:text-[20px] font-bold mb-2 transition-colors ${activeCard === 2 ? 'text-white' : 'text-gray-900 group-hover:text-[#FF5900]'}`}>
                Speaking & Interviews
              </h3>

              <p className={`text-sm md:text-[16px] leading-[22px] mb-4 transition-colors ${activeCard === 2 ? 'opacity-90' : 'text-gray-600'}`}>
                Inspiring Talks That Spark Transformation
              </p>

              <button className={`px-4 py-1 rounded-full text-sm transition-colors duration-300 ${activeCard === 2 ? 'bg-[#FF8237DE] border border-[#FF5900] text-white hover:bg-white hover:text-[#FF5900]' : 'bg-white border border-[#FF5900] text-gray-900 hover:bg-[#FF5900] hover:text-white'}`}>
                Workshop
              </button>

            </div>

            <div className={`absolute bottom-4 right-4 rounded-full p-3 shadow-sm transition-colors duration-300 z-10 ${activeCard === 2 ? 'bg-[#FF5900] text-white' : 'bg-white text-gray-900'}`}>
              <ArrowUpRight size={18} className={`transition-transform duration-300 ${activeCard === 2 ? 'translate-x-1 -translate-y-1' : ''}`} />
            </div>

            <div className={`absolute inset-0 transition-colors duration-300 pointer-events-none ${activeCard === 2 ? 'bg-black/10' : 'bg-black/0'}`} />

          </div>

        </div>

        {/* CTA */}
        <button className="mt-10 md:mt-12 bg-[#FF5900] text-white px-6 md:px-8 py-3 rounded-full hover:bg-[#EA580C] hover:scale-105 hover:shadow-button transition-all duration-300 active:scale-95 animate-slide-up" style={{ animationDelay: '300ms', animationFillMode: 'both' }}>
          Book a Session →
        </button>

      </div>

      {/* BOOK SECTION */}
      <div className="mt-20 md:mt-32 max-w-[1300px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 px-4 sm:px-6 animate-slide-up" style={{ animationDelay: '400ms', animationFillMode: 'both' }}>

        {/* LEFT CONTENT */}
        <div className="max-w-[520px] text-center lg:text-left">

          <div className="flex items-center justify-center lg:justify-start gap-3 mb-6 group">

            <img src={bookIcon} className="w-[40px] md:w-[49px] group-hover:scale-110 transition-transform duration-300" />

            <h3 className="text-lg md:text-[24px] font-bold font-serif group-hover:text-[#FF5900] transition-colors">
              Books By <span className="italic text-[#FF5900]">Swami</span>
            </h3>

          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[60px] lg:leading-[65px] font-bold font-serif mb-6 hover:text-gray-700 transition-colors">

            Bestselling Books Loved{" "}
            <span className="italic text-[#FF5900]">Worldwide</span>

          </h2>

          <p className="text-base md:text-[20px] leading-[26px] md:leading-[29px] mb-6 opacity-90 hover:opacity-100 transition-opacity">

            <span className="font-bold">Transform your life</span> with wisdom
            from decades of healing, spirituality, and divine storytelling.

          </p>

          <img src={amazonBadge} className="w-[120px] md:w-[155px] mb-8 mx-auto lg:mx-0 hover:scale-105 hover:shadow-md transition-all duration-300 rounded-md cursor-pointer" />

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

            <button className="h-[48px] md:h-[51px] px-6 rounded-[24px] bg-[#FF6916] text-white border border-white/30 shadow hover:bg-[#EA580C] hover:scale-105 hover:shadow-card-hover transition-all duration-300 active:scale-95">
              Buy on Amazon
            </button>

            <Link to="/books" className="h-[48px] md:h-[51px] px-6 md:px-8 flex items-center justify-center rounded-full border border-[#FF8237] hover:bg-orange-50 hover:text-[#FF5900] hover:scale-105 transition-all duration-300 active:scale-95">
              Explore More Books
            </Link>

          </div>

        </div>

        {/* RIGHT BOOK IMAGES */}
        <div className="relative flex items-end justify-center -space-x-6 md:-space-x-12 group cursor-pointer">

          <img
            src={book1}
            className="w-[180px] sm:w-[240px] md:w-[300px] lg:w-[335px] h-auto object-contain transition-transform duration-500 group-hover:rotate-[-5deg] group-hover:-translate-x-4 group-hover:scale-105 z-10"
          />

          <img
            src={book2}
            className="w-[200px] sm:w-[260px] md:w-[320px] lg:w-[351px] h-auto object-contain transition-transform duration-500 group-hover:rotate-[5deg] group-hover:translate-x-4 group-hover:scale-105 z-0 group-hover:z-20"
          />

        </div>

      </div>

    </section>
  );
}
