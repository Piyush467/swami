import {
  ArrowRight,
  Video,
  Users,
  Calendar,
} from "lucide-react";

import img4 from "../../assets/images/img-04.jpg";
import img5 from "../../assets/images/img-05.jpg";

export default function CourseSection() {
  return (
    <section className="py-16 md:py-24 bg-white px-4 sm:px-6">

      <div className="max-w-[1368px] mx-auto">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-12 md:mb-16">

          <div className="text-center lg:text-left">

            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[60px] lg:leading-[65px] font-bold">

              Courses &{" "}
              <span className="italic text-[#FF6916]">Events</span>

            </h2>

            <p className="max-w-[673px] mt-4 text-base md:text-lg lg:text-[24px] leading-[24px] md:leading-[29px] text-[#36415399] mx-auto lg:mx-0">

              <span className="font-bold">
                Explore Swami's transformative offerings
              </span>{" "}
              —from healing courses to storytelling events. Choose what
              resonates with your journey.

            </p>

          </div>

          {/* Button */}
          <button className="h-[48px] md:h-[62px] px-6 rounded-[34px] bg-[#FF6916] text-white border border-white/70 backdrop-blur-[50px] shadow-[0_0_12px_#2CB59C1F] flex items-center justify-center gap-2 w-full sm:w-auto">

            Book a Session
            <ArrowRight size={18} />

          </button>

        </div>

        {/* Course Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 md:mb-24">

          {/* Card 1 */}
          <div className="rounded-[35px] border-[5px] border-white bg-gradient-to-br from-yellow-100/40 to-white p-6 md:p-8">

            <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-full border border-[#FF6916] flex items-center justify-center mb-6 shadow-inner">
              <Video className="text-[#FF6916]" />
            </div>

            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Storytelling for Healing
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              Learn the art of therapeutic storytelling. Transform your
              experiences into powerful healing narratives.
            </p>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF59001A] text-sm text-[#FF6916] mb-6">
              Gain CEU & Certification
            </div>

            <button className="w-full bg-[#FF5900] text-white rounded-full py-2">
              Join Now
            </button>

          </div>

          {/* Card 2 */}
          <div className="rounded-[35px] border-[5px] border-white bg-gradient-to-br from-green-100/30 to-white p-6 md:p-8">

            <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-full border border-[#FF6916] flex items-center justify-center mb-6 shadow-inner">
              <Users className="text-[#FF6916]" />
            </div>

            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Open Mic Leadership
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              Master the skills to host transformative open mic events.
              Create safe spaces for authentic expression.
            </p>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF59001A] text-sm text-[#FF6916] mb-6">
              Gain CEU & Certification
            </div>

            <button className="w-full border border-[#FF5900] text-[#FF5900] rounded-full py-2">
              Join Now
            </button>

          </div>

          {/* Card 3 */}
          <div className="rounded-[35px] border-[5px] border-white bg-gradient-to-br from-pink-100/40 to-white p-6 md:p-8">

            <div className="w-[56px] h-[56px] md:w-[64px] md:h-[64px] rounded-full border border-[#FF6916] flex items-center justify-center mb-6 shadow-inner">
              <Calendar className="text-[#FF6916]" />
            </div>

            <h3 className="text-lg md:text-xl font-semibold mb-3">
              Live Wisdom Sessions
            </h3>

            <p className="text-sm text-gray-600 mb-6">
              Join our monthly live webinars. Direct access to Swami's teachings
              and community Q&A.
            </p>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#FF59001A] text-sm text-[#FF6916] mb-6">
              Gain CEU & Certification
            </div>

            <button className="w-full bg-[#FF5900] text-white rounded-full py-2">
              Join Now
            </button>

          </div>

        </div>

        {/* Collaboration Section */}
        <div className="bg-[#FFF3E6] rounded-[24px] p-6 md:p-10">

          <div className="text-center mb-8 md:mb-10">

            <span className="px-6 py-2 border border-[#FF6916] rounded-full text-[#FF6916]">
              Collaboration
            </span>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">

            {/* Card 1 */}
            <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-[24px] border-2 border-white bg-white">

              <img
                src={img4}
                className="w-full sm:w-[167px] h-[200px] sm:h-[218px] object-cover rounded-[18px]"
              />

              <div>

                <h4 className="text-lg md:text-xl font-semibold mb-2">
                  Integrative Ayurveda
                </h4>

                <p className="text-base md:text-lg mb-2">
                  Integrative Ayurveda Certification
                </p>

                <p className="text-sm text-gray-500 mb-4">
                  Blending classical Ayurveda with modern integrative medicine
                  for comprehensive healing.
                </p>

                <button className="bg-[#FF6916] text-white px-6 py-2 rounded-full">
                  View Program
                </button>

              </div>

            </div>

            {/* Card 2 */}
            <div className="flex flex-col sm:flex-row gap-6 p-6 rounded-[24px] border-2 border-white bg-white">

              <img
                src={img5}
                className="w-full sm:w-[167px] h-[200px] sm:h-[218px] object-cover rounded-[18px]"
              />

              <div>

                <h4 className="text-lg md:text-xl font-semibold mb-2">
                  Academic Pathways
                </h4>

                <p className="text-base md:text-lg mb-2">
                  Academic Pathways & CEU Credits
                </p>

                <p className="text-sm text-gray-500 mb-4">
                  Apply course credits toward CEU, MA & PhD programs. Build your
                  academic credentials.
                </p>

                <button className="bg-[#FF6916] text-white px-6 py-2 rounded-full">
                  Buy on Amazon
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
