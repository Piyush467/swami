import React from "react";
import swamiImage from "../../assets/swami.png";

const Author = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="section-container px-4">
        <div className="bg-white rounded-3xl lg:rounded-4xl p-6 md:p-8 lg:p-12 shadow-sm">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left Content */}
            <div className="text-center lg:text-left">
              <span className="inline-block bg-cream text-text-primary text-xs md:text-sm font-medium px-4 py-2 rounded-full mb-4">
                Invite Swami to Speak
              </span>

              <h2 className="text-2xl md:text-3xl lg:text-heading-3 font-serif font-bold text-text-primary mb-4">
                Schools, Charities & Wellness Associations
              </h2>

              <p className="text-sm md:text-base lg:text-body text-text-muted mb-6 max-w-xl mx-auto lg:mx-0">
                Bring the wisdom of Radiant Light Academy to your organization.
                Inspiring talks on mindfulness, spiritual resilience, and
                discovering one's higher purpose.
              </p>

              <div className="flex justify-center lg:justify-start">
                <button className="bg-[#FF6916] text-white px-6 py-2.5 rounded-full text-sm md:text-base hover:opacity-90 transition">
                  Request Speaking
                </button>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <img
                src={swamiImage}
                alt="Swami"
                className="w-[240px] sm:w-[280px] md:w-[320px] lg:w-[400px] h-auto object-contain scale-x-[-1] lg:-translate-y-4"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
