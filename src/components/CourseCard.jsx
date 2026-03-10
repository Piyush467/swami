import { ArrowRight, Clock, Award } from "lucide-react";

export default function CourseCard({
  title,
  description,
  image,
  duration = "6 Weeks",
  certification = "CPD Accredited",
  enrolled = 500,
  buttonText = "Join Now",
  price,
  onEnrollClick,
}) {
  return (
    <div className="bg-white rounded-4xl border border-border-light overflow-hidden transition-all duration-300 hover:shadow-card-hover group">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

        {/* Certification badge */}
        <div className="absolute top-4 left-4 flex items-center gap-2 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full">
          <Award size={14} className="text-primary" />
          <span className="text-xs font-medium text-text-primary">
            CEU & Certification
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-heading-4 font-serif font-semibold text-text-primary mb-2">
          {title}
        </h3>

        <p className="text-text-muted text-body-sm mb-4 line-clamp-2">
          {description}
        </p>

        {/* Meta info */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2 text-text-muted text-sm">
            <Clock size={16} className="text-primary" />
            {duration}
          </div>

          <span className="text-xs text-text-muted bg-cream px-2 py-1 rounded-full">
            {certification}
          </span>
        </div>

        {/* Enrolled count */}
        <div className="flex items-center gap-2 mb-4">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-cream border-2 border-white flex items-center justify-center"
              >
                <span className="text-xs text-text-muted">{i}</span>
              </div>
            ))}
          </div>

          <span className="text-sm text-text-muted">{enrolled}+ Enrolled</span>
        </div>

        {/* Price and Button */}
        <div className="flex items-center justify-between">
          {price && (
            <span className="text-lg font-bold text-text-primary">{price}</span>
          )}

          <button
            onClick={onEnrollClick}
            className="btn-primary text-sm inline-flex items-center gap-2"
          >
            {buttonText}
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}