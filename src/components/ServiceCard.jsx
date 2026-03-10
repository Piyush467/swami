import { ArrowRight } from "lucide-react";

export default function ServiceCard({
  title,
  description,
  image,
  buttonText,
  buttonVariant = "primary",
  badge,
  onButtonClick,
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

        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4">
            <span className="bg-white/90 text-text-primary text-xs font-medium px-3 py-1.5 rounded-full">
              {badge}
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-heading-4 font-serif font-semibold text-text-primary mb-2">
          {title}
        </h3>

        <p className="text-text-muted text-body-sm mb-4 line-clamp-2">
          {description}
        </p>

        <button
          onClick={onButtonClick}
          className={
            buttonVariant === "primary"
              ? "btn-primary text-sm inline-flex items-center gap-2"
              : "btn-secondary text-sm inline-flex items-center gap-2"
          }
        >
          {buttonText}
          <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
}