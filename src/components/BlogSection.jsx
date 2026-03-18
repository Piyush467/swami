import React from "react";
import { useNavigate } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogSection() {
  const navigate = useNavigate();

  return (
    <section className="w-full py-20 md:py-24 bg-[#FFFCDD]">
      <div className="max-w-[1080px] mx-auto px-4">

        {/* ===== Heading ===== */}

        <div className="text-center mb-14 md:mb-16">

          <h2
            className="text-[34px] sm:text-[42px] md:text-[56px] leading-[1.1] font-medium text-[#2D1810]"
            style={{ fontFamily: "Playfair Display" }}
          >
            Wisdom Worth{" "}
            <span className="italic font-bold text-[#FF6916]">
              Living
            </span>
          </h2>

          <p className="mt-4 text-[#364153] text-sm md:text-base max-w-[582px] mx-auto">
            Reflections on story, presence, inner leadership, and the courage to live fully.
          </p>
        </div>

        {/* ===== Blog Grid ===== */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {blogs.map((blog) => (
            <article
              key={blog.id}
              onClick={() => navigate(`/blog/${blog.id}`)}
              className="cursor-pointer group transition duration-300 hover:-translate-y-1"
            >

              {/* Image */}

              <div className="overflow-hidden rounded-[10px] h-[220px] sm:h-[240px] md:h-[250px] shadow-sm">
                <img
                  src={blog.image}
                  alt={
                    Array.isArray(blog.title)
                      ? blog.title.join(" ")
                      : blog.title
                  }
                  className="w-full h-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}

              <div className="mt-4 flex flex-col justify-between min-h-[136px]">

                {/* Title */}

                <h3
                  className="text-[22px] md:text-[24px] font-bold leading-tight text-black group-hover:text-[#FF6916] transition line-clamp-3"
                  style={{ fontFamily: "Playfair Display" }}
                >
                  {Array.isArray(blog.title)
                    ? blog.title.join(" ")
                    : blog.title}
                </h3>

                {/* Meta */}

                <div className="mt-3 space-y-1">

                  <div className="text-[15px] md:text-[16px] font-bold text-black/60">
                    {blog.date}
                  </div>

                  <div className="flex gap-2 text-[15px] md:text-[16px] text-black/55">
                    <span>{blog.author}</span>
                    <span>•</span>
                    <span>{blog.category}</span>
                  </div>

                </div>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}