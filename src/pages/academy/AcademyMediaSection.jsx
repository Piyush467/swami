import React from "react";
import { Play } from "lucide-react";

import featureImg from "../../assets/images/img-10.jpg";
import img1 from "../../assets/images/ac-11.png";
import img2 from "../../assets/images/ac-12.png";
import img3 from "../../assets/images/ac-13.png";

export default function AcademyMediaSection() {
    return (
        <section
            className="w-full py-20"
            style={{
                background:
                    "linear-gradient(135deg, rgba(255,115,0,0.05) 0%, #FFF9F0 50%, rgba(255,244,224,0.3) 100%)",
            }}
        >
            <div className="max-w-[1216px] mx-auto px-4 space-y-20">

                {/* ================= TOP TWO PANELS ================= */}

                <div className="flex flex-col lg:flex-row gap-8">

                    {/* LEFT — Browse Playlist */}

                    <div className="bg-white rounded-[24px] w-full lg:w-[416px] p-6 shadow-sm">

                        <h2
                            className="text-[40px] leading-[64px] font-bold"
                            style={{ fontFamily: "Playfair Display" }}
                        >
                            Browse <span className="italic">Playlist</span>
                        </h2>

                        <div className="w-[115px] border-t border-[#FFB06B] my-3" />

                        {/* Active Item */}
                        <div className="h-[50px] rounded-[8px] flex items-center px-4 text-white font-semibold"
                            style={{
                                background:
                                    "linear-gradient(90deg, #FF7300 0%, #FFFFFF 100%)",
                            }}
                        >
                            TV Shows
                        </div>

                        {/* Other Items */}
                        <ul className="mt-4 space-y-3 text-[#7E6F67] font-medium">
                            <li>Podcasts</li>
                            <li>Inner Peace</li>
                            <li>Prophetic Dreams & Visions</li>
                            <li>Mission Ignite</li>
                            <li>Orange Cowboy Light Academy</li>
                            <li>Swami Interview</li>
                        </ul>
                    </div>

                    {/* RIGHT — Featured Video */}

                    <div className="relative bg-white rounded-[24px] overflow-hidden flex-1 min-h-[420px]">

                        <img
                            src={featureImg}
                            alt="Meditation"
                            className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Overlay */}
                        <div className="absolute inset-0 bg-black/20" />

                        {/* Title */}
                        <div className="absolute top-6 left-6 text-black max-w-md">
                            <h3 className="font-bold text-[24px]">
                                Instant Meditation for Anxiety & Calm
                            </h3>
                            <p className="text-sm text-black/60">
                                A simple 1-minute practice to reset your mind and body
                            </p>
                        </div>

                        {/* Center Play */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-[80px] h-[80px] rounded-full bg-white/90 flex items-center justify-center shadow">
                                <Play size={32} className="text-red-600" fill="red" />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-center">

                            {/* Watch Now */}
                            <a
                                href="https://www.youtube.com"
                                target="_blank"
                                className="flex items-center gap-2 px-6 h-[52px] rounded-full bg-[#FF6916] text-white shadow-[0_0_40px_#FF730033] font-semibold"
                            >
                                <Play size={14} fill="white" />
                                Watch Now
                            </a>

                            {/* YouTube Channel */}
                            <a
                                href="https://www.youtube.com"
                                target="_blank"
                                className="flex items-center gap-2 px-6 h-[52px] rounded-full bg-white/30 backdrop-blur border border-white/40 text-black font-medium"
                            >
                                ▶ YouTube Channel
                            </a>

                        </div>
                    </div>
                </div>

                {/* ================= MEDIA APPEARANCES ================= */}

                <div className="space-y-8">

                    {/* Heading Row */}

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

                        <h2 className="text-[30px] font-bold text-[#1F2A2E]">
                            Swami Interviews &{" "}
                            <span className="text-[#FF6916]">
                                Media Appearances
                            </span>
                        </h2>

                        <a
                            href="https://www.youtube.com"
                            target="_blank"
                            className="text-[#F08B2D] font-semibold flex items-center gap-2"
                        >
                            Explore more Videos →
                        </a>
                    </div>

                    {/* Cards */}

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

                        {[
                            {
                                img: img1,
                                title: "Discover the Secrets of ChakraVeda Healing",
                                sub: "1-min method for anxiety relief.",
                            },
                            {
                                img: img2,
                                title: "Herb & Supplement Education",
                                sub: "How to sit comfortably for 20 mins.",
                            },
                            {
                                img: img3,
                                title: "Ignite Your Life – with Radiance",
                                sub: "How to sit comfortably for 20 mins.",
                            },
                        ].map((card, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-[16px] shadow-sm p-3 hover:shadow-lg transition"
                            >
                                {/* Image */}
                                <div className="relative rounded-[12px] overflow-hidden h-[192px]">

                                    <img
                                        src={card.img}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />

                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="bg-white rounded-full p-3">
                                            ▶
                                        </div>
                                    </div>
                                </div>

                                {/* Text */}
                                <div className="p-2 space-y-2">
                                    <h3 className="font-bold text-[#1F2A2E]">
                                        {card.title}
                                    </h3>
                                    <p className="text-sm text-[#6B6B6B]">
                                        {card.sub}
                                    </p>
                                </div>

                                {/* Watch Button */}
                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    className="block text-center mt-4 h-[63px] leading-[63px] rounded-full border border-[#FFD9B3] font-semibold hover:bg-orange-50 transition"
                                >
                                    ▶ Watch On Youtube
                                </a>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
}