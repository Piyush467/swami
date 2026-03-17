import React from "react";
import bgImg from "../../assets/images/img-12.jpg";
import { BookOpen, Clock, PlayCircle } from "lucide-react";

export default function ProductSection() {
    const courses = [
        {
            title: "Chakraveda – The Secrets of Chakra Healing",
            desc: "A complete chakra system training for energy balance and intuitive development.",
            price: "$299",
        },
        {
            title: "Ayurveda Foundations",
            desc: "Explore core Ayurvedic principles for holistic wellness.",
            price: "$175",
        },
        {
            title: "Energy Healing Essentials",
            desc: "Master the fundamentals of energy work and healing.",
            price: "$399",
        },
        {
            title: "Meditation Mastery",
            desc: "Deep meditation techniques for spiritual growth.",
            price: "$99",
        },
    ];

    return (
        <section className="w-full">

            {/* ================= CHAKRAVEDA HERO ================= */}

            <div className="max-w-[1440px] mx-auto px-4">

                <div className="relative h-[600px] md:h-[675px] rounded-[25px] overflow-hidden">

                    <img
                        src={bgImg}
                        alt="Chakraveda"
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/40" />

                    {/* Center Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">

                        {/* Badge */}
                        <div className="px-5 py-2 rounded-full bg-white/20 border border-white/30 backdrop-blur text-white text-xs font-bold uppercase tracking-wider">
                            Signature Evergreen Program
                        </div>

                        {/* Title */}
                        <h2
                            className="mt-6 text-white text-5xl md:text-[75px] leading-tight"
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            Chakraveda
                        </h2>

                        {/* Description */}
                        <p className="mt-4 max-w-3xl text-white/90 text-lg md:text-[22px] leading-relaxed">
                            A Journey Through Energy & Consciousness. Master the 7 energy
                            centers to unlock your full potential and spiritual awakening.
                        </p>

                        {/* Buttons */}
                        <div className="mt-8 flex flex-wrap justify-center gap-4">

                            <button className="px-8 h-[60px] rounded-full bg-[#FF6916] text-white font-medium shadow-[0_0_42px_#E87C4C26] transition hover:scale-105 active:scale-95">
                                Explore Chakraveda
                            </button>

                            <button className="px-8 h-[60px] rounded-full border border-white/40 text-white backdrop-blur transition hover:bg-white/20">
                                Join Swami
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="mt-12 grid grid-cols-4 gap-6 text-white text-center">

                            {[
                                { n: "7", t: "Modules" },
                                { n: "40+", t: "Video Lessons" },
                                { n: "20h", t: "Content" },
                                { n: "∞", t: "Access" },
                            ].map((s, i) => (
                                <div key={i}>
                                    <div
                                        className="text-2xl md:text-[32px]"
                                        style={{ fontFamily: "Playfair Display" }}
                                    >
                                        {s.n}
                                    </div>
                                    <div className="text-xs uppercase tracking-wider text-white/80">
                                        {s.t}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* ================= COURSES ================= */}

            <div className="bg-white py-20">

                <div className="max-w-[1280px] mx-auto px-4">

                    {/* Heading */}
                    <div className="text-center mb-12">

                        <h2
                            className="text-3xl md:text-[48px] text-[#2D1810]"
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            Instant Access Courses
                        </h2>

                        <p className="text-[#6B5447] mt-2">
                            Start learning immediately. Watch anytime.
                        </p>
                    </div>

                    {/* Cards */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

                        {courses.map((c, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-[28px] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Top Gradient */}
                                <div className="h-[56px] bg-gradient-to-b from-[#FF6B35] to-[#FEB566]" />

                                <div className="p-5 flex flex-col gap-4">

                                    <h3
                                        className="text-[#2D1810] text-[18px]"
                                        style={{ fontFamily: "Playfair Display" }}
                                    >
                                        {c.title}
                                    </h3>

                                    <p className="text-sm text-[#6B5447]">
                                        {c.desc}
                                    </p>

                                    {/* Points */}
                                    <div className="space-y-1 text-sm text-[#6B5447]">
                                        <div className="flex items-center gap-2">
                                            <BookOpen size={14} /> 12 Modules
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Clock size={14} /> Lifetime Access
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <PlayCircle size={14} /> Guided Sessions
                                        </div>
                                    </div>

                                    {/* Price */}
                                    <div
                                        className="text-[30px] text-[#2D1810]"
                                        style={{ fontFamily: "Playfair Display" }}
                                    >
                                        {c.price}
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex flex-col gap-2">

                                        <button className="h-[36px] rounded-full bg-[#FF6B35] text-white text-sm font-medium transition hover:brightness-110 active:scale-95">
                                            Start Learning
                                        </button>

                                        <button className="h-[36px] rounded-full border border-gray-200 text-[#2D1810] text-sm font-medium transition hover:bg-gray-100">
                                            Preview Course
                                        </button>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </section>
    );
}