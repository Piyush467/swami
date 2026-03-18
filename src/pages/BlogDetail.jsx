import React from "react";
import { useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) return <div>Blog not found</div>;

  return (
    <section className="bg-[#FFFCDD] py-16 md:py-24">

      <div className="max-w-[1200px] mx-auto px-4">

        {/* ===== HERO ROW ===== */}

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT — Title Block */}

          <div className="space-y-6">

            {/* Title with alternating color */}
            <h1
              className="text-[34px] md:text-[52px] leading-tight font-bold text-black"
              style={{ fontFamily: "Playfair Display" }}
            >
              {blog.title.map((word, i) => (
                <span
                  key={i}
                  className={blog.highlight.includes(i) ? "text-[#FF6916]" : ""}
                >
                  {word}{" "}
                </span>
              ))}
            </h1>

            {/* Description */}
            <p className="text-[18px] md:text-[20px] text-black/60 max-w-[520px]">
              {blog.excerpt}
            </p>

            {/* Meta */}
            <div className="flex gap-6 text-black/60 font-semibold">
              <span>{blog.date}</span>
              <span>{blog.author}</span>
            </div>

          </div>

          {/* RIGHT — Image */}

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src={blog.image}
              alt={blog.title.join(" ")}
              className="w-full h-full object-cover"
            />
          </div>

        </div>

        {/* ===== ARTICLE CONTENT ===== */}

        <div className="max-w-[780px] mx-auto mt-16 space-y-12">

          {/* Paragraph 1 */}
          <p className="text-[18px] leading-relaxed text-[#232E52]">
            {blog.content.p1}
          </p>

          {/* Highlight Quote Box */}
          <div className="bg-[#FFF9DB] rounded-lg shadow-inner border-l-4 border-[#1D54C0] p-8">
            <p className="text-[20px] md:text-[22px] font-medium text-[#FF6916] leading-relaxed">
              {blog.content.quote}
            </p>
          </div>

          {/* Paragraph 2 */}
          <p className="text-[18px] leading-relaxed text-[#232E52]">
            {blog.content.p2}
          </p>

        </div>

      </div>
    </section>
  );
}