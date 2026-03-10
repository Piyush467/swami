import { Link } from "react-router-dom";
import swamiImage from "../../assets/swami.png";

export default function HeroSection() {
  return (
    <section className="relative bg-[#F6EED8] pt-24 md:pt-28 lg:pt-32 pb-16 md:pb-20 overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 lg:gap-12">

        {/* LEFT CONTENT */}
        <div className="text-center lg:text-left">

          {/* Badge */}
          <div className="inline-flex items-center px-[14px] py-[6px] md:px-[16.8px] md:py-[8.8px] rounded-full border border-[#FF5900] bg-[#FFFFFFCC] mb-6">
            <span className="text-sm md:text-[16px] text-[#FF5900]">
              ✨ Storytelling That Awakens the Soul
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[60px] lg:leading-[65px] font-semibold text-gray-800 max-w-[684px] mx-auto lg:mx-0 mb-6">

            Meet Swami —
            <span className="text-[#FF5900] block lg:inline">
              Author, Healer, Storyteller
            </span>

          </h1>

          {/* Description */}
          <p className="text-sm md:text-[16px] leading-[22px] md:leading-[25px] text-gray-600 max-w-[588px] mx-auto lg:mx-0 mb-8">

            For over 50 years, Swamiji has guided people to experience joy,
            healing, and spiritual reconnection through storytelling.

          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4">

            <Link
              to="/contact"
              className="h-[44px] md:h-[51px] px-6 flex items-center justify-center rounded-[24px] text-white bg-[#FF6916] w-full sm:w-auto"
            >
              Connect
            </Link>

            <Link
              to="/academy"
              className="h-[44px] md:h-[51px] px-6 md:px-8 flex items-center justify-center rounded-full bg-white border border-[#FF8237] w-full sm:w-auto"
            >
              Explore Courses
            </Link>

          </div>

        </div>

        {/* IMAGE */}
        {/* IMAGE */}
<div className="relative flex justify-center mt-6 md:mt-8 lg:mt-0">

 <img
  src={swamiImage}
  alt="Swami"
  className="w-[320px] sm:w-[380px] md:w-[460px] lg:w-full max-w-[620px] h-auto object-contain scale-x-[-1]"
/>

</div>

      </div>

    </section>
  );
}
