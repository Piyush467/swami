import { ArrowRight, Calendar } from "lucide-react";

export default function BlogCard({
  title,
  excerpt,
  image,
  category,
  date,
  readTime = "5 min read",
  onReadMore,
}) {
  return (
    <div className="card group overflow-hidden">
      {/* Image */}
      <div className="relative h-48 overflow-hidden rounded-t-4xl">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Category Badge */}
        {category && (
          <div className="absolute bottom-4 left-4">
            <span className="bg-white/90 text-text-primary text-xs font-medium px-3 py-1.5 rounded-full">
              {category}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Meta */}
        <div className="flex items-center gap-4 text-text-muted text-xs mb-3">
          {date && (
            <span className="flex items-center gap-1">
              <Calendar size={12} />
              {date}
            </span>
          )}
          <span>{readTime}</span>
        </div>

        <h3 className="text-lg font-serif font-semibold text-text-primary mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        <p className="text-text-muted text-body-sm mb-4 line-clamp-2">
          {excerpt}
        </p>

        <button
          onClick={onReadMore}
          className="text-primary text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
        >
          Read Blog
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}