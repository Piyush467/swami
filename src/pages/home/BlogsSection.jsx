import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

import heroImg from "../../assets/images/img-06.png";
import blog1 from "../../assets/images/img-07.jpg";
import blog2 from "../../assets/images/img-08.png";

const blogs = [
  {
    title: "Calm, Healing & Storytelling Focus",
    description:
      "Gentle insights, uplifting stories, and simple spiritual wisdom to help you heal, grow, and reconnect with your true self.",
    image: blog1,
  },
  {
    title: "Emotional, Modern & Relatable",
    description:
      "Life can feel overwhelming — but small moments of guidance can open big doors. Explore Swami’s reflections on healing and intuition.",
    image: blog2,
  },
];

export default function BlogsSection() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((prev) => (prev === blogs.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? blogs.length - 1 : prev - 1));
  };


  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-[120px] flex flex-col lg:flex-row gap-10 lg:gap-[50px] animate-fade-in">

      {/* LEFT HERO IMAGE */}
      <div className="relative w-full lg:w-[646px] h-[420px] sm:h-[520px] lg:h-[720px] rounded-[20px] lg:rounded-[32px] overflow-hidden shadow-lg group animate-slide-up">

        <img
          src={heroImg}
          className="absolute w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          alt="Story"
        />

        {/* gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-colors duration-500" />

        {/* TEXT */}
        <div className="absolute bottom-10 left-6 sm:left-8 lg:left-10 text-white z-10 transform transition-transform duration-500 group-hover:-translate-y-2">

          <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[56px] leading-tight lg:leading-[65px] max-w-[420px] lg:max-w-[498px] group-hover:text-orange-100 transition-colors">

            Heal Your Spirit
            <br />
            Through the Power
            <br />
            of Story

          </h2>

          <button className="mt-6 lg:mt-8 w-[220px] sm:w-[260px] lg:w-[341px] h-[44px] md:h-[48px] lg:h-[51px] bg-white text-black rounded-full border border-[#FF8237] hover:bg-[#FF5900] hover:text-white hover:scale-105 hover:border-transparent transition-all duration-300 active:scale-95 shadow-sm">
            Connect
          </button>

        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col flex-1 animate-slide-up" style={{ animationDelay: '200ms', animationFillMode: 'both' }}>

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">

          <div className="text-center lg:text-left group">

            <h2 className="font-serif font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[56px] leading-tight lg:leading-[65px] text-[#2E3D4C]">

              Our Latest
              <br />
              <span className="italic text-[#FF5900] group-hover:text-[#EA580C] transition-colors duration-300">Blogs</span>

            </h2>

            <p className="mt-4 max-w-[571px] text-sm sm:text-base md:text-lg lg:text-[22px] leading-relaxed lg:leading-[29px] text-[#36415399] mx-auto lg:mx-0 opacity-90 hover:opacity-100 transition-opacity">

              Your journey doesn't end here — it evolves. Discover more insights
              to awaken compassion, stillness, and purpose within.

            </p>

          </div>

          {/* RIGHT CONTROLS */}
          <div className="flex flex-col items-start lg:items-end gap-3 mt-4 lg:mt-0">
            {/* SLIDER ARROWS */}
            <div className="flex gap-3 sm:gap-4">

              <button
                onClick={prevSlide}
                className="w-12 h-12 sm:w-[54px] sm:h-[54px] rounded-full border border-[#FF5900] flex items-center justify-center hover:bg-[#FF5900] hover:text-white hover:scale-110 hover:shadow-button transition-all duration-300 active:scale-95"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={nextSlide}
                className="w-12 h-12 sm:w-[54px] sm:h-[54px] rounded-full bg-[#FF5900] text-white flex items-center justify-center hover:bg-[#EA580C] hover:scale-110 hover:shadow-button transition-all duration-300 active:scale-95"
              >
                <ChevronRight />
              </button>

            </div>

            <Link to="/blog" className="text-sm sm:text-base font-medium text-[#FF5900] hover:text-[#EA580C] transition-colors flex items-center gap-1 group/link p-1">
              Explore more blogs <span className="transition-transform duration-300 group-hover/link:translate-x-1">→</span>
            </Link>
          </div>

        </div>

        {/* BLOG CARDS */}
        <div className="overflow-hidden mt-10 lg:mt-[60px]">

          <div
            className="flex gap-6 lg:gap-[32px] transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * 100}%)`,
            }}
          >

            {blogs.map((blog, i) => (

              <div
                key={i}
                className="w-full sm:w-[340px] md:w-[360px] lg:w-[362px] flex-shrink-0 h-[380px] sm:h-[400px] lg:h-[405px] bg-white rounded-[20px] lg:rounded-[23px] p-4 shadow-sm hover:shadow-card-hover hover:-translate-y-2 hover:scale-[1.02] transition-all duration-300 cursor-pointer group/card"
              >

                <div className="overflow-hidden rounded-[16px] lg:rounded-[23px] h-[180px] sm:h-[200px] lg:h-[206px]">
                  <img
                    src={blog.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                    alt="Blog"
                  />
                </div>

                <div className="mt-5 relative z-10">

                  <h3 className="text-[#474F62] text-sm sm:text-base font-bold opacity-80 group-hover/card:text-[#FF5900] group-hover/card:opacity-100 transition-colors duration-300">
                    {blog.title}
                  </h3>

                  <p className="text-xs sm:text-sm leading-relaxed text-[#2C3844B2] mt-2 group-hover/card:text-gray-700 transition-colors">
                    {blog.description}
                  </p>

                  <button className="mt-3 sm:mt-4 text-sm sm:text-base underline text-gray-500 hover:text-[#FF5900] group-hover/card:text-[#FF5900] transition-colors flex items-center gap-1">
                    Read Blog <span className="transition-transform duration-300 group-hover/card:translate-x-1">→</span>
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}
