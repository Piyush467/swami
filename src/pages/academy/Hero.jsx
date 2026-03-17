import React from "react";
import heroImg from "../../assets/images/hero.jpg";
import { Play, Calendar, Clock, Award } from "lucide-react";

const courses = [
  {
    tag: "LIVE • LIMITED SEATS",
    tagColor: "#E7000B",
    gradient: "from-[#FB2C36] to-[#E7000B]",
    title: "21 Days of Joy",
    desc: "A guided journey into emotional freedom and daily practices",
    price: "$399",
    btnColor: "bg-[#FF6B35]",
  },
  {
    tag: "LIVE CERTIFICATION",
    tagColor: "#FF6B35",
    gradient: "from-[#FF6B35] to-[#FF8555]",
    title: "Medical Intuition Level 1",
    desc: "Develop intuitive awareness and diagnostic clarity.",
    price: "$170",
    btnColor: "bg-[#FF6B35]",
  },
  {
    tag: "LIVE • ADVANCED",
    tagColor: "#2D1810",
    gradient: "from-[#2D1810] to-[#3D2820]",
    title: "Energy Mastery Program",
    desc: "Deep dive into energy healing techniques.",
    price: "$150",
    btnColor: "bg-[#2D1810]",
  },
];

export default function Hero() {
  return (
    <div className="w-full overflow-x-hidden">

      {/* ================= HERO ================= */}

      <section className="relative w-full h-[75vh] min-h-[520px] overflow-hidden rounded-b-[50px] ">
        
        {/* Background Image */}
        <img
          src={heroImg}
          alt="Academy"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20" />

        {/* Text */}
        <div className="absolute left-6 md:left-16 bottom-20 text-white max-w-xl">
          
          <h1
            className="text-[32px] md:text-[40px] leading-tight font-bold tracking-[-0.03em]"
            style={{ fontFamily: "Playfair Display" }}
          >
            Orange Cowboy Light{" "}
            <span className="italic text-[#FF6916]">Academy</span>
          </h1>

          <p className="mt-2 text-sm md:text-base opacity-90">
            Teachings • Meditations • Stories • Travel • Conversations
          </p>
        </div>

        {/* Watch Button */}
        <button
          onClick={() => alert("Play featured video")}
          className="absolute right-6 md:right-16 bottom-16 flex items-center gap-3 px-6 md:px-8 h-[56px] md:h-[64px] rounded-[16px] bg-[#FF6916] shadow-[0_0_40px_#FF730033] text-white font-semibold text-base md:text-lg transition hover:scale-105 active:scale-95"
        >
          <Play size={16} fill="white" />
          Watch Featured
        </button>
      </section>

      {/* ================= COURSES ================= */}

      <section className="bg-[#FFF8F0] py-16 px-4 md:px-12">
        
        <div className="max-w-[1280px] mx-auto">

          {/* Heading */}
          <div className="text-center mb-12">
            
            <h2
              className="text-3xl md:text-[40px] font-bold tracking-[-0.03em]"
              style={{ fontFamily: "Playfair Display" }}
            >
              Live Upcoming{" "}
              <span className="italic text-[#FF6916]">Courses</span>
            </h2>

            <p className="text-[#6B5447] mt-2">
              Join Swami in real-time for transformational training experiences.
            </p>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

            {courses.map((course, i) => (
              <div
                key={i}
                className="bg-white rounded-[28px] overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                {/* Gradient Header */}
                <div className={`bg-gradient-to-r ${course.gradient} p-4`}>
                  
                  {/* White Tag */}
                  <div
                    className="inline-block bg-white px-2 py-[2px] rounded-[8px] text-[12px] font-medium"
                    style={{ color: course.tagColor }}
                  >
                    {course.tag}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col gap-4">

                  <h3
                    className="text-[22px] md:text-[24px] text-[#2D1810]"
                    style={{ fontFamily: "Playfair Display" }}
                  >
                    {course.title}
                  </h3>

                  <p className="text-sm text-[#6B5447]">
                    {course.desc}
                  </p>

                  {/* Points */}
                  <div className="space-y-2 text-sm text-[#6B5447]">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} /> Starts: March 12
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} /> Duration: 3 Weeks
                    </div>
                    <div className="flex items-center gap-2">
                      <Award size={16} /> Certification Included
                    </div>
                  </div>

                  {/* Price */}
                  <div className="border-t pt-4">
                    <span
                      className="text-2xl md:text-[30px]"
                      style={{ fontFamily: "Playfair Display" }}
                    >
                      {course.price}
                    </span>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => alert(`Enroll in ${course.title}`)}
                    className={`${course.btnColor} text-white h-[40px] rounded-full text-sm font-medium transition hover:brightness-110 hover:scale-[1.02] active:scale-95`}
                  >
                    Enroll Live
                  </button>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}