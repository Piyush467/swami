import a1 from "../../assets/images/a1.jpg";
import a2 from "../../assets/images/a2.jpg";
import a3 from "../../assets/images/a3.jpg";
import a4 from "../../assets/images/a4.jpg";
import a5 from "../../assets/images/a5.jpg";
import a6 from "../../assets/images/a6.jpg";
import a7 from "../../assets/images/a7.png";

const books = [
  { img: a1, title: "Enciclopedia del ayurveda", desc: "Natural secrets to healing, prevention & longevity" },
  { img: a2, title: "Ayurveda Primer", desc: "Ancient natural wellness aligned to modern life" },
  { img: a3, title: "21 Days of Joy", desc: "Develop neural pathways of joy in your life" },
  { img: a4, title: "Bhagavad Gita for Modern", desc: "Understanding timeless wisdom for modern times" },
  { img: a5, title: "The Stress-Free College Student", desc: "Tools to reduce anxiety and succeed academically" },
  { img: a6, title: "Ayurveda Encyclopedic", desc: "Comprehensive guide to healing & prevention" },
  { img: a7, title: "Bhagavad Gita for Modern times", desc: "Understanding divine universal life principles through modern terminology." },
];

export default function BooksGrid() {
  return (
    <section className="bg-[#FFFCDD] py-16 md:py-20">

      <div className="max-w-[1216px] mx-auto px-4 text-center">

        {/* ===== Decorative Divider ===== */}
        <div className="flex items-center justify-center mb-6 text-[#FE7B02]">
          <div className="h-px w-16 sm:w-24 bg-[#FE7B02]" />
          <span className="mx-3 sm:mx-4 text-lg sm:text-xl">✦ ✧ ✦</span>
          <div className="h-px w-16 sm:w-24 bg-[#FE7B02]" />
        </div>

        {/* ===== Heading ===== */}
        <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-[48px] leading-tight md:leading-[65px] text-[#2E3D4C]">
          More Books by Swami{" "}
          <span className="italic font-medium text-[#FF6916]">
            Books
          </span>
        </h2>

        {/* ===== Books Grid ===== */}
        <div className="mt-12 md:mt-16">

          <div className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-3
            gap-y-14 md:gap-y-16
            gap-x-8 md:gap-x-12
          ">

            {books.map((book, i) => (
              <div key={i} className="flex flex-col items-center text-center">

                {/* Book Cover */}
                <img
                  src={book.img}
                  alt={book.title}
                  className="
                    w-[200px] sm:w-[220px] md:w-[229px]
                    h-[260px] sm:h-[280px] md:h-[300px]
                    rounded-[16px] md:rounded-[18px]
                    border-4 border-white
                    object-cover
                    shadow-md
                    hover:shadow-xl
                    transition duration-300
                  "
                />

                {/* Title */}
                <h3 className="mt-5 md:mt-6 font-bold text-lg sm:text-xl md:text-[24px] leading-snug md:leading-[32px] text-[#1F2A2E] max-w-[290px]">
                  {book.title}
                </h3>

                {/* Description */}
                <p className="mt-2 text-xs sm:text-sm md:text-[14px] leading-5 md:leading-[20px] text-[#6B6B6B] max-w-[268px]">
                  {book.desc}
                </p>

                {/* Button */}
                <button className="
                  mt-4
                  bg-[#FF6916]
                  text-white
                  px-4 py-2
                  rounded-full
                  text-xs sm:text-sm font-semibold
                  shadow-md
                  hover:shadow-lg
                  hover:-translate-y-0.5
                  transition duration-300
                ">
                  Buy on Amazon
                </button>

                {/* ===== Row Divider ===== */}
                <div className="
                  w-full h-px bg-[#E6CBA7] mt-12
                  block
                  sm:hidden
                " />

                <div className="
                  w-full h-px bg-[#E6CBA7] mt-14
                  hidden sm:block lg:hidden
                  col-span-2
                " />

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}