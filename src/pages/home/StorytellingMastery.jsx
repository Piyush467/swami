import { Clock, Award } from "lucide-react";
import yog from "../../assets/images/yog.png";

export default function StorytellingMastery() {
  return (
    <section className="w-full bg-white py-16 md:py-[73px] px-4 sm:px-6">

      <div className="max-w-[1229px] mx-auto flex justify-center">

        {/* Inner Card */}
        <div className="w-full bg-[#FFFBF0] rounded-[32px] border-2 border-[#FF5900] shadow-[0px_10px_30px_-10px_#00000014] px-6 sm:px-10 lg:px-[72px] py-10 lg:py-[64px] grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT CONTENT */}
          <div className="max-w-[626px] text-center lg:text-left mx-auto lg:mx-0">

            {/* What's coming next */}
            <div className="pb-4 md:pb-[24px]">
              <span className="text-[11px] md:text-[12px] font-bold uppercase tracking-[1.2px] text-[#F26522]">
                What's Coming Next
              </span>
            </div>

            {/* Heading */}
            <div className="pb-4 md:pb-[24px]">
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[60px] lg:leading-[65px] text-gray-900">

                The Power of{" "}
                <span className="font-extrabold italic text-[#F26522]">
                  Storytelling Mastery
                </span>

              </h2>
            </div>

            {/* Description */}
            <div className="max-w-[512px] mx-auto lg:mx-0 pb-8 md:pb-[40px]">
              <p className="text-[16px] md:text-[18px] leading-[24px] md:leading-[26px] text-gray-600">

                Transform your life stories into a source of healing and
                professional impact. Join Swami for an intensive 6-week journey
                into the heart of narrative medicine.

              </p>
            </div>

            {/* Info Row */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-6 pb-8 md:pb-[40px]">

              {/* Duration */}
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-[#F26522]" />
                <div>
                  <p className="text-sm text-gray-500">Duration</p>
                  <p className="text-sm font-medium">6 Weeks Online</p>
                </div>
              </div>

              {/* Certification */}
              <div className="flex items-center gap-3">
                <Award size={18} className="text-[#F26522]" />
                <div>
                  <p className="text-sm text-gray-500">Certification</p>
                  <p className="text-sm font-medium">CPD Accredited</p>
                </div>
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">

              <button className="h-[48px] md:h-[56px] px-8 md:px-[40px] bg-[#F26522] text-white rounded-full flex items-center justify-center font-medium w-full sm:w-auto">
                Enroll Now →
              </button>

              <button className="h-[48px] md:h-[56px] px-8 md:px-[32px] border-2 border-[#FFEDD5] rounded-full flex items-center justify-center text-gray-700 font-medium w-full sm:w-auto">
                Services
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex items-center justify-center mt-8 lg:mt-0">

            <img
              src={yog}
              alt="Storytelling session"
              className="rounded-[24px] object-cover w-full max-w-[520px] h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]"
            />

          </div>

        </div>

      </div>

    </section>
  );
}
